import { Component } from "inferno";
import "./App.css";
import ComponentWithRenderProp from "./ComponentWithRenderProp";

class App extends Component {
  state = {
    item: { title: "Hello" },
    additionalData: "world",
  };
  el = null;

  renderProp = (item) => {
    return (
      <div>
        <h1>
          {item.title} {this.state.additionalData}
        </h1>
      </div>
    );
  };

  getRef = (el) => {
    this.el = el;
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.additionalData === "here!" &&
      this.state.additionalData !== prevState.additionalData
    ) {
      this.el.forceUpdate();
    }
  }

  render() {
    return (
      <div className="App">
        <p>
          <button
            onClick={() => {
              this.setState({
                additionalData: "here!",
              });
            }}
          >
            ForceUpdate during updating cycle
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              this.setState(
                {
                  additionalData: "there!",
                },
                () => {
                  this.el.forceUpdate();
                }
              );
            }}
          >
            ForceUpdate outside updating cycle
          </button>
        </p>
        <p>
          <button
            onClick={() => {
              this.setState({ item: { title: "inferno" } });
            }}
          >
            Mutate item
          </button>
        </p>
        <ComponentWithRenderProp
          ref={this.getRef}
          render={this.renderProp}
          item={this.state.item}
        />
      </div>
    );
  }
}

export default App;
