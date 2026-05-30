import {
  Factory,
  Cog,
  Building2,
  CheckCircle,
} from "lucide-react";


import fabricationImg from "@/assets/service1.jpg";
import cuttingImg from "@/assets/service3.jpg";
import handlingImg from "@/assets/service4.jpg";

const InfrastructureSection: React.FC = () => {
 const sections = [
  {
    title: "FABRICATION & PROCESSING",
    image: fabricationImg,
    icon: Factory,
    items: [
      "Beam Welding Line",
      "CNC Plasma Cutting Machine",
      "Sand Blasting Machine",
      "Flange Straightening Machine",
    ],
  },
  {
    title: "CUTTING & FORMING",
    image: cuttingImg,
    icon: Cog,
    items: [
      "CNC Oxyfuel Cutting Machine",
      "CNC Drilling Machine",
      "Roof Sheet Forming Machine",
      "Radial Drill Machine",
      "Shearing Machine",
    ],
  },
  {
    title: "FINISHING & HANDLING",
    image: handlingImg,
    icon: Building2,
    items: [
      "Painting Facility",
      "Lathe Machine",
      "Iron Worker Machine",
      "5 Ton EOT Crane",
      "Hydra Machines (3 Units)",
    ],
  },
];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            Our Infrastructure
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              State-of-the-Art Manufacturing Facility
            </span>
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
           Our manufacturing facility is equipped with advanced machinery and modern technology to ensure precision fabrication, efficient production, and superior quality. Our infrastructure enables us to handle projects of varying scale while maintaining strict quality and delivery standards.
          </p>
        </div>

       

        {/* Infrastructure Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <div className="p-7">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  <section.icon size={28} />
                </div>

                <h3 className="mb-5 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-xl font-bold text-transparent">
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <CheckCircle
                        size={18}
                        className="mt-1 text-cyan-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      
        {/* Bottom Note */}
        <div className="mt-16 rounded-3xl border border-cyan-100 bg-cyan-50 p-8 text-center">
          <p className="text-lg font-medium text-gray-700">
            ⚙️ Precision Fabrication • Efficient Production • Superior Quality
            • On-Time Delivery
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;