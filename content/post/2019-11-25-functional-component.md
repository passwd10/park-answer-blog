---
title: "[React] 함수형 컴포넌트"
date: 2019-11-25
tag: ['React']
---

React에서 컴포넌트를 선언하는 방식은 함수형, 클래스형 두 가지입니다. 컴포넌트 내에서 Life Cycle과 State를 사용하기 위해선 반드시 클래스형을 사용해야 했고 사용자들은 함수형과 클래스형을 혼용해서 사용해야 했습니다. 하지만 React 16.8버전부터 Hook이라는 개념이 나오면서 클래스형에서만 할 수 있었던 Life Cycle, State등을 함수형에서도 사용할 수 있게 되었습니다. 이는 함수형 컴포넌트의 단점을 보완하는 중요한 역할을 하게 되었습니다.

## 왜 클래스 컴포넌트에서만 state를 사용할 수있나

state는 생성자를 통해서만 초기화가 가능합니다. 따라서 생성자를 사용하는 클래스 컴포넌트에서만 state를 사용할 수 있습니다.

```bash
constructor(props){
  super(props);
}
```

## 함수형 컴포넌트의 장점

1. 클래스 컴포넌트는 extends, constructor, render 등을 코드에 길게 나열하게 합니다. 그에 반해 함수형 컴포넌트는 props를 인자로 받아 React element를 반환해주면 되는 아주 단순한 구조입니다. 코드량도 감소되는걸 알 수 있습니다.

  ```bash
  class Welcome extends React.Component {
    render() {
     return <h1>Hello, {this.props.name}</h1>;
    }
  }

  function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  ```

2. javascript 초심자가 이해하기 어려운 개념인 this, 클로져, 프로토타입 등을 사용하지 않아도 됩니다. this의 사용을 줄일수록 컴포넌트를 이해하기도 쉬워집니다.
3. 코드의 가독성이 좋아지고 테스트하기도 쉬워집니다.
4. ES6의 화살표함수, Destructing 등의 문법을 사용하여 조금 더 직관적이게 코드를 볼 수 있습니다.

## 클래스 컴포넌트의 단점

1. class component에서는 props를 재사용하는데 이는 예상과 다른 결과를 출력하여 문제를 일으킵니다. [자세히](https://overreacted.io/ko/how-are-function-components-different-from-classes/) 
2. 함수형에 비해 사용되는 메소드(Life Cycle method)들이 많아 코드가 길어지고 가독성도 떨어집니다.

## 결론

React 공식문서에도 클래스 컴포넌트에만 존재하는 기능들을 Hooks로 옮길 예정이라고 합니다. 함수형 컴포넌트의 사용을 지향해야겠습니다.
