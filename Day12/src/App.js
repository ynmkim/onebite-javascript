//COMPONENTS
import Header from './components/Header.js';
import PokemonList from './components/PokemonList.js';
import PokemonDetail from './components/PokemonDetail.js';

//APIS
import { getPokemonList, getPokemonDetail } from './modules/api.js';

export default function App($app) {
  const getSearchWord = () => {
    if (window.location.search.includes('search=')) {
      return window.location.search.split('search=')[1];
    }
    return '';
  };

  this.state = {
    //default 값들을 알맞게 수정해주세요.
    type: '', // 힌트 : 현재 url 주소를 활용하세요.
    pokemonList: [],
    searchWord: getSearchWord(),
    currentPage: window.location.pathname,
  };

  // 이번 강의에서 배운 '조건부 렌더링' 적용
  const renderHeader = () => {
    // 코드 알맞게 수정
  };

  const renderPokemonList = () => {
    // 코드 알맞게 수정
  };

  const renderPokemonDetail = () => {
    // 코드 새로 작성
  };

  const render = async () => {
    // 코드 새로 작성
  };

  this.setState = (newState) => {
    this.state = newState;
    render();
  };

  const init = async () => {
    // 코드 알맞게 수정
  };

  // 뒤로 가기, 앞으로 가기 기능 완성
  window.addEventListener('popstate', async () => {
    // 코드 작성
  });

  init();
}
