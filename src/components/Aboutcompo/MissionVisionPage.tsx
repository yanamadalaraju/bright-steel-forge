import React from "react";

const MissionVisionPage = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#F8FAFC] to-cyan-50 overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-200/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 blur-3xl rounded-full" />

      <div className="relative z-10 mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-semibold text-cyan-700 shadow-sm">
            Mission & Vision
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Driving Innovation With
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}Purpose & Direction
            </span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            We combine engineering excellence, sustainability, and future-ready
            thinking to create impactful industrial and infrastructure solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">

          {[
            {
              t: "Our Mission",
              d: "To build the structural backbone of modern industry through precision manufacturing, advanced engineering, and uncompromising safety standards.",
              gradient: "from-cyan-500 to-blue-600",
              bg: "from-cyan-50 to-blue-50",
              img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
            },
            {
              t: "Our Vision",
              d: "To become the global benchmark for sustainable steel construction by pioneering automation, BIM-driven design, and net-zero manufacturing.",
              gradient: "from-violet-500 to-indigo-600",
              bg: "from-violet-50 to-indigo-50",
              img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((c) => (
            <div
              key={c.t}
              className={`group relative overflow-hidden rounded-[32px] border border-white/60 bg-gradient-to-br ${c.bg} backdrop-blur-xl p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500`}
            >

              {/* Top Gradient */}
              <div className={`absolute top-0 left-0 h-2 w-full bg-gradient-to-r ${c.gradient}`} />

              {/* Decorative Glow */}
              <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/30 blur-2xl" />

              {/* Image */}
              <div className="relative w-28 h-28 rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white group-hover:scale-105 transition-transform duration-500">
                <img
                  src={c.img}
                  alt={c.t}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                {/* <div className={`absolute inset-0 bg-gradient-to-t ${c.gradient} opacity-30`} /> */}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mt-8 text-3xl font-bold text-slate-900">
                  {c.t}
                </h3>

                <p className="mt-5 text-slate-600 text-[16px] leading-relaxed">
                  {c.d}
                </p>

                {/* Bottom Accent */}
                <div
                  className={`mt-8 h-1.5 w-24 rounded-full bg-gradient-to-r ${c.gradient}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionPage;