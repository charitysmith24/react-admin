#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ charit@casmithfullstackdev.com:/var/www/casmithfullstackdev.com/
echo "Deployment complete"