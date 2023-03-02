# 실행 명령어

`npm init react-app todo-list`

`npm install sass react-icons react-router-dom classnames next@13.1.1 react-loading recoil react-loading-skeleton @react-three/fiber three`

`npm run dev`

# 기능 목록

- Navbar
  - 홈화면
  - 검색
    - 검색 기능 구현
    - 검색어 자동완성
    - 검색결과가 없을 때 창 안 뜨게 하기
    - \*입력값과 일치하는 단어 하이라이트
    - 카테고리 dropdown 구현 -> \*fade-out 디테일 추가 수정 필요
    - \*카테고리에 따라 다른 검색결과 출력 -> DB 구축 시 category 데이터를 기준으로 분류 가능
  - 카테고리
    - 카테고리에 마우스 오버 시 카테고리 리스트 모달창 띄우기
- 로그인 & 회원가입
  - 이메일 형식 지키기
  - 비밀번호 표시 체크박스
  - 로그인 및 회원가입 후 redirect
  - 로그인 및 회원가입 실패 시 예외처리 -> 추후 DB 구축 시 추가 예외처리
  - 마이페이지 구현 -> 추후 DB 구축 시 추가 예외처리
- 광고 리스트
  - 마우스 오버 시 선택된 광고 버튼 스타일 변경
  - 마우스 오버 시 선택된 광고 화면에 띄우기
  - 일정한 시간 간격으로 광고 자동 슬라이드
- 상품 정보 리스트
  - 사진, 이름, 가격 표시
  - 디테일 페이지 구현
    - 상품 클릭했을 때 에러 발생 -> 해결 : next 동적 라우팅
    - 실제 도착 예정 날짜 보여주기
- 장바구니
  - 장바구니 담기
    - 새로운 상품 데이터를 query로 넘길 때 숫자 데이터가 문자열로 넘어와 생기는 오류 처리
    - 같은 상품이 담겨져 있는 경우엔 수량만 증가
  - 수량 변경 기능
  - 체크박스 기능
  - 삭제 기능
  - 체크된 상품 수량과 가격에 맞게 최종 결제 금액 확인
- 고객센터
  - \*three.js 로 3D 캐릭터 만들어보기
  - \*Google maps API 사용해서 쇼핑몰 위치 보여주기
- 로딩창 구현
  - skeleton ui 적용해보기
- 무한 스크롤 적용
  - 열을 고정하고 일정하게 추가하기
- next.js 적용
- recoil 적용
- Docker 적용
  - aws에 배포 (react + aws)
  - aws에 도커동작 시키기 (aws + docker)
  - github action 설정
    - workflow 스크립트 작성
    - appspec 스크립트 작성
