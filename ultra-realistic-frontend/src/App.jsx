import { useState, useRef, useEffect } from 'react';
import Scene from './components/Scene';
import UIOverlay from './components/UIOverlay';

export default function App() {
  const [activeObject, setActiveObject] = useState(null);
  const [discoveredCount, setDiscoveredCount] = useState(0);
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    // Backend API hit (Now hitting the Express Backend)
    fetch('http://localhost:5000/api/visit', { method: 'POST' }).catch((e) => {
      console.log("Could not reach backend API at port 5000.");
    });
  }, []);

  const handleStart = () => {
    setStarted(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(e => console.error("Audio blocked", e));
    }
  };

  const handleObjectClick = (objName) => {
    setActiveObject(objName);
    setDiscoveredCount(prev => prev + 1);
  };

  const closeOverlay = () => {
    setActiveObject(null);
  };

  return (
    <main className="w-screen h-screen bg-black relative">
      <audio ref={audioRef} loop src="/assets/audio/background_song.mp3" />
      
      {!started && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-md">
          <h1 className="text-4xl text-amber-500 font-serif mb-4">A Classroom of Memories</h1>
          <p className="text-white mb-8">An ultra-realistic 3D Teacher's Day tribute</p>
          <button 
            onClick={handleStart}
            className="px-8 py-3 bg-amber-600 hover:bg-amber-500 text-white rounded-full font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
          >
            Enter Classroom
          </button>
        </div>
      )}

      {started && (
        <div className="absolute inset-0 w-full h-full">
          <Scene onObjectClick={handleObjectClick} activeObject={activeObject} />
          
          {activeObject && (
            <UIOverlay 
              activeObject={activeObject} 
              onClose={closeOverlay} 
            />
          )}

          {discoveredCount >= 4 && !activeObject && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 z-40 text-center pointer-events-none fade-in w-full">
              <h2 className="text-5xl font-serif text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] bg-black/40 p-4 rounded-lg inline-block">Thank You, Gayathri Ma'am</h2>
              <p className="text-3xl text-amber-400 mt-4 font-serif italic drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)] bg-black/40 p-2 rounded inline-block">Happy Teacher's Day ❤️</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
