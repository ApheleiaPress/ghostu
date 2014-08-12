# [Ghost](https://github.com/TryGhost/Ghost) on [Heroku](http://heroku.com)

This is the basis for setting up ghost on a Heroku box, using a postgres backend.

--------

Change the production url variable, and then export the following variables to your Heroku env:
* heroku config:set NODE_ENV=production
* heroku config:set POSTGRES_DATABASE=xxxxxxxx 
* heroku config:set POSTGRES_HOST=xxxxxxxx 
* heroku config:set POSTGRES_USER=xxxxxxxx 
* heroku config:set POSTGRES_PASSWORD=xxxxxxxx
* heroku config:set PRODUCTION_URL=xxxxxxxx

(Also, set up a mail service if you want one.)

--------

Based on combination of [this](http://www.lionhack.com/2013/12/31/hosting-custom-domain-ghost-blog-on-heroku-for-free/) and [this](http://www.howtoinstallghost.com/how-to-install-ghost-on-heroku/).