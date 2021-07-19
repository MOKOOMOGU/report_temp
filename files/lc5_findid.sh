#!/bin/bash
export PGPASSWORD=aW5uZXJidXM=

psql -U logcenter -d logcenter -c "select userid, ip_restricted from lceuserinfo_mst where isdeleted='N';"