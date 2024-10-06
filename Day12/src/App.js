//COMPONENTS
import Header from './components/Header.js';
import PokemonList from './components/PokemonList.js';

//APIS
import { getPokemonList } from './modules/api.js';

export default function App($app) {
  const getSearchWord = () => {
    if (window.location.search.includes('search=')) {
      return window.location.search.split('search=')[1];
    }
    return '';
  };

  this.state = {
    type: '',
    pokemonList: [],
    searchWord: getSearchWord(),
    currentPage: window.location.pathname,
  };

  const header = new Header({
    //코드 작성
    $app,
    initialState: {
      searchWord: this.state.searchWord,
      currentPage: this.state.currentPage,
    },
    //'포켓몬 도감'을 클릭하면 "/" 홈으로 돌아갈 수 있도록 함수를 완성하세요.
    handleClick: async () => {
      history.pushState(null, null, '/');
      const pokemonList = await getPokemonList();

      this.setState({
        ...this.state,
        type: '',
        pokemonList: pokemonList,
        searchWord: getSearchWord(),
        currentPage: '/',
      });
    },
    //'돋보기 모양'을 누르면 검색 결과를 나타내고, "(기존 url)/?search=searchWord"로 url을 변경하세요.
    handleSearch: async (searchWord) => {
      history.pushState(null, null, `?/search=${searchWord}`);
      const pokemonList = await getPokemonList(this.state.type, searchWord);

      this.setState({
        ...this.state,
        type: '',
        pokemonList: pokemonList,
        searchWord: getSearchWord(),
        currentPage: `?/search=${searchWord}`,
      });
    },
  });

  const pokemonList = new PokemonList({
    $app,
    initialState: this.state.pokemonList,
    handleItemClick: async (id) => {
      history.pushState(null, null, `/detail/${id}`);
      this.setState({
        ...this.state,
        currentPage: `/detail/${id}`,
      });
    },
    handleTypeClick: async (type) => {
      history.pushState(null, null, `/${type}`);
      const pokemonList = await getPokemonList(type);
      this.setState({
        ...this.state,
        pokemonList: pokemonList,
        searchWord: getSearchWord(),
        type: type,
        currentPage: `/${type}`,
      });
    },
  });

  this.setState = (newState) => {
    this.state = newState;
    //코드 작성
    pokemonList.setState(this.state.pokemonList);
  };

  const init = async () => {
    try {
      const initialPokemonList = await getPokemonList();
      this.setState({
        ...this.state,
        pokemonList: initialPokemonList,
      });
    } catch (err) {
      console.log(err);
    }
  };

  init();
}
