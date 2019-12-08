## 실행방법

```
git clone https://github.com/dwook/wanted.git
cd wanted
yarn install
yarn start
```

## 요구사항

- [x] /api/v4/jobs에서 받아온 프론트엔드 개발자 리스트 데이터를 화면에 노출시킨다.
- [x] 다음페이지 값(links.next)이 있을 경우 Infinite Scroll UI를 적용해 해당 아이템을 추가한다.
- [x] 아이템 클릭 시 원티드 상세 페이지(/wd/:id)로 외부링크 이동한다.
- [x] /api/v4/filters에서 받아온 정보대로 필터 설정 가능한 UI를 구현한다.
- [x] 적용 버튼 클릭 시 url과 내부상태값을 업데이트 하고 필터가 적용된 /jobs를 호출한다.

## 문제해결

- package.json에 proxy 설정을 했음에도, CORS문제가 해결되지 않았었습니다. axios 초기설정 시 BASE URL을 'https://www.wanted.co.kr' 설정했던 것이 원인이었습니다. BASE URL 설정을 지우고 path 부터 사용하여 요청을 보내니 해결되었습니다.
- `/api/v4/jobs` 의 locations 파라미터에 여러 개의 key값이 들어가는 상황에서, 처음 구현했을 때는 `locations[]=busan&locations[]=daegu` 로 요청이 들어갔습니다. 이를 해결하기 위해 qs 라이브러리를 사용하여 쿼리문자열이 `locations=busan&locations=daegu` 형태가 되도록 하였습니다.

## 배운점 및 아쉬운점
- api 구조 제대로 인지하지 못하고 작업을 진행하여, 여러 locations 선택이 가능한 국가를 구현하기 위해 시간을 많이 잡아먹었습니다. 배열구조의 파라미터 형태를 조작하는 방법에 대해 알게되었습니다.
- 테스트 코드를 다양하게 작성하지 못하였습니다. (Card Component, Reducer 테스트 코드작성)
- propTypes를 적용하지 못하였습니다. 처음부터 설정하고 작업에 들어갔어야 하는 아쉬움이 있습니다.
