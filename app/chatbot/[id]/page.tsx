import Sidebar from '@/app/components/sidebar';
import Chatbot from '@/app/components/chatbot';
import '@/app/styles/chatbot.css'

export default function Chatbots() {

    return (
      <main>
        <div className="mainpage-container">
            <Sidebar />
            <Chatbot />
        </div>
      </main>
    );
  }
