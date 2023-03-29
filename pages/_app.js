import "@/styles/globals.css";
import ShowProvider from "@/components/contextProviders/ShowProvider";
import AuthProvider from "@/components/contextProviders/AuthProvider";
import AlertProvider from "@/components/contextProviders/AlertProvider";
import data from "/data.json";

export default function myApp({ Component, pageProps }) {
  return (
    <>
      <AuthProvider>
        <AlertProvider>
          <ShowProvider data={data}>
            <Component {...pageProps} />
          </ShowProvider>
        </AlertProvider>
      </AuthProvider>
    </>
  );
}
