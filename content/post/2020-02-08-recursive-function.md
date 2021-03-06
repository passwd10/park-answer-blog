---
title: "[Algorithm] 재귀함수의 모든것"
date: 2020-02-08
tag: ['Algorithm']
---


## 재귀함수란

> 컴퓨터 과학에 있어서 재귀(再歸, Recursion)는 자신을 정의할 때 자기 자신을 재참조하는 방법을 뜻하며, 이를 프로그래밍에 적용한 재귀 호출(Recursive call)의 형태로 많이 사용된다.

[위키백과 참조](https://ko.wikipedia.org/wiki/%EC%9E%AC%EA%B7%80_(%EC%BB%B4%ED%93%A8%ED%84%B0_%EA%B3%BC%ED%95%99))

## 재귀함수 사용 이유

재귀함수는 메모리 스택이 계속 쌓기 때문에 메모리 사용량이 증가하여 성능의 저하가 발생할 수 있습니다. 그럼에도 사용하는 이유는 다음과 같습니다.

1. 직관적이기 때문에 알고리즘을 코드로 옮기기가 쉽습니다.(가독성이 좋음)

2. 변수의 사용을 줄여주어 변수로 인해 발생할 수 있는 오류에 대한 경우의 수를 줄여줍니다.

3. 오류 발생시 수정이 용이합니다.

## 재귀함수 사용 예

재귀함수의 대표적인 예제인 팩토리얼을 구현해보겠습니다.

```javascript
const factorial = (n) => {
  return n === 1 ? true : n * factorial(n - 1);
}

factorial(5) // 120
```

위의 함수는 아래와 같은 동작을 수행 합니다.

```text
5 * factorial(4)
5 * (4 * factorial(3))
5 * (4 * (3 * factorial(2)))
5 * (4 * (3 * (2 * factorial(1))))
5 * (4 * (3 * (2 * 1)))
```

함수 내에서 자기자신을 호출해줘야 하며 루프의 break 조건을 반드시 넣어줘야합니다.

## 꼬리재귀

재귀함수는 성능저하라는 치명적인 단점을 갖고있습니다. 하지만 꼬리 재귀를 사용하면 재귀의 문제점을 보안할 수 있습니다. 꼬리 재귀의 장점을 얻으려면 2가지가 필요합니다.

1. 프로그래머가 재귀함수를 꼬리 재귀 방식으로 개발한다.
2. 컴파일러가 꼬리 재귀 최적화를 지원해야 한다.

꼬리재귀는 원래 함수의 꼬리 부분에서 호출하는 경우를 말하는데 컴파일러가 꼬리 재귀로 작성된 코드를 인식해서 반복문으로 바꿔줍니다.

```javascript
const factorialTail = (n, acc) => {
  return n === 1 ? acc : factorialTail(n - 1, n * acc);
}

factorialTail(5, 1) // 120
```

위의 함수는 아래와 같은 동작을 수행 합니다.

```text
factorialTail(5, 1)
factorialTail(4, 5)
factorialTail(3, 20)
factorialTail(2, 60)
factorialTail(1, 120)
15
```

이렇게 꼬리재귀를 사용하면 스택이 쌓이지 않아 재귀를 성능저하없이 사용할 수 있습니다.
