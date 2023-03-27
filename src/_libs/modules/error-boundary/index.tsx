import { Component } from "react";
import { IErrorBoundaryProps, IErrorBoundaryState } from "./types";

import { Styled } from "./style";

class ErrorBoundary extends Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  override componentDidCatch(error: any, errorInfo: any) {
    this.setState({ error, errorInfo });
  }

  override render() {
    if (this.state.error) {
      if (this.props.errorChildren) {
        return this.props.errorChildren;
      }
      return (
        <Styled.Container>
          <Styled.Content>
            <Styled.Title>Whoops!</Styled.Title>
            <Styled.Description>
              Stuck in a blind spot. Reload to see the magic!
            </Styled.Description>
            <button onClick={this.props.onReset}>Reload</button>
          </Styled.Content>
        </Styled.Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
