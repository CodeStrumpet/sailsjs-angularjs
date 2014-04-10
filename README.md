bridge-node
====
Bridge Athletic web application build on node.js backend and angular.js frontend. 

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
[**MongoDb**](https://www.mongodb.org/)  *(necessary to run locally)*  
```brew install mongodb```  

[**MYSQL**](http://dev.mysql.com/downloads/mysql/)  *(necessary to run locally)*

##Configure Environment  

Environment variables are used to select different configuration states. We use [nconf]("http://github.com/flatiron/nconf.git") to access environmental variables in node.js. This allows for variables to be initialized either through UNIX env settings (`process.env`), command line arguments, or directly from a file.


###Deployment Modes

**NODE_ENV**  
The `NODE_ENV` environment variable used to select `production` or `development` mode. `development` is the default and shows more error and debug information. 

| COMMAND | Default |Effect |
|-------------- |----| -------|
|NODE_ENV=production | false | hide debug info, use port 80 |
|NODE_ENV=development | true | show debug info | 


###Connectivity Information & Passwords  
Sensitive information such as the credentials to access a database are accessed through environment variables for security reasons. 

Values for the following keys need to be available for nconf (contact sysadmin for more information):  
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

The above variables can be set by any of the following strategies:

1. **Load variables from file by specifying CONFIG_SCHEME environment variable**  
    (See discussion of Configuration Schemes below.)


2. **Set values via environment command on remote server**  
Use this strategy with instances of the app deployed on heroku or dokku. Set the value for each environment variable once and it will remain static.

    + DOKKU  
        ```
        config <app> - display the config vars for an app  
        config:get <app> KEY - display a config value for an app  
        config:set <app> KEY1=VALUE1 [KEY2=VALUE2 ...] - set one or more config vars
        config:unset <app> KEY1 [KEY2 ...] - unset one or more config vars
        ```  
    + HEROKU  
        ```
        heroku config:add SESSION_STORE_KEY='s3krit'
        ```

3. **Set value as part of command to launch server**  
`NODE_ENV=production node app.js`

###Configuration Schemes  
To make it easier to switch between different server configurations there is support for selecting a full set of environment variable values via the `CONFIG_SCHEME` environment variable.

If `CONFIG_SCHEME` is set to a valid value, environment variable values will be read into nconf from a file in the `/config` directory whose name matches a known pattern. These config files are included in the .gitignore file, so they are not checked into version control. The file must be valid JSON. Below are the `CONFIG_SCHEME` options.

| Scheme Name| Config File Path | Default|  Effect |
|-----|-------------- |-------|---|
|test |`config/.envtest` | false | connect to test mongo & mysql database |
|local|`config/.envlocal`| false | connect to mongo & mysql databases over localhost |
|staging|`config/.envstaging` | true | connect to staging dbs |
|live|`config/.envlive` | false | connect to live dbs |

**Example file: `config/.envlocal`**  
```
{
    "MYSQL_HOST": "127.0.0.1",
    "MYSQL_USER": "username",
    "MYSQL_PASSWORD": "",
    "MYSQL_PORT": 3306,
    "MYSQL_DATABASE": "databasename",
    "MONGO_URI": "mongodb://localhost/db-name",
    "MONGO_HOST": "localhost",
    "MONGO_PORT": "27017",
    "MONGO_USER": "",
    "MONGO_PASSWORD": "",
    "MONGO_DATABASE": "db-name"
}
```


##Build Steps  

**install packages**  
`npm install`  
`bower install`


##Run  

**Default configuration** (development mode & staging config scheme)  
`node app.js`  

**Production mode**  
`NODE_ENV=production node app.js`  

**Local Configuration Scheme**  

1. `mongod` Start MongoDB
2. Start mysql server
3. `CONFIG_SCHEME=local node app.js`  

##Deploy to Dokku

1. Create application (this will only have to be done once)
    ```
    git remote add appName dokku@<hostName> appName    
    ```

2. Push the application and deploy
    `git push appName master`  

