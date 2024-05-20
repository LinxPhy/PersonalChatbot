import Link from "next/link"

function Header() {

    return (
        <header>
            <nav>
                <div className="title">
                    <span>
                        <Link href={'/'}>YourPersonalChatbot</Link>
                    </span>
                </div>

                <div className="header-body">
                    <ul>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/chatbots'}>Chatbots</Link>
                        </li>
                        <li>
                            <Link href={'/premium'}>Premium</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <Link href={'/'}>
                        <button className="buttonStyle1">
                            Sign in
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    )

}

export default Header