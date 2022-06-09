import Image from 'next/image'

export default function Details() {
    return (
        <main>
          <div id="artist" className="bg-[url('/images/details-bg.png')]">
            <div className="grid max-w-2xl mx-auto pt-16 pb-24 px-4 sm:pt-24 sm:pb-32 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
              <div className="lg:self-end">
                <div className="mt-16">
                  <h1 className="text-xl sm:text-3xl font-helveticaLight text-white text-center">
                  I STARTED SHOOTING FOR THE SAKE OF
                  TAKING AMAZING SHOTS OF WHAT I LOVE
                  FOR THE SOLE PURPOSE OF SHARING
                  THOSE SHOTS WITH THOSE WHO SEE
                  WHAT I SEE IN THEM.
                  </h1>
                  <h1 className="text-xl sm:text-3xl font-helveticaLight text-white text-center">
                  <br/>IN KEEPING WITH THAT SENTIMENT, THIS
                  COLLECTION WILL BE A <span className=''>FREEMINT</span>
                  </h1>
                </div>
              </div>
  
              <div className="mt-10 lg:mt-0 lg:col-start-2 lg:row-span-2 lg:self-center">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <Image
                    className="w-full h-full object-center object-cover"
                    src="/images/terris.png"
                    priority
                    width={855}
                    height={651}
                    alt=""
                />
                </div>
              </div>
            </div>
            </div>
        </main>
    )
  }
  