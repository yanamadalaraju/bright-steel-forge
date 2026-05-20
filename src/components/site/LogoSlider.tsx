// const logos = ["Tata Projects", "L&T", "Adani", "JSW", "Reliance", "Mahindra", "Siemens", "Hindalco"];

// export default function LogoSlider() {
//   return (
//     <section className="border-y border-border/60 bg-white/60 backdrop-blur">
//       <div className="mx-auto max-w-7xl px-4 py-6 overflow-hidden">
//         <div className="flex gap-12 whitespace-nowrap">
//           <div className="flex gap-12 animate-marquee">
//             {[...logos, ...logos].map((l, i) => (
//               <span 
//                 key={i} 
//                 className="text-sm sm:text-base font-display font-semibold tracking-tight text-foreground/40 hover:text-[--brand-deep] transition"
//               >
//                 {l}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//       <style>{`
//         @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
//         .animate-marquee { animation: marquee 28s linear infinite; }
//       `}</style>
//     </section>
//   );
// }




import { Building2, Factory, Globe, HardHat, Package, Truck, Zap, Shield } from "lucide-react";

const logos = [
  { name: "Tata Projects", icon: Building2, bgColor: "#0047AB10", iconColor: "#0047AB" },
  { name: "L&T", icon: HardHat, bgColor: "#E31E2410", iconColor: "#E31E24" },
  { name: "Adani", icon: Globe, bgColor: "#F15A2410", iconColor: "#F15A24" },
  { name: "JSW", icon: Factory, bgColor: "#00336610", iconColor: "#003366" },
  { name: "Reliance", icon: Zap, bgColor: "#1B4D3E10", iconColor: "#1B4D3E" },
  { name: "Mahindra", icon: Truck, bgColor: "#DD2E4410", iconColor: "#DD2E44" },
  { name: "Siemens", icon: Shield, bgColor: "#00999910", iconColor: "#009999" },
  { name: "Hindalco", icon: Package, bgColor: "#F3702110", iconColor: "#F37021" },
];

export default function LogoSlider() {
  return (
    <section className="border-y border-border/60 bg-white/60 backdrop-blur overflow-hidden">
      <div className="relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="flex gap-12 whitespace-nowrap">
            <div className="flex gap-12 animate-marquee">
              {[...logos, ...logos].map((logo, i) => {
                const Icon = logo.icon;
                return (
                  <div
                    key={i}
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-xl transition-all duration-300 group hover:scale-105"
                    style={{ backgroundColor: logo.bgColor }}
                  >
                    <div className="p-1.5 rounded-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5" style={{ color: logo.iconColor }} />
                    </div>
                    <span 
                      className="text-sm sm:text-base font-display font-semibold tracking-tight transition group-hover:text-[--brand-deep]"
                      style={{ color: logo.iconColor }}
                    >
                      {logo.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes marquee { 
          from { transform: translateX(0); } 
          to { transform: translateX(-50%); } 
        }
        .animate-marquee { 
          animation: marquee 30s linear infinite; 
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}