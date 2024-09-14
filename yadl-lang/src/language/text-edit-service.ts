import type { AstNode, LangiumDocuments, ReferenceDescription, References } from 'langium'
import { LangiumServices } from 'langium/lsp'
import type { Connection, WorkspaceEdit } from 'vscode-languageserver'

import { ApplyWorkspaceEditRequest, TextEdit } from 'vscode-languageserver'
import type { URI } from 'vscode-uri'
import { ModificationResult } from './modification-results.js'

export interface TextEditService {
    computeAstNodeRename(targetNode: AstNode, newName: string, includeDeclaration: boolean): SourceEdit
}

export class DefaultTextEditService implements TextEditService {

    protected readonly references: References;
    protected langiumDocuments: LangiumDocuments
    protected readonly connection: Connection

    constructor(services: LangiumServices) {
        this.references = services.references.References
        this.langiumDocuments = services.shared.workspace.LangiumDocuments
        this.connection = services.shared.lsp.Connection!
    }

    public computeAstNodeRename(targetNode: AstNode, newName: string, includeDeclaration: boolean): SourceEdit {
        const references = this.references.findReferences(targetNode, { includeDeclaration, onlyLocal: false })
        if (references.isEmpty()) {
            return new SourceEdit()
        }
        const newNameDefinder = this.getNewNameDefiner(targetNode, newName)
        const sourceEdit = new SourceEdit()
        references.forEach(reference => {
            const newName = newNameDefinder.getNameForReference(reference)
            const textEdit = TextEdit.replace(reference.segment.range, newName)
            const uri = reference.sourceUri
            sourceEdit.add(uri, textEdit)
        })

        return sourceEdit
    }

    // public addTask(): MaybePromise<ModificationResult> | undefined {
    //     // for (const uri of sourceEdit.getAffectedURIs()) {
    //     //     const lmsDocument = this.langiumDocuments.getOrCreateDocument(uri)
    //     //     // if (this.isLmsDocument(lmsDocument)) {
    //     //     //     lmsDocument.hasImmediateChanges = true
    //     //     // }
    //     // }
    //     // const lmsDocument = this.langiumDocuments.getOrCreateDocument()
    //     // if (!lmsDocument) {
    //     //     return undefined
    //     // }
    //     // const validatedName = this.identityManager.getIdentityIndex(lmsDocument).tasks.fitName(newTask.name)
    //     // if (!validatedName) {
    //     //     return ModificationResult.failedValidation(`Unable to fit supplied task name '${newTask.name}': invalid value`)
    //     // }
    //     // newTask.name = validatedName.result
    //     // const rollback = validatedName.rollback
    //     // let anchorModel: semantic.IdentifiedTask | undefined
    //     // if (creationParams.anchorModelId) {
    //     //     anchorModel = lmsDocument.semanticDomain.identifiedTasks.get(creationParams.anchorModelId)
    //     // }

    //     const textEdit = this.computeTaskCreation(lmsDocument, newTask, anchorModel)

    //     return this.applyTextEdit(lmsDocument, textEdit, 'Create new task ')
    // }

    /**
     * Returns a function, which will be used to define a new name for every given reference to the {@link AstNode} being renamed.
     * Default implementation always returns `params.newName`
     * @param targetNode An {@link AstNode} being renamed
     * @param newName The new name to be assigned to `targetNode`
     * @returns a function, that defines a new name for a given reference to a `targetNode`.
     * It may give a different name, e.g., when the element is imported or not (FQN vs simple name)
     */
    protected getNewNameDefiner(targetNode: AstNode, newName: string): NewNameDefiner {
        return {
            getNameForReference: _ref => newName,
            targetName: newName
        }
    }

    // private computeTaskCreation(lmsDocument: LangiumDocument): TextEdit {

    //     let prefix = ''
    //     let suffix = ''
    //     // const parsedTasks = lmsDocument.parseResult.value.tasks
    //     // const parsedTasks = lmsDocument.parseResult;
    //     let position: Position = { line: 0, character: 0 }
    //     // if (parsedTasks.length > 0) {
    //     //     console.debug('Found', parsedTasks.length, 'parsed tasks')
    //     //     const lastTask = parse''dTasks[parsedTasks.length - 1]
    //     //     if (!lastTask.$cstNode) {
    //     //         throw new Error('Cannot locate LAST task ' + lastTask.name + ' in text')
    //     //     }
    //     //     position = lastTask.$cstNode.range.end
    //     //     console.debug('Located end position of the last task:', position)
    //     //     prefix = '\n'
    //     // }

    //     // if (anchorModel?.$cstNode) {
    //     //     position = anchorModel.$cstNode.range.start
    //     //     console.debug('Located start position of anchor task:', position)
    //     //     prefix = ''
    //     //     suffix = '\n'
    //     // }

    //     const serializedTask = `task ${"NEW_TASK_NAME"} "${"NEW_TASK_CONTENT"}"`

    //     return TextEdit.insert(position, prefix + serializedTask + suffix)
    // }

    // private applyTextEdit(lmsDocument: LangiumDocument, textEdit: TextEdit, label: string): Promise<ModificationResult> {
    //     return this.applySourceEdit(SourceEdit.ofSingleEdit(lmsDocument.uri, textEdit), label)
    // }

    public applySourceEdit(sourceEdit: SourceEdit, label: string): Promise<ModificationResult> {
        // for (const uri of sourceEdit.getAffectedURIs()) {
        //     const lmsDocument = this.langiumDocuments.getOrCreateDocument(uri)
        //     // if (this.isLmsDocument(lmsDocument)) {
        //     //     lmsDocument.hasImmediateChanges = true
        //     // }
        // }
        return this.connection.sendRequest(ApplyWorkspaceEditRequest.type,
            { label, edit: sourceEdit.toWorkspaceEdit() }
        ).then(editResult => editResult.applied
            ? ModificationResult.successful()
            : ModificationResult.failedTextEdit(editResult.failureReason)
        ).then(editingResult => {
            if (editingResult.successful) {
                console.debug(label)
            } 
            return editingResult
        }, failure => {
            return failure
        })
    }
}

export interface NewNameDefiner {
    getNameForReference: (referenceDescription: ReferenceDescription) => string
    readonly targetName: string
}

export class SourceEdit {

    public static ofSingleEdit(uri: URI, textEdit: TextEdit): SourceEdit {
        const sourceEdit = new SourceEdit()
        sourceEdit.add(uri, textEdit)
        return sourceEdit
    }

    public static of(uri: URI, textEdits: TextEdit[]): SourceEdit {
        const sourceEdit = new SourceEdit()
        sourceEdit.addAll(uri, textEdits)
        return sourceEdit
    }

    private readonly changes: Map<URI, TextEdit[]> = new Map()

    public get size(): number {
        return this.changes.size
    }

    public add(uri: URI, edit: TextEdit) {
        const changesOnUri = this.changes.get(uri)
        if (!changesOnUri) {
            this.changes.set(uri, [edit])
        } else {
            changesOnUri.push(edit)
        }
    }

    public addAll(uri: URI, edits: TextEdit[]) {
        const changesOnUri = this.changes.get(uri)
        if (!changesOnUri) {
            this.changes.set(uri, edits)
        } else {
            changesOnUri.push(...edits)
        }
    }

    public apply(sourceEdit: SourceEdit) {
        sourceEdit.changes.forEach((edits, uri) => this.addAll(uri, edits))
    }

    public toWorkspaceEdit(): WorkspaceEdit {
        const changes: { [uri: string]: TextEdit[] } = {}
        this.changes.forEach((value, key) => {
            changes[key.toString()] = value
        })
        return {
            changes
        }
    }

    public getAffectedURIs(): IterableIterator<URI> {
        return this.changes.keys()
    }
}
