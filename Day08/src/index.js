// 미션1. 자바스크립트의 this
// 다음 코드에서 regularFunction과 arrowFunction이 있습니다.

// 두 함수 모두 this가 어떻게 작동하는지 확인하기 위해 각각 this.value를 출력하려고 합니다.

// 각 함수의 this가 무엇을 가리키는지 확인하고, 각 함수가 정상적으로 this.value를 출력할 수 있도록 코드를 수정하세요. (주석으로 작성된 질문에 대한 답도 주석으로 남겨주세요!!)

const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this.value); // Q. 여기서 this는 무엇을 가리키나요?
    // A. 함수를 호출한 객체를 가르킵니다.
  },
  arrowFunction: function () {
    console.log(this.value); // Q. 여기서 this는 무엇을 가리키나요?
    // A. window 전역 개체를 가르킵니다.
  },
};

obj.regularFunction(); // 출력: 42
obj.arrowFunction(); // 출력: undefined (이유를 설명해보세요)

// 화살표 함수에서 this는 함수의 호출 방식이 아닌 함수가 정의된 시전에서 상위 스코프의 this를 참조합니다.즉, arrowFunction 호출시 this는 전역개체를 가르키기 때문에 undefined가 출력됩니다.