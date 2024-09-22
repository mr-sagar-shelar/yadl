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
    '}')?;
