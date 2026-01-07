import { Command } from "@oclif/core"

export default class Auth extends Command {
  static override description = "Manages your plugin via subcommands"

  static override enableJsonFlag = true

  static override examples = [
    {
      command: "<%= config.bin %> help <%= command.id %> [COMMAND]",
      description: "Check help for each individual sub-command",
    },
  ]

  static override hidden = true

  public async run(): Promise<void> {
    await this.config.runCommand("help", ["auth"])
  }
}
