# Step one: create ubuntu instance with jenkins user

I used the vultr app to create the instance and followed this guide to set up the jenkins
user with password authentication.
https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-20-04

# Step two: install jvm and jdk

need java stuff so I followed https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-20-04#installing-specific-versions-of-openjdk

but I didn't follow most of it, only set up java and the default-jdk, hopefully won't bite me in the ass later.

# Step three: Install jenkins on the machine

I am following the directions of https://www.digitalocean.com/community/tutorials/how-to-install-jenkins-on-ubuntu-20-04

Which seemed to work.

# Step four: secure the jenkins app

I'm following https://www.digitalocean.com/community/tutorials/how-to-configure-jenkins-with-ssl-using-an-nginx-reverse-proxy-on-ubuntu-18-04
to secure the instance. This step lists several other steps that have to be done first, like installing nginx and getting ssl certificates.

Had to follow directions on https://certbot.eff.org/docs/install.html for certbot install.
Hmmm... Seems like this might be a bit of a whole. There was a deprication warning, and the recommended install seems to be using a 'snap' so I'm first installing snapd https://snapcraft.io/docs/installing-snapd and then installing certbot using snap instructions https://certbot.eff.org/lets-encrypt/snap-nginx

# Step five: add the certificate renewal to chrontab or systemd timer

The certificate will be good for 90 days, so auto renewing is important. Following advice from https://stevenwestmoreland.com/2017/11/renewing-certbot-certificates-using-a-systemd-timer.html

Had to finish the Step 4 tasks afterwords but was able to login to jenkins on https. Will try and make a snapshot image of this, restart the instance etc, but should continue to work.

# STep six: Docker

So in order for jenkins to use docker in the builds, it needs to be installed on the host, I think, so I had to backtrack from ci-jenkins-setup and install docker on ubuntu. https://docs.docker.com/engine/install/ubuntu/ and the follow up steps to run docker as the jenkins user. (Quirk, had to restart jenkins to get docker to work, but if I do this first shouldn't matter)
