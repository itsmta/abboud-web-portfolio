import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Persistent Header */}
      <Header />

      {/* Main content expands */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}
