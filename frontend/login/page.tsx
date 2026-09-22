'use client';

import React, { useState } from 'react';

export default function WebAppDashboard() {
  const [prompt, setPrompt] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'consult' | 'research' | 'favorites' | 'history'>('consult');
  const [credits, setCredits] = useState(250);

  // API Call States
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const favorites = [
    { id: 1, text: 'Please summarize key terms regarding non-compete clause' },
    { id: 2, text: 'Motion to dismiss template for California civil court' }
  ];

  const history = [
    { id: 1, text: 'Research recent case law regarding breach of contract' },
    { id: 2, text: 'Send new client intake questionnaire' },
    { id: 3, text: 'Extract key financial liabilities from agreement' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() && !selectedFile) return;

    setIsLoading(true);
    setApiResponse(null);
    setErrorMessage(null);

    try {
      // Build Multipart Form Data for Python FastAPI Backend
      const formData = new FormData();
      if (prompt.trim()) {
        formData.append('prompt', prompt);
      }
      if (selectedFile) {
        formData.append('file', selectedFile);
      }

      // Reads base URL from .env.local or defaults to https://getkobraai.com
      const baseUrl = (globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL || 'https://getkobraai.com';
      
      const response = await fetch(`${baseUrl}/api/v1/endpoints/analysis`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      const data = await response.json();
      
      setApiResponse(data.result || data.message || JSON.stringify(data, null, 2));
      setCredits((prev) => Math.max(0, prev - 1));

      setPrompt('');
      setSelectedFile(null);
    } catch (err: any) {
      console.error('Kobra AI Engine Connection Error:', err);
      setErrorMessage(
        'Unable to reach Kobra AI backend engine. Please verify network connectivity or API status.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col md:flex-row font-sans selection:bg-neutral-900 selection:text-white">
      
      {/* MOBILE HEADER */}
      <header className="md:hidden flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white sticky top-0 z-20">
        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a href="/" className="text-lg font-bold tracking-tight text-black">
            kobra<span className="text-neutral-400">.ai</span>
          </a>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs font-medium px-2.5 py-1 bg-neutral-100 rounded-full text-neutral-600 border border-neutral-200">
            Credits: {credits}
          </span>
        </div>
      </header>

      {/* LEFT SIDEBAR NAVIGATION */}
      <aside 
        className={`
          fixed inset-y-0 left-0 z-30 w-72 bg-white border-r border-neutral-200 p-6 flex flex-col justify-between
          transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0
          ${isSidebarOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full md:shadow-none'}
        `}
      >
        <div className="space-y-8">
          {/* Logo & Platform Title */}
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold tracking-tight text-black">
              kobra<span className="text-neutral-400">.ai</span>
            </a>
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="md:hidden p-1 text-neutral-400 hover:text-neutral-700"
            >
              ✕
            </button>
          </div>

          {/* Primary Sidebar Actions */}
          <nav className="space-y-1">
            <button 
              onClick={() => setActiveTab('consult')}
              className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                activeTab === 'consult' 
                  ? 'bg-neutral-100 text-black font-semibold' 
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-black'
              }`}
            >
              Consult
            </button>
            <button 
              onClick={() => setActiveTab('research')}
              className={`w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-xl transition-all ${
                activeTab === 'research' 
                  ? 'bg-neutral-100 text-black font-semibold' 
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-black'
              }`}
            >
              Research recent...
            </button>
            <button 
              onClick={() => setActiveTab('history')}
              className="w-full flex items-center px-4 py-2.5 text-sm font-medium text-neutral-600 rounded-xl hover:bg-neutral-50 hover:text-black transition-all"
            >
              Send new client...
            </button>
          </nav>

          <hr className="border-neutral-200" />

          {/* Favorites List */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider px-1">
              Favorites
            </h3>
            <ul className="space-y-2">
              {favorites.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setPrompt(item.text)}
                    className="w-full text-left text-xs text-neutral-600 hover:text-black hover:bg-neutral-50 px-2 py-1.5 rounded-lg transition-colors line-clamp-2"
                  >
                    • {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* History List */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-semibold text-neutral-400 tracking-wider px-1">
              History
            </h3>
            <ul className="space-y-2">
              {history.map((item) => (
                <li key={item.id}>
                  <button 
                    onClick={() => setPrompt(item.text)}
                    className="w-full text-left text-xs text-neutral-500 hover:text-black hover:bg-neutral-50 px-2 py-1.5 rounded-lg transition-colors line-clamp-2"
                  >
                    • {item.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div className="pt-6 border-t border-neutral-200 space-y-4">
          <div className="flex justify-between items-center px-2">
            <span className="text-xs text-neutral-500 font-medium">Credits:</span>
            <span className="text-xs font-semibold bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-full border border-neutral-200">
              {credits}
            </span>
          </div>
          <a
            href="/login"
            className="w-full block text-center py-2 px-4 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-xl transition-colors border border-red-100"
          >
            Logout
          </a>
        </div>
      </aside>

      {/* OVERLAY FOR MOBILE SIDEBAR */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)} 
          className="fixed inset-0 bg-black/30 backdrop-blur-xs z-20 md:hidden"
        />
      )}

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col justify-between p-6 md:p-12 max-w-5xl mx-auto w-full">
        
        {/* Top Header Desktop */}
        <header className="hidden md:flex justify-between items-center mb-8">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-neutral-900">Engine Workspace</h2>
            <p className="text-xs text-neutral-400">Core Legal AI Document Processing</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-xs font-medium text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-full border border-neutral-200">
              Credits: {credits}
            </span>
            <a
              href="/login"
              className="text-xs text-neutral-500 hover:text-black transition-colors"
            >
              Logout
            </a>
          </div>
        </header>

        {/* CENTER PROMPT / CARD CONTAINER */}
        <div className="flex-1 flex flex-col items-center justify-center py-4">
          
          <h1 className="text-2xl md:text-3xl font-bold text-center text-neutral-800 mb-6">
            How can Kobra help?
          </h1>

          {/* LIGHT GRAY Figma Prompt Box */}
          <div className="w-full max-w-2xl bg-[#EFEFEF] rounded-3xl p-6 md:p-8 shadow-sm border border-neutral-200/80 space-y-6">
            
            {/* Dashed Drag/Upload Target */}
            <label 
              htmlFor="file-upload"
              className="w-full h-40 border-2 border-dashed border-neutral-300 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-neutral-400 hover:bg-neutral-200/50 transition-all bg-white/40"
            >
              <div className="flex flex-col items-center space-y-2 text-center p-4">
                <div className="w-10 h-10 rounded-full bg-neutral-200/70 flex items-center justify-center text-neutral-500 mb-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                {selectedFile ? (
                  <span className="text-xs font-semibold text-neutral-800 bg-white px-3 py-1.5 rounded-lg border border-neutral-200 shadow-xs">
                    {selectedFile.name}
                  </span>
                ) : (
                  <span className="text-xs text-neutral-400">
                    Upload or drag contract / document here
                  </span>
                )}
              </div>
              <input 
                id="file-upload" 
                type="file" 
                className="hidden" 
                onChange={handleFileChange}
                accept=".pdf,.docx,.txt"
              />
            </label>

            {/* Prompt Input Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask Kobra to analyze, draft a pleading, or extract key clauses..."
                  rows={3}
                  className="w-full p-4 bg-white rounded-2xl text-sm text-neutral-800 placeholder-neutral-400 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 resize-none shadow-xs"
                />
              </div>

              <div className="flex justify-between items-center">
                <span className="text-[11px] text-neutral-400">
                  Target Domain: <code className="text-neutral-600">getkobraai.com</code>
                </span>
                <button
                  type="submit"
                  disabled={isLoading || (!prompt.trim() && !selectedFile)}
                  className="px-6 py-2.5 bg-neutral-900 text-white font-medium text-xs rounded-xl hover:bg-black transition-all shadow-md active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <span className="inline-block w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>Run Analysis</span>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* RESPONSE DISPLAY AREA */}
          {errorMessage && (
            <div className="w-full max-w-2xl mt-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-2xl text-xs shadow-xs">
              <p className="font-semibold mb-1">Backend Connection Status:</p>
              <p>{errorMessage}</p>
            </div>
          )}

          {apiResponse && (
            <div className="w-full max-w-2xl mt-6 p-6 bg-white border border-neutral-200 rounded-3xl shadow-sm space-y-3">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-neutral-500">
                Analysis Output:
              </h3>
              <pre className="text-xs text-neutral-800 bg-neutral-50 p-4 rounded-xl overflow-x-auto whitespace-pre-wrap font-mono border border-neutral-100">
                {apiResponse}
              </pre>
            </div>
          )}

        </div>

        {/* Minimal Workspace Footer */}
        <footer className="pt-8 text-center text-[11px] text-neutral-400 border-t border-neutral-100">
          Kobra AI Legal Engine • Connected to getkobraai.com API
        </footer>
      </main>
    </div>
  );
}
