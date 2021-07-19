#!/bin/bash
export PGPASSWORD=aW5uZXJidXM=

if [ -z $1 ];then
    echo -e "\033[31mWARNNING:\033[0m Execution parameter is missing.\n\nusage: $0 [USER_ID]\n"
    exit 0
fi

psql -U logcenter -d logcenter -c "update lceuserinfo_mst set passwd='56-12686-60-102-2029-11848-76-9037064106752816468' where userid='$1';"
psql -U logcenter -d logcenter -c "update lceaccount_mst set passwd='56-12686-60-102-2029-11848-76-9037064106752816468' where userid='$1';"

echo "Successfully reset the password for user $1"