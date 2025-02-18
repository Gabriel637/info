import { Metadata } from "next";
import About from "./about";
import Experience from "./experience";
import Presentation from "./presentation";
import Head from "next/head";

export const metadata: Metadata = {
  title: '...',
  description: '...',
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Gabriel Barbosa</title>
        <meta name="description" content="Information about developer Gabriel Barbosa and his experiences" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <About />
      <Presentation />
      <Experience />
    </>
  );
}
