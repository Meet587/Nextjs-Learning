import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import Layout from "../../components/Layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        {/* <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          // strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        /> */}
      </Head>
      <h1>FirstPost</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
