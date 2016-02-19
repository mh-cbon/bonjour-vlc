function usage () {/*
    Usage

    bonjour-vlc --host=127.0.0.1 --port=8088 --type=[http/tcp]

    Options

    --host | -H     Host which vlc listens
    --port | -P     Port which vlc listens
    --type | -T     Type of interface provided by the vlc instance
                    One of http or tcp
    --verbose | -v  Enable verbosity pass in the module list to debug. 

*/}
var pkg   = require('./package.json')
var argv  = require('minimist')(process.argv.slice(2));
var help  = require('@maboiteaspam/show-help')(usage, argv.h||argv.help, pkg)
var debug = require('@maboiteaspam/set-verbosity')(pkg.name, argv.v || argv.verbose);

const host = argv.host || argv.H || false;
const port = argv.port || argv.P || false;
const type = argv.type || argv.T || false;

(!host || !port || !type) && help.print(usage, pkg) && help.die(
  "Wrong invokation"
);

(['http', 'tcp'].indexOf(type) === -1) && help.die(
  "type parameter must be one of tcp or http"
);

var bonjour = require('bonjour')()

// advertise the vlc server
bonjour.publish({ name: 'VLC Server ' + type, type: type, port: port, host: host })
