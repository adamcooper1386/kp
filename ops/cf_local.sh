#!/bin/bash

codefresh run "ketosistant Ci/Cd/Ci" --local --local-volume --yaml=./codefresh.yml -b main -t my-trigger
