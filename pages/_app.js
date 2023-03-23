import "@/styles/globals.css";
import ShowProvider from "@/components/contextProviders/ShowProvider";
import data from "/data.json";

export default function myApp({ Component, pageProps }) {
  return (
    <>
      <ShowProvider data={data}>
        <Component {...pageProps} />
      </ShowProvider>
    </>
  );
}
