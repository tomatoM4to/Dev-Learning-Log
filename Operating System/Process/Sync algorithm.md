# Test-and-Set, 임계영역에 대한 하드웨어적 접근
* TAS 함수를 SW적으로 만들긴 했지만 실제 TAS 함수는 어셈블리어 한줄로 구성된다.
* lock이 1일시 임계영역에 접근하지 못하고 0이 될때만 접근 가능하다, 즉 lock이 1일시 한 프로세스(thread)가 임계영역에 해당하는 부분을 실행하고 있다 보면 된다.
* 출구영역의 lock = 0;이 실행되기 전까지 lock은 계속 1이다.

```c++
#include <iostream>
#include <thread>
#include <vector>

std::vector<int> buffer;
int counter = 0;
int lock = 0;

int TAS(int* target) {
    int temp = *target;
    *target = 1;
    return temp;
}

void producer() {
    for (int i = 0; i < 1000; ++i) {
        while (TAS(&lock));
        buffer.push_back(0); // 아이템을 버퍼에 추가
        counter = counter + 1;
        lock = 0;
    }
}

void consumer() {
    for (int i = 0; i < 1000; ++i) {
        while (TAS(&lock));
        if (!buffer.empty()) {
            buffer.erase(buffer.begin()); // 버퍼에서 아이템을 소비
            counter = counter - 1;
        }
        lock = 0;
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

## 한계
* 임계 영역에 진입하지 못한 모든 프로세스들은 자신이 CPU 의 퀀텀을 할당 받을 때 마다 while 문을 수행하며 자신의 퀀텀 시간을 소진한다.
    * busy wating 발생
* 상호배재와 진행조건 만족
* 대기 조건 불만족

# Semaphore
* Busywating을 해결하기 위해 등장
* 임의의 s변수 하나에 ready queue 하나가 할당 된다.
* 초기화 연산,P(), V()으로만 접근 가능한 음이 아닌 정수형 변수 S가 있다.
    * P: Probern(검사)
    * V: Verhogen(증가)

