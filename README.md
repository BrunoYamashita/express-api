# Test API

A good description that is in you imagination, this api was zero configured on a ubuntu 16.04 LTS on http://168.62.165.65:3000/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
NodeJS >= 8.11
npm >= 6
MongoDB >= 3.6.4
Docker (deploy)
```

### Installing

To run this project on development env you to: 

First install deps

```
npm isntall 
yarn install
```

Then config Database

On Windows : 

* Crate a storage folder and log folder

```
mkdir c:\data\db
mkdir c:\data\log
```

* Create a configuration file

```
 C:\Program Files\MongoDB\Server\3.6\mongod.cfg

mongod.cfg : 
    systemLog:
       destination: file
       path: c:\data\log\mongod.log
    storage:
       dbPath: c:\data\db
```

* Configure Mongodb

```
"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\3.6\mongod.cfg" --instal
```

*To run your Mongodb 

```
net start MongoDB
net stop MongoDB
```

On Linux : 

Please follow the instructions on : [MongoDB](https://docs.mongodb.com/manual/administration/install-on-linux/)

On MacOS:

```
brew update
brew install mongodb
mkdir -p /data/db
mongod --dbpath <path to data directory>
```

* Run

``` 
mongo --host 127.0.0.1:27017
```

Then run the seed

```
npm run seed
```


## Running the tests

On windows install mocha on global

```
npm test
```

## Deployment

For Deploy new containers run: 
```
docker-compose up -d 
```

To rebuild:

```
docker-compose build 

```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Observations

```
This api was build based on express documentation and cli. It was adapted when necessary.
```

* Express 

```
One of the most popular frameworks for NodeJS and the easiest to build api's.  
```

* Helmet 

```
With helmet you will have some basic to advanced header protection.
```

* Pm2 

```
Very easy to use and lauch applications with clusters.
```

* Mongoose 

```
One of the best ways to model schemas for MongoDB, easy to configure validations, querys and apply business logic.
```


* Mocha, SuperTest & Chai

```
Mocha, Supertest and Chai were used to build integration tests by its simplicity and fun ways to make. 
``` 

* Docker 

```
Used by its easy and simple deploy configuration.
```

* MongoDb

```
Flexible database for GIANT ideias. The best deploy, operate and scale.
```