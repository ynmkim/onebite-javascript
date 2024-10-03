export default function Content({ $app, initialSate }) {
  this.state = initialSate;
  this.$target = document.createElement('div');
  this.$target.className = 'content';
  $app.appendChild(this.$target);

  this.tamplate = () => {
    let temp = [];
    if (this.state) {
      this.state.forEach((elem) => {
        temp += `<img src=${elem.url} alt=${elem.name}/>`;
      });
    }
    return temp;
  };

  this.render = () => {
    this.$target.innerHTML = this.tamplate()
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
