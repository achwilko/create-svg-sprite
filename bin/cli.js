#! /usr/bin/env node

'use strict';
const chalk = require('chalk');
const argv = require('yargs').argv;
const shell = require('shelljs');

/**
 * Deconstruct CLI args using yargs package
 * @see https://www.npmjs.com/package/yargs
 */
const { name = 'icons', input = './icons', output = 'sprite', quiet = false} = argv;

/**
 * If optimize arg is availavle then run svgo compressor
 * @see https://github.com/svg/svgo
 */
if (argv.optimize) {
  !argv.quiet && console.log(chalk.grey('Optimizing files..'));
  shell.exec(`node_modules/.bin/svgo -f ${input} --quiet`);
}

/**
 * Create SVG sprite using svg-sprite package
 * @see https://github.com/jkphl/svg-sprite
 */
!argv.quiet && console.log(chalk.grey('Creating sprite..'));
shell.exec(`node_modules/.bin/svg-sprite --symbol --inline --ss='${name}' --symbol-dest='' --dest=${output} ${input}/*.svg`)

!argv.quiet && console.log(chalk.blue(`✌️ SVG sprite "${name}.svg" created in "${output}" based on files from "${input}"`));