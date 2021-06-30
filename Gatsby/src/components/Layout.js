import React from "react";
import MobileDrop from "./MobileDrop";
import Helmet from "react-helmet";
import Reset from "../styles/reset";
import Nav from "./Nav";
export default function Layout({ pageMeta, children }) {
  console.log(children);
  return (
    <div className="layout ">
      <Nav />
      <MobileDrop />
      <Helmet>
        <title>Liberty Lockdown</title>
        {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Alec Venzor" />
        <html lang="en" />

        {/* The rest we set dynamically with props */}
        <meta name="description" content={pageMeta.description} />

        {/* We pass an array of keywords, and then we use the Array.join method to convert them to a string where each keyword is separated by a comma */}
        <meta name="keywords" content={pageMeta.keywords.join(",")} />
      </Helmet>
      <Reset />
      <div className="child ">{children}</div>
    </div>
  );
}
