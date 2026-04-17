import Allfriend from "@/Components/Allfriend";
import Banner from "@/Components/Banner";
import Bannercard from "@/Components/Bannercard";
import Footer from "@/Components/Footer";
import Loading from "@/Components/loading";
import { Suspense } from "react";



export default function Home() {
  return(
    <div >
      <Banner></Banner>
      <Bannercard></Bannercard>
      <Suspense fallback={<Loading/>}>
        <Allfriend />
        
      </Suspense>
      <Footer></Footer>
    </div>
  );
}
