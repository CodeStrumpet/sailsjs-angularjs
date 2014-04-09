bridge-node
====
Node.js and Angular.js web application.


##Build Dependencies

###Required
[**Node.js**](http://nodejs.org/)  
```brew update```  
```brew install node```  

[**Bower**](http://bower.io/)  
```npm install -g bower```  

[**Grunt**](http://gruntjs.com/)  
```npm install -g grunt-cli```  

[**sails.js**](http://sailsjs.org/#!)  
```npm install -g sails```  

###Optional
[**MongoDb**](https://www.mongodb.org/)  
*necessary to fully run locally*  
```brew install mongodb```  

[**MYSQL**](http://dev.mysql.com/downloads/mysql/)  
*necessary to fully run locally*

##Configure Environment  

Values for these keys need to be available for nconf (contact sysadmin for values):  
```
MYSQL_HOST
MYSQL_USER
MYSQL_PASSWORD
MYSQL_PORT
MYSQL_DATABASE
MONGO_URI
MONGO_HOST
MONGO_PORT
MONGO_USER
MONGO_PASSWORD
MONGO_DATABASE
```   

**Strategy 1: set values in local .env files**  

create these env files in `config/`:
```
.envlive
.envstaging
.envlocal
.envtest
```

**Strategy 2: set values via environment command on server**  
'dokku set ....'


##Build Steps  

**install packages**  
`npm install`  
`bower install`


##Run  

**default configuration**
`node app.js`  

**Production or Development**
The server can be run in production or development mode

**development**  
`npm start`  
-or-  
`sails lift`  

**debug**  
`npm debug`  

**local**  
1. start mongo process `mongod`
2. start mysql server
3. `TODO!!!`



**production**  
`TODO!!!`


##Environment variables  

+ Environment variables accessed through nconf
    * Use environment variable CONFIG_SCHEME local.js

