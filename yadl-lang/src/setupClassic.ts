import { MonacoEditorLanguageClientWrapper, UserConfig } from 'monaco-editor-wrapper';
import { configureWorker, defineUserServices } from './setupCommon.js';
import monarchSyntax from "./syntaxes/yadl.monarch.js";

export const setupConfigClassic = (): UserConfig => {
    return {
        wrapperConfig: {
            serviceConfig: defineUserServices(),
            editorAppConfig: {
                $type: 'classic',
                languageId: 'yadl',
                code: `// YADL is running in the web!
icon angular-dark {
    position {
        x: 20 y: 20
    }
}

icon react-dark
box "YADL" [icon: mongo-db] {
    position {
        x: 200 y: 20
    }
}
annotation "Built-in node and edge types. Draggable, deletable and connectable!" {
    position {
        x: 200 y: 20
    }
    arrowStyle {
        right: 0
        bottom: 0
        transform: "translate(-30px,10px) rotate(-80deg)"
    }
}
annotation "Sub flows, toolbars and resizable nodes!" {
    position {
        x: 200 y: 20
    }
    arrowStyle {
        left: 0
        bottom: 0
        transform: "translate(5px, 25px) scale(1, -1) rotate(100deg)"
    }
}
`,
                useDiffEditor: false,
                languageExtensionConfig: { id: 'langium' },
                languageDef: monarchSyntax,
                editorOptions: {
                    'semanticHighlighting.enabled': true,
                    theme: 'vs-dark'
                }
            }
        },
        languageClientConfig: configureWorker()
    };
};

export const executeClassic = async (htmlElement: HTMLElement) => {
    const userConfig = setupConfigClassic();
    const wrapper = new MonacoEditorLanguageClientWrapper();
    await wrapper.initAndStart(userConfig, htmlElement);
};
