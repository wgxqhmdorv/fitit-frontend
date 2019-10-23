import React from "react";
import App from "next/app";
import withRedux from "next-redux-wrapper";
import { initStore } from "../redux";
import { Provider } from "react-redux";
import Nav from "../components/nav";

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
      <div className="flex">
        <Nav />
        <Provider store={store}>
          <div className="flex-1">
            <Component {...pageProps} />
          </div>
        </Provider>
      </div>
    );
  }
}

export default withRedux(initStore)(MyApp);
