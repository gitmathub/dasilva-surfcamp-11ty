#!/bin/sh

pwd
new_folder="dasilva-`date +%Y%m%d%H%M`"
mv dist $new_folder
mv $new_folder /var/www/virtual/superlea/
cd /var/www/virtual/superlea/html
rm -f dasilva
ln -s ../$new_folder dasilva
restorecon -R ../$new_folder

