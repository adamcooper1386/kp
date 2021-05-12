#!/bin/bash

codefresh run "ketosistant Ci/Cd/Ci" --local --local-volume --yaml=./ops/codefresh.yml -b master -t my-trigger
