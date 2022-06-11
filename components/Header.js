import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import streetsof from "../public/components/Streetsof.json";
import Image from "next/image"

const navigation = {
  social: [
    {
      id: 1,
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      id: 2,

      name: 'Discord',
      href: 'https://discord.com',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

const streetsofAddress = "0x593fd86bf37e91854534B4eE7d67dC6C0b094f26";

const Header = ({ accounts, setAccounts }) => {
  const [mintAmount, setMintAmount] = useState(1);
  const isConnected = Boolean(accounts[0]);

  async function handleMint() {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        streetsofAddress,
        streetsof.abi,
        signer
      );
      try {
        const response = await contract.mint(BigNumber.from(mintAmount), {
          value: ethers.utils.parseEther((0 * mintAmount).toString()),
        });
        console.log('response: ',response);
      } catch (err) {
        console.log("error: ", err)
      }
    }
  }
    return (

<div className="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
  <div
    className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
  >
      <div className="container mx-auto px-6 md:px-12 py-4">
                    <div className="justify-between items-center">
                    <div className="flex justify-center space-x-12">
                            {navigation.social.map((item) => (
                                <a key={item.id} href={item.href} className="text-white font-helveticaLight hover:text-gray-500">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon className="h-12 w-12" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </div>
                    </div>
    <div className="flex-col items-start relative z-10 text-center">
                <Image
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/images/streets-of.png"
                    priority
                    width={1308}
                    height={249}
                    alt=""
                />
                <h1 className="font-helveticaLight drop-shadow mt-20 text-2xl sm:text-4xl text-white leading-tight">
                THE BEST URBAN ART COLLECTION FROM THE STREETS OF"<br/> THE WORLD. GENESIS COLLECTION STRAIGHT FROM L.A.
                </h1>
                <div className="mt-4 sm:mt-3">
                  <div>
                    {isConnected ? (
                    <div>
                        <button className="bg-gradient-to-t from-saffron to-pink text-white text-4xl font-helveticaLight inline-flex items-center px-5 py-2 shadow-sm rounded-md mt-5" onClick={handleMint}>Free Mint Now</button>
                        <p className="font-helveticaBold drop-shadow-2xl text-2xl sm:text-4xl text-saffron mt-4 text-center">You have the right to receive free NFT only once.</p>
                    </div>
                    ) : ( 
                        <p className="font-helveticaBold drop-shadow-2xl text-2xl sm:text-4xl text-saffron mt-4 text-center">You must be connected to Mint.</p>
                    )}
                  </div>
              </div>
            </div>
  </div>
  <video
    autoPlay
    loop
    muted
    className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
  >
    <source
      src="https://crebusol.com/streetsof/video.mp4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</div>
  )
}

export default Header;
