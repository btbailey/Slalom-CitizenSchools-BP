#!/bin/bash
cspubkeys="/Volumes/TEST_POC_CS";
emailregex="^[a-z0-9!#\$%&'*+/=?^_\`{|}~-]+(\.[a-z0-9!#$%&'*+/=?^_\`{|}~-]+)*@([a-z0-9]([a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]([a-z0-9-]*[a-z0-9])?\$";

echo Volume path to test:
if df | awk '{print $9}' | grep -Ex $cspubkeys > /dev/null; then
  echo "Drive mouted"
  eval ls $cspubkeys
  echo -n "Enter email address for github account "
  read emailaddress
  if [[ $emailaddress =~ $emailregex ]] ; then
    echo "email is $emailaddress"
    studentpath=${emailaddress%@*};
    echo "$studentpath"
    eval ls $cspubkeys"/"$studentpath
    eval heroku login
  else
    echo "No valid email entered, try again"
  fi
else
  echo "Drive not mounted do nothing"
fi