import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import streetsof from "../public/components/Streetsof.json";
import Image from "next/image"

const streetsofAddress = "0x619391Ef229e4E5bAA09Ed4c6Dc8d0D819D94438";

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
                            <div className="mt-6 flex justify-center sm:space-x-16 space-x-3">
                            <a href="#collection"className="text-helveticaLight sm:text-3xl text-xl uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                                The Collection
                            </a>
                            <a href="#artist" className="text-helveticaLigh sm:text-3xl text-xl uppercase mx-6 text-white cursor-pointer hover:text-gray-300">
                                The Artist
                            </a>
                            </div>
                    </div>
                    </div>
    <div className="flex-col items-start relative z-10 text-center">
                <Image
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/images/streets-of.png"
                    priority
                    width={1308}
                    height={247}
                    alt=""
                />
                <h1 className="font-helveticaLight drop-shadow text-2xl sm:text-4xl text-white leading-tight mt-4">
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
