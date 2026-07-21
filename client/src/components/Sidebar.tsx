import {
  LayoutDashboard,
  Link2Icon,
  ChartColumn,
  Settings,
} from "lucide-react";
import { Link } from "react-router-dom";
export function Sidebar() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-white text-slate-800 p-6">
        <h1 className="text-2xl font-bold mb-10">ATOM URL</h1>

        <nav className="space-y-3">
          <a
            href="#"
            className="block px-4 py-3 rounded-lg hover:bg-slate-300 transition"
          >
            <LayoutDashboard className="inline-block mr-3" />
            Dashboard
          </a>

          <Link
            to="/links"
            className="block px-4 py-3 rounded-lg hover:bg-slate-300 transition"
          >
            <ChartColumn className="inline-block mr-3" />
            Links
          </Link>

          <a
            href="#"
            className="block px-4 py-3 rounded-lg hover:bg-slate-300 transition"
          >
            <Link2Icon className="inline-block mr-3" />
            Analytics
          </a>
          <a
            href="#"
            className="block px-4 py-3 rounded-lg hover:bg-slate-300 transition"
          >
            <Settings className="inline-block mr-3" />
            Settings
          </a>
        </nav>
      </aside>
    </div>
  );
}
