# Docker를 통해 Window or Mac 에서 Ubuntu:20.04 사용하기

**Docker를 통해 마치 다른 OS처럼 사용 가능하지만, 컨테이너는 가상 서버가 아닌 Docker에 의해 생성된 Linux의 네임스페이스 라는것을 명심**


이전 글에서 보았듯이 bash와 같은 상호작용이 필요한 경우 **STDIN**을 위해 `--interactive` 옵션과 **pseudo-TTY** 을 연결하기 위해 `--tty` 옵션이 필요합니다.

```shell
docker container run --interactive --tty ubuntu:20.04
```
Docker 뿐만 아니라 Linux 명령의 옵션은 `--help` or `-h`, `--version` or `-v` 처럼 동일한 옵션을 짧게 지정할 수 있습니다.

짧은 옵션은 여러개 연속해서 지정할 수 있으며, 다음과 같이 최소한의 명령어로 실행 할 수 있습니다.

```shell
docker container run -it ubuntu:20.04
```

```shell
C:\Users\[username]>docker container run -it --name c-env ubuntu:20.04
root@14d9ef53d133:/# ls
bin  boot  dev  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@14d9ef53d133:/# pwd
/
root@14d9ef53d133:/#
```

# Ubuntu에 개발환경 구축하기
가끔 Window가 아닌 Linux 환경에서 C 언어를 사용해야 될 때가 있습니다. 이번엔 container로 생성된 Ubuntu 환경에서 C 환경을 구축해 보겠습니다.

1. sudo 설치
```shell
apt-get update && apt-get install -y sudo
```

2. user 생성
```shell
adduser --disabled-password tomato
```

3. 사용자를 sudo 그룹에 추가
```shell
sudo usermod -aG sudo tomato
```

4. 현재 sudo 그룹 확인
```shell
getent group sudo
```

5. logout 후 새로 생성한 사용자로 로그인
```shell
# exit
# su - tomato
To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.
tomato@14d9ef53d133:~$ id
uid=1000(tomato) gid=1000(tomato) groups=1000(tomato),27(sudo)
```

7. 사용자 비밀번호 설정
```shell
passwd username
```

6. 개발 관련 패키시 설치
```shell
sudo apt-get install -y build-essential net-tools curl wget git cmake
```