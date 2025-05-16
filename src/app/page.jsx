import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import NewArrivals from "@/components/NewArrivals";
import TopSelling from "@/components/TopSelling";
import HappyCustomers from "@/components/Reviews";

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Hero/>
      <Brands/>
      <NewArrivals/>
      <TopSelling/>
      <HappyCustomers/>
    </div>
  );
}
