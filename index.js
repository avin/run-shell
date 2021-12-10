#!/usr/bin/env node

const shell = require('shelljs');
const _ = require('lodash');
const fs = require('fs');

console.log('----SCRIPT-START---');

const stdinBuffer = fs.readFileSync(0);
eval(stdinBuffer.toString());

console.log('----SCRIPT-END---');
