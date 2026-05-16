// import { Link, useRouterState } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { Menu, X, ChevronRight } from "lucide-react";

// const NAV = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/products", label: "Products" },
//   { to: "/services", label: "Services" },
//   { to: "/projects", label: "Projects" },
//   { to: "/industries", label: "Industries" },
//   { to: "/manufacturing", label: "Manufacturing" },
//   { to: "/certifications", label: "Quality" },
//   { to: "/blog", label: "Insights" },
//   { to: "/careers", label: "Careers" },
//   { to: "/contact", label: "Contact" },
// ] as const;

// export function Header() {
//   const path = useRouterState({ select: (s) => s.location.pathname });
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 12);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => { setOpen(false); }, [path]);

//   return (
//     <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}>
//       <div className="mx-auto max-w-7xl px-4">
//         <div className={`glass rounded-2xl flex items-center justify-between gap-4 px-4 sm:px-5 py-3 transition-all duration-500 ${scrolled ? "shadow-[0_10px_30px_-12px_rgba(29,78,216,0.25)]" : ""}`}>
//           <Link to="/" className="flex items-center gap-2.5 group">
//             <span className="relative grid place-items-center w-9 h-9 rounded-lg overflow-hidden">
//               <span className="absolute inset-0 bg-gradient-to-br from-[--brand-deep] via-[--brand] to-[--brand-sky]" />
//               <span className="absolute inset-[2px] rounded-md bg-white/10 backdrop-blur" />
//               <span className="relative font-display font-bold text-white text-sm tracking-tight">ES</span>
//             </span>
//             <span className="hidden sm:flex flex-col leading-tight">
//               <span className="font-display font-semibold text-[15px] tracking-tight">Epitome Steel</span>
//               <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Steel · Civil · Structures</span>
//             </span>
//           </Link>

//           <nav className="hidden xl:flex items-center gap-1">
//             {NAV.slice(0, 9).map((n) => {
//               const active = path === n.to;
//               return (
//                 <Link
//                   key={n.to}
//                   to={n.to}
//                   className={`relative px-3 py-2 text-[13px] font-medium rounded-lg transition ${active ? "text-[--brand-deep]" : "text-foreground/70 hover:text-foreground"}`}
//                 >
//                   {n.label}
//                   {active && <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[--brand] to-transparent" />}
//                 </Link>
//               );
//             })}
//           </nav>

//           <div className="flex items-center gap-2">
//             <Link to="/contact" className="hidden sm:inline-flex items-center gap-1.5 btn-primary px-4 py-2 rounded-xl text-[13px] font-semibold">
//               Get a Quote <ChevronRight className="w-4 h-4" />
//             </Link>
//             <button
//               aria-label="Menu"
//               onClick={() => setOpen((v) => !v)}
//               className="xl:hidden grid place-items-center w-10 h-10 rounded-lg border border-border bg-white/70 hover:bg-white"
//             >
//               {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>
//         </div>

//         {open && (
//           <div className="xl:hidden mt-2 glass rounded-2xl p-3 animate-fade-up">
//             <div className="grid grid-cols-2 gap-1">
//               {NAV.map((n) => {
//                 const active = path === n.to;
//                 return (
//                   <Link
//                     key={n.to}
//                     to={n.to}
//                     className={`px-3 py-2.5 rounded-lg text-sm font-medium ${active ? "bg-[--accent] text-[--brand-deep]" : "hover:bg-[--accent]"}`}
//                   >
//                     {n.label}
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// }




// import { Link, useRouterState } from "@tanstack/react-router";
// import { useEffect, useState } from "react";
// import { 
//   Menu, X, ChevronRight, Home, Info, Package, Wrench, 
//   FolderKanban, Factory, HardHat, Award, Newspaper, 
//   Briefcase, PhoneCall, Sparkles, Phone, Mail, MapPin, 
//   Shield, Truck 
// } from "lucide-react";

// const NAV = [
//   { to: "/", label: "Home", icon: Home },
//   { to: "/about", label: "About", icon: Info },
//   { to: "/products", label: "Products", icon: Package },
//   { to: "/services", label: "Services", icon: Wrench },
//   { to: "/projects", label: "Projects", icon: FolderKanban },
//   { to: "/industries", label: "Industries", icon: Factory },
//   { to: "/manufacturing", label: "Manufacturing", icon: HardHat },
//   { to: "/certifications", label: "Quality", icon: Award },
//   { to: "/blog", label: "Insights", icon: Newspaper },
//   { to: "/careers", label: "Careers", icon: Briefcase },
//   { to: "/contact", label: "Contact", icon: PhoneCall },
// ] as const;

// export function Header() {
//   const path = useRouterState({ select: (s) => s.location.pathname });
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [showTopBar, setShowTopBar] = useState(true);

//   useEffect(() => {
//     const onScroll = () => {
//       const scrollY = window.scrollY;
//       // Top bar hides when scrolled past 30px
//       setShowTopBar(scrollY < 30);
//       setScrolled(scrollY > 10);
//     };
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => { setOpen(false); }, [path]);

//   return (
//     <>
//       {/* Header Container - No gap between bars */}
//       <div className="fixed top-0 left-0 right-0 z-50">
//         {/* Top Announcement Bar */}
//         <div className={`transition-all duration-500 overflow-hidden ${
//           showTopBar ? "max-h-24 opacity-100" : "max-h-0 opacity-0"
//         }`}>
//           <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white">
//             <div className="w-full px-4 sm:px-6 lg:px-8">
//               <div className="py-2.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm">
//                 <div className="flex items-center gap-4 flex-wrap justify-center">
//                   <div className="flex items-center gap-1.5">
//                     <Phone className="w-3.5 h-3.5" />
//                     <span>+1 (555) 123-4567</span>
//                   </div>
//                   <div className="hidden sm:flex items-center gap-1.5">
//                     <Mail className="w-3.5 h-3.5" />
//                     <span>info@epitomesteel.com</span>
//                   </div>
//                   <div className="hidden md:flex items-center gap-1.5">
//                     <MapPin className="w-3.5 h-3.5" />
//                     <span>Los Angeles, CA</span>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-3">
//                   <div className="flex items-center gap-1.5">
//                     <Truck className="w-3.5 h-3.5" />
//                     <span>Free Shipping on Orders $500+</span>
//                   </div>
//                   <div className="w-px h-3 bg-white/30 hidden sm:block" />
//                   <div className="flex items-center gap-1.5">
//                     <Shield className="w-3.5 h-3.5" />
//                     <span>ISO 9001:2024 Certified</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Auto-scrolling ticker for mobile */}
//             <div className="sm:hidden bg-blue-700/50 py-1 overflow-hidden border-t border-white/10">
//               <div className="animate-marquee whitespace-nowrap">
//                 <span className="inline-flex items-center gap-4 mx-4">
//                   <span className="flex items-center gap-1">🏆 Industry Leader 2024</span>
//                   <span>•</span>
//                   <span className="flex items-center gap-1">✨ 24/7 Customer Support</span>
//                   <span>•</span>
//                   <span className="flex items-center gap-1">🚚 Express Delivery Available</span>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Main Navbar - Directly attached below announcement bar */}
//         <div className={`transition-all duration-500 ${
//           showTopBar ? "" : "shadow-xl"
//         }`}>
//           <div className={`w-full px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
//             scrolled ? "py-2" : "py-3"
//           }`}>
//             <div className={`relative backdrop-blur-xl rounded-2xl flex items-center justify-between gap-4 px-4 sm:px-6 py-3 transition-all duration-500 ${
//               scrolled || !showTopBar
//                 ? "bg-white/95 dark:bg-gray-900/95 shadow-2xl shadow-blue-500/20 border border-white/20" 
//                 : "bg-white/90 dark:bg-gray-900/90 border border-white/20"
//             }`}>
              
//               {/* Brand Logo */}
//               <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
//                 <div className="relative grid place-items-center w-10 h-10 rounded-xl overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400" />
//                   <div className="absolute inset-[2px] rounded-lg bg-white/10 backdrop-blur-sm" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//                   <span className="relative font-display font-bold text-white text-sm tracking-tight">ES</span>
//                 </div>
//                 <div className="hidden sm:flex flex-col">
//                   <span className="font-display font-bold text-base bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent whitespace-nowrap">
//                     Epitome Steel
//                   </span>
//                   <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold whitespace-nowrap">
//                     Steel · Civil · Structures
//                   </span>
//                 </div>
//               </Link>

//               {/* Desktop Navigation */}
//               <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">
//                 {NAV.slice(0, 9).map((n) => {
//                   const active = path === n.to;
//                   const Icon = n.icon;
//                   return (
//                     <Link
//                       key={n.to}
//                       to={n.to}
//                       className={`relative group flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
//                         active 
//                           ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10" 
//                           : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-500/5"
//                       }`}
//                     >
//                       <Icon className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 ${active ? "text-blue-600" : ""}`} />
//                       <span>{n.label}</span>
//                       {active && (
//                         <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
//                       )}
//                     </Link>
//                   );
//                 })}
//               </nav>

//               {/* Get a Quote Button */}
//               <div className="flex items-center gap-2 flex-shrink-0">
//                 <Link 
//                   to="/contact" 
//                   className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
//                 >
//                   <Sparkles className="w-4 h-4" />
//                   Get a Quote
//                   <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//                 </Link>
//                 <button
//                   aria-label="Menu"
//                   onClick={() => setOpen((v) => !v)}
//                   className="xl:hidden grid place-items-center w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300"
//                 >
//                   {open ? <X className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
//                 </button>
//               </div>
//             </div>

//             {/* Mobile Menu */}
//             {open && (
//               <div className="xl:hidden mt-3 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl animate-fade-up">
//                 <div className="grid grid-cols-2 gap-2">
//                   {NAV.map((n) => {
//                     const active = path === n.to;
//                     const Icon = n.icon;
//                     return (
//                       <Link
//                         key={n.to}
//                         to={n.to}
//                         className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${
//                           active 
//                             ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800" 
//                             : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:translate-x-1"
//                         }`}
//                       >
//                         <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${active ? "text-blue-600" : "text-gray-500"}`} />
//                         <span>{n.label}</span>
//                       </Link>
//                     );
//                   })}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Spacer to prevent content from hiding under fixed headers */}
//       <div className={`transition-all duration-500 ${
//         showTopBar ? "h-[106px] sm:h-[106px]" : "h-[64px]"
//       }`} />
//     </>
//   );
// }






import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { 
  Menu, X, ChevronRight, Home, Info, Package, Wrench, 
  FolderKanban, Factory, HardHat, Award, Newspaper, 
  Briefcase, PhoneCall, Sparkles 
} from "lucide-react";

const NAV = [
  { to: "/", label: "Home", icon: Home },
  { to: "/about", label: "About", icon: Info },
  { to: "/products", label: "Products", icon: Package },
  { to: "/services", label: "Services", icon: Wrench },
  { to: "/projects", label: "Projects", icon: FolderKanban },
  { to: "/industries", label: "Industries", icon: Factory },
  { to: "/manufacturing", label: "Manufacturing", icon: HardHat },
  { to: "/certifications", label: "Quality", icon: Award },
  { to: "/blog", label: "Insights", icon: Newspaper },
  { to: "/careers", label: "Careers", icon: Briefcase },
  { to: "/contact", label: "Contact", icon: PhoneCall },
] as const;

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-white/95 dark:bg-gray-900/95 shadow-xl backdrop-blur-md" 
        : "bg-transparent"
    }`}>
      {/* Full width container */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className={`relative transition-all duration-500 ${
          scrolled ? "py-2" : "py-4"
        }`}>
          <div className={`relative backdrop-blur-xl bg-white/90 dark:bg-gray-900/90 rounded-2xl flex items-center justify-between gap-4 px-4 sm:px-6 py-3 transition-all duration-500 border border-white/20 ${
            scrolled ? "shadow-2xl shadow-blue-500/20" : ""
          }`}>
            
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative grid place-items-center w-10 h-10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400" />
                <div className="absolute inset-[2px] rounded-lg bg-white/10 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <span className="relative font-display font-bold text-white text-sm tracking-tight">ES</span>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-display font-bold text-base bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent whitespace-nowrap">
                  Epitome Steel
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold whitespace-nowrap">
                  Steel · Civil · Structures
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1 flex-1 justify-center">
              {NAV.slice(0, 9).map((n) => {
                const active = path === n.to;
                const Icon = n.icon;
                return (
                  <Link
                    key={n.to}
                    to={n.to}
                    className={`relative group flex items-center gap-1.5 px-3 py-2 text-[13px] font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                      active 
                        ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10" 
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-500/5"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 ${active ? "text-blue-600" : ""}`} />
                    <span>{n.label}</span>
                    {active && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Get a Quote Button - Always visible and fixed */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <Link 
                to="/contact" 
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4" />
                Get a Quote
                <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <button
                aria-label="Menu"
                onClick={() => setOpen((v) => !v)}
                className="xl:hidden grid place-items-center w-10 h-10 rounded-xl border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300"
              >
                {open ? <X className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="xl:hidden mt-3 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 rounded-2xl p-4 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl animate-fade-up">
              <div className="grid grid-cols-2 gap-2">
                {NAV.map((n) => {
                  const active = path === n.to;
                  const Icon = n.icon;
                  return (
                    <Link
                      key={n.to}
                      to={n.to}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 group ${
                        active 
                          ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800" 
                          : "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 hover:translate-x-1"
                      }`}
                    >
                      <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${active ? "text-blue-600" : "text-gray-500"}`} />
                      <span>{n.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
