# Ketosistant Kubernetes cluster information

The cluster is deployed in the ketosistant project on DigitalOcean. the name is k8s-ketosistant-1. The plan initially is to run all of the environments on a single cluster, using namespaces [prod, staging, test].

## CI/CD

The current plan is to have codefresh be the main agent, with a build pipeline that uses the test namespace to do full e2e tests, and if there is a success on master, deploy it to the cluster. This will involve building images with a 'test' tag, deploying to the test namespace, and then on success updating the name of the tag of the images to the 'staging' and deploy to the cluster. This means the last test build will always be available at test.ketosistant.com and the last successful build will be at staging.ketosistant.com.

 Seperately will be a pipeline that undates the tag of staging to be 'prod', and then deploys to the cluster. This will be a button press by me so I can time it appropriately.

 