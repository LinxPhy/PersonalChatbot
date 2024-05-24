import '@/app/styles/chatbot.css'
import Sidebar from './components/sidebar';
import Chatbot from './components/chatbot';

export default function Home() {
  return (
    <main>
      <div className="mainpage-container">
        <Sidebar />
        <Chatbot />
      </div>
    </main>
  );
}
