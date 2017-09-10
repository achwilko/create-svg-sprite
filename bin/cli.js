#! /usr/bin/env node

'use strict';
const argv = require('yargs').argv;
const exec = require('child_process').exec
const ora = require('ora');
const spinner = !argv.quiet && ora('create-svg-sprite..').start()
const svgSprite = 'svg-sprite@1.3.7'
const svgo = 'svgo@0.7.2'

/**
 * Deconstruct args using yargs
 * @see https://www.npmjs.com/package/yargs
 */
const {
  input = './icons',
  name = 'icons',
  optimize = false,
  output = 'sprite',
  quiet = false
} = argv;

/**
 * Create SVG sprite using svg-sprite package
 * @see https://github.com/jkphl/svg-sprite
 */
spinner && Object.assign(spinner, { text: 'Creating SVG sprite..' })
exec(`npx --quiet ${svgSprite} --symbol --inline --ss=\"${name}\" --symbol-dest=\"\" --dest=${output} ${input}/*.svg`, () => {
  spinner && spinner.succeed(`SVG sprite "${name}.svg" has been created in "${output}" based on files from "${input}" using ${svgSprite}`)

  /**
   * If optimize flag is available then run svgo compressor
   * @see https://github.com/svg/svgo
   */
  if (optimize) {
    spinner && spinner.start() && Object.assign(spinner, { text: 'Optimizing files..' })
    exec(`npx --quiet ${svgo} -f ${output}/${name}.svg --quiet`, () => {
      spinner && spinner.succeed(`SVG sprite has been optimized using ${svgo}`)
    });
  }
});
