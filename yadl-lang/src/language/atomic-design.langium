import "./common"

Atom:
    'atom' name=ID;

Molecule:
    'molecule' name=ID '{'
        (atom=[Atom:ID])+
    '}';

Organism:
    'organism' name=ID '{'
        (atom=[Molecule:ID])+
    '}';

Page:
    'page' name=ID '{'
        (atom=[Organism:ID])+
    '}';