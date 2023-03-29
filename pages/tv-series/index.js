import Head from "next/head";
import Layout from "@/components/layout/Layout";
import TvSeriesContainer from "../../components/tv-series/TvSeriesContainer";

export default function TvSeries() {
  return (
    <>
      <Head>
        <title>TV-series | EntertainHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <Layout>
        <TvSeriesContainer />
      </Layout>
    </>
  );
}
