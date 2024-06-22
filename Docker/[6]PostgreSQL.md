```shell
docker container run -it  -d \
--restart=always \
-p 5432:5432 \
--name psql \
-e POSTGRES_PASSWORD=1q2w34e4r@ \

```