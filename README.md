<div align="center">
  <img width="470" alt="preonboarding" src="https://github.com/khkh0109/frontend-mentor-challenges/assets/77181642/1fc461e0-3112-4b89-8be9-d55858f1124b">
</div>

<div align="center">
<h1>원티드 프리온보딩 프론트엔드 인턴십 3주차 과제 </h1>	

> 동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 선발 과제의 Best Pratice를 만들고 제출해주세요. <br/>
> Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.

진행 기간: 2023.07.11 ~ 2023.07.14
</div>

<br/>
<br/>

<div align="center">
<h2>😃 팀원</h2>

<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/kjungit"><img src="https://avatars.githubusercontent.com/u/100064540?v=4" width="100px;" alt=""/><br /><sub><b>권범준(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/who0803"><img src="https://avatars.githubusercontent.com/u/65334125?v=4" width="100px;" alt=""/><br /><sub><b>김현진</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/hihijin"><img src="https://avatars.githubusercontent.com/u/117073214?v=4" width="100px;" alt=""/><br /><sub><b>박희진</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sonmansu"><img src="https://avatars.githubusercontent.com/u/80534651?v=4" width="100px;" alt=""/><br /><sub><b>손수민</b></sub></a><br /></td>
     <tr/>
     <td align="center"><a href="https://github.com/yoojiih"><img src="https://avatars.githubusercontent.com/u/33574807?v=4" width="100px;" alt=""/><br /><sub><b>유지현</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/Boom0704"><img src="https://avatars.githubusercontent.com/u/126732752?v=4" width="100px;" alt=""/><br /><sub><b>전영범</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/khkh0109"><img src="https://avatars.githubusercontent.com/u/77181642?v=4" width="100px;" alt=""/><br /><sub><b>태강희</b></sub></a><br /></td>
     <tr/>
  </tbody>
</table>
</div>

<br/>
<br/>
<br/>

## 목차 
- [🔗 배포 링크](#-배포-링크)
- [⚙️ 실행 방법](#️-실행-방법)
- [🤝 팀 규칙](#-팀-규칙)
  - [브랜치 전략](#브랜치-전략)
- [📂 폴더 구조](#-폴더-구조)
- [🛠️ 기술 스택](#️-기술-스택)
- [📖 서비스 소개](#-서비스-소개)
  - [기능 구현](#기능-구현)
  - [페이지](#페이지)
- [👑 Best Practice](#-best-practice)

<br/>

## 🔗 배포 링크
<!-- 배포 링크 --> 

<br/>

## ⚙️ 실행 방법

**설치 및 실행**
```
$ npm install
$ npm start
```

**환경변수** <br/>
루트 경로에 .env.local 파일 생성 후 아래 코드 추가 
```env
REACT_APP_ACCESS_TOKEN={깃허브 토큰}
```

<br/>

## 🤝 팀 규칙 
### 브랜치 전략 
- upstream에는 main 브랜치만 존재
- 브랜치명: `feature/#이슈번호-간단한설명`
  - ex: `feature/#7-setting`
- fork 해서 브랜치파서 작업한뒤 `upstream:main`으로 PR 날림
- 코드리뷰 받고 승인 받으면 `upstream:main`에 merge

<br/>

## 📂 폴더 구조 
<!-- 변경 필요 -->
```
📦src
  ├── 📄index.css
  ├── 📄index.tsx
  ├── 📄App.tsx
  ├── 📂apis
  ├── 📂contxts
  ├── 📂components
  ├── 📂hooks
  ├── 📂pages
  └── 📂router
```

<br/>

## 🛠️ 기술 스택 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"> <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/husky-000000?style=for-the-badge&logo=husky&logoColor=white"> <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> 

<br/>

## 📖 서비스 소개 
특정 깃허브 레파지토리의 이슈 목록과 상세 내용을 조회할 수 있는 웹 사이트 구축 

### 기능 구현 
- 이슈 리스트 조회
- 개별 이슈 조회
- 이슈 5개마다 광고 삽입 

<br/>

### 페이지 

|**이슈 목록**|
| --- |
|<!-- 이미지 -->|

|**개별 이슈**|
| --- |
|<!-- 이미지 -->|


<br/>

## 👑 Best Practice
### 선정 기준 
1. 코드의 가독성 및 재사용성
- 가독성은 협업을 하면서도 중요하며, 유지 보수성을 향상
- 중복 코드를 최소화 하고 재사용 가능한 유틸리티 함수 작성(useHook)
2. 확장성 
- 애플리케이션의 기능을 유연하게 확장하고 유지 관리할 수 있도록 작성
3. 사용자 편의성 
- 사용자들이 웹 또는 앱 인터페이스를 쉽게 이해하고 조작할 수 있도록 설계

### 수행 방향 
- Best Practice를 선정하기전 각자 구현한 코드를 설명하며 코드리뷰를 진행
- 각자 맡은 코드 구현 방법들을 정리 후 스크럼을 통해 Best Practice 선정
- 코드컨벤션 및 언어, 라이브러리, 폴더구조 정리
- Best Practice로 뽑힌 구현방식중 구현하지 않은 부분들을 나누어 업무 분담
- 이슈 작성 및 개별적으로 코드 구현 후 pr 후 코드리뷰를 진행 하고 merge

### 구현사항 
---
<!-- 구현 사항 설명 --> 
#### 📌 API 
**axios instance**
- baseURL 지정
- header에 모든 요청 시 공통으로 들어가는 Accept, Authorization(토큰) 지정

**특정 저장소의 이슈 데이터를 요청하는 api class**
- private 키워드: path, query의 외부 접근을 막기위해 private 키워드 설정
- getIssueList: 이슈 목록을 요청하는 메소드
- getIssue: 단일 이슈를 요청하는 메소드

**sort type**
- 기존 코드는 sort 옵션 중 하나인 `comments`를 `QUERY_SORT_TYPE`에 할당해서 사용하고 있음
- sort 옵션은 `created`, `updated`, `comments` 총 3가지가 있는데, 이 외에 다른 문자열이 할당되면 오류가 발생할 수 있음. 그래서 기존의 string 타입보다 더 구체적인 리터럴 타입을 지정해 오류를 방지함

```ts
type SortType = 'created' | 'updated' | 'comments';

export class RepositoryAPI {
  private static QUERY_SORT_TYPE: SortType = 'comments';

  // code...
}
```

<br/>


