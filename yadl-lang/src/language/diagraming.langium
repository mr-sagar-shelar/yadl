import "./common"
import "./iconType"

// Icon:
//     'icon' icon=IconType ('{'
//         (position=Position)?
//     '}')?;

// IconType returns string:
//      'athena' | 'clean-rooms' | 'cloud-search' | 'data-exchange' | 'data-pipeline' | 'data-zone' | 'emr' | 'fin-space' | 'glue-data-brew' | 'glue-elastic-views' | 'glue' | 'kinesis-data-analytics' | 'kinesis-data-streams' | 'kinesis-firehose' | 'kinesis-video-streams' | 'kinesis' | 'lake-formation' | 'managed-streaming-for-apache-kafka' | 'open-search-service' | 'quick-sight' | 'redshift' | 'api-gateway' | 'app-flow' | 'app-sync' | 'console-mobile-application' | 'event-bridge' | 'express-workflows' | 'mq' | 'managed-workflows-for-apache-airflow' | 'simple-notification-service' | 'simple-queue-service' | 'step-functions' | 'managed-blockchain' | 'quantum-ledger-database' | 'alexa-for-business' | 'chime-sdk' | 'chime-voice-connector' | 'chime' | 'connect' | 'honeycode'
// ;

Box:
    'box' (label=STRING)? ('[' 'icon:'icon=(IconType0 |IconType1 |IconType2) ']')? ('{'
        (position=Position)?
        (style=Style)?
        (boxes+=Box)*
    '}')?;

Annotation:
    'annotation' (label=STRING) ('{'
        (position=Position)?
        (arrowStyle=ArrowStyle)?
    '}')?;

ArrowStyle:
    'arrowStyle' '{'
        ('left:' left=NUMBER)? 
        ('right:' right=NUMBER)?
        ('top:' top=NUMBER)?
        ('bottom:' bottom=NUMBER)?
        ('transform:' transform=STRING)?
    '}';

Style:
    'style' '{'
        ('width:' width=NUMBER)? 
        ('height:' height=NUMBER)?
        ('color:' color=NUMBER)?
        ('background:' background=STRING)?
    '}';

DeviceType returns string:
	'apple-watch-series8' | 'apple-watch-ultra' | 'google-pixel6-pro' | 'i-mac' | 'i-pad-pro' | 'i-phone14' | 'i-phone14-pro' | 'macbook-pro' | 'pro-display-xdr' | 'surface-book' | 'surface-pro' | 'surface-studio';

Device:
    'device' type=DeviceType ('{'
        (position=Position)?
    '}')?;

Edge:
   'edge' source=[Icon:ID] '=>' destination=[Icon:ID];