export default function UIOverlay({ activeObject, onClose }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm fade-in p-4">
      <button 
        onClick={onClose}
        className="absolute top-8 right-8 text-white text-5xl hover:text-amber-500 transition-colors drop-shadow-lg cursor-pointer"
      >
        ✕
      </button>

      <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-[0_0_50px_rgba(0,0,0,1)]">
        {activeObject === 'letter' && (
          <div className="bg-[#FEF3C7] text-[#0F172A] p-16 rounded-lg font-serif">
            <h2 className="text-4xl text-center text-[#78350F] mb-6">Dear Gayathri Ma’am,</h2>
            <h3 className="text-3xl text-center text-[#78350F] mb-8 font-bold">Happy Teacher’s Day! ❤️</h3>
            <div className="space-y-6 text-xl leading-relaxed">
              <p>A teacher does much more than teach lessons from a book. A true teacher inspires us to dream, encourages us when we doubt ourselves, and gives us the confidence to keep moving forward.</p>
              <p>Thank you for your patience, your kindness, your guidance and for always encouraging us to become better versions of ourselves.</p>
              <p>The lessons you teach us will remain with us far beyond the classroom. Every word of encouragement, every correction, every smile and every moment of support becomes a part of our journey.</p>
              <p>You have not simply taught us subjects. You have helped us learn how to believe in ourselves.</p>
              <p className="font-bold text-2xl">Thank you for being our teacher, our guide, our mentor and our inspiration.</p>
            </div>
            <div className="mt-16 text-right">
              <p className="text-xl">With respect, gratitude and heartfelt wishes,</p>
              <p className="text-4xl text-[#831843] mt-4 font-[cursive]">Nur Mohammad Mandal<br/>7th</p>
            </div>
            <p className="text-center italic text-[#78350F] mt-16 text-xl">🌸 Happy Teacher’s Day, Gayathri Ma’am! 🌸</p>
          </div>
        )}

        {activeObject === 'book' && (
          <div className="bg-[#78350F] p-4 rounded-lg flex shadow-[inset_0_0_30px_rgba(0,0,0,0.9)] text-black min-h-[600px]">
            <div className="flex w-full bg-[#fdfaf3] rounded shadow-inner">
              <div className="flex-1 p-10 border-r-2 border-gray-300 flex flex-col justify-center bg-gradient-to-r from-gray-50 to-white">
                <h3 className="text-3xl font-serif text-[#0F172A] mb-4">Chapter 1: Knowledge</h3>
                <p className="font-serif italic mb-12 text-xl text-gray-700">“Every lesson is a step toward a brighter future.”</p>
                <h3 className="text-3xl font-serif text-[#0F172A] mb-4">Chapter 2: Courage</h3>
                <p className="font-serif italic text-xl text-gray-700">“A good teacher teaches us not to fear mistakes.”</p>
              </div>
              <div className="flex-1 p-10 flex flex-col justify-center bg-gradient-to-l from-gray-50 to-white">
                <h3 className="text-3xl font-serif text-[#0F172A] mb-4">Chapter 3: Kindness</h3>
                <p className="font-serif italic mb-12 text-xl text-gray-700">“The greatest lessons are sometimes taught without words.”</p>
                <h3 className="text-3xl font-serif text-[#0F172A] mb-4">Chapter 4: Dreams</h3>
                <p className="font-serif italic mb-16 text-xl text-gray-700">“Teachers plant seeds of knowledge that grow forever in our hearts.”</p>
                <p className="text-center font-bold text-[#831843] mt-auto text-2xl">Dedicated to Gayathri Ma’am ❤️</p>
              </div>
            </div>
          </div>
        )}

        {activeObject === 'report' && (
          <div className="bg-white text-black p-16 rounded-lg border-8 border-gray-300 font-mono relative shadow-2xl">
            <h2 className="text-4xl text-center border-b-4 border-black pb-4 mb-10 font-bold">SPECIAL TEACHER APPRECIATION REPORT</h2>
            <div className="mb-10 text-2xl space-y-2">
              <p><strong>Teacher:</strong> Gayathri Ma’am</p>
              <p><strong>Class:</strong> 7th</p>
              <p><strong>Subject:</strong> Inspiring Young Minds</p>
            </div>
            <table className="w-full mb-10 text-2xl border-collapse">
              <tbody>
                <tr className="border-b-2"><td className="py-4">Teaching</td><td className="py-4 text-right">⭐ A+</td></tr>
                <tr className="border-b-2"><td className="py-4">Patience</td><td className="py-4 text-right">⭐ A+</td></tr>
                <tr className="border-b-2"><td className="py-4">Kindness</td><td className="py-4 text-right">⭐ A+</td></tr>
                <tr className="border-b-2"><td className="py-4">Guidance</td><td className="py-4 text-right">⭐ A+</td></tr>
                <tr className="border-b-2"><td className="py-4">Motivation</td><td className="py-4 text-right">⭐ A+</td></tr>
                <tr className="border-b-2"><td className="py-4">Inspiration</td><td className="py-4 text-right">⭐ A+</td></tr>
              </tbody>
            </table>
            <div className="text-center">
              <h3 className="text-4xl font-bold">OVERALL GRADE: A+</h3>
              <p className="mt-10 font-serif italic font-bold text-3xl">“Promoted to Forever in Our Hearts.” ❤️</p>
            </div>
            <div className="absolute bottom-16 right-12 text-red-600 border-8 border-red-600 p-4 font-bold text-3xl -rotate-12 opacity-80 rounded-lg drop-shadow-md">
              OUTSTANDING TEACHER
            </div>
          </div>
        )}

        {activeObject === 'folder' && (
          <div className="bg-[#c19a6b] p-10 rounded-lg shadow-2xl text-center border-4 border-[#8d6e63]">
            <h2 className="text-5xl font-serif text-[#3e2723] mb-10 font-bold">CLASS 7 — MEMORIES</h2>
            <div className="bg-white p-6 pb-20 shadow-2xl max-w-3xl mx-auto -rotate-2 relative">
              <img src="/assets/teacher-day-photo.png" alt="Class Memory" className="w-full h-auto shadow-inner" />
            </div>
            <div className="mt-12 font-[cursive] text-4xl text-[#3e2723]">
              <p>One classroom. Many memories. One teacher who made them meaningful.</p>
              <p className="mt-6 font-bold text-[#2e1d1a]">“These are the moments we will remember.”</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
