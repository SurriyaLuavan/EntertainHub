import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import ShowCard from "@/components/ShowCard";
import axios from "axios";
import uuid from "react-uuid";

const Popular = ({ shows }) => {
  const { popularShows } = shows;
  return (
    <>
      <Head>
        <title>Popular Movies | EntertainHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <Layout category="tvseries">
        <div className="showListContainer">
          <div className="sectionWrapper">
            <h1 className="headingContainer | padding-inline fs-l-primary-heading fw-light">
              Popular{" "}
              <span className="categoryBlock | fs-m-body fw-regular">
                TV Series
              </span>
            </h1>
            <div className="showCardContainer | padding-inline padding-block-top padding-block-bottom">
              {popularShows.map((item) => (
                <ShowCard show={item} key={uuid()} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Popular;

export async function getStaticProps() {
  return {
    props: {
      shows: await getPopularShows(),
    },
  };
}

async function getPopularShows() {
  const PopularEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/tvseries/popular`;

  try {
    const res = await axios.get(PopularEndpoint);
    const data = res.data;
    return data;
  } catch (err) {
    return { error: err };
  }
}