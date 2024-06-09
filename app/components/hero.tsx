'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero(props: any){

    const slides = props.data
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentSlide((prev : any) => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(interval);

    }, [slides.length])

    return (  
        <section className="hero">
            {slides.map((slide : any, index : number) => (
                <div 
                    key={index}
                    className={`slide char-${slide.name} ${index === currentSlide ? 'active' : '' }`}
                >
                    <Image src={slide.link} width={1300} height={500} alt=""></Image>

                    <div className="hero-content">
                        <h3>{slide.name}</h3>
                        <button className="buttonStyle2">Chat Now</button>
                    </div>
                </div>
            ))}
        </section>
    )
}

