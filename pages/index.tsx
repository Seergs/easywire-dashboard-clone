import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Overview from "../components/Overview";
import Recent from "../components/Recent";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>easywire dashboard clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main className="w-5/6 bg-gray-100 ml-auto">
        <Header />
        <Overview />
        <Recent />
      </main>
    </div>
  );
}
