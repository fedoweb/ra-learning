import { Component } from "react";

class ClassLikeButton extends Component {
  state = { clicks: 0 };

  render() {
    return (
      <button onClick={() => this.addClick()}>
        Clicked: {this.state.clicks}
      </button>
    )
  }

  addClick() {
    this.setState({ clicks: this.state.clicks + 1});
  }
}

export default ClassLikeButton;