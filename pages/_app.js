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
      <div className="flex h-screen bg-gray-100">
        <div className="flex flex-col bg-white border-r-2 border-gray-200 pr-4">
          <img
            src="/logo.png"
            alt="FitIT logotype"
            className="p-2 h-16 lg:h-24 m-auto "
          />
          <Nav />
        </div>
        <Provider store={store}>
          <div className="flex-grow">
            <Component {...pageProps} />
          </div>
        </Provider>
      </div>
    );
  }
}

export default withRedux(initStore)(MyApp);
