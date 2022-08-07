import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import streetsof from "../public/components/Streetsof.json";
import Image from "next/image"

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

<div className="relative flex items-center justify-center overflow-hidden">
  <div
    className="relative z-30 p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl"
  >
    <div className="flex-col items-start relative z-10 text-center">
    <h1 className="font-kelly drop-shadow mt-20 text-2xl sm:text-6xl text-cream leading-tight">
                Mint Your TES NFT Game Below
                </h1>
                <Image
                    className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    src="/images/main-image.png"
                    priority
                    width={545}
                    height={564}
                    alt=""
                />
                <div className="mt-4 sm:mt-3">
                  <div>
                    {isConnected ? (
                    <div>
                        <button className="bg-cream text-black text-4xl font-helveticaLight inline-flex items-center px-5 py-2 shadow-sm rounded-md mt-5" onClick={handleMint}>Free Mint Now</button>
                        <p className="font-kelly drop-shadow-2xl text-2xl sm:text-4xl text-cream mt-4 text-center">You have the right to receive free NFT only once.</p>
                    </div>
                    ) : ( 
                        <p className="font-kelly drop-shadow-2xl text-2xl sm:text-4xl text-cream mt-4 text-center">You must be connected to Mint.</p>
                    )}
                  </div>
              </div>
            </div>
  </div>
</div>
  )
}

export default Header;
