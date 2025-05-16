'use client';

export default function HappyCustomers() {
  return (
    <div className="mt-20 mb-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12">
        OUR HAPPY CUSTOMERS
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Review 1 */}
        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white space-y-4">
          <div className="text-yellow-500 text-xl">★★★★★</div>
          <div className="flex items-center space-x-2 font-bold text-black">
            <span>Sarah M.</span>
            <span className="text-green-500 text-lg">✅</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            “I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”
          </p>
        </div>

        {/* Review 2 */}
        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white space-y-4">
          <div className="text-yellow-500 text-xl">★★★★★</div>
          <div className="flex items-center space-x-2 font-bold text-black">
            <span>Alex K.</span>
            <span className="text-green-500 text-lg">✅</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            “Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”
          </p>
        </div>

        {/* Review 3 */}
        <div className="rounded-2xl border border-gray-200 p-6 shadow-sm bg-white space-y-4">
          <div className="text-yellow-500 text-xl">★★★★★</div>
          <div className="flex items-center space-x-2 font-bold text-black">
            <span>James L.</span>
            <span className="text-green-500 text-lg">✅</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            “As someone who’s always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”
          </p>
        </div>
      </div>
    </div>
  );
}
