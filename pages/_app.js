import "@/styles/globals.css";
import "@/assets/css/main.css";

import { Layout } from "@/components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
