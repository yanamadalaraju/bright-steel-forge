import { motion } from "framer-motion";
import {
  Building2,
  Boxes,
  Warehouse,
  Factory,
  Truck,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

const items = [
  {
    i: Building2,
    t: "Construction",
    d: "Commercial, mixed-use and high-rise structural packages.",
    color: "from-blue-500 to-blue-600",
  },
  {
    i: Boxes,
    t: "Infrastructure",
    d: "Bridges, terminals, ports and rail structures.",
    color: "from-purple-500 to-purple-600",
  },
  {
    i: Warehouse,
    t: "Warehousing",
    d: "High-bay distribution centers & cold-chain facilities.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    i: Factory,
    t: "Manufacturing",
    d: "Auto OEM, gigafactories and process industries.",
    color: "from-orange-500 to-orange-600",
  },
  {
    i: Truck,
    t: "Logistics",
    d: "Multi-modal hubs, cross-docks and depots.",
    color: "from-amber-500 to-amber-600",
  },
  {
    i: Zap,
    t: "Power Plants",
    d: "Renewable, thermal, BESS and substation structures.",
    color: "from-sky-500 to-blue-500",
  },
  {
    i: Zap,
    t: "Solar Structures",
    d: "Design and fabrication of solar module mounting structures for utility and rooftop projects.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    i: Building2,
    t: "Bridge Fabrication",
    d: "Precision-engineered bridge girders, trusses, and heavy steel fabrication works.",
    color: "from-indigo-500 to-purple-600",
  },
];

export default function IndustrySolutions() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            Industries We Serve
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Smart Solutions{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
              For Every Industry
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Delivering innovative structural steel solutions across diverse
            sectors with precision engineering, advanced fabrication, and
            reliable execution.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  {items.map((item, index) => {
    const Icon = item.i;

    return (
      <motion.div
        key={item.t}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
          delay: index * 0.05,
        }}
        className="group"
      >
        <div className="h-full rounded-[32px] border border-transparent bg-white p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
          
          {/* Icon */}
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-r ${item.color} shadow-lg`}
          >
            <Icon className="h-8 w-8 text-white" />
          </div>

          {/* Title */}
          <h3 className="mt-8 text-3xl font-bold text-slate-900">
            {item.t}
          </h3>

          {/* Description */}
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            {item.d}
          </p>

          {/* CTA */}
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 text-lg font-semibold text-blue-600 transition-all hover:gap-3"
          >
            Request Quote
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </motion.div>
    );
  })}
        </div>
      </div>
    </section>
  );
}