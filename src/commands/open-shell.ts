import {Command, flags} from '@oclif/command'

export default class OpenShell extends Command {
  static description = 'Open Site Shell'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [
    {name: 'siteID', required: true},
  ]

  async run() {
    const {args, flags} = this.parse(OpenShell)
    if (this.config.platform === 'win32') {
      console.log('er windonws')
    } else {
      // Path to the Actual script
      const pathToShell = '"' + require('os').homedir() +'/Library/Application\ Support/Local/ssh-entry/' + args.siteID + '.sh"; exit'
      console.log(pathToShell)
      var shell = require('shelljs')
      shell.exec(pathToShell)
      shell.exit()
    }
  }
}
