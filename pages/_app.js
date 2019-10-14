import React from "react";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux";
import { Provider } from "react-redux";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(initStore, { debug: true })(MyApp);
