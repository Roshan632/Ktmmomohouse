// import Navbar from "@/components/layout/Navbar";
// import Hero from "@/components/home/Hero";
// import Categories from "@/components/home/Categories";
// import FeaturedItems from "@/components/home/FeaturedItems";
// import WhyChooseUs from "@/components/home/WhyChooseUs";
// import Reviews from "@/components/home/Reviews";

// export default function Home() {
//   return (
//     <>
//       <Navbar />

//       <main>
//         <Hero />
//         <Categories />
//         <FeaturedItems/>
//         {/* <WhyChooseUs/> */}
//         <Reviews/>
//       </main>
//     </>
//   );
// }


import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedItems from "@/components/home/FeaturedItems";
import Reviews from "@/components/home/Reviews";
import LocationSection from "@/components/home/LocationSection";
import WelcomeSection from "@/components/home/WelcomeSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedItems />
      {/* <WhyChooseUs /> */}
      <WelcomeSection/>
      <Reviews />
      <LocationSection/>
    </main>
  );
}