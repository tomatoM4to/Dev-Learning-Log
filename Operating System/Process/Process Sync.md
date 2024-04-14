# Process Synchronization (동기화)
## 다중 프로그래밍 시스템
* 우리가 이용하는 시스템은 보통 여러개의 프로세스가 존재하는 다중 프로그래밍 시스템이다.

## 동기화 (Synchronization)
* 프로세스 들이 서로 동작을 맞추는 것
* 프로세스 들이 서로 정보를 공유 하는 것
* 프로세스들이 공유자원을 사용할때 프로세스들 끼리 서로 대화를 나누어 동작을 통제하는 행위

## Asynchronous and Concurrent
### 비동기적 (Asynchronous)
* 프로세스들이 서로에 대해 모른다.
* 프로세스들이 서로 정보를 공유하지 않는다.

### 병행적 (Concurrent)
* 여러개의 프로세스들이 동시에 시스템에 존재 or 동시에 동작

## 문제점
* 프로세스들은 서로 독립적 and 동시에 동작하게 된다.
* 즉, 병행 수행중인 비공기적 프로세스들은 공유 자원에 동시 접근할 때 문제가 발생 할 수 있다.

***

# 용어 정리 (Terminologies)
## Shared data (공유 데이터) or Critical data
* 여러 프로세스들이 공유하는 데이터

## Critical section (임계 영역)
* 공유 데이터를 접근하는 코드 영역 (code segment)

## Mutual exclusion (상호배제)
* 둘 이상의 프로세스가 동시에 임계영역에 진입하는것을 막는 것

***

# 생산자/소비자 프로그램
* 생산자-소비자 문제는 생산자가 데이터를 생상하면 소비자는 그것을 소비하는 형태에서 발생하는 문제를 말한다.

* 예를들어, 웹 서버가 데이터를 생산하여 웹에 관련되어 보여주는 작업들을 수행하고 웹 클라이언트는 웹 주소로 접속해 화면을 통해 보게 되는 형태의 소비 작용을 한다.

* 일반적으로 생산되는 속도가 소비하는 속도보다 빠르기에 생산된 데이터는 바로 소비되지 못한다.
    * 이를 보안하기 위해 생산된 데이터를 보관하는 버퍼라는 공간이 존재한다.
    * 소비자는 버퍼에서 데이터를 빼내어 사용한다.
    * 생산자는 버퍼가 가득 차면 더 이상 넣을수 없다, 소비자는 버퍼가 비면 뺄 수 없다.

## 구현
* 해당 코드는 공유 공간에 데이터를 저장하는 buffer와 buffer의 크기를 저장하는 counter를 선언하고 쓰레드를 이용해 병행적으로 수행하는 코드다.
* 결과적으로 Buffer size: 0, Counter: 0 이 나와야 하지만 임계영역을 고려하지 않았기 때문에 나오지 않는다.

```C++
#include <iostream>
#include <thread>
#include <vector>

std::vector<int> buffer;
int counter = 0;

void producer() {
    for (int i = 0; i < 10000; ++i) {
        buffer.push_back(0); // 아이템을 버퍼에 추가
        counter = counter + 1;
    }
}

void consumer() {
    for (int i = 0; i < 10000; ++i) {
        if (!buffer.empty()) {
            buffer.erase(buffer.begin()); // 버퍼에서 아이템을 소비
            counter = counter - 1;
        }
    }
}

int main() {
    std::thread producer_thread(producer);
    std::thread consumer_thread(consumer);

    // 스레드 종료 대기
    producer_thread.join();
    consumer_thread.join();

    std::cout << "Buffer size: " << buffer.size() << ", Counter: " << counter << std::endl;
    return 0;
}
```
* **RETURN:** Buffer size: 611, Counter: 545






***

# Critical Section (example)
* 프로세스가 수행 중 공유 자원(메모리)을 접근하는 코드 영역을 지칭한다.
* sdata(shared data)에다가 1을 더하는 연산을 병행적으로 Pi, Pj가 하고 있다.
* **Note:** 기계어 명령(machine instruction)의 특성
    * Atomicity(원자성), Indivisible(분리불가능): 한 기계어 명령의 실행 도중에 인터럽트를 받지 않는다, 즉 반드시 실행된다.
* 해당 그림은 sdata = sdata + 1; 을 기계어 스타일 표현법, 위 코드의 counter에 해당
    1. **Load Ri, sdata:** 어떤 레지스터R에 sdata를 읽어와라
    2. **Add Ri, 1:** 해당 레지스터에 1을 더해라
    3. **Store Ri, sdata:** 해당 레지스터 값을 sdata를 놓아라
    * 해당 그림의 각 섹션(1, 2, 3, a, b, c)는 아토믹 하다. 끊을수 없다. 하지만 각 사이사이는(1, 2 사이) 끊을수 있다. 즉, running 상태에서 ready 상태로 갈수 있다(preemption).

![FCFS](../../img/OS/상호배제/critical%20section%20example.png)

## 수행 결과
* **1 -> 2 -> 3 -> a -> b -> c:** sdata = 2;
* **1 -> 2 -> a -> b -> c -> 3:** sdata = 1;
* 즉 명령어 수행 과정에 따라 결과가 다르다 (Race condition).

## 진업영역, 출구영역
* **진입영역:** 임계 영역으로 진입하기 위하여 준비하는 과정
* **출구영역:** 임계 영역으로부터 벗어 나기 위한 과정

***

# 임계영역의 세가지 조건







