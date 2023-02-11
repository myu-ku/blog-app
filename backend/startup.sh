#!/bin/bash

rm -f tmp/pids/server.pid
bundle install 
bundle exec puma -C config/puma.rb