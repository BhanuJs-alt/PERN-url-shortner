import { Header } from "../components/Header";
import { HeroSection } from "../components/Hero";
const Dashboard = () => {
  return (
    <div className="flex-1 bg-slate-100">
      <Header />

      <main className="p-6">
        <HeroSection />
      </main>
    </div>
  );
};
export default Dashboard;
