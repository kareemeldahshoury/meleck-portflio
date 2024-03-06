import Image from "next/image";
import Header from "../general/header"
import Footer from "../general/footer"
import Gallery from './gallery';

export default function Home() {
const images = [
    { src: '/mel.jpg', alt: 'Description of image 2' },
    { src: '/44.5.jpg', alt: 'Description of image 1' },
    { src: '/lucia.jpg', alt: 'Description of image 2' },
    { src: '/menay6.jpg', alt: 'Description of image 2' },
    { src: '/DSC00889.JPG', alt: 'Description of image 2' },
    { src: '/DSC05114.JPG', alt: 'Description of image 2' },
  ];

  return (
    <div className="bg-white">
      <Header></Header>
      <Gallery images={images} />
      <Footer></Footer>
    </div>
  );
};


