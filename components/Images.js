import Image from 'next/image'

export default function Images() {
    return (
      <div>
        <main>
          <section
            aria-labelledby="social-impact-heading"
            className="max-w-7xl mx-auto pt-24 pb-24 px-4 sm:pt-32 sm:px-6 lg:px-8"
          >
            <div id="collection" className="relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className='hidden md:flex'>
                    <Image
                      className="w-full h-full object-center object-cover"
                      src="/images/four-image.png"
                      priority
                      width={1218}
                      height={696}
                      alt=""
                    />
                  </div>
                  <div className='flex md:hidden'>
                    <Image
                      className="w-full object-center"
                      src="/images/four-image-mobile.png"
                      priority
                      width={1218}
                      height={2844}
                      alt=""
                    />
                  </div>


                </div>
              <div className="relative bg-black bg-opacity-60 py-60 px-6 sm:py-40 sm:px-12 lg:px-16">
                <div className="relative mx-auto flex flex-col items-center text-center">
                  <p className="my-28 text-2xl sm:text-4xl text-white font-helveticaLight">
                  "FOR ME IT'S ALWAYS BEEN ABOUT THE LOVE FOR THE<br/>
                  ART I SHOOT, THE UNIQUENESS OF THE ENVIRONMENT<br/>
                  IT SITS, AND HIGHLIGHTING IT IN A WAY THAT MAKES IT<br/>
                  MY OWN INDIVIDUAL EXPRESSION"
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }