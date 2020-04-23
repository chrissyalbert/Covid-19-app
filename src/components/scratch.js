if (this.state.selected) {
  this.setState({selected: null}, () => console.log(`this.state: `,this.state));
}