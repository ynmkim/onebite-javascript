// 미션1. DOM API
// index.js 파일을 생성하고, 파일의 내부에 버튼 클릭 시 텍스트 요소의 내용을 변경하는 함수를 작성하세요.

// DOM API를 사용하여 요소를 선택하고, 이벤트 리스너를 추가해야 합니다.
const $button = document.getElementById('changeTextButton');
const $text = document.getElementById('text');

$button.addEventListener('click', () => {
  $text.textContent = '텍스트가 변경되었습니다.';
});

// 미션2. DOM API & Select Tag
// id 가 app인 div 요소의 내부에 아래의 코드들을 넣어주세요.
const $app = document.getElementById('app');
const $select = document.createElement('select');
$select.id = 'skills';

const options = [
  { value: 'javascript', text: 'JavaScript' },
  { value: 'next', text: 'Next.js' },
  { value: 'react', text: 'React.js' },
  { value: 'typescript', text: 'TypeScript' },
];

// DocumentFragment를 사용하여 성능 최적화
const fragment = document.createDocumentFragment();

options.forEach((option) => {
  const newOption = document.createElement('option');
  newOption.textContent = option.text;
  newOption.setAttribute('value', option.value);

  fragment.appendChild(newOption); // fragment에 추가
});

// 단, createElement, appendChild를 사용해서 생성해주세요.
$select.appendChild(fragment); // 한번에 DOM에 추가
$app.appendChild($select);

// select 태그의 값을 변경할 때 마다, 변경된 값을 출력하는 기능도 작성해주세요.
$select.addEventListener('input', (event) => {
  console.log(event.target.value);
});

// const $option1 = document.createElement('option');
// $option1.textContent = 'JavaScript';
// $option1.setAttribute('value', 'javascript');

// const $option2 = document.createElement('option');
// $option2.textContent = 'Next.js';
// $option2.setAttribute('value', 'next');

// const $option3 = document.createElement('option');
// $option3.textContent = 'React.js';
// $option3.setAttribute('value', 'react');

// const $option4 = document.createElement('option');
// $option4.textContent = 'TypeScript';
// $option4.setAttribute('value', 'typescript');

// $select.appendChild($option1);
// $select.appendChild($option2);
// $select.appendChild($option3);
// $select.appendChild($option4);
