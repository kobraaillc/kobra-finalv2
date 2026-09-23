"use client";

import React, { useState } from "react";

export default function WebAppDashboard() {
  const [prompt, setPrompt] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      if (prompt.trim()) {
        formData.append("prompt", prompt);
      }
      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      const baseUrl =
        (globalThis as any).process?.env?.NEXT_PUBLIC_API_BASE_URL ||
        "https://getkobraai.com";

      const response = await fetch(`${baseUrl}/api/v1/endpoints/analysis`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Server returned status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="border-b border-neutral-800 pb-4">
          <h1 className="text-2xl font-bold tracking-tight">Kobra AI Engine</h1>
          <p className="text-xs text-neutral-400">Legal AI Document & Analysis Pipeline</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6 bg-neutral-900 p-6 rounded-xl border border-neutral-800">
          <div>
            <label className="block text-sm font-medium mb-2">Prompt / Query Instructions</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter analysis instructions or legal query..."
              className="w-full h-32 p-3 bg-neutral-950 border border-neutral-800 rounded-lg text-sm text-white focus:outline-none focus:border-neutral-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Upload Legal Document (PDF / DOCX)</label>
            <input
              type="file"
              onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
              className="block w-full text-sm text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-neutral-800 file:text-white hover:file:bg-neutral-700 cursor-pointer"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-white text-black font-semibold rounded-lg hover:bg-neutral-200 transition-colors disabled:opacity-50 text-sm"
          >
            {loading ? "Processing via FastAPI Backend..." : "Run Legal Analysis"}
          </button>
        </form>

        {error && (
          <div className="p-4 bg-red-950/50 border border-red-800 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {result && (
          <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl space-y-3">
            <h2 className="text-lg font-semibold text-white">Analysis Output</h2>
            <pre className="p-4 bg-neutral-950 border border-neutral-800 rounded-lg text-xs text-neutral-300 overflow-x-auto whitespace-pre-wrap">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
