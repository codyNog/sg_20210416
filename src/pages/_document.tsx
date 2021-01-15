import React from "react";
import Document, { Head, Html, Main, NextScript } from "next/document";
import styled from "@emotion/styled";

const Body = styled.body({
  margin: 0
});

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <Body>
          <Main />
          <NextScript />
        </Body>
      </Html>
    );
  }
}
