# PostgreSQL run with Docker
Docker 환경에서 PostgreSQL 을 사용해 보겠습니다.

**input**
```shell
sudo docker container run -it  -d \
--restart=always \
-p 5432:5432 \
--name psql \
-e POSTGRES_PASSWORD=1q2w34e4r@ \
postgres:latest
```
이전 포스트에서 다루지 않았던 몇가지 flag에서 다뤄 보겠습니다.

* `--restart=always`: Docker container 에 이상이 었었을때나, 컴퓨터를 재부팅 했을시 자동으로 container를 실행 돼도록 하는 flag
* `-e POSTGRES_PASSWORD=1q2w34e4r@`: 환경변수 추가, 해당 flag는 postgreSQL 기본 사용자의 비밀번호를 성정 하는 설정이다
* `postgres:latest`: postgresSQL의 최신 버전의 image를 매핑

**output**
```shell
Unable to find image 'postgres:latest' locally
latest: Pulling from library/postgres
2cc3ae149d28: Pull complete
d1a63825d58e: Pull complete
ed6f372fe58d: Pull complete
35f975e69306: Pull complete
40c4fe86e99d: Pull complete
4795e1a32ff6: Pull complete
bcb5a54ae87d: Pull complete
d3983228bec6: Pull complete
5378bf7229e9: Pull complete
bba3241011a6: Pull complete
5e1d0413d05a: Pull complete
6a489170d05e: Pull complete
440b39aff272: Pull complete
582c79113570: Pull complete
Digest: sha256:46aa2ee5d664b275f05d1a963b30fff60fb422b4b594d509765c42db46d48881
Status: Downloaded newer image for postgres:latest
0f3a6bfffd6c6494e7d134a250b4b67269073006a84710bd6c75842298669c0a
```

***

# 사용자 생성
먼저 해당 Docker container 에 접속해 보도록 하겠습니다.

**input**
```shell
sudo docker container exec -it psql /bin/bash
```

[TODO: this dis is by the copilot]
여기서 /bin/bash 라는 command 는 Docker가 container 내에서 Bash shell session 을 시작하도록 요청하는 command 입니다.

**output**
```shell
ubuntu@[user]:~$ sudo docker container exec -it psql /bin/bash
root@0f3a6bfffd6c:/#
```

그 다음 DB 에 접속해 보겠습니다.

**input**
```shell
psql -U postgres
```
**output**
```shell
postgres=#
```
postgres 사용자로 접속이 된 모습입니다. postgres 사용자는 디폴트 사용자로서 **관리자 계정**에 해당하므로 보안 혹은 **역할 기반 접근 제어**를 위해 추가 사용자를 생성하고, CREATEDB 와 REPLICATION 권한을 부여해 보겠습니다.

```shell
postgres=# CREATE USER tomato PASSWORD 'tomato@' SUPERUSER;
CREATE ROLE
postgres=# ALTER ROLE tomato CREATEDB;
ALTER ROLE
postgres=# ALTER ROLE tomato REPLICATION;
ALTER ROLE
postgres=# \du;
                             List of roles
 Role name |                         Attributes
-----------+------------------------------------------------------------
 postgres  | Superuser, Create role, Create DB, Replication, Bypass RLS
 tomato    | Superuser, Create DB, Replication
```

***

# DB 생성
새로 생성한 User가 소유권을 가지는 test 라는 DB를 만들어 보고, 해당 User로 DB를 사용할수 있도록 해보겠 습니다.
```shell
postgres=# CREATE DATABASE k_hackathon OWNER tomato;
CREATE DATABASE
postgres=# \c k_hackathon tomato
You are now connected to database "test" as user "tomato".
k_hackathon=# \dn
      List of schemas
  Name  |       Owner
--------+-------------------
 public | pg_database_owner
(1 row)
```

