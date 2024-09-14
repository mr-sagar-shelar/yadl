import { type LangiumDocuments, type LanguageMetaData } from 'langium'
import { LangiumServices } from 'langium/lsp'
import type { Connection } from 'vscode-languageserver'
// import { ShowDocumentRequest } from 'vscode-languageserver'
// import { URI } from 'vscode-uri'
// import type { IdentityIndex } from '../identity/indexed'
// import type { IdentityManager } from '../identity/manager'
// import type { WithSemanticID } from '../identity/semantic-id'
// import type { LangiumModelServerServices } from '../services'
// import type { TypeGuard } from '../utils/types'
// import { UriConverter } from '../utils/uri-converter'
// import type { ExtendableLangiumDocument, Initialized } from '../workspace/documents'
// import { LmsDocument, LmsDocumentState } from '../workspace/documents'
// import type { Creation, CreationParams, Modification, ModificationResult, ValidationMarker } from './model'
// import { HighlightResponse } from './model'

export interface LangiumModelServerFacade {

    // readonly addModelHandlersByPathSegment: ReadonlyMap<string, AddModelHandler>
    // readonly updateModelHandlersByPathSegment: ReadonlyMap<string, UpdateModelHandler>
    // readonly deleteModelHandlersByPathSegment: ReadonlyMap<string, DeleteModelHandler>

    getById(id: string):undefined
    /**
     * @returns `undefined` if unexpected error happened during showing code (opening document and highligting some range)
     */
    // highlight(rootModelId: string, id: string): MaybePromise<HighlightResponse>
    // validate(rootModelId: string): ValidationMarker[] | undefined
    // persist(rootModelId: string): MaybePromise<boolean>
    // deleteModels(rootModelId: string, modelIds: string[]): MaybePromise<ModificationResult> | undefined
    //HACK: I rely on LMS consumers having the file URI almost identical to Langium Document URI
    /**
     * @param sourceUri URI of some **other** file which is 'linked' to the source model file.
     * Currently I assume that only file extension is different from Langium source file extension
     */
    // getSemanticId(sourceUri: string): string | undefined
}

// export interface AddModelHandler<T extends WithSemanticID = WithSemanticID> {
//     isApplicable(modelCreation: unknown): boolean
//     addModel(rootModelId: string, newModel: Creation<T>, creationParams: CreationParams): MaybePromise<ModificationResult> | undefined
// }

// export type UpdateModelHandler<T extends WithSemanticID = WithSemanticID> =
//     (rootModelId: string, modelId: string, modelUpdate: Modification<T>) => MaybePromise<ModificationResult> | undefined

// export type DeleteModelHandler = (rootModelId: string, modelId: string) => MaybePromise<ModificationResult> | undefined

export abstract class AbstractLangiumModelServerFacade implements LangiumModelServerFacade {

    // protected identityManager: IdentityManager<SemI>
    protected langiumDocuments: LangiumDocuments
    protected languageMetadata: LanguageMetaData
    // protected isLmsDocument: TypeGuard<D, ExtendableLangiumDocument>
    protected readonly connection: Connection

    // readonly addModelHandlersByPathSegment: Map<string, AddModelHandler> = new Map()
    // readonly updateModelHandlersByPathSegment: Map<string, UpdateModelHandler> = new Map()
    // readonly deleteModelHandlersByPathSegment: Map<string, DeleteModelHandler> = new Map()

    constructor(services: LangiumServices) {
        // this.identityManager = services.identity.IdentityManager
        this.langiumDocuments = services.shared.workspace.LangiumDocuments
        this.languageMetadata = services.LanguageMetaData
        // this.isLmsDocument = services.workspace.LmsDocumentGuard
        this.connection = services.shared.lsp.Connection!
    }

    // public getSemanticId(sourceUri: string): string | undefined {
    //     const documentUri = UriConverter.of(URI.parse(sourceUri))
    //         .replaceFileExtensionWith(this.getSourceModelFileExtension())
    //         .toUri()
    //     if (!this.langiumDocuments.hasDocument(documentUri)) {
    //         console.debug('Cannot find Langium Document with URI', documentUri.toString())
    //         return undefined
    //     }
    //     const document = this.langiumDocuments.getOrCreateDocument(documentUri)
    //     if (this.isLmsDocument(document)) {
    //         return this.identityManager.getIdentityIndex(document).id
    //     }
    //     return undefined
    // }

    public getById(id: string): undefined {
        return undefined;
        // const lmsDocument = this.getDocumentById(id)
        // if (!lmsDocument) {
        //     return undefined
        // }
        // return this.convertSemanticModelToSourceModel(lmsDocument)
    }

}
