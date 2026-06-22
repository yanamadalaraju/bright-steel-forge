import { Link, useRouterState, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  LogOut,
  Bell,
  User,
  Menu,
  X,
  ChevronDown,
  Home,
  Users,
} from "lucide-react";
import logo from "../../assets/newlogo.png";

export function AdminHeader() {
  const navigate = useNavigate();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    localStorage.removeItem("adminToken");
    navigate({ to: "/" });
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <Link to="/dashboard" className="flex items-center gap-3">
              <img src={logo} alt="Epitome Steel" className="w-9 h-9 object-contain" />
              <div className="hidden sm:block">
                <h1 className="text-base font-bold text-slate-900">Epitome Steel</h1>
                <p className="text-xs text-slate-500">Admin Panel</p>
              </div>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex items-center gap-2">
            <Link
              to="/dashboard"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                path === "/dashboard"
                  ? "bg-cyan-50 text-cyan-700"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <LayoutDashboard className={`w-4 h-4 ${path === "/dashboard" ? "text-cyan-600" : "text-slate-400"}`} />
              Dashboard
            </Link>
            <Link
              to="/admin/contacts"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                path === "/admin/contacts"
                  ? "bg-cyan-50 text-cyan-700"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              <Users className={`w-4 h-4 ${path === "/admin/contacts" ? "text-cyan-600" : "text-slate-400"}`} />
              Contacts
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            {/* Notifications */}
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors relative">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                  {user?.email?.charAt(0).toUpperCase() || "U"}
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                  userMenuOpen ? "rotate-180" : ""
                }`} />
              </button>

              {/* Dropdown */}
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-slate-200 py-1">
                  <div className="px-4 py-3 border-b border-slate-100">
                    <p className="text-sm font-medium text-slate-900">{user?.email}</p>
                    <p className="text-xs text-slate-500">Administrator</p>
                  </div>
                  
                  <div className="py-1">
                    <Link
                      to="/dashboard"
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-sm text-slate-700"
                    >
                      <LayoutDashboard className="w-4 h-4" />
                      Dashboard
                    </Link>
                    <Link
                      to="/admin/contacts"
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-sm text-slate-700"
                    >
                      <Users className="w-4 h-4" />
                      Contacts
                    </Link>
                    <Link
                      to="/"
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors text-sm text-slate-700"
                    >
                      <Home className="w-4 h-4" />
                      View Site
                    </Link>
                  </div>

                  <div className="border-t border-slate-100 pt-1">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-2 hover:bg-red-50 transition-colors text-sm text-red-600"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50">
          <div className="w-64 h-full bg-white shadow-xl p-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
                <span className="text-sm font-bold text-slate-900">Admin Panel</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1 rounded-lg hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-1">
              <Link
                to="/dashboard"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  path === "/dashboard"
                    ? "bg-cyan-50 text-cyan-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <LayoutDashboard className={`w-4 h-4 ${path === "/dashboard" ? "text-cyan-600" : "text-slate-400"}`} />
                Dashboard
              </Link>
              <Link
                to="/admin/contacts"
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  path === "/admin/contacts"
                    ? "bg-cyan-50 text-cyan-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                <Users className={`w-4 h-4 ${path === "/admin/contacts" ? "text-cyan-600" : "text-slate-400"}`} />
                Contacts
              </Link>

              <div className="border-t border-slate-200 mt-4 pt-4">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}