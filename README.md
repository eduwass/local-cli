Local CLI
=========

CLI for [Local](https://localwp.com), the #1 local WordPress development tool.

⚠️ **Note:** This CLI is experimental and commands/arguments are subject to change.  If you have questions, feature ideas, 
or general comments about the future of Local CLI, we encourage you to [submit an Issue on GitHub](https://github.com/getflywheel/local-cli/issues).


[![Version](https://img.shields.io/npm/v/@getflywheel/local-cli.svg)](https://npmjs.org/package/@getflywheel/local-cli)
[![License](https://img.shields.io/npm/l/@getflywheel/local-cli.svg)](https://github.com/getflywheel/local-cli/blob/master/package.json)

<!-- toc -->
* [Requirements](#requirements)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Requirements
* [Local](https://localwp.com) 5.9.2 or newer, which introduced the Local GraphQL API
* Node.js
* NPM/Yarn

# Usage
<!-- usage -->
```sh-session
$ npm install -g @getflywheel/local-cli
$ local-cli COMMAND
running command...
$ local-cli (-v|--version|version)
@getflywheel/local-cli/0.0.5 darwin-x64 node-v14.9.0
$ local-cli --help [COMMAND]
USAGE
  $ local-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`local-cli help [COMMAND]`](#local-cli-help-command)
* [`local-cli list-sites`](#local-cli-list-sites)
* [`local-cli open-shell SITEID`](#local-cli-open-shell-siteid)
* [`local-cli start-site SITEID`](#local-cli-start-site-siteid)
* [`local-cli stop-site SITEID`](#local-cli-stop-site-siteid)

## `local-cli help [COMMAND]`

display help for local-cli

```
USAGE
  $ local-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_

## `local-cli list-sites`

list all Local sites

```
USAGE
  $ local-cli list-sites

EXAMPLE
  $ local-cli list
```

_See code: [src/commands/list-sites.ts](https://github.com/getflywheel/local-cli/blob/v0.0.5/src/commands/list-sites.ts)_

## `local-cli open-shell SITEID`

Open Site Shell

```
USAGE
  $ local-cli open-shell SITEID

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/open-shell.ts](https://github.com/getflywheel/local-cli/blob/v0.0.5/src/commands/open-shell.ts)_

## `local-cli start-site SITEID`

start a Local site and all of its services

```
USAGE
  $ local-cli start-site SITEID

EXAMPLE
  $ local-cli start-site 6mC6PsMCh
```

_See code: [src/commands/start-site.ts](https://github.com/getflywheel/local-cli/blob/v0.0.5/src/commands/start-site.ts)_

## `local-cli stop-site SITEID`

stop a Local site and all of its services

```
USAGE
  $ local-cli stop-site SITEID

OPTIONS
  -h, --help  show CLI help
```

_See code: [src/commands/stop-site.ts](https://github.com/getflywheel/local-cli/blob/v0.0.5/src/commands/stop-site.ts)_
<!-- commandsstop -->
