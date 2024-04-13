# Multi-programming
* 현재 우리가 사용하는 일반적인 컴퓨터는 여러개의 프로세스가 시스템 내 존재
    * 그러므로 자원을 나누어 사용해야한다 즉, 자원을 할당 할 프로세스를 선택 해야 한다 => 스케줄링

## 자원 관리
* 시간 분할 (time sharing) 관리
    * 하나의 자원을 여러 스레드 or 프로세스들이 번갈아 가며 사용하는것
        * 프로세스 스케줄링 (Process schediling)
            * 프로세서 사용시간을 프로세스들에게 분배
                * 프로세서는 한번에 하나의 프로세스만 실행 가능하기에 time sharing 방법을 이용 한다.
* 공간 분항 (space sharing) 관리
    * 하나의 자원을 분할하여 동시에 사용
        * 대표적으로 memory 가 존재

# 스케줄링의 목적
* 시스템의 성능(performance) 향상
* 대표적 시스템 성능 지표 (index) => 모호한 성능이란 개념을 정의한 것
    * 응답 시간 (response time)
        * 작업 요청 (submission) 으로부터 응답을 받을때까지의 시간 => A ↔ㅁ B
    * 작업 처리량 (throughput)
        * 단위 시간 동안 완료된 작업의 수
    * 자원 활용도 (resource utilization)
        * 주어진 시간 (Tc) 동안 자원이 활용된 시간 (Tr) => Utilization = Tr / Tc (최대 1)
    * 공평성
    * 실행 대기 방지
        * 무기한 대기 방지
    * 예측 가능성 (predictability)
        * 적절한 시간안에 응답을 보장하는가
    * 그 이외 엄청 많다.
* 어떤 지표가 가장 중요할까?
    * 목적에 맞는 지표를 고려하여 기법을 선택해야 한다.
        * Realtime System, interactive system(대화형 시스템) => Response time
        * Batch System => 작업 처리량
        * 비싼 시스템 => 자원 활용도

# 대기시간, 응답시간, 반환시간

![대기시간 응답시간 반환시간](../../img/OS/프로세스/대기시간%20응답시간%20반환시간.png)

* 대기시간: 도착 ~ 실행시간
* 응답시간: 도착 ~ 첫번째 출력 (쉽게말해 화면에 무엇이 나오는 시간)
* 반환시간: 도착 ~ 원하는 일이 모두 끝날때까지의 시간
* 실행시간: 반환시간 - 대기시간

# 스케줄링 기준 (Criteria)
* 어떤 프로세스를 프로세서에게 할당 해줄지를 고려하는 항목들
    * 프로세스의 특성
        * I/O-bounded || compute-bounded
    * 시스템 특성
        * Batch system || interactive system
    * 프로세스의 긴급성 (urgency)
        * Hard || soft || realtime || non-real time system
    * 프로세스 우선순위 (priority)
    * 프로세스 총 실행 시간 (total service time)

## CPU burst vs I/O burst

![대기시간 응답시간 반환시간](../../img/OS/프로세스/대기시간%20응답시간%20반환시간.png)


* 우리의 컴퓨터는 CPU 사용과 I/o 사용 or 대기 가 반복하면서 돌아가게 되어 있다.
    * CPU burst => cput 사용 시간
        * if CPU burst > I/Oburst => Computer-bounded
    * I/O burst => I/O 대기 시간
        * if CPU burst < I/Oburst => I/O-bounded
* Burst time은 스케줄링의 중요한 기준중 하나다.

# 스케줄링의 단계 (Level)
## Long-term Scheduling
* 가끔 일어나는 느낌, 긴 시간에 한번씩 일어나는 스케줄링



## Mid-term scheduling
* 종종 일어나는 느낌

## Short-term scheduling
* 자주 일어나는 느낌

