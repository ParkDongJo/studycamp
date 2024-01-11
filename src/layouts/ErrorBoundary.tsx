import { Component, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}
interface State {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  render() {
    if (this.state.error) {
      return <div>에러 페이지</div>;
    }
    return this.props.children;
  }
}
