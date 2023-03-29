import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Bookmark from "@/pages/bookmarks/Bookmark";

export default function Bookmarks() {
  return (
    <>
      <Head>
        <title>Bookmarks | EntertainHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <Layout>
        <div className="showListContainer">
          <Bookmark category="Movie" />
          <Bookmark category="TV Series" />
        </div>
      </Layout>
    </>
  );
}
