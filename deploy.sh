#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ charit@casweb-01-dev:/var/www/casmithfullstackdev.com/
echo "Deployment complete"