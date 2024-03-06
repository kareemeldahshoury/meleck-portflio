import Image from "next/image";
import Header from "../general/header"
import Footer from "../general/footer"
import Gallery from './gallery';

export default function Home() {
const images = [
    { src: '', alt: 'Description of image 1' },
  ];

  return (
    <div className="bg-white">
      <Header></Header>
      <Gallery images={images} />
      <Footer></Footer>
    </div>
  );
};


