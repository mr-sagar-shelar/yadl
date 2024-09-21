import "./common"

Icon:
    'icon' icon=IconType ('{'
        (postion=Position)?
    '}')?;

IconType returns string:
     'react' | 'angular' | 'vue'
;

Box:
    'box' (label=STRING)? ('[' 'icon:'icon=IconType ']')? ('{'
        (postion=Position)?
    '}')?;
