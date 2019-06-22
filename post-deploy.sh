#!/bin/bash
git checkout master
git pull

cp ../.tmp/CNAME .
cp ../.tmp/.gitignore .
git add CNAME .gitignore
git commit -m "Deploying Site"
git push

rm -rf ../.tmp

git checkout develop