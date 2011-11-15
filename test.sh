#!/bin/sh
URL=file://$PWD/public/test.html
phantomjs run_qunit.js $URL
