// components/Layout.js
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";
import "./index.scss";

import "./Layout.scss";

const Layout = props => (
  <div className="Layout">
    <Head>
      <title>Carolina Herrera</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <Header />
    <div className="Content">{props.children}</div>
    <Footer />
  </div>
);

export default Layout;