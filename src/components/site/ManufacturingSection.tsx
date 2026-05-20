import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import aerialImg from "@/assets/factory-aerial.jpg";
import { Counter } from "@/components/site/Counter";

const features = [
  "Robotic welding cells with weld-bead monitoring",
  "CNC plasma & oxy-fuel cutting up to 80mm plate",
  "Shot-blast surface prep + automated paint line",
  "In-house NDT, mechanical and metallurgical testing",
];

export default function ManufacturingSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative">
          <div className="glass-card overflow-hidden">
            <img src={aerialImg} alt="Factory aerial" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-5 py-4 max-w-[220px]">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Plant Area</div>
            <div className="font-display font-bold text-2xl text-[--brand-deep]">
              <Counter to={420000} suffix=" sq.ft" />
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-6">
          <span className="chip">Manufacturing</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Two decades of <span className="text-gradient">precision output</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A fully integrated facility with automated cutting, robotic welding, surface treatment and an in-house QA lab — engineered for repeatable global-grade quality.
          </p>
          
          <ul className="mt-6 space-y-3">
            {features.map((t) => (
              <li key={t} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-full bg-[--trust]/20 text-[--trust]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </span>
                {t}
              </li>
            ))}
          </ul>
          
          <Link to="/manufacturing" className="mt-7 inline-flex items-center gap-1.5 btn-primary px-5 py-2.5 rounded-xl text-sm font-semibold">
            Tour the facility <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}