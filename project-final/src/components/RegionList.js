export default function RegionList({ $app, initialState, handleRegion }) {
  this.state = initialState;
  this.$target = document.createElement('ul');
  this.$target.className = 'region-list';

  this.handleRegion = handleRegion;

  $app.appendChild(this.$target);

  this.template = () => {
    const regionList = [
      '🚀 All',
      '🌏 Asia',
      '🕌 Middle-East',
      '🇪🇺 Europe',
      '💃 Latin-America',
      '🐘 Africa',
      '🏈 North-America',
      '🏄 Oceania',
    ];
    let temp = ``;
    regionList.forEach((elem) => {
      let regionId = elem.split(' ')[1];
      temp += `<li id=${regionId}>${elem}</li>`;
    });

    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    if (this.state) {
      let $currentRegion = document.getElementById(this.state);
      $currentRegion && ($currentRegion.className = 'clicked');
    } else {
      document.getElementById('All').className = 'clicked';
    }

    const $regionList = this.$target.querySelectorAll('li');
    $regionList.forEach((elem) => {
      elem.addEventListener('click', () => {
        this.handleRegion(elem.id);
      });
    });
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
