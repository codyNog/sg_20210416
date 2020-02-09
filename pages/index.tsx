import React from "react";
import { NextPage } from "next";

interface Props {
  userAgent: string;
}

const Component: NextPage<Props> = ({ userAgent }) => {
  return <h1>Hello world! - user agent: {userAgent}</h1>;
};

Component.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Component;
