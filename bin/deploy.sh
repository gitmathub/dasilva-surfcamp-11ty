#!/bin/sh

pwd
echo 'copy htaccess'
cp -v config/htaccess dist/.htaccess

echo "rename dist folder"
new_folder="dasilva-`date +%Y%m%d%H%M`"
mv -v dist $new_folder

echo "move folder to document root"
mv -v $new_folder /var/www/virtual/superlea/

echo "link folder"
cd /var/www/virtual/superlea/html
rm -f dasilva
ln -sv ../$new_folder dasilva

echo "set permissions"
restorecon -R ../$new_folder
