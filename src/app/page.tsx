import Image from "next/image";
import Header from "./general/header";
import Footer from "./general/footer";
import ImageSlider from "./general/slider";

export default function Home() {
  const imageSources = [
    '/44.5.jpg',
    '/DSC05114.jpg',
    'lucia.jpg',
    'mel.jpg',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 overflow-hidden mt-9">
        <ImageSlider slides={imageSources} />
      </main>
      <Footer />
    </div>
  );
}
