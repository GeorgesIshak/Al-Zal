
'use client'; // 👈 Add this
import NewHero from "@/components/NewHero";
import Events from "@/components/Events";
import WelcomeSection from "@/components/WelcomeSection";
import OurStory from "@/components/OurStory";
import WhatsOn from "@/components/WhatsOn";
import Footer from "@/components/Footer";
import TypoAnim from "@/components/TypoAnim";
import ScrollPanels from "@/components/ScrollPanels";
import ScrollImages from "@/components/ScrollImages";
import Preloader from "@/components/Preloader";
import RestaurantCarousel from "@/components/RestaurantCarousel";
import { useState } from "react";
import Column from "@/components/Column";
import TypoAnimation from "@/components/TypoAnimation";
import ParagraphLines from "@/components/ParagraphLines";
import FoodCategoriesCarousel from "@/components/FoodCategoriesCarousel";
import { Scroll } from "lucide-react";
import ScrollImageGallery from "@/components/ScrollImageGallery";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Preloader onFinish={() => setIsLoading(false)} />}
      {!isLoading && (
        <>
          <NewHero />
                                                            <TypoAnim />
                                                            <FoodCategoriesCarousel />


   <ScrollImages />
      <Column />
   <TypoAnimation />
   <RestaurantCarousel />
   <ScrollImageGallery />
   <RestaurantCarousel />
        </>
      )}
    </>
  );
}

