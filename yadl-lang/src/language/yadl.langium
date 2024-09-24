grammar Yadl
import "./common"
import "./atomic-design"
import "./entity-relationship"
import "./diagraming"

entry YadlModel:
    (persons+=Person | greetings+=Greeting | entities+=Entity | atoms+=Atom | molecules+=Molecule | organisms+=Organism
    | pages+=Page | applicationConfigs+=ApplicationConfig | enums+=Enum | paginations+=Pagination | relationships+=Relationship | elements+=AbstractElement
    | icons+=Icon | boxes+=Box | annotations+=Annotation)*;

Person:
    'person' name=ID;

Greeting:
    'Hello' person=[Person:ID] '!';

AbstractElement:
    Type;

Type:
    DataType;