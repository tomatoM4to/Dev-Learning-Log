# 대칭키와 기밀성
* 싱글키 암호화 or 관용 암호화 라고도 불린다.
* 1970s 후반 공개키 암호화 방식이 도입돼기 전 유일한 암호화 방식이다.
* secret communication을 위해 엄청나게 많이 사용돼었다.

## 대칭키 암호화 방식의 five ingredients
* 평문(plaintext) : 원래 메시지 혹은 데이터, 알고리즘의 input으로 공급된다.
* 암호문(ciphertext) : plaintext와 key에 의해 생성된 복잡하게 생긴 메세지, 특정 메세지에 대해 두개의 키를 사용하면 두개의 암호문이 생성된다.
* 비밀키(secret key) : key에 의존하여 알고리즘은 변형 or 치환한다, 당연히 알고리즘에 input으로 들어가게 된다.
* 암호화 알고리즘(encryption algorithm) : plaintext를 다양하게 subssitu-tion, transformations 한다.
* 복호화 알고리즘(decryption algorithm) : 암호문과 비밀키를 가지고 원래의 평문을 생성함. 암호화 알고리즘과 동일하나 정반대로 진행됨

## 대칭키 암호화 방식 사용의 두가지 요구사항
* 강력한 암호 알고리즘
* sender와 receiver가 key의 복제본을 안전한 방식으로 취득하고 안전하게 보관되어야 함, 만약 누군가 키를 발견할 수 있고, 알고리즘을 알고있다면 키를 사용하는 모든 통신을 읽을수 있다.

## 대칭키 암호화 에 대한 공격
1. cryptanalysis(암호 분석)
    * 알고리즘의 특성 or 평문의 특성 or 평문-암호문 쌍에 의존해 특정 평문이나 키를 추론한다.
    * 공격이 성공하면 암호화된 모든 메시지가 복호화 되게 된다.

2. 브루트 포스
    * 이해할수 있는 평문이 나올때까지 모든 키를 실행해 보는것.
    * 이론적으로 x개의 key가 있다면 x/2번의 수행으로 추론 가능하다.


# 대칭블록 암호화 알고리즘
* block ciphers는 가장 대중적으로 사용되는 대칭암호 알고리즘이다.
* GPT: "안녕하세요"를 2개의 블록으로 나눈다면 "안녕", "하세", "요"(블록의 길이가 작다면 일반적으로 패딩(padding) 이라는 과정을 통해 블록 크기를 맞춘다.) 로 나누어 각 블록마다 암호화를 진행한다.

## Data Encryption Standard
* 현재 가장 널리 사용되는 암호화 표준은는 1977년(NIST)가 쳬택한 DES를 기반으로 합니다.
* DES는 64비트의 평문블록과 56비트의 키를 사용하여 64비트의 chipertext를 생성합니다.

### DES의 우려사항
* 알고리즘 그 자체: DES의 특성을 이용해 암호 분석은 수년동안 연구했지만 아무도 치명적인 약점을 보고한 사람은 없었다. 하지만 수년동안 연구돼어온 암호화 방식이라는것, 그 자체로 약점이다.
* 56비트 의 키 사용: 사용 가능한 키의 개수는 2^56개가 존재하는데 이는 현재 하드웨어의 브루트 포스 공격으로 쉽게 뚫리는 크기다.


## Triple DES
### 장점
* 168bit의 키 사용
* DES와 같은 알고리즘 사용
### 단점
* sofrware로 구현시 성능이 떨어짐
* DES와 같은 64비트의 블록 사용, 효울성과 보안성 측면에서 더 큰 크기의 블록 사용이 바람직

## AES 도입과 특징
* DES보다 동등하거나 뛰어난 보안성을 가져야 함
* 128비트의 블록을 가져야 함
* 128, 192, 256비트의 키를 지원해야 함
* 이 밖에도, 보안, 계산 효율성, memory requirements, 하으웨어 및 소프트웨어 적합성, 유연성 등을 고려해 결정
    * 그 결과 NIST는 Rigndeal을 AES 표준 알고리즘으로 선정

# 대칭 키 보안에 실질적인 보안 이슈
* 보통 대칭키 암호화 방식은 단일 64비트, 128비트 블록보다 큰 데이터 단위, 즉 여러 블록들로 구성되는 평문에 적용
* ECB: 다수의 평문 블록을 같인 키를 사용하여 암호화 -> 암호 해독자는 평문의 규칙성을 파악하면 쉽게 악용 가능
* 그렇기에 다른 운용모드 제안, 대용량의 블록 시퀀스에 대한 대칭키 블록 암호화의 보안성을 향상시키기 위한 대안 기법으로 개발됨


# 블록 & 스트림 암호