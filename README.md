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


##Build Steps  

**install packages**  
`npm install`  
`bower install`


##Run  

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

