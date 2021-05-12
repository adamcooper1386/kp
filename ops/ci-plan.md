Step one: use codefresh for everything I can

It seems like i'll be able to do the whole pipeline there. 

Some open questions, should I use the monorepo style still. It will be resource intensive to build everything every time there is a code change, 
and I may be able to localize a bit. No matter what the change is, i'll want to run the integration tests... so probably what that.

so one repo, one pipeline: build on every push. For right now, i'll do trunk based development and only push things i want deployed. in the future, i'll
have people make prs, and build on main and pr's, where the pr builds don't get deployed or get deployed to a staging cluster.

kp-ci/cd-pipeline
	stages (conceptual):
		checkout repo
			- easy already done, mono repos so okay
		run unit/single service request tests for each service 
			- it makes more sense to me to do it here, as i don't want to build the production images if there is a failing test
			- parallel step, one for each service
		run production build for each service
			- makes sense to me to do it next, because it'll be needed for integration tests.
			- parallel step, one for each service
		run cypress/selenium integration tests and snapshot tests
			- this is the ultimate assurance that it is ready to go to production
			- sequential step, will include sub steps
				* deploy all of the images to test.ketosistant.com kubernetes cluster, which is an exact replica of production (possibly scaled down)
				* handle any setup before test somehow
				* run a cypress client (possibly several in parallel) and go through the tests
					^ this should include some retry since dom is hard
				* handle any teardown after test
		deploy to production kubernetes somehow
			- sequential step, images are already made, so should be straight forward to increment cluster


A few side notes:

codefresh is great for the ci/cd part of ops, but not so great for the rest of ops, so i want to create some ansible scripts for provisioning
vultr instances, setting up kubernetes cluster, adding/removing nodes, etc. That'll be some research.

Additionally, codefresh has a runner that will let me do some of the build work on my infrastructure if i bother to set up a kubernetes cluster for
it and set everything up. I think its a good idea to keep costs down, build times reasonable, and practice maintaining a cluster.
