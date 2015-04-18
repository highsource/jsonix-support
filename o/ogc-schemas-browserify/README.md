## Install

Install deps with

    npm install

## Node version

Then, to test my test for node version, do

    npm run-script node_ok

It works

## Browserify

In Browserify,  I encounter two issues in fact. I only asked on the second (https://github.com/highsource/ogc-schemas/issues/89) as I was able to solve the first one.

You can see the first one by running

    npm run-script build_browserify


and opening index.html

IMO, The build is unable to load correctly each file because node_modules/w3c-schemas/w3c-schemas.js load dynamicly each subfile but it's not something Browserify can solve

and the second one with

    npm run-script build_browserify_hack

I use a process to add files to solve the dependency issue using `cat`. See in package.json

I open the browser and I get the issue described in https://github.com/highsource/ogc-schemas/issues/89 