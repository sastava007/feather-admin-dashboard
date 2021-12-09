#! /bin/bash

mongoimport --host mongo_db --db db --collection policies --drop --type json --file /seed-db/db_dump.json
