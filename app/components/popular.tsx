'use client'

import Image from "next/image";
import Products from "@/app/_files/products"
import Smiley from "@/app/images/smiley.png"
import { useRef } from "react";

export default function Popular() {

    const ref = useRef<HTMLDivElement>(null)
    const wrapper = useRef<HTMLDivElement>(null)

    const scrollX = (amount: number) => {

        const value = (wrapper.current?.clientWidth) as number * amount || 1000

        if (ref && ref.current) {
            ref.current.scrollLeft += value;
        }
    }

    return (
        <section className="popular" ref={wrapper}>
            <div className="popular-products">
                <div className="popular-product">
                    <Image src={Smiley} width={100} height={125} alt=""></Image>
                    <div className="popular-product-main">
                        <h3>Smiley</h3>
                        <p>smile</p>
                    </div>
                </div>
                {Products.map((product: any, index: number) => (
                    <div key={index} className="popular-product">

                        <Image src={product.image} width={100} height={125} alt=""></Image>

                        <div className="popular-product-main">
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* <div className= {`left-button nav-buttons`} onClick={() => scrollX(-1)}>
                <span className="material-symbols-rounded arrow">
                    chevron_left
                </span>
            </div>

            <div className="right-button nav-buttons" onClick={() => scrollX(1)}>
                <span className="material-symbols-rounded arrow">
                    chevron_right
                </span>
            </div> */}

        </section>
    )

}