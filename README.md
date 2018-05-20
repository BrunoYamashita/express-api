# Test API

A good description that is in you imagination

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

```
NodeJS >= 8.11
npm >= 6
MongoDB >= 3.6.4
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

*Crate a storage folder and log folder

```
mkdir c:\data\db
mkdir c:\data\log
```

*Create a configuration file

```
 C:\Program Files\MongoDB\Server\3.6\mongod.cfg

mongod.cfg : 
    systemLog:
       destination: file
       path: c:\data\log\mongod.log
    storage:
       dbPath: c:\data\db
```

*Configure Mongodb

```
"C:\Program Files\MongoDB\Server\3.6\bin\mongod.exe" --config "C:\Program Files\MongoDB\Server\3.6\mongod.cfg" --instal
```

*To run your Mongodb 

```
net start MongoDB
net stop MongoDB
```

On Linux : 

```
Please follow the instructions on : [MongoDB](https://docs.mongodb.com/manual/administration/install-on-linux/)
```

On MacOS:

```
brew update
brew install mongodb
mkdir -p /data/db
mongod --dbpath <path to data directory>
```

*Run

``` 
mongo --host 127.0.0.1:27017
```

Then run the seed

```
npm run seed
```



## Running the tests

*TODO

### Break down into end to end tests

*TODO

```
Give an example
```

## Deployment

*TODO

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc

