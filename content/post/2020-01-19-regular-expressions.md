---
title: "[Javascript] 코딩테스트에서 유용하게 쓰일 정규표현식"
date: 2020-01-19
tag: ['Javascript']
---

## 정규(표현)식 이란

정규 표현식은 문자열에 나타는 특정 문자 조합과 대응시키기 위해 사용되는 패턴입니다. 자바스크립트에서 정규 표현식 또한 객체입니다.

```javascript
const birth = '9410o7';

const myRegExp = /^[0-9]+$/;

console.log(myRegExp.test(birth)); // false
```

문자열에 숫자만 있는지 확인해주는 간단한 예제입니다.

## 정규식을 만드는 방법

### 1. 정규식 리터럴(/로 감싸는 방법)을 사용하는 방법

```javascript
const re = /ab+c/;
```

정규식 리터럴은 스크립트가 불러와질 때 컴파일됩니다. 만약 정규식이 상수라면, 이렇게 사용하는 것이 성능을 향상시킬 수 있습니다.

### 2. RegExp 객체의 생성자 함수를 호출하는 방법

```javascript
const re = new RegExp("ab+c");
```

생성자 함수를 사용하면 정규식이 실행 시점에 컴파일됩니다. 정규식의 패턴이 변경될 수 있는 경우, 혹은 사용자 입력과 같이 다른 출처로부터 패턴을 가져와야 하는 경우에는 생성자 함수를 사용하세요.

## 패턴

정규식 패턴은 `/abc/`와 같이 단순 문자, `/Chapter (\d+)\.\d*/`와 같이 단순 문자와 특수 문자의 조합으로 구성될 수 있습니다.

### 단순패턴

```javascript
const regExp = /abc/;

console.log(regExp.test("The latest airplane designs evolved from slabcraft."); // true

console.log(regExp.test("Grab crab")) // false
```

첫번째 문자열은 `"abc"`에 대응합니다. 하지만 두번째 문자열은 `"ab c"`를 포함하지만 `"abc"`를 정확하게 포함하지 않기 때문에 대응되지 않습니다.

### 특수문자 사용하기

### \

- 특수 문자가 아닌 문자 앞에서 사용된 백슬래시는 '해당 문자는 특별하고, 문자 그대로 해석되면 안된다'는 의미.

  ```javascript
  /b/ // 문자 b
  /\b/ // 문자 b가 아닌 단어 경계에 대응하는 특수문자
  ```

- 특수 문자 앞에 위치한 백슬래시는 '다음에 나오는 문자는 특별하지 않고 문자 그대로 해석되어야 한다'

  ```javascript
  /a*/ // 0개 이상의 a문자가 등장함
  /a\*/ // 문자 *
  ```

- RegExp("patter")표기를 사용하면 \자체를 이스케이프 해줘야 함

  ```javascript
  const re2 = new RegExp('a\\*')
  // 백슬래시 자체를 이스케이프 함
  ```

### ^

- 입력의 시작부분에 대응됩니다.(multi line 플래그가 true면 줄바꿈문자 바로 다음부분과도 대응됨)

  ```javascript
  const re = /^A/;

  console.log(re.test("an A")); //false
  console.log(re.test("An E")); //true
  ```

### [^abc]

- 괄호 내부에 등장하지 않는 어떤 문자와도 대응됩니다.
- `[^abc]`는 `[^a-c]`와 동일합니다.
- "brisket"에서 'b'바로 다음인 'r', "chop"에서 'c'바로 다음인 'h'에 대응됩니다.

### [abc]

- 문자셋 입니다.
- 괄호 안의 어떤 문자와도 대응됩니다. 점(.)이나 별표(*) 같은 특수 문자는 문자셋 내부에서는 특수문자가 아닙니다.
- `[a-d]`는 "brisket"의 'b'에 일치하고 "city"의 'c'에 일치합니다.
- 패턴 /[a-z.]+/ 와 /[\w.]+/ 는 "test.i.ng" 전체 문자열이 일치합니다.

### $

- 입력의 끝 부분과 대응됩니다.(multi line 플래그가 true면 줄바꿈문자 바로 앞 부분과도 대응됨)

  ```javascript
  const re = /t$/;

  console.log(re.test("eater")); //false
  console.log(re.test("eat")); //true
  ```

### *

- 앞의 표현식이 0회 이상 연속으로 반복되는 부분과 대응됩니다.

  ```javascript
  const re = /bo*/;

  console.log(re.test("A ghost booooed"));// true ('booo'와 대응됨)
  console.log(re.test("A bird warbled")); // true ('b'에 대응됨)
  console.log(re.test("A goat grunted")); //false (대응되는곳이 없음)
  ```

### +

- 앞의 표현식이 1회 이상 연속으로 반복되는 부분과 대응됩니다.

  ```javascript
  const re = /a+/;

  console.log(re.test("candy")); //true ('a'에 대응됨)
  console.log(re.test("caaandy")); //true (모든 'a'들에 대응됨)
  console.log(re.test("A goat grunted")); //false (대응되는곳 없음)
  ```

### `?`

- 앞의 표현식이 0또는 1회 등장하는 부분과 대응됩니다.
- 예를 들어, /e?le?/ 는 "angel"의 'el' 에 대응되고, "angle"의 'le' 에 대응되고 또한 "oslo" 의 'l'에도 대응됩니다.

### `.`

- 개행 문자를 제외한 모든 단일 문자와 대응됩니다.
- 예를 들어, /.n/는 "nay, an apple is on the tree"에서 'an'과 'on'에 대응되지만, 'nay' 에는 대응되지 않습니다.

### (x)

- 다음의 예제가 보여주는것 처럼 'x'에 대응되고, 그것을 기억합니다. 괄호는 포획 괄호(capturing parentheses)라 불립니다.

- 패턴 /(foo) (bar) \1 \2/ 안의 '(foo)' 와 '(bar)'는 문자열"foo bar foo bar"에서 처음의 두 단어에 대응되고 이를 기억합니다. 패턴 내부의 \1와 \2는 문자열의 마지막 두 단어에 대응됩니다. \1, \2, \n과 같은 문법은 정규식의 패턴 부분에서 사용됩니다. 정규식의 치환 부분에서는 $1, $2, $n과 같은 문법이 사용되어야 합니다. 예를 들어, 'bar foo'.replace( /(...) (...)/, '$2 $1')와 같이 사용되어야 합니다. $& 패턴은 앞에서 대응된 전체 문자열을 가리킵니다.

### x|y

- 'x' 또는 'y'에 대응됩니다.
- 예를 들어, /green|red/는 "green apple"의 'green'에 대응되고, "red apple."의 'red'에 대응됩니다.

### {n}

- 앞 표현식이 n번 나타나는 부분에 대응됩니다. n은 반드시 양의 정수여야 합니다.
- 예를 들어, /a{2}/는 "candy,"의 'a'에는 대응되지 않지만, "caandy,"의 모든 a 와, "caaandy."의 첫 두 a 에는 대응됩니다.

### {n,m}

- n과 m은 양의 정수이고, n <= m를 만족해야 합니다. 앞 문자가 최소 n개, 최대 m개가 나타나는 부분에 대응됩니다. m이 생략된다면, m은 ∞로 취급됩니다.
- 예를 들어, /a{1,3}/는 "cndy"에서 아무것에도 대응되지 않지만, "caandy,"의 첫 두 a 와 "caaaaaaandy"의 첫 세 a 에 대응됩니다. "caaaaaaandy"에서 더 많은 a 들이 있지만, "aaa"에만 대응된다는 점에 주목하세요.

## 플래그

플래그는 옵션이므로 선택적으로 사용합니다. 플래그를 사용하지 않은 경우 첫번째 매칭한 대상만을 검색하고 종료합니다.

Flag|Meaning|Description
-|-|-
I|Ignore Case | 대소문자를 구별하지 않고 검색
g | Global | 문자열 내의 모든 패턴 검색
m | Multi Line | 문자열의 행이 바뀌더라도 계속 검색

## 정규식에서 쓰이는 메소드

### exec

- 대응되는 문자열을 찾는 RegExp 메소드입니다. 정보를 가지고 있는 배열을 반환합니다. 대응되는 문자열을 찾지 못했다면 null을 반환합니다.

### test

- 대응되는 문자열이 있는지 검사하는 RegExp 메소드 입니다. true 나 false를 반환합니다.

### match

- 대응되는 문자열을 찾는 RegExp 메소드입니다. 정보를 가지고 있는 배열을 반환합니다. 대응되는 문자열을 찾지 못했다면 null을 반환합니다.

### search

- 대응되는 문자열이 있는지 검사하는 String 메소드 입니다. 대응된 부분의 인덱스를 반환합니다. 대응되는 문자열을 찾지 못했다면 -1을 반환합니다.

### replace

- 대응되는 문자열을 찾아 다른 문자열로 치환하는 String 메소드입니다.

### split

- 정규식 혹은 문자열로 대상 문자열을 나누어 배열로 반환하는 String 메소드입니다.

### match()와 exec() 차이

```javascript
const str = "11시 20분 32초";
const regExp = /\d+/g;

regExp.exec(str); // [ '11' ]
str.match(regExp); // [ '11', '20', '32' ]
```

```javascript
const str = "11시 20분 32초";
const regExp = /\d+(초)/g;

str.match(regExp); // [ '32초' ]
regExp.exec(str); // [ '32초', '초' ]
```

exec()는 글로벅 플래그를 넣어놔도 일치하는 첫번째 값만 반환합니다. 하지만 캡쳐값이 있을 경우 배열로 반환합니다.
