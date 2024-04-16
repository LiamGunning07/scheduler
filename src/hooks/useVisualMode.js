import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]); 

  function transition(newMode, replace = false){
    setHistory(prev => {
      if (replace && prev.length > 0) {
        // Replace the last mode in history if replace is true and history is not empty
        return [...prev.slice(0, -1), newMode];
      } else {
        // Add the new mode to history if replace is false or history is empty
        return [...prev, newMode];
      }
    });
  }

  function back() {
    if(history.length > 1) {
    setHistory(prev => [...prev.slice(0, prev.length - 1)])
    }
  }

  return { mode: history[history.length -1], transition, back };
}