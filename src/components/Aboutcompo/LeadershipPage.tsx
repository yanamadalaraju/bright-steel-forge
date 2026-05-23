
import React from "react";
import { Star } from "lucide-react";

const leaders = [
  {
    n: "Rajesh Verma",
    r: "Chairman & Managing Director",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    rating: 4,
    desc: "Leading long-term business strategy, organizational growth, and operational excellence with over two decades of industry leadership experience.",
  },
  {
    n: "Aisha Khan",
    r: "Chief Operating Officer",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
    rating: 5,
    desc: "Driving business operations, process optimization, and cross-functional collaboration to ensure high-performance execution across teams.",
  },
  {
    n: "Daniel Mathew",
    r: "Head of Engineering",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    rating: 3,
    desc: "Passionate about technology innovation, scalable engineering solutions, and delivering reliable digital transformation initiatives.",
  },
  {
    n: "Priya Iyer",
    r: "Quality & Compliance Director",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=800&auto=format&fit=crop",
    rating: 2,
    desc: "Ensuring regulatory excellence, quality standards, and continuous improvement practices across organizational operations and services.",
  },
];

const LeadershipPage = () => {
  return (
    <section className="py-24 bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1 text-sm font-semibold text-cyan-700 shadow-sm">
            Leadership Team
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Meet the Experts Behind Our
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}Success
            </span>
          </h2>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Our leadership team combines innovation, operational excellence,
            and strategic thinking to drive impactful business transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-14">
          {leaders.map((l, index) => (
            <div
              key={index}
              className="relative bg-white rounded-[30px] shadow-xl min-h-[240px] overflow-visible hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >

              {/* Blue Shape */}
              <div className="absolute top-0 left-0 bg-[#2f57a1] h-[78px] w-[68%] rounded-br-[35px] rounded-tl-[30px] flex items-center px-8">
                <div>
                  <h3 className="text-white text-2xl font-bold leading-none">
                    {l.n}
                  </h3>

                  <p className="text-white/90 text-sm mt-2">
                    {l.r}
                  </p>
                </div>
              </div>

              {/* Left Shape Extension */}
              <div className="absolute top-[78px] left-0 w-[18px] h-[58px] bg-[#1d3f7c] rounded-br-xl" />

              {/* Profile Image */}
              <div className="absolute -top-5 right-5">
                <div className="w-[110px] h-[110px] rounded-full bg-white shadow-lg p-1">
                  <img
                    src={l.img}
                    alt={l.n}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="pt-[110px] px-10 pb-8 relative">

                {/* Vertical Line */}
                <div className="absolute left-10 top-[112px] h-[110px] w-[2px] bg-[#2f57a1]" />

                <div className="pl-8">

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
  {[1, 2, 3, 4, 5].map((star) => (
    <Star
      key={star}
      size={20}
      className="fill-yellow-400 text-yellow-400"
    />
  ))}
                    </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed text-[15px]">
                    {l.desc}
                  </p>

                 
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipPage;