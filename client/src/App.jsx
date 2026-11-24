import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';
import ConceptsPage from './pages/ConceptsPage';
import QuizPage from './pages/QuizPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [initialChatPrompt, setInitialChatPrompt] = useState('');

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // Handler when user clicks a card prompt anywhere on the site
  const handleStartChatWithPrompt = (promptText) => {
    setInitialChatPrompt(promptText);
    setActivePage('chat');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7FAF6] text-slate-800 font-sans selection:bg-[#DDF2E1] selection:text-[#164B35]">
      {/* Top Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onStartChatWithPrompt={handleStartChatWithPrompt}
          />
        )}

        {activePage === 'chat' && (
          <ChatPage
            initialPrompt={initialChatPrompt}
            clearInitialPrompt={() => setInitialChatPrompt('')}
          />
        )}

        {activePage === 'concepts' && (
          <ConceptsPage
            onAskBioBot={handleStartChatWithPrompt}
          />
        )}

        {activePage === 'quiz' && (
          <QuizPage
            onAskBioBot={handleStartChatWithPrompt}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            setActivePage={setActivePage}
          />
        )}
      </main>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
