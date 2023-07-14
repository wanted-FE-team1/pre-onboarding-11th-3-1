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

```
$ npm install
$ npm start
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
#### 📌 IssueList 컴포넌트
1. 관심사를 분리하여 컴포넌트의 가독성과 유지 보수성을 향상
- 이슈 데이터 및 상태 관리는 IssueContext로 분리되어 관심사 분리 
- 무한 스크롤 기능과 관련된 로직을 useIntersectionObserver 훅을 통해 별도로 분리

    ```tsx
    // src/pages/IssueList.tsx
    const { issues, getInfiniteIssues, isLoading, isError } = useContext(IssueContext);
    const handleIntersection = () => {
      if (!isLoading) getInfiniteIssues();
    };
    const ref = useIntersectionObserver({ callback: handleIntersection });
    ```

2. 에러 처리 : 리다이렉션 vs 에러 컴포넌트
- 에러가 발생한 컴포넌트만 영향을 받고, 다른 서비스나 기능은 정상적으로 동작할 수 있음 
- 전체 애플리케이션의 안정성을 유지하면서 문제가 발생한 부분만 처리할 수 있음

    ```tsx
    {
      isError ? <Error /> : <li ref={ref}></li>
    }
    ```

    <br/>

#### 📌 useIntersectionObserver 커스텀 훅
- Intersection Observer를 사용하여 요소의 가시성 변경을 감지하고, 지정된 콜백 함수를 호출하는 역할
- 코드의 가독성이 향상. Intersection Observer의 로직이 분리되어 더욱 명확하게 이해할 수 있음
- 재사용성이 높아짐. useIntersectionObserver 훅을 다른 컴포넌트에서도 활용하여 가시성 변경 이벤트를 처리할 수 있음

    ```tsx
    const useIntersectionObserver = ({ callback, option = {} }) => {
      const ref = useRef(null);
      const handleIntersection = (entries) => {
        const target = entries[0];
        if (target.isIntersecting) callback();
      };
      useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5, ...option });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
      }, [handleIntersection]);
      return ref;
    };
    ```

<br/>

#### 📌 Router 기능 : createBrowserRouter로 구현
기존의 라우팅 기능보다 많은 기능들이 추가되어 있어 활용성이 높다. <br/>
하위 컴포넌트로 데이터를 전달 가능, 경로가 많다면 가독성이 좋으며 에러컴포넌트를 따로 설정할 수 있다.<br/>

1. App.tsx 에서 RouterProvider 연결
2. router폴더 > Router.tsx에서 createBrowserRouter 사용<br/>
현재 '/' 메인 페이지를 사용하지 않기에 index값을 true로 설정하여 '/' 접근시 '/repos/facebook/react/issues' 경로로 이동하도록 설정<br/>
경로가 '/repos/:owner/:repo/issues'라면  <IssueList />를 렌더링<br/>
경로가 '/repos/:owner/:repo/issues/:id'라면  <IssueDetail />를 렌더링<br/>
router에 설정한 설정대로 지정한 url이 아닐 경우에 에러 페이지(NotFoundPage) 렌더링
```ts
import { createBrowserRouter, Navigate } from 'react-router-dom';
import IssueDetail from '../pages/IssueDetail';
import IssueList from '../pages/IssueList';
import NotFoundPage from '../pages/NotFoundPage';
import { Root } from './Root';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Navigate to={'/repos/facebook/react/issues'} />,
      },
      {
        path: '/repos/:owner/:repo/issues',
        element: <IssueList />,
      },
      {
        path: '/repos/:owner/:repo/issues/:id',
        element: <IssueDetail />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
```
>또한 Header text(owner/repo) 구현시,<br/>
특정 레포를 선택하여 기존 하드코딩으로 구현한 것보다 확장성을 고려하여<br/>
Router.tsx에서 경로 설정을 '/repos/facebook/react/issues' 이렇게 만들어<br/>
useParams로 owner/repo를 꺼내올 수 있다.<br/>
Router.tsx에서 owner/repo를 바꾸기만 하면 원하는 레포의 이슈를 요청할 수 있게 만듦<br/>
```ts
//Header.tsx
import { useParams } from 'react-router-dom';

export default function Header() {
  const {owner, repo} = useParams();
  return (
    <header className='header p-6 pl-16 bg-blue-500 text-white text-xl mb-5 flex items-center justify-center'>
      <h1>{owner}/{repo}</h1>
    </header>
  );
}
```

<br/>
