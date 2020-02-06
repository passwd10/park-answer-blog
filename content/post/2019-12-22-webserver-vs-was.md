---
title: "[Network] Web Server와 WAS의 차이"
date: 2019-12-22
tag: ['Network']
---

Web Server와 WAS의 차이점은 무엇일까요? 각각의 개념과 역할에 대해 알아보겠습니다.

## 정적, 동적 컨텐츠

정적 컨텐츠

- 사용자 요청과 상관없이 결과값이 동일한 컨텐츠
- EX) HTML, CSS, JavaScript, 이미지파일

동적 컨텐츠

- 사용자 요청에 따라 결과값이 달라지는 컨텐츠
- EX) 쇼핑몰 장바구니에 넣은 상품, 현재 위치의 날씨

## Web Server와 WAS

### Web Server

- 하드웨어 측면 : 정적 컨텐츠를 저장하는 컴퓨터
- 소프트웨어 측면 : 웹 사용자가 어떻게 호스트 파일들에 접근하는지를 관리(HTTP 프로토콜을 기반으로 한다)
- 종류 : Apache, Micorosft IIS, Nginx

### Web Application

- 인터넷이나 인트라넷을 통해 웹 브라우저에서 이용할 수 있는 응용 소프트웨어

### WAS(Web Application Server)

- 동적 컨텐츠를 제공하기 위해 만들어진 웹 어플리케이션 서버
- 웹 어플리케이션을 실행시켜 필요한 기능을 수행하고 그 결과를 웹 서버에게 전달
- PHP, JSP, ASP 같은 언어들을 사용해 동적인 페이지를 생성할 수 있는 서버
- 프로그램 실행 환경과 DB 접속 기능 제공
- 비즈니스 로직 수행 가능
- 웹 서버 + 웹 컨테이너(JSP, servlet을 실행시킬 수 있는 소프트웨어)
- 웹 어플리케이션 컨테이너 : 웹 어플리케이션이 배포되는 공간

동작 과정
![was](./images/webserver-vs-was1.png)

1. WAS의 Web Server는 Client의 요청이 동적 요청인지 정적 요청인지 파악을 함
2. 동적 요청이면 Web Container에게 보냄. (Web Server만으로는 처리할 수 없으니 너가 처리해!)
3. Web Container의 Servlet이 열심히 동적 컨텐츠(데이터)를 생성함
4. Web Server에게 동적 컨텐츠를 전달
5. Web Server는 Client에게 데이터 전달

종류 : Tomcat, WebSphere, JEUS, Node.js(자체 웹서버 내장)

## Web Server vs WAS

상황에 따라 변하는 정보를 제공할 수 있는가?

- Web Server는 정적인 컨텐츠만 주고받을 수 있다.
- WAS는 정적 컨테츠도 주고 받을 수 있고 어플리케이션을 돌리고, DB연결을 하고, 동작을 수행시켜 데이터를 만들어 줄 수도 있다.

그렇다면 WAS만 쓰면되지 굳이 Web Server를 따로 사용하는 이유는?

- 웹 사이트는 점차 다양하고 복잡한 작업을 맡게 되었다. 따라서 정적컨텐츠를 송수신하는 역할과, DB조회, 데이터가공 등 동적컨텐츠를 처리하는 역할을 나누는 것은 서버의 부하 방지, 자원 이용의 효율성, 유지보수의 편의성을 높여준다.