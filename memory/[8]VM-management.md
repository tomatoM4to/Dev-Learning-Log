# Virtual Memory Management
지금까지 배운 Virtual Memory를 정의해보면 다음과 같다. Non-continuous allocation 으로서, 사용자 Program을 block 단위로 분할하여 필요한 부분만 적재/실행 하는 시스템

지금부터 배우는것은 Virtual Memory System의 성능을 최적화 하는것이다.

***

# Const Model for Virtual Mem. Sys.
Cost를 어떻게 정의하냐에 따라 다르겠지만 보통 page fault frequency(발생 빈도)와 page fault rate(발생률) 로 정의한다.

즉, VM-System의 성능 향상은 Context switch 및 Kernel 개입을 최소화 하는것이라 말할수 있다.

***

# 용어
지금 이야기 하는것은 Paging System을 가정한 이야기다.

Page reference string (d): Process의 수행 중 참조한 Page 번호 순서를 기록해 놓는것이다.

보통 w = r1 r2 r3 r4 r5... 로 표현이 됀다, ri 는 페이지 번호라 생각하면 된다.

이러한 기록은, VM 을 효율적으로 사용했는지 확인하기 위한 기준으로서, 평가하기 위해 사용돼게 된다.

Page fault rate = F(w) = Num. of page faults during w / |w|

여기서 |w| 는 개수가 된다, 즉 해당 Process가 참조했던 page의 수(길이) 가 된다. 그리고 이것을 Num. of page faults during w(Page fault 수) 에 나누어 주면 전체 Page fault rate가 나오게 되고 이는 cost 모델로서 사용돼게 된다.

요약하면 전체 page 를 참조한 개수 중, fault가 몇번 났는가를 계산하는거다.

***
# Hardware Components - Bit Vectors
Virtual Memory를 사용하기 위한 여러 Components(구성 요소, 장치)들이 있는데 그중 H/W를 먼저 보겠다.

대표적으로 Address translation device(주소 변환 장치) 가 있다, 대표적으로 이전에 배웠던 TLB가 존재한다, 그 밖에 Dedicated page-table register, Cache memories 등이 존재 한다.

그리고 중요하게 다룰 Bit Vectors에 대해 알아보자

Bit 라는것은 0과 1이고 Vectors는 일종의 Array라 보면 쉽다, 이는 **Memory 상의 page들을 효율적으로 관리하기 위한 정보**다.

예를들어, 가득찬 Memory에서 새로운 page frame이 필요할때, 어느 page frame을 선택을 할까? 그 기준을 적어 놓는것이라고 생각할 수 있다.

Bit Vectors 의 종류는 두가지가 있다.
* Reference bits(used bit)
* update bits(modified bits, write bits, dirty bits)

## Reference bits
used bits라 불리는 해당 Vectors는

## update bits
***

# Software Components - Allocation Strategies
할당 전략이란, 각 Process에게 Memory를 얼마만큼 줄 것인가? 에 대한 전략이다.

해당 전략에는 2가지가 있다.
1. Fixed allocation(고정 할당): Process의 실행 동안 고정된 크기의 Memory가 할당 돼는 전략이다, 쉽게 말해 page frame 의 수를 고정해서 준다는 의미다.
2. Variable allocation(가변 할당): Process의 실행 동안 할당하는 Memory의 크기가 유동적이라는 의미다, 쉽게 말해 할당받는 page frame의 수가 2개였다 3개였다 변화한다는거다.

이때 고려해야할 사항으로는, Process 실행에 필요한 Memory 양을 예측해야 한다는 거다.

***

# Software Components - Fetch Strategies
보통 F

***


# Software Components - Placement Strategies
page/Segment를 어디에 적재 할 것인가? 에 대한 전략으로 앞에서 보았던 것처럼, `First-fit`, `Best-fit`, `Worst-fit`, `Next-fit` 등이 있다.

참고로 Paging system 에선 page frame 의 크기가 모두 같기 때문에 해당 전략은 불필요 하다.

# Software Components - Replacement Strategies
만약 어떤 Pi가 3개의 page frame을 할당 받았고 각 page frame에 pageA, pageB, pageC 가 들어가 있는 상황일때 pageD가 들어온가 가정해보자, 어떤 page와 교체할까? 에 대한 전략이다.

이곳에선 이정도로 개념만 잡은 다음 다음시간에 제대로 탐구해 보겠다.

# Software Components - Cleaning Strategies
이전 Bit Vectors 에서 update bits를 다른말로 dirty bits 라 불렀었다, 즉 dirt 한것을 치우는것 더 엄밀히 말하면 변경된 page를 언제 write-back 할 것인가? 에 대한 전략이다.
