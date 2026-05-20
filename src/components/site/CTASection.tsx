import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import engineerImg from "@/assets/engineer.jpg";

export default function CTASection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl glass-card p-10 lg:p-14">
          <div className="absolute inset-0 -z-10">
            <img src={engineerImg} alt="" className="w-full h-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/40" />
          </div>
          
          <div className="max-w-2xl">
            <span className="chip">Start a Project</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Have a structure in mind? <span className="text-gradient">Let's engineer it.</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Talk to our project engineers and receive a detailed quote in under 48 hours.
            </p>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/downloads" className="btn-orange inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}