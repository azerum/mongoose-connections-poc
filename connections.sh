#!/usr/bin/env bash

MONGO_PORT="27017"
INCOMING_PATTERN="\->localhost:$MONGO_PORT"

watch -n 1 "lsof -i TCP:\"$MONGO_PORT\" -p \"$1\" | grep \"$INCOMING_PATTERN\" | wc -l"
