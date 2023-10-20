import Image from "next/image";
import Header from "./Header/page";
import Banner from "./Header/components/Banner";
import Programs from "./Header/components/Programs";
import Values from "./Header/components/Values";
import GetStarted from "./Header/components/GetStarted";
import Footer from "./Header/components/Footer";
import Try from "./Header/components/Try";

export default function Home() {
  return (
    <div>

    <div className="bg-gradient-to-r from-[#420a6c] to-[#41056e] sm:via-[#41056e] sm:to-[#e1a91d] from-50% via-70% to-100% min-h-fit">
      <Header />
      <Banner></Banner>
    </div>
      <Programs/>
      <Values/>
      <Try/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}
