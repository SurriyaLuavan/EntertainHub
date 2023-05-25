import Head from "next/head";
import Layout from "@/components/layout/Layout";
import Trending from "@/components/home/Trending";
import MovieCollections from "@/components/home/MovieCollections";
import TVCollections from "@/components/home/TVCollection";
import axios from "axios";

export default function Home({ shows }) {
  const [
    trendingData,
    nowPlayingData,
    topRatedData,
    popularData,
    onTheAirData,
    topRatedTVData,
    popularTVData,
  ] = shows;

  const movieCollection = [
    {
      title: "Now Playing",
      category: "Movie",
      data: nowPlayingData.nowPlayingShows,
      pathname: "now_playing",
    },
    {
      title: "Top Rated",
      category: "Movie",
      data: topRatedData.topRatedShows,
      pathname: "top_rated",
    },
    {
      title: "Popular",
      category: "Movie",
      data: popularData.popularShows,
      pathname: "popular",
    },
  ];

  const tvCollection = [
    {
      title: "On The Air",
      category: "TV Series",
      data: onTheAirData.onTheAirShows,
      pathname: "on_the_air",
    },
    {
      title: "Top Rated",
      category: "TV Series",
      data: topRatedTVData.topRatedShows,
      pathname: "top_rated",
    },
    {
      title: "Popular",
      category: "TV Series",
      data: popularTVData.popularShows,
      pathname: "popular",
    },
  ];

  return (
    <>
      <Head>
        <title>Home | EntertainHub</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/favicon.png" />
      </Head>
      <Layout category="both">
        <div className="showListContainer ">
          <Trending data={trendingData.trendingShows} />
          <MovieCollections movieCollection={movieCollection} />
          <TVCollections tvCollection={tvCollection} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      shows: await getHomeShows(),
    },
  };
}

async function getHomeShows() {
  const trendingEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/trending`;

  // Movies endpoints
  const nowPlayingEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/movies/now_playing`;
  const popularEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/movies/popular`;
  const topRatedEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/movies/top_rated`;

  //TV endpoints
  const onTheAirEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/tvseries/on_the_air`;
  const popularTVEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/tvseries/popular`;
  const topRatedTVEndpoint = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/tvseries/top_rated`;

  const urls = [
    trendingEndpoint,
    nowPlayingEndpoint,
    topRatedEndpoint,
    popularEndpoint,
    onTheAirEndpoint,
    topRatedTVEndpoint,
    popularTVEndpoint,
  ];

  const promises = urls.map((url) => axios.get(url));

  try {
    const res = await Promise.all(promises);
    const data = res.map((item) => item.data);
    return data;
  } catch (err) {
    return { error: err };
  }
}
