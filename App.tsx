
import React from 'react';
import Header from './components/Header';
import CipherUI from './components/CipherUI';
import Explanation from './components/Explanation';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 md:py-12 space-y-12">
        <section>
          <CipherUI />
        </section>

        <section className="max-w-4xl mx-auto">
          <Explanation />
        </section>
      </main>

      <footer className="py-8 border-t border-slate-800 bg-slate-900 text-slate-400">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} SecretCrypt • Built for Beginners • Works Offline</p>
          <div className="flex justify-center space-x-6 mt-4">
            <span className="flex items-center hover:text-slate-200 transition-colors">
              <i className="fab fa-windows mr-2"></i> Windows
            </span>
            <span className="flex items-center hover:text-slate-200 transition-colors">
              <i className="fab fa-apple mr-2"></i> Mac
            </span>
            <span className="flex items-center hover:text-slate-200 transition-colors">
              <i className="fab fa-linux mr-2"></i> Linux
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
