import Image from 'next/image'

export default function Images() {
    return (
      <div>
        <main>
          <section
            aria-labelledby="social-impact-heading"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div id="collection" className="relative overflow-hidden">
              <div className="relative bg-black bg-opacity-60 py-2 px-6 sm:px-12 lg:px-16">
                <div className="relative mx-auto flex flex-col items-center text-center">
                  <h1 className='text-cream font-kelly text-6xl mb-12'>Roadmap</h1>
                  <Image
                      className="w-full object-center"
                      src="/images/roadmap-tes-nft.jpeg"
                      priority
                      width={1280}
                      height={720}
                      alt=""
                    />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }