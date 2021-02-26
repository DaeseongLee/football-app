## 

매주 토요일 저녁 마다 축구 모임이 있다.  축구를  사랑하기 때문에, 축구하는 그 시간은 나에게는  정말 소중한 시간이다.  보통 그 시간에  함께 축구하기 위해서 모이는 인원은 14명정도 되는데, 매번 할 때 마다 모이는 인원이 비슷한데도, 어김없이 금요일이되면 한 사람이 축구하는 인원들한테 각각 연락을 하여 축구인원을 모은다.  이러한 불편함을 없애고자 **축구 모임 만들기 Application**을 만들어보고자 한다.

## 목표

- 간단하지만 Application이지만 deploy까지 해서 사용자들에게 사용해보게 하기
- 새롭게 배운 React를 통해서 React에 대한 더 깊은 공부하기
- 뭐가 될 지는 모르겠지만 한단계 성장하기

## 사용 스킬

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9cc4287-29e6-4472-b3ca-026c8a03abaf/pngwing.com.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e9cc4287-29e6-4472-b3ca-026c8a03abaf/pngwing.com.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1600cf2-12ef-48aa-891c-0d4b20c3999b/iconfinder_google_firebase_1175544.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e1600cf2-12ef-48aa-891c-0d4b20c3999b/iconfinder_google_firebase_1175544.png)

## 애플리케이션 구조

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b38bbb9-4b0a-4479-aabd-ee7b5947edef/Untitled_Diagram.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0b38bbb9-4b0a-4479-aabd-ee7b5947edef/Untitled_Diagram.png)

## 구현 기능

- 회원가입
- 로그인
- 축구방 리스트
- 축구방 만들기
- 축구방 별로 참가할 수 있는 기능 구현

## 화면 UI

- 로그인

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e8b9720-95f3-4584-bc4f-90b8461b39e0/.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e8b9720-95f3-4584-bc4f-90b8461b39e0/.png)

- 회원가입

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a743ae32-86b7-44bf-b1cb-eb83f6d27b17/.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a743ae32-86b7-44bf-b1cb-eb83f6d27b17/.png)

- 방 개설 목록

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f57f5c3c-d1cd-40d4-a97e-b5764ab54d98/list.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f57f5c3c-d1cd-40d4-a97e-b5764ab54d98/list.png)

- 방 상세

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c6985aa-1063-481d-819f-7ea3821aede4/Untitled_Diagram.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0c6985aa-1063-481d-819f-7ea3821aede4/Untitled_Diagram.png)

- 방만들기

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/501353cc-ae83-45b1-8e47-33565badadb9/Untitled_Diagram_(1).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/501353cc-ae83-45b1-8e47-33565badadb9/Untitled_Diagram_(1).png)

## **Back-end 설계**

firebase에서 제공해주는 Authentication, Realtime Database, Storage API를 이용하여 서버단 구현.

## **Application 구성**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/30b0f715-0c91-4c8b-871f-347d3d5edf32/Image_2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/30b0f715-0c91-4c8b-871f-347d3d5edf32/Image_2.png)

**common** ⇒ colors.css 공동적으로 사용되어지는 색상, 사이즈 등 css 속성을 모아두었음.

**components** ⇒ application에 사용되어지는 component (login, register, meetingList)가 있다.

**service** ⇒ 서버와 연결되는 환경설정과 API를 이용하는 구문이 있다.

## 완성된 프로젝트 화면

- 데스크탑

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76987a5f-5970-4332-a098-fb113f37d3db/.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/76987a5f-5970-4332-a098-fb113f37d3db/.png)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59f8cc54-be35-4a5a-a1bb-de15dcb55a4d/.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/59f8cc54-be35-4a5a-a1bb-de15dcb55a4d/.png)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc2855ab-8a9c-4dfe-b45c-9da4c544dfc0/.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc2855ab-8a9c-4dfe-b45c-9da4c544dfc0/.jpg)

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/886f5829-565c-422a-aa9d-2c2f1c338f98/.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/886f5829-565c-422a-aa9d-2c2f1c338f98/.jpg)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b47ac32-326c-4058-a5bb-142d4a8811f0/.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b47ac32-326c-4058-a5bb-142d4a8811f0/.jpg)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/27fd00bd-9871-49f7-b0c2-7a7f60e594eb/Image_9.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/27fd00bd-9871-49f7-b0c2-7a7f60e594eb/Image_9.jpg)

- mobile

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/884072af-f7f3-4c7e-9605-a086bd079484/.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/884072af-f7f3-4c7e-9605-a086bd079484/.jpg)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/affec462-8e45-4455-9ab2-83086fb7a207/.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/affec462-8e45-4455-9ab2-83086fb7a207/.jpg)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da1779d9-d425-476d-8ddb-1ef74ecb8d33/.jpg](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/da1779d9-d425-476d-8ddb-1ef74ecb8d33/.jpg)

## Git-hub

[https://github.com/DaeseongLee/football-app](https://github.com/DaeseongLee/football-app)

## Hoisting

[https://react-football-5b51f.web.app/](https://react-football-5b51f.web.app/)
