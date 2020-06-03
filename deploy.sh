#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'master' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  rsync -a --exclude={'/node_modules','/src','/public'} client/ travis@165.22.215.143:/home/abhiap/covid19-tracker-karnataka-copy/client
  rsync -a server/ travis@165.22.215.143:/home/abhiap/test/server
else
  echo "Not deploying, since the branch isn't master."
fi