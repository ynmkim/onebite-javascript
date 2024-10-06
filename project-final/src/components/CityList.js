export default function CityList({
  $app,
  initialState,
  handleLoadMore,
  handleItemClick,
}) {
  this.state = initialState;
  this.$target = document.createElement('div');
  this.$target.className = 'city-list-container';
  this.handleLoadMore = handleLoadMore;
  this.handleItemClick = handleItemClick;

  $app.appendChild(this.$target);

  this.template = () => {
    let temp = `<ul class="city-list">`;

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
      temp += `</ul>`;
    }

    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.template();
    this.$target.querySelectorAll('li.city-item').forEach((elem) => {
      elem.addEventListener('click', () => {
        this.handleItemClick(elem.id);
      });
    });

    if (!this.state.isEnd) {
      const $loadMoreButton = document.createElement('button');
      $loadMoreButton.className = 'add-items-btn';
      $loadMoreButton.textContent = '더보기';
      this.$target.appendChild($loadMoreButton);

      $loadMoreButton.addEventListener('click', () => this.handleLoadMore());
    }
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
