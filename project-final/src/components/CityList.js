export default function CityList({ $app, initialState }) {
  this.state = initialState;
  this.$target = document.createElement('ul');
  this.$target.className = 'city-list';

  $app.appendChild(this.$target);

  this.template = () => {
    let temp = [];

    if (this.state) {
      this.state.cities.forEach((elem) => {
        temp += `
        <li class="city-item" id=${elem.id}>
          <img src=${elem.image} alt=${elem.name} />
          <div class="city-item-info">${elem.city}, ${elem.country}</div>
          <div class="city-item-score">⭐️${elem.total}</div>
        </li>
        `;
      });
    }

    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
  };
  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };
  this.render();
}
