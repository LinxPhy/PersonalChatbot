import Image from "next/image"
import Robot from '@/app/images/ai.png'
import SpiderMan from '@/app/images/people.png'
import Smiley from '@/app/images/smiley.png'
import Plus from '@/app/images/plus.png'

export default function Featured() {

    return (
        <section>
            <div className="featured-container">
                <div className="featured-product">
                    <Image src={Robot} alt="" width={200} height={200}></Image>
                </div>
                <div className="featured-product">
                    <Image src={SpiderMan} alt="" width={200} height={200}></Image>
                </div>
                <div className="featured-product">
                    <Image src={Smiley} alt="" width={200} height={200}></Image>
                </div>
                <div className="featured-product">
                    <Image src={Plus} alt="" width={100} height={100}></Image>
                </div>
            </div>
        </section>
    )


}