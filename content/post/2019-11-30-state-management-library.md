---
title: [React] Context API는 상태관리 라이브러리를 대체할 수 있을까
data: 2019-11-30
tag: ['React']
---

## 상태관리 라이브러리의 사용 이유

1. 전역 상태 관리를 가능하게 함

    페이지는 여러 부모자식관계로 이루어진 다중 계층 컴포넌트로 구성되어 있습니다. 각각의 컴포넌트의 상태와 메소드의 접근을 쉽게하기 위해선 복잡한 계층을 계산하여 접근하는것이 아닌 Global한 영역에서 한번에 관리를 해주는것이 필요합니다. 상태관리 라이브러리는 이를 가능케 합니다.

2. 상태 관리가 쉬워지고 컴포넌트의 재사용성을 높임

    복잡한 컴포넌트 계층이 관리가 되므로 컴포넌트의 모듈화에 부담이 가지 않습니다. 이는 효율적인 관리를 가능하게 하고, 컴포넌트의 재사용성을 높임으로 개발 및 유지보수를 용이하게 합니다.

## Context API는 무엇인가

애플리케이션의 로그인 정보, 설정, 테마 등 전역적으로 데이터를 관리해야 할 때 사용합니다. 일반적인 React 어플리케이션에서 props는 top-down방식으로 전달됩니다. 이는 어플리케이션 내의 많은 컴포넌트들의 관리를 번거롭게합니다. Context API는 명시적으로 각각의 컴포넌트 계층을 확인할 필요 없이 요소들 간의 값을 공유하게 합니다. 덕분에 필요하지 않는 props에 접근하지 않아도 됩니다.
참고로 Redux, mobX와 같은 상태관리 라이브러리들은 context API를 기반으로 구현이 되었습니다.

## Context API가 상태관리 라이브러리를 대체할 수 있나

Redux를 상태관리 라이브러리의 대표적인 예로 들겠습니다.
React 16.3버전에서 context API는 `<Provider>`와 `<Consumer>`라는 두 컴포넌트를 사용할 수 있게 하였습니다. 이 이름들이 익숙한 이유는 Redux에서 이미 `<Provider>`를 지원하고 있기 때문일겁니다. 그렇다면 Context API가 Redux를 대체할 수 있을까요?

Context API는 전역상태를 사용하여 컴포넌트 트리를 한번에 관리할 수 있다는 점에서 Redux와 비슷한 일을 처리합니다. 하지만 그게 전부입니다. Redux에서는 Context API에는 없는 아래와 같은 강점을 지니고 있습니다.

- Redux는 사용자의 모든 기록을 쉽게 관찰할 수 있습니다. 또 time traveling debugger을 제공하여 특정 상태로 돌아갈 수 있게 해줍니다.
- [미들웨어](http://webframeworks.kr/tutorials/react/react-redux-middleware/#tocAnchor-1-1) API를 제공하여 Redux-sagas와 같은 도구에 엑세스할 수 있도록 지원합니다.
- Redux의 [React 바인딩](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)은 불필요한 렌더링을 방지합니다.

Context는 Redux를 완전히 대체할 수 없습니다. 하지만 Redux의 이런 특징들을 활용할 필요가 없다면 Context API를 활용하여도 무방합니다. Redux는 개념을 이해하기 쉽지 않을뿐더러 사용시 코드량도 방대해지기 때문에 필요에 따라 잘 골라서 활용해야 합니다.