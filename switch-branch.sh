#!/bin/sh

echo "Installing npm dependencies"
rm -rf node_modules bower_components dist tmp
npm install --verbose

echo "Installing bower dependencies"
bower cache clean
bower install
