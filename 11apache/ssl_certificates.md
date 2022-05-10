To simply install ssl certificates for Apache you can use certbot.

You can install it on debian by running `apt install certbot` as super user.
Then as user with sufficient permissions to **write** (probably root) the apache config dir 
you may run certbot with `certbot --apache`.

If you configured everything normally you just need to press Enter, followed by a `2` and an enter,
maybe followed again by a `2` and an Enter press. This becomes clear from the questions you are 
asked by certbot. Yes you want certificates for all your pages, and also probably want to redirect 
all unencrypted `http` connections to `https`.
