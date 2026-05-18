import Banner from "@/components/Banner";
import FeaturedDestinations from "@/components/FeaturedDestinations";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <FeaturedDestinations></FeaturedDestinations>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
}
