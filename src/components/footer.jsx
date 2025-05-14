export default function Footer() {
  return (
    <div className="flex justify-center w-full py-16 bg-[#F0F0F0]">
      <div className="w-full max-w-[1240px] mx-auto">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex flex-col gap-6">
              <h2 className="text-[33.455px] font-[700] font-[Integral CF]">
                SHOP.CO
              </h2>
              <p className="text-[14px] text-[rgba(0,0,0,0.6)] leading-[22px] max-w-[248px]">
                We have clothes that suits your style and which you're proud to
                wear. From women to men
              </p>
              <div className="flex gap-4">
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-black font-medium tracking-[3px] uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-[rgba(0,0,0,0.60)]">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-black font-medium uppercase">
              Help
            </h3>
            <ul className="flex flex-col gap-3 text-[rgba(0,0,0,0.60)]">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h3 className="text-black font-medium uppercase">
              FAQ
            </h3>
            <ul className="flex flex-col gap-3 text-[rgba(0,0,0,0.60)]">
              <li>Account</li>
              <li>Manage Deliveries</li>
              <li>Orders</li>
              <li>Payments</li>
            </ul>
          </div>


          <div className="flex flex-col gap-6">
            <h3 className="text-black font-medium uppercase">
              Resources
            </h3>
            <ul className="flex flex-col gap-3 text-[rgba(0,0,0,0.60)]">
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
