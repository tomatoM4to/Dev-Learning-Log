# Job vs Process
## 작업 (job) or 프로그램 (Program)
* 실행할 **프로그램 + 데이터**
* 컴퓨터 시스템에 실행 요청 전의 상태
  * Disk에 보관되고 있는 상태
## 프로세스 (Process)
* 윈도우 작업관리자에서 확인 가능하다.
* 실행을 위해 시스템(커널)에 등록된 작업
* 시스템 성능 향상을 위해 커널에 의해 관리 된다.

![Job vs process](../../img/OS/Job vs process.png)

***

# 프로세스를 정의하는 여러 방법
## 실행중인 프로그램
* 커널에 등록되고 커널의 관리하에 있는 작업
* 각종 자원들을 요청하고 할당 받을 수 있는 개체
* 프로세스 관리 블록(PCB)을 할당 받은 개체
* 능동적인 개체(active entity)
  * 실행 중에 각종 자원을 요구, 할당, 반납하며 진행

## Process Control Block (PCB)
* 커널 공간(kernel space)내에 존재
* 각 프로세스들에 대한 정보를 관리

***

# 프로세스의 종류
![프로세스의 종류](../../img/OS/프로세스의 종류.png)

***

# 자원(Resource)의 개념
* 커널의 관리 하에 프로세스에게 할당/반납 되는 수동적 개체(passive entity)

## 자원의 분류
### H/W resources
* Processor, memory, disk, monitor, keyboard, Etc.

### S/W resources
* Message, signal, files, installed SWs, Etc.

***

# Process Control Block (PCB)
* OS가 프로세스 관리에 필요한 정보들을 모아놓은것 or 정보들을 저장한 공간
  * PCB는 커널이 관리하는 공간에 저장이 됀다.
* 프로세스가 생성됐다는것은 커널에 PCB가 생성 돼었단 뜻이다.

![Process Control Block](../../img/OS/Process Control Block.png)
**<span style="color: red">※ 위 그림에서 볼면 알수 있듯 메모리는 커널이 사용하는 영역과 프로세스가 사용하는 영역이 나뉘어 있다.**

## PCB가 관리하는 정보
* PCB 정보는 OS별로 서로 다르다.
* PCB 참조 및 갱신 속도는 OS의 성능을 결정 짓는 중요한 요소 중 하나다.

### PID: Process Identification Number
* 프로세스 고유 식별 번호
### 스케줄링 정보
* 프로세스 우선순위 등과 같은 스케줄링 관련 정보들
### 프로세스 상태
* 자원 할당, 요청 정보 등
### 메모리 관리 정보
* Page table, segment table 등
### 입출력 상태 정보
* 할당 받은 입출력 장치, 파일 등에 대한 정보 등
### 문맥 저장 영역 (context save area)
* 프로세스의 레지스터 상태를 저장하는 공간 등
### 계정 정보 (다중 사용자 시스템의 경우)
* 자원 사용 시간 등을 관리

***

# 프로세스의 상태 (Process States)
* 프로세스는 시스템에 등록된 후 여러 상태를 거치며 작업을 수행한다.
* 자원같의 상호 작용에 의해 결정이 된다.

## 프로세스 상태 및 특성

![프로세스의 상태](../../img/OS/프로세스의 상태.png)

## Process State Transition Diagram
* 프로세스들이 시스템에 등록 되면 거쳐가는 상태들을 보여주는 다이어그램

![Process State Transition Diagram](../../img/OS/Process State Transition Diagram.png)

### Created State (생성된 상태)
* 작업(Job)을 커널에 등록
* PCB 할당 및 프로세스 생성
* 가용 메모리 공간 체크 및 프로세스 상태 전이

### Ready State
* 프로세서 외에 다른 모든 자원을 할당 받은 상태
  * <span style="color: red">프로세서(CPU)</span> 할당 대기 상태
  * 프로세스가 생성 되고 메모리를 할당 받았으니 CPU만 있으면 즉시 실행 가능한 상태
* Dispatch (or Schedule)
  * Ready state → running state

### Running State
* 프로세서와 필요한 자원을 모두 할당 받은 상태
  * 실제로 실행하는 상태

#### Preemption (CPU를 뺐긴 상태)
* Running state → ready states

#### Block / sleep (I/O를 대기하는 상태)
* Running state → asleep state

### Blocked / Asleep State
* 프로세서 외에 다른 자원을 기다리는 상태
  * 자원 할당은 System call에 의해 이루어 진다.
  * 자원 할당이 이루어진다면 Running이 아닌 Ready 상태로 간다.
#### Wake-up
* Asleep state → ready state

### Suspended State
* 메모리를 할당 받지 못한 or 빼앗긴 상태
  * Memory image를 swap device에 보관
    * **Memory image**: 이는 특정 시점에서 프로세스가 사용하는 메모리의 전체 상태를 나타낸다. 이 이미지는 프로세스가 현재 어떤 작업을 수행하고 있는지, 메모리에 어떤 정보가 저장되어 있는지 등을 포함한다.
      * 프로세스가 어떤 이유로 메모리를 빼앗기고 다시 할당 받을때 작업을 처음부터 하는것을 방지하기 위해 존재
    * **swap devide**: 메모리 이미지를 저장하는 특별한 공간, 어려우면 Hdd, ssd로 이해해도 ㄱㅊ
  * 커널 또는 사용자에 의해 발생
#### Swap-out(suspended)
* 메모리를 뺐기고 Swap-device에 저장하는것
#### Swap-in(resume)
* Swap-device에 있는것을 다시 메모리에 복구하는것

### Terminated / Zombie State
* 프로세스 수행이 끝난 상태
* 모든 자원 반납 후 커낼 내에 일부 PCB 정보만 남아있는 상태
  * 이후 프로세스 관리를 위해 정보 수집에 사용된다.

***

# 프로세스 관리를 위한 자료구조
* ready: Ready Queue
* asleep: I/O Queue, Device Queue... 등 여러개의 Queue를 사용

***

# 인터럽트 (Interrupt)
* 예상치 못한(Unexpected), 외부에서 발생한 이벤트(external events)

## 인터럽트의 종류
* I/O interrupt <span style="color: green"> // ex) Process가 예상하지 못할때 마우스 클릭을 통해 어떤 이벤트가 발생해야 하는 경우
* Clock interrupt
* Console interrupt <span style="color: green"> // ex) 콘솔창에서 명령어를 입력하는 경우
* Program check interrupt
* Machine check interrupt
* inter-process interrupt
* System call interrupt

## 인터럽트 처리 과정
* interrupt service routine: 실제로 행동을 취하는것
