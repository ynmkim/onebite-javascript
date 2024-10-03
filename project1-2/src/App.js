import TabBar from './components/TabBar.js';
import Content from './components/Content.js';
import { getAnimals } from './components/api.js';

export default function App($app) {
  this.state = {
    currentTab: 'all',
    photos: [],
  };

  const tabBar = new TabBar({
    $app,
    initialState: '',
    onClick: async (name) => {
      this.setState({
        ...this.state,
        currentTab: name,
        photos: await getAnimals(name === 'all' ? '' : name),
      });
    },
  });

  const content = new Content({
    $app,
    initialState: [],
  });

  this.setState = (newState) => {
    this.state = newState;
    tabBar.setState(this.state.currentTab); // 컴포넌트에 필요한 상태 값들을 각각의 인스턴스들이 갖고 있는 setState 메서드의 인수로 전달
    content.setState(this.state.photos);
  };

  // 모든 동물 데이터 가져오기
  const init = async () => {
    try {
      const initialPhotos = await getAnimals();
      this.setState({
        ...this.state,
        photos: initialPhotos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  init();
}

/* 상태관리 적용 틀 
this.state = {
  // 초기 상태 값들
};

this.setState = (newState) => {
  this.state = newState;
  // 상태 없데이트 후 렌더링
  this.render();
};

this.render = () => {
  // UI 렌더링 로직
}
*/

/* MEMO
  컴포넌트를 생성자 함수로 사용해 활용하면 동일한 구조와 기능을 가진
  컴포넌트의 인스턴스를 여러 번 편리하게 재사용 가능함
  */
