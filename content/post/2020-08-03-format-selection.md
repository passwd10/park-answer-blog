---
title: "[VSCode] Format Selection(ctrl k + f)가 안될 때"
date: 2020-08-03
tag: ['etc']
---

Extension으로 **Prettier-Code formatter**를 설치하고 부터 Format Selection기능이 작동하지 않았다.

다시 활성화 시키는 방법이다.

1. ctrl+shift+p를 누르고 settings.json를 검색한다

2. 가장 상단의 Open Settings(JSON)을 클릭한다

3. settings.json파일에서 **[javascript]** 속성을 다음과 같이 수정한다.

```json
"[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
},
```

나의 경우 해당 값이 prettier로 설정이 되어있었는데 prettier에서 따로 설정값을 주지 않아 Format Selection이 제대로 작동하지 않았다.

이제 formatter가 잘 작동하는것을 확인할 수 있다.
