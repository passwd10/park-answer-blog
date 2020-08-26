---
title: "[Gatsby] Gatsby build는 무슨 일을 하는 걸까?"
date: 2020-08-27
tag: ['etc']
---

![Gatsby logo](./images/Gatsby_Logo.png)

내 블로그를 수정 후 배포했을 때 다음과 같은 일이 발생한다.

1. blog repository에 commit을 한다.
2. Netlify가 repository의 변화를 감지한다.
3. 변경된(업로드된) 코드를 등록된 gatsby build 명령을 통해 빌드 한다.
4. build의 결과물을 배포한다.

이 과정 중 **gatsby build** 에 대해 알아보겠다.

## 이해

**gatsby build** 는 서버 프로세스를 이용하여 사이트를 웹브라우저로 전송할 수 있는 파일로 컴파일하는 과정을 말한다. 따라서 사이트에 마무리 작업을 추가했을 때 실행돼야 한다(마지막에 실행돼야 한다).

## 내부 동작

**gatsby build**는 사이트를 최적화한 새 버전을 생성하는데, 여기서 최적화는 사이트의 **config, data, code, 생성한 정적 HTML 페이지**를 패키징 하는 것을 말한다. 이때 정적 HTML 페이지는 React application으로 **hydration** 된 상태이다.

&gt; hydration : 클라이언트 측 JavaScript를 사용하여 서버 렌더링 HTML에 응용프로그램 상태와 상호작용을 추가하는 과정이다. 이것은 Gatsby framework를 만드는 근본적인 도구 중 하나인 React의 특징이다. Gatsby는 hydration을 사용하여 빌드 시간에 만들어진 정적 HTML을 React application으로 변환한다.

다음은 Gatsby default starter를 설치하여 build 했을 때의 console이다.

```shell
success open and validate gatsby-configs - 0.062 s
success load plugins - 0.915 s
success onPreInit - 0.021 s
success delete html and css files from previous builds - 0.030 s
success initialize cache - 0.034 s
success copy gatsby files - 0.099 s
success onPreBootstrap - 0.034 s
success source and transform nodes - 0.121 s
success Add explicit types - 0.025 s
success Add inferred types - 0.144 s
success Processing types - 0.110 s
success building schema - 0.365 s
success createPages - 0.016 s
success createPagesStatefully - 0.079 s
success onPreExtractQueries - 0.025 s
success update schema - 0.041 s
success extract queries from components - 0.333 s
success write out requires - 0.020 s
success write out redirect data - 0.019 s
success Build manifest and related icons - 0.141 s
success onPostBootstrap - 0.164 s
⠀
info bootstrap finished - 6.932 s
⠀
success run static queries - 0.166 s — 3/3 20.90 queries/second
success Generating image thumbnails — 6/6 - 1.059 s
success Building production JavaScript and CSS bundles - 8.050 s
success Rewriting compilation hashes - 0.021 s
success run page queries - 0.034 s — 4/4 441.23 queries/second
success Building static HTML for pages - 0.852 s — 4/4 23.89 pages/second
info Done building in 16.143999152 sec
```

1. **Node** objects는 **gatsby-config.js**와 플러그인을 포함한 **gatsby-node.js** 파일에서 정의한 모든 소스에서 소싱 된다.
2. 스키마는 Node objects에서 유추된다.
3. 사이트 또는 설치된 테마에 JavaScript 구성 요소를 기반으로 페이지가 생성된다.
4. 모든 페이지에 대한 데이터를 제공하기 위해 GraphQL 쿼리를 추출하여 실행한다.
5. 정적 파일이 작성되고 **public** 디렉터리에 번들로 제공됨

## 완료

**gatsby build**가 성공적으로 완료되면, 사이트를 배포하는 데 필요한 모든 것이 사이트 루트의 **public** 폴더에 있게 된다. 빌드에는 축소된 파일, 변환된 이미지, 페이지별 정보와 데이터가 있는 JSON 파일, 페이지별 정적 HTML 등이 포함된다.

최종 빌드는 정적 파일일 뿐이므로 이제 배포할 수 있다. 사이트가 배포되면 페이지의 모든 정보가 gatsby build에 의해 모아지고 정리되었기 때문에 서버 측 프로세스를 실행할 필요가 없다. 즉 서버가 필요 없다.

## 참고

- [gatsby-build-process](https://www.gatsbyjs.com/docs/overview-of-the-gatsby-build-process/#understanding-gatsby-build-build-time)
- [gatsby-glossary](https://www.gatsbyjs.com/docs/glossary/)
