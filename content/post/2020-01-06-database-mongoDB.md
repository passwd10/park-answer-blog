---
title: "[Database] MongoDB의 특징"
date: 2020-01-06
tag: ['Database']
---

![mongoDB-logo](./images/mongo-db-logo.png)

[NoSQL](https://passwd10.github.io/posts/sql-vs-nosql)의 대표적인 데이터베이스인 **MongoDB**의 특징에 대해 알아보겠습니다.

## MongoDB 란

데이터 객체들이 컬렉션 내부에서 독립된 문서로 저장되는, 문서 모델을 기반으로 하는 **NoSQL** 데이터베이스입니다. mongoDB는 컬렉션을 사용해 데이터를 하나로 묶습니다.

**컬렉션(Collection)** 이란 용도가 같거나 유사한 문서들을 그룹으로 묶은 것을 말합니다. 이러한 컬렉션은 기존의 SQL DB의 테이블처럼 동작합니다.

**문서(Document)** 란 mongoDB내에 있는 하나의 실제데이터를 나타내는 표현입니다. 컬렉션은 한개 이상의 연관된 실제데이터로 이루어져 있습니다. 이러한 문서들은 내부 하위 문서들을 포함하고 있어 애플리케이션에 가까운 고유 데이터 모델을 제공합니다. 문서들은 BSON으로 저장됩니다. BSON이란 이진 JSON(Binary JSON)을 말합니다.

**mongoDB의 필드/값 쌍은 Javascript의 프로퍼티/값 쌍과 일치** 합니다.
필드명에는 null문자, 점(.), $를 사용할 수없고, id필드에는 객체 ID만 쓰도록 예약되어있습니다.
mongoDB 내 문서의 최대 크기는 16MB입니다.

## MongoDB의 특징

### Document-oriented database

NoSQL 중 에서도 유명한 MongoDB는 비즈니스 요구에 맞도록 시스템을 확장하는 기능이 유연한 문서지향의 데이터베이스입니다. 문서 지향 데이터베이스에서는 RDBMS에서 사용하는 행 개념 대신에 더욱 유연한 모델인 문서를 이용하는데, 내장 문서와 배열 같은 표현이 가능하기 때문에 복잡한 객체의 계층 관계를 하나의 레코드(열)로 표현할 수 있습니다. 이것은 객체지향 언어(자바, 파이썬)들을 사용하는 개발자에게 편리함을 가져다줍니다.

### Schemaless

스키마가 존재하지 않으므로 필요할 때 마다 필드를 추가하거나 제거하는 것이 쉬워졌습니다. 덕분에 개발 과정이 매우 단순해졌고 빠르게 개발할 수 있게 됐습니다.

### Scale Out

애플리케이션에 영향을 주지 않고 증가하는 부하와 데이터를 처리하기 위해 Auto-Sharding을 지원합니다. 데이터를 분할해 다른 서버에 나누어 주는 저장하는 과정(분산 확장)을 뜻합니다.

### Universal Database

MongoDB는 Universal Database를 목적으로 만들어졌기 때문에 CRUD의 작업 이외에도 다양한 기능을 제공합니다. 또한, NoSQL이지만 조금 어렵더라도 쿼리를 사용할 수 있습니다. 아래는 MongoDB가 제공하는 기능 중 일부입니다.

- 인덱싱 제공
- 집계 파이프라인의 지원
- 특수한 컬렉션 유형 제공.
- 파일 저장소의 지원

### Joinless and Transactionless

관계형 데이터베이스(RDBMS)에서 지원하는 transaction과 join이 없습니다. transaction과 join이 없는 것은 정말 치명적인데 MongoDB는 분산 시스템을 위해 포기했습니다. 해당 기능들을 제공하는 데에 비용이 크기 때문입니다.

### High performance

MongoDB는 쓰기와 읽기에서 기존의 RDBMS보다 수십 배의 성능을 발휘합니다. 이는 여러 제약조건에 대한 처리를 고스란히 어플리케이션 개발자나 드라이버 개발자에게 맡겼기 때문입니다. 따라서 실제 서비스에서 사용하려면 상당히 많은 공이 필요합니다.

## [MongoDB의 Data 구조](https://docs.mongodb.com/manual/core/data-model-design/)