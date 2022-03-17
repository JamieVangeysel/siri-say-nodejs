# siri-say-nodejs

## Installing siri-say
```bash
  npm install siri-say --save
```

## Usage example
```javascript
  // Initialize SiriSay
  const siriSay = require('siri-say')
```

### Methods

#### speak:
Start speaking
##### stop
Stop speaking/exporting
##### export
Export spoken audio to WAV format audio file

## Notes
This package is a simple wrapper around MacOS's native say command. It is installed on any MacOS device.  

You can manualy run say on MAC using the terminal by issuing the `speak` command.  

MacOS voices are associated with the different localities available in the accessibility settings, to get a list of available voices run the following command.
```bash
  say -v "?"
```
## Requirements
- none