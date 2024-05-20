import Featured from "./components/featured";


export default function Home() {
  return (
    <main>

      <section>
        <h1>Your Personal Chatbot</h1>
        <p>Explore, believe, enjoy.</p>
      </section>

      <Featured />
      

      <section>
        <div className="chatbot-container">

        </div>
      </section>
    </main>
  );
}
