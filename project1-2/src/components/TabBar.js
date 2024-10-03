export default function TabBar({ $app, initialState, onClick }) {
  // 초기 상태 값들
  this.state = initialState;
  this.onClick = onClick;

  this.$target = document.createElement('div');
  this.$target.className = 'tab-bar';
  $app.appendChild(this.$target);

  this.template = () => {
    let temp = `<button type="button" id="all">전체</button><button type="button" id="penguin">펭귄</button><button type="button" id="panda">팬더</button><button type="button" id="koala">코알라</button>`;

    return temp;
  };

  this.render = () => {
    // UI 렌더링 로직
    // console.log(this.temp());
    this.$target.innerHTML = this.template();
    let $currentTab = document.getElementById(this.state);
    // $currentTab ? ($currentTab.className = 'clicked') : '';
    $currentTab && ($currentTab.className = 'clicked');

    const $tabBar = this.$target.querySelectorAll('button');
    $tabBar.forEach((elem) => {
      elem.addEventListener('click', () => {
        onClick(elem.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    // 상태 없데이트 후 렌더링
    this.render();
  };

  this.render();
}
