---
title: "[Network] Web Storage API란?"
date: 2019-12-29
tag: ['Network']
---

※ cookie와 session에 대한 개념이 명확치 않으신 분은 이 [글](https://passwd10.github.io/posts/cookie-session)을 읽고오시기 바랍니다.

## Web Storage API의 등장 배경

과거엔 클라이언트 측에 정보를 저장할 때 쿠키를 주로 사용하곤 했습니다. 쿠키를 사용하는 게 데이터를 클라이언트 측에 저장할 수 있는 유일한 방법이었을 때는 이 방법이 타당했지만, 다음과 같은 제약이 있었습니다.

- 4KB의 데이터 저장 제한
- 쿠키는 매 HTTP요청에 포함되어 있어 웹을 느려지게 하는 원인이 되었음
- 같은 쿠키는 도메인 내의 모든 페이지에 같이 전달 됨
- HTTP 요청에 암호화 되지 않고 보내기 때문에 보안에 취약함
- 쿠키는 사용자의 로컬에 텍스트로 저장 되어있어 쉽게 접근, 내용 확인이 가능함

이와 같은 쿠키의 문제점을 보완하기 위해 Modern APIs의 종류인 Web Storage API가 나오게 되었습니다.

## Web Storage 의 개념

- DOM Storage(Document Object Model Storage)라고도 하는 Web Storage는 웹 앱에 클라이언트 측 데이터를 저장하는 방법과 프로토콜 제공합니다. Web Storage는 영구 데이터 저장소를 지원합니다. 쿠키와 비슷하지만 용량이 더 향상되었고 HTTP request header에 정보를 저장하지 않습니다. local storage 와 session storage 두 종류의 타입이 있는데 각각 영구적인 쿠키와 세션 쿠키와 비슷하게 동작합니다. Web Storage는 W3C에 의해 표준화되었고 모든 주요 브라우저가 이를 지원합니다.

## Web Storage의 컨셉과 종류

- localStorage : 로컬에 도메인 별로 지속되는 storage 입니다. 브라우저 자체에 반영구적으로 데이터가 유지되지만, 도메인이 다른 경우에는 로컬스토리지에 접근할 수 없습니다. 브라우저가 닫히고, 다시 열려도 데이터를 유지합니다.

- sessoinStorage : 페이지 세션(프로세스, 탭, 브라우저)이 종료될 떄까지 각각의 오리진에 대해 별도의 저장 공간을 유지하고 관리하는 storage 입니다. 즉 같은 도메인이라도 세션이 다르면 데이터에 접근할 수 없습니다.

## Web Storage와 Cookie 비교

1. **제한**

    - Cookie : 용량(3~5kb), 시간, 갯수 제한
    - WebStorage : 용량(5MB ~ 10MB)만 제한

2. **시간제한 설정**

    - Cookie : 시간 제한 설정 가능
    - WebStorage : 시간 제한 설정이 불가능하여 사용자가 일일히 관리해줘야 함

3. **데이터형**

    - Cookie : 문자열만 저장가능
    - WebStorage : javascript 객체 저장 가능

4. **데이터 전송**

    - Cookie : request, response시에 모든 쿠키를 전송해야하므로 http 통신에 부하를 준다
    - WebStorage : 개발자가 선택해서 전송할 수 있고 가공할 수도 있어서 부하를 줄일 수 있다

5. **세션의 정의**

    - Cookie : 같은 브라우저면 다른 탭이나 다른 창(프로세스)일지라도 같은 세션이라고 정의한다
    - WebStorage : 같은 브라우저일지라도 sessionStorage의 경우 다른 탭이면 다른 세션이라고 정의하기 때문에 데이터를 공유하려면 localStorage에 넣어야 한다

6. **이벤트**

    - Cookie : 이벤트가 없어 자신의 변화를 감지할 수 없다
    - WebStorage : 이벤트가 있어 자신의 변화를 이벤트로 감지할 수 있다

## References

- [HTTP 쿠키 - mdn](https://developer.mozilla.org/ko/docs/Web/HTTP/Cookies)
- [Web Storage - wiki](https://en.wikipedia.org/wiki/Web_storage)
- [Web Storage API - mdn](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)