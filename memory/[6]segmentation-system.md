# Segmentation system
프로그램 또는 Process를 논리적 block으로 분할하는거다. 이러한 분할된 block을 segment 라 부르고, 각 block의 크기는 다를 수 있다.

Paging system 같은 경우는 page의 크기에 따라 Memory를 나누어 놨지만 Segment system 같은 경우는 Memory를 동적으로 분할한다.

**특징**
1. 메모리를 미리 분할하지 않는것
2. Paging system 대비 Segment sharing/Protection에 용이하다는것
3. Address mapping 및 메모리 관리의 overhead가 크다는것
4. Internal fragmentation이 발생하지 않는것 -> 필요한 만큼 잘라서 주기 때문에 빈 공간이 남을 걱정은 없다.
5. External fragmentation은 발생 가능 하다는것 이 있다. -> 자신의 할일이 끝나 Memory에서 나간 block에 의해 빈공간이 생길 수 있다.

***

# Address mapping
계속해서 나온 개념이므로 간단히 설명 하겠다.

* Virtual address = (s, d)
    * s: segment number
    * d: displacement in a segment
* Segment Map Table (SMT)
* Address mapping mechanism
    * Paging system과 유사 하다.

***

# Segment Map Table
PMT와 상당히 유사 하지만, segment length와 protection bits가 추가 돼었다.

segment 의 크기가 다 다르기 때문에 그 크기를 기록하는 segment length와 해당 segment에 대해 해당 Process가 가진 권한을 기록하는 protection bits다.

Paging system 같은 경우 한 함수가 쪼개질 수 있기 때문에 이들의 권한을 관리하기 힘들었지만, Segmentation system 은 한 함수를 논리적으로 자를수 있기 때문에 그 권한을 protection bits로 적어 놓음으로써 Protection 을 관리하기 쉽다.

***

# Segmentation System - Direct mapping
Paging system 에서 봤었던 Direct mapping과 똑같다고 생각하면 됀다.



1. Process의 SMT가 저장되어 있는 주소 b에 접근
2. SMT에서 segment s 의 entry 찾음
3. 찾아진 Entry 에 대해 다음 단계르들을 순차적으로 실행
    1. 존재 비트가 0인 경우(missing segment fault) swap device로부터 해당 segment를 메모리로 적재, SMT 갱신
    2. 변위(d)가 segment 길이보다 큰 경우(d > h), `segment overflow exception` 처리 모듈을 호출, 일종의 error을 발생시킨다 생각하면 된다.
    3. 허가되지 않은 연산일 경우 (protection bit field 검사), `segment protection exception` 처리 모듈을 호출, 일종의 error을 발생시킨다 생각하면 된다.
4. 실제 주소 r 계산
5. r 로 메모리 접근


***


# Memory Management
Segment 적재 시, 크기에 맞추어 분할 후 적재한다, 전반적으로 VPM과 매우 유사하다.

VPM처럼 partition과 start address, size, current processID 등이 존재 하는걸 알 수 있다.

***

# Segment sharing / Protection
Process를 논리적으로 분할하기 때문에, Paging system 처럼 여러 코드로 나누는것이 아닌 편집기라는 공통의 기능을 하는 segment를 만들어 적재 할 수 있다.

P1, P2 모두 43062지접 부터 25286지접 까지의 코드 영역을 편집기로 사용하는것을 알 수 있다.

또한, Paging system 같은 경우는 Jump 할 시 문제가 돼었지만, Segment 같은 경우는 한 덩어리로 나누어 놨기 때문에, Jump 할 시 해당 segment 에서 Jump를 할것이다, 그러므로 Jump 에 대한 문제를 해결할 수 있다.

그리고 SMT 에서 보았듯 Protection 같은 경우는 따로 field를 만들어 해결할 수 있다.
