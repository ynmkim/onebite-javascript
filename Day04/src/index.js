// 미션1. 배열, 객체, 반복문
// 아래와 같은 배열에서, 칼로리가 500 이상인 음식의 이름을 출력해주세요.

// 반복문과 조건문을 사용하세요!
let foods = [
  { name: 'Burger', calories: 800 },
  { name: 'Apple', calories: 52 },
  { name: 'Pizza', calories: 550 },
  { name: 'Salad', calories: 150 },
];

for (let i = 0; i < foods.length; i++) {
  if (foods[i].calories >= 500) {
    console.log(foods[i].name);
  }
}

// forEach문 사용
foods.forEach((elem) => {
  if (elem.calories >= 500) {
    console.log(elem.name);
  }
});

// 미션2. 생성자 함수
// 동물의 종류와 소리를 인자로 받아 객체를 생성하는 Animal 생성자 함수를 작성해주세요. 그리고 makeSound 메서드를 추가하여 동물이 내는 소리를 출력하는 기능을 구현하세요.

function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
  this.makeSound = function () {
    console.log(`${this.name}는(은) ${this.sound}하고 소리를 냅니다.`);
  };
}

const tiger = new Animal('호랑이', '어흥');
const dog = new Animal('강아지', '멍멍');

tiger.makeSound();
dog.makeSound();
