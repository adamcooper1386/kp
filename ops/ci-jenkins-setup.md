# setting up pipelines

So after all of ci-server.md was done, I started to try and make jenkins actually do builds. I created a kp-web job, which is linked in the source control section to the main repo. I targeted the /web/Jenkinsfile.

I'm not sure right now if I really want the Jenkins file to live there. I think for simplicity (as I don't really care about teams each in their own repo) it would make more sense to have a top level build that runs every time I push to main.

hm.... I'll just keep going for now and see how far I can get.

# Setting up plugins

I installed the docker plugin Docker Pipeline. Seems to be working as long as docker was installed on the host and the jenkins user was part of the docker user group.

next step is to try and build the web app using the Dockerfile.