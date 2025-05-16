export default function Footer() {
  return (
    <div className="flex justify-center w-full py-8 sm:py-16 bg-[#F0F0F0] px-4 lg:px-0">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          <div className="col-span-2">
            <div className="flex flex-col gap-4 sm:gap-6">
              <h2 className="text-2xl sm:text-[33.455px] font-[700] font-[Integral CF]">
                SHOP.CO
              </h2>
              <p className="text-sm lg:text-[14px] text-[rgba(0,0,0,0.6)] leading-[22px] max-w-[248px]">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
              <div className="flex gap-4">
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-black font-medium tracking-[3px] uppercase text-sm">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-[rgba(0,0,0,0.60)] text-sm">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-black font-medium uppercase text-sm">
              Help
            </h3>
            <ul className="flex flex-col gap-3 text-[rgba(0,0,0,0.60)] text-sm">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-black font-medium uppercase text-sm">
              FAQ
            </h3>
            <ul className="flex flex-col gap-3 text-[rgba(0,0,0,0.60)] text-sm">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            <h3 className="text-black font-medium uppercase text-sm">
              Resources
            </h3>
            <ul className="flex flex-col gap-3 text-[rgba(0,0,0,0.60)] text-sm">
              <li>Free eBooks</li>
              <li>Development</li>
              <li>Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
