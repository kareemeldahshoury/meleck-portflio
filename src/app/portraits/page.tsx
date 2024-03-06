import Image from "next/image";
import Header from "../general/header";
import Footer from "../general/footer";
import ImageSlider from "../general/slider";

export default function Home() {
  const imageSources = [
    '/DSC07071.jpg',
    'lucia.jpg',
    'DSC00827 copy.jpg',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 overflow-hidden mt-5">
        <ImageSlider slides={imageSources} />
      </main>
      <Footer />
    </div>
  );
}
