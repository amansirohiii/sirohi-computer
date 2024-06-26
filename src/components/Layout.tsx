import Head from "next/head";
import Link from "next/link";
import Footer from "./Footer";
import App from "./Navbar";
import "@/app/globals.css";


interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

function Layout({ title, children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title ? title : "Sirohi Computer Center"} </title>
        <meta name="description" content="Sirohi Computer Center" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
    <App/>
        <main className="container m-auto mt-4 xl:px-14 md:px-12 px-8">
          {children}
        </main>
        <Footer/>

    </>
  );
}

export default Layout;