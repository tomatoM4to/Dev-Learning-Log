# Process States
* 프로세스 - 자원 간의 상호 작용에 의해 결정
* 프로세스 상태 및 특성

![Process States](../../img/OS/스케줄링/Process%20States.png)

***

# Process State Transition Diagram
![PSTD](../../img/OS/스케줄링/Process%20State%20Transition%20Diagram.png)

## Job -> Created State (생성된 상태)
* Job -> created
* 작업(Job)을 커널에 등록
* PCB 할당 및 프로세스 생성
* Created State에 오면 Process는 가용 메모리 공간(사용 가능한 메모리 공간) 체크 후, ready or suspended ready 둘중 하나로 간다.

![Created State](../../img/OS/스케줄링/Created%20State.png)

## Created State -> Ready State
* 프로세서(CPU) 외에 다른 모든 자원을 할당 받은 상태
    * 프로세서 할당 대기 상태
    * 즉시 실행 가능 상태 (프로세서만 있으면)
* 프로세서를 기다리다 할당받고 running 상태로 올라가는것을 Dispatch or Schedule 라 한다.

## Ready State -> Running State (Dispatch or Schedule)
* 프로세서와 필요한 자원을 모두 할당 받은 상태
* 실제로 실행하는 상태

## Running State -> Ready State (Time run-out or Preemption)
* 프로세서를 빼았긴 상태

## Running State -> Asleep State (Sleep or Block)
* 프로세서 외 I/O 등 다른 자원들을 요청 하는 상태, 쉽게 생각해 I/O를 대기하는 상태
* 프로세서 외에 다른 자원을 기다리는 상태
    * 자원 할당은 System call에 의해 이루어 진다.

## Asleep State -> Ready State (Wakeup)
* I/O등 요청이 완료될시 바로 Running State로 가는것이 아닌 Ready State로 간다.

## Suspended State (지연된 상태)
* 메모리를 할당 받지 못한(빼았긴) 상태
    * 메모리를 다시 할당받을시 처음부터 다시 실행하는것을 방지하기 위해, Memory image를 swap device에 보관했다가 Asleep State로 돌아갈시 swap device에 저장돼어 있는 image를 통해 정보를 복구 한다.
        * **Swap device:** 프로그램 정보 저장을 위한 특별한 파일 시스템
* 커널 또는 사용자에 의해 발생

## Running State -> Terminated State (exit)
* 프로세스 수행이 끝난 상태
* 모든 자원 반납 후, 커널 내에 일부 PCB 정보만 남아있는 상태
    * 커널이 프로세스 관리를 위해 정보 수집 (어떤 자원을 요청했는지, 일은 얼마나 해야하는지 등)
    * PCB 정보 수집이 끝날시 커널이 프로세스를 삭제 시킨다.

# 프로세스 관리를 위한 자료구조
* Ready State: Ready Queue, Ready List...
* Asleep State: I/O Queue, Device Queue... 자원별로 Queue가 따로 존재하는 형태

![Created State](../../img/OS/스케줄링/Process%20data%20structure.png)

***


# 인터럽트 (Interrupt)
* 예상치 못한(Unexpected) or 외부(external)에서 발생한 이벤트

## 인터럽트의 종류
* I/O interrupt: Mouse click, Keybord typing...
* Clock interrupt: 클럭이 탁 할때 생기는 인터럽트 // Todo
* Console interupt: 콘솔창에서 키를 입력하는 인터럽트 // Todo
* Program check interrupt: 프로그램에 문제가 발생할시 발생하는 인터럽트
* Machine check interrupt: H/W에 문제가 발생할시 발생하는 인터럽트
* Inter-process interrupt: 다른 프로세스가 쿡 찌르는 인터럽트
* System call interrupt: System call에 의한 인터럽트
* ...

# 인터럽트 처리 과정
1. 프로세스가 실행 중 인터럽트 발생
2. 커널이 개입 -> 하고있던 프로세스 중단 -> Context saving 발생
3. 인터럽트 처리 (interrupt handling)
    1. 인터럽트 발생 장소, 원인 파악
    2. 인터럽트 서비스 할것인지 결정
    3. 인터럽트 서비스 루틴 (interrupt service routine) 호출
        * interrupt service도 결국 하나의 프로그램이기에 interrupt service를 처리하는 프로세스를 프로세서에 넘겨준다.
            * 이후 위처럼 이전에 Consatext saving이 발생한 프로세스가 아닌 Ready State에 있던 프로세스가 프로세서를 할당받는다.

# Context Switchind (문맥 교환)
## Context
* 프로세스와 관련된 정보들의 집합, 해당 정보는 Register, Main memory 두군데 저장된다.
    * **CPU register context:** in CPU
    * **Code & data, Stack, PCB:** in Main memory

## Context saving
* 현재 프로세스의 Register context를 저장하는 작업
    * Interrupt는 프로세서를 빼았기는것이기 때문에 CPU register context 를 PCB 안에 저장한다.

## Context restoring
* Register context를 프로세스로 복구하는 작업

## Context switching or Process switching
* 실행중인 프로세스의 context를 저장하고, 앞으로 실행 할 프로세스의 context를 복구 하는 일
    * 커널의 개입으로 이루어진다.

# Context Switch Overhead
* Context Switching에 소요되는 비용
* OS의 성능에 큰 영향을 준다.
* 불필요한 Context Switching을 줄이는것이 중요하다
    * thread 사용 등