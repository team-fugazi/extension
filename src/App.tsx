// import { useState } from 'react'

// Local Components
import {
  HumanGenerated,
  LikelyAiGenerated,
  AiGenerated,
} from "./components/Marker";
import { Popup } from "./components/Popup";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Popup />

      <div className="flex flex-row space-x-2 mt-4">
        <HumanGenerated />
        <LikelyAiGenerated />
        <AiGenerated />
      </div>
    </>
  );
}

export default App;
