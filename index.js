const SayCore = require('./src/core.js')

const MACOS = 'darwin'

class SiriSay {
  constructor() {
    // Check if the platform is Mac OS
    if (process.platform === MACOS) {
      return new SayCore()
    }

    throw new Error(`new SiriSay(): unsupported platorm! ${process.platform}`)
  }
}

module.exports = new SiriSay()