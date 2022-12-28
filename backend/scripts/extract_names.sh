#!/bin/bash
grep -i "@amazon.com" $1 | cut -d ',' -f 2,3 | tr ',' ' ' | awk '{print $2,$1}' > output_names.txt