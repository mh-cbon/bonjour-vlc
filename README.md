# bonjour-vlc

A node server announce vlc with bonjour

# Install

```
git clone https://github.com/mh-cbon/bonjour-vlc.git
cd bonjour-vlc
npm i -g
bonjour-vlc -H 127.0.0.1 -P 8088 -T rc
...
ctrl+c to quit
```

# Command line

  bonjour-vlc 1.0.0
  vlc remote control over bonjour

  Usage

    bonjour-vlc --host=127.0.0.1 --port=8088 --type=[http/tcp]

  Options

    --host | -H     Host which vlc listens
    --port | -P     Port which vlc listens
    --type | -T     Type of interface provided by the vlc instance
                    One of http or tcp
    --verbose | -v  Enable verbosity pass in the module list to debug.

  Examples
    bonjour-vlc -H 127.0.0.1 -P 8088 -T rc
    bonjour-vlc -H 127.0.0.1 -P 8088 -T http

# read more

- https://github.com/watson/bonjour
- https://n0tablog.wordpress.com/2009/02/09/controlling-vlc-via-rc-remote-control-interface-using-a-unix-domain-socket-and-no-programming/
- https://wiki.videolan.org/Documentation:Play_HowTo/Advanced_Use_of_VLC#RC_and_RTCI
- http://www.howtogeek.com/117261/how-to-activate-vlcs-web-interface-control-vlc-from-a-browser-use-any-smartphone-as-a-remote/
