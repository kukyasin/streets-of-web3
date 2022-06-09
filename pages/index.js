import Head from 'next/head'
import { useState } from 'react';
import Header from '../components/Header';
import Images from '../components/Images'
import Details from '../components/Details';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function App() {
  const [accounts, setAccounts] = useState([]);
  return (
    <div className="bg-black">
      <Head>
        <title>Street Of</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar accounts={accounts} setAccounts={setAccounts} />
      <Header accounts={accounts} setAccounts={setAccounts} />
      <Images />
      <Details />
      <Footer />
    </div>
  );
}

export default App;