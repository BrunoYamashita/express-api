# excluir o container
docker rm -f test_api test_db

# excluir a imagem
docker rmi -f test/test_api

#buildar a imagem
docker build -t test/test_api .

#starta banco
docker run --restart=always -d -p 27017:27017 \
     -v /data/db:/data/db \
     --name test_db mongo \
     --storageEngine wiredTiger --auth

#starta app
docker run --restart=always -d -p 3000:3000 \
    --link test_db:test_db \
    -e NODE_ENV=production \
    -e MONGO_LOGIN=test!user!13 \
    -e MONGO_PWD=test!pass!13 \
    -e MONGO_IP=test_db \
    --name test_api test/test_api

