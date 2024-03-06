import Image from "next/image";
import Header from "../general/header"
import Footer from "../general/footer"
import ImageSlider from "../general/slider";


export default function Home() {
  const imageSources = [
    '/44.5.jpg',
    '/DSC05114.jpg',
    'lucia.jpg',
    'mel.jpg',
    // ...add as many images as you like
  ];
  return (
    <main className="flex flex-col h-screen bg-white">
      <Header></Header>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        <div className="w-3/5 h-850 flex flex-col justify-center items-center text-center mt-20">
          <img src={'/DSC00889.JPG'} style={{ width: '35%', marginBottom: '20px'}}></img>
        <h1 className="text-4xl font-average text-customgreen mb-4">Meleck Eldahshoury</h1>
        <p className="font-average text-customgreen text-xl">Hello! My name is Meleck Eldahshoury, I’m from Minneapolis, Minnesota, but I am currently based in Ann Arbor,
          Michigan. I currently work as an Assistant Photo Editor for the Michigan Daily. Reach out to me at <a href="mailto:melda@umich.edu" style={{ color: 'blue' }}>melda@umich.edu </a>   
           with any inquiries, collaborations, or questions!</p>
        </div>
        <Footer></Footer>
        </div>

    </main>
  );
}
