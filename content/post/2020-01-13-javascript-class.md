---
title: "[Javascript] Javascript에서 Class는 왜 사용하는걸까요?"
date: 2020-01-13
tag: ['Javascript']
---

자바스크립트는 prototype기반의 객체지향 프로그래밍 언어입니다. 그런데 굳이 class를 사용하는 이유가 있을까요? class가 나온 이유와 정의에 대해 알아보겠습니다.

## Class를 사용하는 이유

MDN공식문서를 살펴보면

```test
JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.
```

문법적 설탕(syntactical sugar)이라는 생소한 단어가 나옵니다. 찾아보니 문법적으로 기능은 그대로인데 코딩하는데에 코드의 양을 줄여주는? 또는 직관적으로 쉽게 코드를 읽을 수 있게 만들어 준다는 의미를 나타낸다고 합니다.

```javascript
function Obj() {}

Obj.prototype.method = function () {}
```

```javascript
class Obj {
    method: function () {}
}
```

가독성이 좋아지면서 훨씬 간단하게 코드를 작성할 수 있습니다.

또한 클래스 기반 언어에 익숙한 프로그래머가 보다 빠르게 학습할 수 있다고 합니다.

## Class 정의

Class는 사실 함수입니다. 함수를 함수 표현식과 함수 선언으로 정의할 수 있듯이 class문법도 class 표현식과 class 선언 두가지 방법을 제공합니다.

### Class 선언

Class를 선언하기 위해서 클래스의 이름과 class 키워드를 사용해야 합니다.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### Hoisting

함수 선언은 호이스팅이 일어나지만 클래스 선언은 호이스팅이 일어나지 않습니다. 따라서 클래스를 먼저 선언해야 하며 그렇지 않으면 아래와 같이 ReferenceError가 발생할것입니다.

```javascript
const p = new Rectangle(); // ReferenceError

class Rectangle {}
```

### Class 표현식

Class 표현식은 이름을 가질 수도 있고, 갖지 않을 수도 있습니다.

```javascript
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
//output : "Rectangle"


// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
//output: "Rectangle2"
```

## Class body 와 method 정의

Class body는 중괄호 {} 로 묶여 있는 안쪽 부분입니다. 이곳은 여러분이 method이나 constructor와 같은 class members를 정의할 곳입니다.

### Strict mode

클래스 선언과 클래스 표현식의 본문(body)은 strict mode 에서 실행됩니다.

### Constructor (생성자)

constructor 메소드는 class 로 생성된 객체를 생성하고 초기화하기 위한 특수한 메소드입니다.  "constructor" 라는 이름을 가진 특수한 메소드는 클래스 안에 한 개만 존재할 수 있습니다. 만약 클래스에 여러 개의 constructor 메소드가 존재하면 SyntaxError 가 발생할 것입니다.

constructor는 부모 클래스의 constructor 를 호출하기 위해 super 키워드를 사용할 수 있습니다.

### Instance properties

인스턴스 속성은 반드시 클래스 메서드 내에 정의되어야 합니다.

```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

정적 (클래스사이드) 속성과 프로토타입 데이터 속성은 반드시 클래스 선언부 바깥쪽에서 정의되어야 합니다.

```javascript
Rectangle.staticWidth = 20;
Rectangle.prototype.prototypeWidth = 25;
```

### Static methods

static 키워드는 클래스를 위한 정적(static) 메소드를 정의합니다. 정적 메소드는 클래스의 인스턴스화(instantiating) 없이 호출되며, 클래스의 인스턴스에서는 호출할 수 없습니다. 정적 메소드는 어플리케이션(application)을 위한 유틸리티(utility) 함수를 생성하는데 주로 사용됩니다.

```javascript
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
p1.distance;  //undefined
p2.distance;  //undefined

console.log(Point.distance(p1, p2)); // 7.0710678118654755
```

### Boxing with prototype and static methods

정적 메소드나 프로토타입 메소드가 this 값 없이 호출될 때, this 값은 메소드 안에서 undefined가 됩니다. 이 동작은  "use strict" 명령어 없이도 같은 방식으로 동작하는데, class 문법 안에 있는 코드는 항상 strict mode 로 실행되기 때문입니다.

```javascript
class Animal { 
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // Animal {}
let speak = obj.speak;
speak(); // undefined

Animal.eat() // class Animal
let eat = Animal.eat;
eat(); // undefined
```

## 클래스 상속

extends 키워드는 클래스 선언이나 클래스 표현식에서 다른 클래스의 자식 클래스를 생성하기 위해 사용됩니다.

```javascript
class Animal { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}
```

subclass에 constructor가 있다면, "this"를 사용하기 전에 가장 먼저 super()를 호출해야 합니다.

### super 를 통한 상위 클래스 호출

super 키워드는 객체의 부모가 가지고 있는 함수들을 호출하기 위해 사용됩니다..

```javascript
class Cat { 
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}
```

## References

- [Classes - MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes)
