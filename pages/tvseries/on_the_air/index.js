import React from "react";
import Head from "next/head";
import Layout from "@/components/layout/Layout";
import ShowCard from "@/components/ShowCard";
import axios from "axios";
import uuid from "react-uuid";

const OnTheAir = ({ shows }) => {
  const { onTheAirShows } = shows;
  return (
    <>
      <Head>
        <title>On The Air Movies | EntertainHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <Layout category="tvseries">
        <div className="showListContainer">
          <div className="sectionWrapper">
            <h1 className="headingContainer | padding-inline fs-l-primary-heading fw-light">
              On The Air{" "}
              <span className="categoryBlock | fs-m-body fw-regular">
                TV Series
              </span>
            </h1>
            <div className="showCardContainer | padding-inline padding-block-top padding-block-bottom">
              {onTheAirShows.map((item) => (
                <ShowCard show={item} key={uuid()} />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default OnTheAir;

export async function getStaticProps() {
  return {
    props: {
      shows: await getOnTheAirShows(),
    },
  };
}

async function getOnTheAirShows() {
  const OnTheAirEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/tvseries/on_the_air`;

  try {
    const res = await axios.get(OnTheAirEndpoint);
    const data = res.data;
    return data;
  } catch (err) {
    return { error: err };
  }
}
