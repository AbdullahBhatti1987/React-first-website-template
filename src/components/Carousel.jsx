const Carousel = () =>{
    return (
        <section className="text-gray-600 body-font w-10/12 mx-auto">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-2xl mb-4 font-medium text-red-500 italic">Fashion Sale</h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Minimal Menz Style
              {/* <br className="hidden lg:inline-block" /> */}
              
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto porro laudantium eveniet asperiores, hic maiores, odio enim fugit dolorum eaque unde blanditiis quidem molestiae deleniti dolore sed corporis tempora distinctio?
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                SHOP NOW
              </button>
             
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="../../images/carousel/h1_hero1.jpg"
            />
          </div>
        </div>
      </section>
      
    )
}

export default Carousel;