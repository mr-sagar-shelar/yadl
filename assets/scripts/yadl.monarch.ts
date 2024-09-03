// Monarch syntax highlighting for the yadl language.
export default {
    keywords: [
        'Hello','ManyToMany','ManyToOne','OneToMany','OneToOne','anular','appConfig','applicationType','atom','authenticationType','baseName','cassandra','clientFramework','couchbase','databaseType','datatype','entities','entity','enum','extends','gateway','infinite-scroll','jwt','many','max','microservice','min','molecule','mongodb','monolith','mysql','no','oauth2','organism','page','pager','paginate','pagination','person','react','relationship','required','session','svelte','to','unique','vue','with'
    ],
    operators: [
        '!','.',':'
    ],
    symbols: /!|\(|\)|\.|:|\{|\}/,

    tokenizer: {
        initial: [
            { regex: /[0-9]+(\.[0-9]*)?/, action: { cases: { '@keywords': {"token":"keyword"}, '@default': {"token":"number"} }} },
            { regex: /[_a-zA-Z][\w_]*/, action: { cases: { '@keywords': {"token":"keyword"}, '@default': {"token":"ID"} }} },
            { regex: /[0-9]+/, action: { cases: { '@keywords': {"token":"keyword"}, '@default': {"token":"number"} }} },
            { regex: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/, action: {"token":"string"} },
            { include: '@whitespace' },
            { regex: /@symbols/, action: { cases: { '@operators': {"token":"operator"}, '@default': {"token":""} }} },
        ],
        whitespace: [
            { regex: /\s+/, action: {"token":"white"} },
            { regex: /\/\*/, action: {"token":"comment","next":"@comment"} },
            { regex: /\/\/[^\n\r]*/, action: {"token":"comment"} },
        ],
        comment: [
            { regex: /[^/\*]+/, action: {"token":"comment"} },
            { regex: /\*\//, action: {"token":"comment","next":"@pop"} },
            { regex: /[/\*]/, action: {"token":"comment"} },
        ],
    }
};
