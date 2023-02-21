#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ <user>@<host_name>:/var/www/<server_alias/
echo "Deployment complete"
