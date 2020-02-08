---
title: "[Javascript] 실행컨텍스트의 모든것"
date: 2020-01-25
tag: ['Javascript']
---

[Understanding Execution Context and Execution Stack in Javbascript](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0)원문을 번역한 글입니다.

당신이 자바스크립트 개발자가 되거나 되고 싶다면, Javascript가 내부적으로 어떻게 실행되는지를 알아야합니다. Hoisting, Scope, Closure와 같은 자바스크립트 개념을 이해하려면 실행 컨텍스트와 실행스택에 대한 이해가 필수적입니다.

실행 컨텍스트와 실행 스택의 개념을 제대로 이해하면 훨씬 더 나은 자바스크립트 개발자가 될 것입니다. 자 이제 시작해봅시다.

## 실행 컨텍스트란

간단히 말하면 실행 컨텍스트는 자바스크립트 **코드를 평가하고 실행하는 환경**의 추상적인 개념입니다. 자바스크립트에서 실행되는 코드들은 실행 컨텍스트 안에서 실행됩니다.

### 실행 컨텍스트 유형

자바스크립트에는 세 가지 유형의 실행 컨텍스트가 있습니다.

- 전역 실행 컨텍스트 : 기본 실행 컨텍스트 입니다. 어떤 함수에도 속해있지 않은 코드들은 전역 실행 컨텍스트에 속해있습니다. 그것은 두가지 특징이 있습니다: 1. (브라우저의 경우)Window 객체인 전역 객체를 만들고 전역 객체와 동일한 값을 설정합니다. 2. 프로그램에는 전역 실행 컨텍스트가 하나만 존재합니다.

- 함수형 실행 컨텍스트 : 함수가 호출될 때마다 해당 함수에 대한 새로운 실행 컨텍스트가 생성됩니다. 각 함수는 자체 실행 컨텍스트를 가지고 있지만, 함수가 호출되어야 생성됩니다. 함수 실행 컨텍스트의 수는 얼마든지 있을 수 있습니다. 새로운 실행 컨텍스트가 생성될 때 마다, 일련의 단계를 거치는데 글의 후반부에서 다루겠습니다.

- Eval 실행 컨텍스트 : Eval 함수 내에서 실행되는 코드도 자체 실행컨텍스트를 얻지만, Eval은 보통 자바스크립트 개발자들이 사용하지 않기 때문에 여기에서 논의하지 않겠습니다.

## 실행 스택

다른 프로그래밍 언어에서는 "calling stack"이라고 불리는 실행 스택은 코드 실행중에 생성된 모든 실행 컨텍스트를 저장하는데 사용되며, LIFO(Last In, First Out) 구조를 가진 스택입니다.

자바스크립트 엔진이 script를 처음 만나는 순간 전역 실행 컨텍스트가 생성되며 현재 실행 스택에 전역 실행 컨텍스트를 push 합니다. 자바스크립트 엔진은 함수 호출을 발견할 때 마다 함수에 대한 새로운 실행 컨텍스트를 생성하고, 스택의 상당으로 push 합니다.

엔진은 실행 컨텍스트의 상당에 있는 기능을 실행합니다. 함수 실행이 완료되면 스택에서 해당 실행 스택이 pop 되며, 현재 스택에서 아래에 있는 스택으로 제어권이 넘어갑니다.

아래 코드를 보며 이해해봅시다.

```javascript
let a = 'Hello World!';

function first() {
  console.log('Inside first function');
  second();
  console.log('Again inside first function');
}

function seconde() {
  console.log('Inside second function');
}

first();
console.log('Inside Global Execution Context');
```

![excution-stack](./images/excution-stack.png)
