# QUEST.IO
 
## Progessive Web App to motivate yourself to do hard things
 
Find goal in your live and start working!
 
## Pre-requirements
 
SQL database
 
## Run Locally
 
```bash
git clone git@github.com:dalonga-kohi/questio.git
```
```bash
cd questio
```
```bash
npm i -D --workspaces
```
```bash
mkdir api\dist && mkdir api\dist\uploads
```
Load [sql scheme](https://github.com/dalonga-kohi/questio/blob/master/api/questio.sql) to the database
 
```bash
npm run dev
```
## Configuration
For backend, rename api/.env.example to .env and modify the file acordingly.
