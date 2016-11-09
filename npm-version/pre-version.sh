#!/usr/bin/env bash -e

git fetch --tags

# create temp branch
git checkout -b release/temp_$(git rev-parse --short HEAD)

# Add changelog
git add CHANGELOG.md
