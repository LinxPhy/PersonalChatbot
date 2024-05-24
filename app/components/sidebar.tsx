import Search from '@/app/icons/search.svg'
import Add from '@/app/icons/add.svg'
import Image from 'next/image'

export default function Sidebar() {

    return (
        <div className="sidebar-container">
            <div className="sidebar-title">
                <div className='sidebar-title-area'>
                    <span>Chats</span>
                    
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

            </div>
        </div>
    )

}

