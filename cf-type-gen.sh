#!/bin/bash

# Load environment variables from .env file
if [ -f .env ]; then
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
else
    echo ".env file not found!"
    exit 1
fi

pnpm cf-content-types-generator -o contentful -s $CONTENTFUL_SPACE_ID  -t $CONTENTFUL_MANAGEMENT_TOKEN -X