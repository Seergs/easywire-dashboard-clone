import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <main className="w-5/6 bg-gray-100">
        <Header />
      </main>
    </div>
  );
}
