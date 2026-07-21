import { useEffect, useState } from "react";
import api from "../api/axios";

export const LinkPage = () => {
  const [urls, setUrls] = useState([]);
  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await api.get("/urls");
        const data = await response.data;
        setUrls(data);
        console.log("Fetched URLs:", data);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchUrls();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Your Shortened URLs</h1>
      <ul className="space-y-2">
        {urls.map((url: any) => (
          <li key={url.id} className="border p-2">
            <a
              href={url.originalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {url.originalUrl}
            </a>
            <a
              href={`http://localhost:5000/${url.shortCode}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-500 hover:underline"
            >
              {url.shortCode}
            </a>
            <span className="block text-sm text-gray-500">
              CreatedAt: {url.createdAt}
            </span>
            <span className="block text-sm text-gray-500">
              Click Count: {url.clickCount}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
