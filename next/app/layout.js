// components/Layout.jsx
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }) {
  return (
    
    <div className="bg-black">
      <Head>
        <title>Gabbar — GenAI Platform</title>
        <meta name="description" content="Modern AI Landing HTML Template" />
        <meta name="keywords" content="bootstrap 5, saas, landing page" />
        <meta name="author" content="Themetags" />
        <link rel="icon" href="/assets/img/favicon.png" type="image/png" />
        <link rel="stylesheet" href="/assets/css/fonts/ff-1.css" />
        <link rel="stylesheet" href="/assets/css/fonts/ff-3.css" />
        <link rel="stylesheet" href="/assets/css/fonts/bootstrap-icons.css" />
        <link rel="stylesheet" href="/assets/css/plugins.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <script src="/assets/js/plugins.js"></script>
      <script src="/assets/js/app.js"></script>
    </div>
  );
}