export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="w-full h-[663px] bg-[url('https://res.cloudinary.com/dsjxx976j/image/upload/v1747216261/Rectangle_2_hzavp6.png')] bg-cover bg-no-repeat flex items-center justify-between px-24 mt-[24px]">
        <div className="max-w-xl">
          <h1 className="text-black text-6xl font-bold leading-tight font-['Integral CF']">
            FIND CLOTHES
            <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className="mt-6 text-base text-black/60 leading-5">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="mt-6 w-56 h-12 rounded-full bg-black text-white text-base font-medium">
            Shop Now
          </button>

          <div className="mt-12 flex space-x-16">
            <div>
              <p className="text-xl font-bold">200+</p>
              <p className="text-sm text-black/60">International Brands</p>
            </div>
            <div>
              <p className="text-xl font-bold">2,000+</p>
              <p className="text-sm text-black/60">High-Quality Products</p>
            </div>
            <div>
              <p className="text-xl font-bold">30,000+</p>
              <p className="text-sm text-black/60">Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
