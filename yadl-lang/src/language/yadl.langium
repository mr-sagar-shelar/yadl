grammar Yadl
import "./common"
import "./atomic-design"
import "./entity-relationship"

entry Model:
    (entities+=Entity | atoms+=Atom | molecules+=Molecule | organisms+=Organism
    | pages+=Page | applicationConfigs+=ApplicationConfig | enums+=Enum | paginations+=Pagination | relationships+=Relationship | elements+=AbstractElement)*;


AbstractElement:
    Type;

Type:
    DataType;