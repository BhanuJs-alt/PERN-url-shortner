import { Header } from "../components/Header";
import { HeroSection } from "../components/Hero";
import { Sidebar } from "../components/Sidebar";
const Dashboard = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-slate-100">
        <Header />
        <main className="p-6">
          <HeroSection />
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
