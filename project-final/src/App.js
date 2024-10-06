import Header from './components/Header.js';
import RegionList from './components/RegionList.js';
import CityList from './components/CityList.js';
import CityDetail from './components/CityDetail.js';
import { getCities, getCityDetail } from './components/api.js';

export default function App($app) {
  const getSortBy = () => {
    if (window.location.search) {
      return window.location.search.split('sort=')[1].split('&')[0];
    }
    return 'total';
  };
  const getSearchWord = () => {
    if (window.location.search && window.location.search.includes('search')) {
      return window.location.search.split('search=')[1];
    }
    return '';
  };

  this.state = {
    startIdx: 0,
    sortBy: getSortBy(),
    searchWord: getSearchWord(),
    region: '',
    cities: '',
    currentPage: window.location.pathname,
  };

  const renderHeader = () => {
    new Header({
      $app,
      initialState: {
        sortBy: this.state.sortBy,
        searchWord: this.state.searchWord,
        currentPage: this.state.currentPage,
      },
      handleSortChange: async (sortBy) => {
        const pageUrl = `/${this.state.region}?sort=${sortBy}`;
        history.pushState(
          null,
          null,
          this.state.searchWord
            ? pageUrl + `&search=${this.state.searchWord}`
            : pageUrl
        );
        const cities = await getCities(
          0,
          this.state.region,
          sortBy,
          this.state.searchWord
        );

        this.setState({
          ...this.state,
          startIdx: 0,
          sortBy: sortBy,
          cities: cities,
        });
      },

      handleSearchWord: async (searchWord) => {
        history.pushState(
          null,
          null,
          `/${this.state.region}?sort=${this.state.sortBy}?/&search=${searchWord}`
        );

        const cities = await getCities(
          0,
          this.state.region,
          this.state.sortBy,
          searchWord
        );

        this.setState({
          ...this.state,
          startIdx: 0,
          searchWord: searchWord,
          cities: cities,
        });
      },
    });
  };

  const renderRegionList = () => {
    new RegionList({
      $app,
      initialState: this.state.region,
      handleRegion: async (region) => {
        history.pushState(null, null, `${region}?sort=total`);
        const cities = await getCities(0, region, 'total');
        this.setState({
          ...this.state,
          startIdx: 0,
          sortBy: 'tatal',
          region: region,
          searchWord: '',
          cities: cities,
        });
      },
    });
  };

  const renderCityList = () => {
    new CityList({
      $app,
      initialState: this.state.cities,
      handleLoadMore: async () => {
        const newStartIdx = this.state.startIdx + 40;
        const newCities = await getCities(
          newStartIdx,
          this.state.region,
          this.state.sortBy,
          this.state.searchWord
        );
        this.setState({
          ...this.state,
          startIdx: newStartIdx,
          cities: {
            cities: [...this.state.cities.cities, ...newCities.cities],
            isEnd: newCities.isEnd,
          },
        });
      },
      handleItemClick: (id) => {
        history.pushState(null, null, `/city/${id}`);
        this.setState({
          ...this.state,
          currentPage: `/city/${id}`,
        });
      },
    });
  };

  const renderCityDetail = async (cityId) => {
    try {
      const cityDatailData = await getCityDetail(cityId);
      new CityDetail({ $app, initialState: cityDatailData });
    } catch (err) {
      console.log(err);
    }
  };

  this.setState = (newState) => {
    this.state = newState;
    render();
  };

  window.addEventListener('popstate', async () => {
    const urlPath = window.location.pathname; // 현재 페이지의 URL 가져오기

    const prevStartIdx = 0;
    const prevRegion = urlPath.replace('/', '');
    const prevSortby = getSortBy();
    const prevSearchWord = getSearchWord();
    const prevCities = await getCities(
      prevStartIdx,
      prevRegion,
      prevSortby,
      prevSearchWord
    );

    this.setState({
      ...this.state,
      startIdx: prevStartIdx,
      region: prevRegion,
      sortBy: prevSortby,
      searchWord: prevSearchWord,
      cities: prevCities,
      currentPage: urlPath,
    });
  });

  const render = () => {
    const path = this.state.currentPage;
    $app.innerHTML = '';

    if (path.startsWith('/city/')) {
      const cityId = path.split('/city/')[1];
      renderHeader();
      renderCityDetail(cityId);
    } else {
      renderHeader();
      renderRegionList();
      renderCityList();
    }
  };

  const init = async () => {
    const path = this.state.currentPage;

    if (path.startsWith('/city/')) {
      render();
    } else {
      const cities = await getCities(
        this.state.startIdx,
        this.state.region,
        this.state.sortBy,
        this.state.searchWord
      );
      this.setState({
        ...this.state,
        cities: cities,
      });
    }
  };

  init();
}
