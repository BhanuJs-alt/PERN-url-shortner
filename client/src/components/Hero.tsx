import { Link, ChartColumn, TrendingUp, Globe } from "lucide-react";
import { useState } from "react";
import api from "../api/axios";
export function HeroSection() {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value);
  }
  async function handleClick() {
    const response = await api.post("/urls", {
      originalUrl: inputValue,
    });
    console.log(response.data);
    setInputValue("");
  }
  return (
    <section className="bg-white rounded-2xl shadow-sm border p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-slate-800">
            Create Your Short Links
          </h1>

          <div className="mt-8 flex gap-4">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your long URL here e.g. https://www.example.com/very/long/url"
              className="flex-1 rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />

            <button
              onClick={handleClick}
              className="bg-blue-600 text-white px-8 rounded-xl hover:bg-blue-700 transition"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
      <br />
      {/* Right Card */}
      <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">
        <h2 className="text-2xl font-bold text-slate-800">
          Make your long URLs short and shareable
        </h2>

        <p className="mt-3 text-gray-600">
          <Link className="inline-block mr-3" />
          Organize your links and make them easy to share.
        </p>

        <div className="mt-6 space-y-3">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <TrendingUp className="inline-block mr-3" />
            Get insights into your link performance
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm">
            <ChartColumn className="inline-block mr-3" />
            Track clicks, conversions, and engagement
          </div>

          <div className="bg-white rounded-lg p-3 shadow-sm">
            <Globe className="inline-block mr-3" />
            Analyze your audience and optimize your marketing strategies
          </div>
        </div>
      </div>
    </section>
  );
}
