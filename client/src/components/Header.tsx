import { User } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between bg-white px-8 py-4 shadow-sm border-b">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Welcome back!</h1>
      </div>
      {/* User */}
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
          <User size={20} />
        </div>

        <div>
          <p className="font-semibold text-slate-700">Moon Knight</p>
          <p className="text-sm text-gray-500">Student</p>
        </div>
      </div>
    </header>
  );
}
