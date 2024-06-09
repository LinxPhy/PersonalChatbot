import Search from '@/app/icons/search.svg'
import Add from '@/app/icons/add.svg'
import AI from '@/app/images/ai.png'
import Smiley from '@/app/images/smiley.png'
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {

    return (
        <div className="sidebar-container">
            <div className="sidebar-title">
                <div className='sidebar-title-area'>
                    <span className='sidebar-header'>Chats</span>

                    <div className='sidebar-add-icon'>
                        <Image src={Add} alt='sidebar-add-icon'></Image>
                    </div>
                </div>

                <div className="sidebar-search-area">
                    <Image src={Search} alt='sidebar-search-icon'></Image>
                    <input
                        type="search"
                        className="searchStyle1"
                        placeholder="Search..."
                    >
                    </input>
                </div>
            </div>

            <div className="sidebar-main">

                {/* /char?chatbot=0 */}
                <Link href={'/chatbot/0'}>
                    <div className='sidebar-main-item'>
                        <Image src={AI} alt='' priority></Image>

                        <div className='sidebar-main-item-content'>
                            <h5>Robot AI</h5>
                            <p> <span>You: Your First Message...</span> </p>
                        </div>
                    </div>
                </Link>

                <Link href={'/chatbot/1'}>
                    <div className='sidebar-main-item'>
                        <Image src={Smiley} alt='' priority></Image>

                        <div className='sidebar-main-item-content'>
                            <h5>Smiley AI</h5>
                            <p> <span>You: Your First Message...</span> </p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )

}

