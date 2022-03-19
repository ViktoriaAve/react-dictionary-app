import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">This app has <a href="https://elated-engelbart-4dc22d.netlify.app" target="_blank" rel="noreferrer"> open-source code</a>, coded by Viktoria Averjanova</footer>
      </div>
    </div>
  );
}


