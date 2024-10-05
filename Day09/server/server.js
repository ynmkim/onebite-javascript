// 1. npm init -y
// 2. npm install express

// server 폴더 내부의 server.js 파일에 알맞은 코드를 작성하세요.

const express = require('express');
//node.js의 프레임워크인 express 모듈 불러오기
const path = require('path');
// 파일 시스템의 경로를 다루기 위해 사용되는 path 모듈 불러오기
const app = express();
// express 함수를 호출해서 express 애플리케이션 객체를 생성
const PORT = 3000;
//서버가 계속해서 듣고 있을 포트 번호 설정

app.use(express.static(path.join(__dirname, '..')));
// express 애플리케이션에 미들웨어 추가
// 정적 파일을 제공하는 미들웨어 함수

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
  console.log('START SERVER')
})