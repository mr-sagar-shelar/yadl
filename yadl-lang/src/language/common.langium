Position:
    'position' '{'
        'x:' x=NUMBER
        'y:' y=NUMBER 
    '}';


QualifiedName returns string:
    ID ('.' ID)*;

DataType:
    'datatype' name=ID;

terminal NUMBER returns number: /[0-9]+(\.[0-9]*)?/;
hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
terminal INT returns number: /[0-9]+/;
terminal STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/;

hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;