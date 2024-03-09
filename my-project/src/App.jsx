import { useState, useEffect } from 'react';
import logoui from './assets/logoui.png';
import logoteknik from './assets/logoteknik.png';

export const TextRevealTW = () => {
  const text = "Selamat Datang di Universitas Indonesia";

  return (
    <h1 className="overflow-hidden pb-3 text-4xl font-bold leading-6 text-white font-medium">
      {text && text.match(/./gu) && text.match(/./gu).map((char, index) => (
        <span
          className="animate-text-reveal inline-block"
          key={`${char}-${index}`}
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
};


function App() {
  const [count, setCount] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    // Mengambil teks dari elemen h1 dengan id 'text' saat komponen dimount
    const textElement = document.getElementById('text');
    if (textElement) {
      setDisplayText(textElement.textContent);
    }
  }, []); // Efek hanya dijalankan sekali setelah komponen dimount

  return (
    <>
      <header className="bg-gradient-to-r from-sky-900 to-sky-800 py-4">
        <div className="container mx-auto flex justify-between items-center relative">
          <div className="flex items-center group transition ease-in-out duration-300 ">
            <div className="group-hover:scale-[100%] duration-300 mobsm:scale-75 group-hover:translate-y-[0px] sm:scale-[100%]">
              <img src={logoui} alt="Logo UI" className="h-10 w-30 mt-1 mr-1  overflow-hidden delay-100  group-hover:translate-x-[143px] group-hover:italic duration-1000 cursor-pointer" />
            </div>
            <h1 className="text-white pt-16 font-semibold group-hover:opacity-100 duration-700 delay-100 text-2xl absolute bottom-[4px] opacity-0 cursor-pointer">MPKT FG6 |</h1>
          </div>
          <nav>
            <ul className="flex space-x-4 pr-5">
              {/* Add your navigation links here if needed */}
            </ul>
          </nav>
        </div>
      </header>
      <div className='h-[89vh] relative'>
        <img src='https://cdn.medcom.id/dynamic/content/2023/03/01/1542553/kisfjTNprn.jpeg?w=1024' className='w-full h-full object-cover blur-sm' />
          <div className='absolute inset-y-80  w-full text-center  text-black-600 font-bold shadow-sm  '>
            {/* Menggunakan komponen TextRevealTW */}
            <TextRevealTW />
            {/* Menampilkan teks dari state */}
            <h1 className='text-xl'>{displayText}</h1>
          </div>
      </div>
      <p className="read-the-docs"></p>
    </>
  );
}

export default App;
