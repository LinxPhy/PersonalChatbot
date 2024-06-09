import Hangman from '@/app/images/hangman.png'
import Country from '@/app/images/countries.png'
import RPS from '@/app/images/rock-paper-scissors.png'
import Trip from '@/app/images/trip.png'
import Ideas from '@/app/images/lightbulb.png'
import Meeting from '@/app/images/meeting.png'
import Image from 'next/image'

export default function Innovation() {

    return (
        <section className="innovation">

            <div className='innovation-content'>
                <div className='innovation-content-image'>
                    <Image src={Hangman} width={48} height={48} alt=''></Image>
                </div>

                <div className='innovation-content-main'>
                    <h5>Hangman </h5>
                </div>
            </div>

            <div className='innovation-content'>
                <div className='innovation-content-image'>
                    <Image src={Country} width={48} height={48} alt=''></Image>
                </div>

                <div className='innovation-content-main'>
                    <h5>Guess The Country </h5>
                </div>
            </div>

            <div className='innovation-content'>
                <div className='innovation-content-image'>
                    <Image src={RPS} width={48} height={48} alt=''></Image>
                </div>

                <div className='innovation-content-main'>
                    <h5>Rock Paper Scissors </h5>
                </div>
            </div>

            <div className='innovation-content'>
                <div className='innovation-content-image'>
                    <Image src={Trip} width={48} height={48} alt=''></Image>
                </div>

                <div className='innovation-content-main'>
                    <h5>Plan a Trip </h5>
                </div>
            </div>

            <div className='innovation-content'>
                <div className='innovation-content-image'>
                    <Image src={Ideas} width={48} height={48} alt=''></Image>
                </div>

                <div className='innovation-content-main'>
                    <h5>Brainstorm ideas </h5>
                </div>
            </div>

            <div className='innovation-content'>
                <div className='innovation-content-image'>
                    <Image src={Meeting} width={48} height={48} alt=''></Image>
                </div>

                <div className='innovation-content-main'>
                    <h5>Interviewing Practice </h5>
                </div>
            </div>

        </section>
    )

}

