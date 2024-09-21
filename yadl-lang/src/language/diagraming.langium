import "./common"

Icon:
    'icon' icon=IconType ('{'
        (position=Position)?
    '}')?;

IconType returns string:
     'react' | 'angular' | 'vue'
;

Box:
    'box' (label=STRING)? ('[' 'icon:'icon=IconType ']')? ('{'
        (position=Position)?
    '}')?;
