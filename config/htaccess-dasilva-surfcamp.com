RewriteEngine On
RewriteBase /
RewriteCond %{HTTP_HOST} ^dasilva-surfcamp.com$ [OR]
RewriteCond %{HTTP_HOST} ^www.dasilva-surfcamp.com$
RewriteRule (.*)$ https://dasilva-surfcamp.de/$1 [R=301,L]
