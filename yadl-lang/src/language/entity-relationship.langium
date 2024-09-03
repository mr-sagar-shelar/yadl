import "./common"

Entity:
    'entity' name=ID ('extends' superType=[Entity:QualifiedName])? '{'
        (fields+=Field)+
    '}';

Field:
    (many?='many')? (unique?='unique')? name=ID ':' type=[DataType:QualifiedName] isRequired?='required'? (min=MinValidation)? (max=MaxValidation)?;

ApplicationConfig:
    'appConfig' name=ID '{'
        ('baseName' ':' baseName=STRING)
        ('applicationType' ':' applicationType=ApplicationType)
        ('authenticationType' ':' authenticationType=AuthenticationType)
        ('databaseType' ':' databaseType=DatabaseType)
        ('clientFramework' ':' clientFramework=ClientFramework)
        ('entities' ':' entities+=[Entity:ID])+
    '}';

Pagination:
    'paginate' entity=[Entity:ID] 'with' (paginateType=PaginationType);

Enum:
    'enum' name=ID '{'
        (values+=EnumRow)+
    '}';

Relationship:
    'relationship' relationshipType=RelationshipType '{'
        (relationships+=RelationshipRow)+
    '}';

RelationshipRow:
    source=[Entity:ID] 'to' destination=[Entity:ID];

EnumRow:
    name=ID ('(' value=ID ')')?;

RelationshipType returns string:
     'OneToOne' | 'OneToMany' | 'ManyToOne' | 'ManyToMany'
;

MinValidation:
    'min' '(' value=NUMBER ')';

MaxValidation:
    'max' '(' value=NUMBER ')';

AuthenticationType returns string:
     'jwt' | 'session' | 'oauth2'
;

ApplicationType returns string:
     'monolith' | 'microservice' | 'gateway'
;

ClientFramework returns string:
     'anular' | 'react' | 'vue' | 'svelte' | 'no'
;

DatabaseType returns string:
     'mysql' | 'mongodb' | 'cassandra' | 'couchbase' | 'no'
;

PaginationType returns string:
     'infinite-scroll' | 'pagination' | 'pager'
;