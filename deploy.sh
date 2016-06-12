#!/bin/sh

USER="ponyo"
SERVER="188.166.18.121"
DEPLOY_FOLDER="/home/ponyo/apps/russian_summer"

ssh -t $USER@$SERVER "rm -rf $DEPLOY_FOLDER/*"
scp -r ./* $USER@$SERVER:$DEPLOY_FOLDER
