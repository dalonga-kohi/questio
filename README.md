# QUEST.IO
 
## Progessive Web App to motivate yourself to do hard things
 
Find goal in your live and start working!
 
## Pre-requirements
 
SQL database

## Configuration
For backend, remove .example from all the files in [api](https://github.com/dalonga-kohi/questio/tree/master/api) dir and modify them acordingly.

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
cd api && npx sequelize-cli db:migrate
```
```bash
cd ..
```
```bash
npm run dev
```
