# @avinlab/run-shell

## Usage

```sh
#!/bin/bash

npx @avinlab/run-shell <<EOF
// -----------------------
console.log('it works!');
console.log(shell.pwd().toString());
console.log(_.VERSION);
// -----------------------
EOF
```

## Variables

* `shell` - https://www.npmjs.com/package/shelljs
* `_` - https://www.npmjs.com/package/lodash
