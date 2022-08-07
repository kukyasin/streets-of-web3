import Image from 'next/image'

export default function Details() {
    return (
        <main>
          <div id="artist" className="bg-black">
            <div className="grid max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
              <div className="lg:self-end">
                <div className="mt-16">
                  <h1 className="text-2xl sm:text-8xl font-kelly text-cream text-center">
                  TES NFT Game
                  </h1>
                  <p className="text-xl sm:text-3xl font-kelly text-white text-center mt-6">
                  This NFT Game is bringing back old school pixel 2D art style. Single player adventure, that is just amazing to play!
                  </p>
                  <p className="text-xl sm:text-3xl font-kelly text-cream text-center mt-6">
                  There is a total supply of 10,000 TES NFT Games
                  </p>
                  <p className="text-xl sm:text-3xl font-kelly text-white text-center mt-6">
                  This game can only be played by <span className='text-cream'>minting</span> and <span className='text-cream'>unlocking</span> the NFT on OpenSea. From there you <span className='text-cream'>download</span> the game itself and try to defeat Etheral!
                  </p>
                  <p className="text-xl sm:text-3xl font-kelly text-cream text-center mt-6 underline">
                  The price for 1 NFT is 0.020 $ETH + Gas Fees
                  </p>
                </div>
              </div>
  
              <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <Image
                    className="w-full h-full object-center object-cover"
                    src="/images/cd-case.png"
                    priority
                    width={800}
                    height={945}
                    alt=""
                />
                </div>
              </div>
            </div>
            </div>
        </main>
    )
  }
  