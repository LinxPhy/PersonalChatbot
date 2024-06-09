import { NextRequest } from "next/server";
import Joker from '@/app/images/joker.jpg'
import Sasuke from '@/app/images/sasuke.jpg'
import Thor from '@/app/images/thor.jpg'
import '@/app/styles/homepage.css'
import Image from "next/image";
import Hero from "./components/hero";
import Innovation from "./components/innovation";
import Popular from "./components/popular";

export default function Home(request: NextRequest) {

  const Findcharacter = (request as any)?.params?.id || null

  const _list = [
    { id: 0, name: 'Thor', link: Thor.src },
    { id: 1, name: 'Sasuke', link: Sasuke.src },
    { id: 2, name: 'Joker', link: Joker.src }
  ]


  return (
    <main className="homepage">
      <Hero data={_list} />

      <h2>Popular</h2>
      <Popular />

      <h2>Innovation</h2>
      <Innovation />

      
      {/* 
        title
        footer
        
      */}

    </main>
  );
}


{/* <div className="mainpage-container">
  
      </div> */}