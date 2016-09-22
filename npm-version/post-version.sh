#!/usr/bin/env bash -e

PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

git branch -m release/temp_$(git rev-parse --short HEAD^) release/$PACKAGE_VERSION

# Push branch and tags
git push origin release/$PACKAGE_VERSION
git push origin --tags
