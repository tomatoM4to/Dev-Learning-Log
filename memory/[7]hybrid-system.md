# Hybrid Paging/Segmentation
말그대로 두개의 장점을 결합한 방법이다.

방법은 간단하다, 먼저 프로그램을 논리 단위인 segment로 분할 한 후, 각 segment를 고정된 크기의 page들로 분할하는 것이고, 실제 Memory에 대한 적재는 Page 단위로 적재 돼어 진다.

pAGE SHARING/pROTECTION이 쉽고, mEMORY 할당/관리 OVERHEAD가 작다, 그리고 EXTERNAL FRAGMENTATION이 발생하지 않는다.

하지만 전체 table의 수가 엄청나게 증가했기 때문에, Memory 소모가 크고, Address Mapping 과정이 복잡해졌다, 나중에 보겠지만 Memory 접근또한 많아졌다.

***

# Address Mapping
Virtual address = (s, p, d)
    * **s:** segment number
    * **p:** page number
    * **d:** offset in a page
Process는 segment로 나누어 졌기 때문에, 각 Process는 하나의 SMT를 가진다.

각 segment를 page로 나누었기 때문에, 각 segment마다 하나의 PMT를 가진다.

지금까지 봤던 Direct Mapping, associated Mapping 등 다 사용 할 수 있다.

실제로 Memory에 올라가는 단위는 page이기 때문에 FPM과 유사하다.

***

# 전체적인 Table 구조


## Segment Management Table
전에 봤던것과 2가지 바뀌었다.

Memory에 올라가는것은 page이기 때문에, 첫번째론, residence bit가 존재하지 않는다.

대신 segment의 PMT가 어디 있는지 알아야 하기 때문에 PMT address를 보유하게 된다.

***

## Page Management Table
segment K에 대한 PMT는 다음과 같이 나타내게 된다.

PMT는 residence bit가 있는것을 볼수 있고, 이전 PMT와 똑같기 때문에 자세하게 볼필욘 없다.


***

# Direct Mapping
복잡해 보이지만, 매우 쉽다.

1. 처음으로 요청이 들어오면 segment의 PMT를 찾아가야 하기 때문에, SMT를 먼저 보게 된다.
2. 원하는 segment의 PMT인 b를 찾고 b + p * PMTentrySize 수행해 PMT 내부의 원하는 entry를 찾아 가게 된다.
3. 이 후부턴 Paging system에서 보았던 Direct Mapping과 똑같다.

하지만 Memory 접근이 3번 일어나게 돼지만, 장점이 더 많기 때문에 이러한 방법이 제안돼었다, 또한 이를 해결하기 위해 TLB 같은 방법을 사용할수 있다.