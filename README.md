This project was part of LG Webos winter intership 2021 by Luck is Good team.

This web application is a simple locating service running on webOS especially TVs.

This project is based on enact framework and ares-cli.

##Folder Structure
```
App/
actions/
api/
components/
db/
reducers/
store/
views/
index.js
```
Each directory stores the javascript files for running the web application.

* `db` directory needs to store the firebase connection javascript file which should be added by each user manually.
* `index.js` is the JavaScript entry point.
* `actions` folder holds the each actions defined, used by redux

##install
run `npm install` at the top directory.

##packaging for WebOS
Basically you need three steps to package this web application to webOS installable ipk file.
Given that this project was initialized by enact create and ares-generate -t web app commands which will have required file forehead, followed steps can be run without any errors

* package enact project for distribution
```
enact pack <directory>
```

This will create dist folder in current path and ditribution version will be built inside.

* build ipk file with ares-cli
```
ares-package ./dist
```
ares-cli will build the ipk file using packaging tool with dist version that was created above.

* install to webOS
```
ares-install -t target <ipk file>
```
Using ares command, install the web application with ipk file to connected device

