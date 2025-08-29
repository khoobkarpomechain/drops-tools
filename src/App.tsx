import { useState } from "react";
import WelcomePage from "./components/ui/WelcomePage";
import ResultPage from "./components/ui/ResultPage";

function App() {
  const [showResult, showResultPage] = useState(false);

  return (
    <>
      <h1>Drops</h1>
      <p>Who pays for this?</p>
      {showResult ? <ResultPage /> : <WelcomePage />}
    </>
  );
}

export default App;
