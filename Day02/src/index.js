// 미션1. switch case문 작성하기
// switch/case문을 사용해서 조건문을 작성하세요.
// 생성한 animal 변수에 할당된 값이 cat일 경우에 '고양이'가 출력될 수 있도록 조건문을 알맞게 작성해주세요.
// case 문은 dog, tiger, cat, lion으로 나눠서 작성하고, case문의 내부에는 각각의 동물을 출력하는 코드를 작성해주세요.

let animal = 'cat';
switch (animal) {
  case 'dog':
    console.log('강아지');
    break;
  case 'tiger':
    console.log('호랑이');
    break;
  case 'cat':
    console.log('고양이');
    break;
  case 'lion':
    console.log('사자');
    break;
  default:
    console.log('코알라');
}

// 미션2. 함수 작성하기
// 아래의 코드가 알맞게 작동하도록 코드를 완성해주세요.

let answer = '';

function connectStrings(str1, str2) {
  // 코드 작성

  answer = str1 + ' ' + str2;
  // answer = `${str1} ${str2}`;
  return answer;
}

connectStrings('hello', 'javascript');

console.log(answer); // 출력결과 : hello javascript
