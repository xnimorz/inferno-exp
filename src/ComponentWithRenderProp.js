import { PureComponent } from "inferno-compat";

class ComponentWithRenderProp extends PureComponent {
  render() {
    return <div>{this.props.render(this.props.item)}</div>;
  }
}

export default ComponentWithRenderProp;
