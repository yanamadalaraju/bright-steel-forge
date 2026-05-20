// // ProcessVideo.tsx
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Play, X, ChevronRight } from "lucide-react";
// // import fabricationVideo from "@/assets/fabrication-process.mp4";
// // import weldingVideo from "@/assets/robotic-welding.mp4";
// // import qualityVideo from "@/assets/quality-control.mp4";

// const processes = [
//   {
//     title: "Precision Fabrication",
//     description: "CNC plasma cutting and automated drilling with micron-level accuracy.",
//     video: "https://media.istockphoto.com/id/1003629774/video/close-up-shot-of-a-two-industrial-workers-pushing-wooden-board-through-the-cutting-machine.mp4?s=mp4-640x640-is&k=20&c=YkNqhFHrzEDDu3UNP7PN41aXzaggrHjrSXX-FqcaCr0=",
//     duration: "2:34",
//     thumbnail: "/thumbnails/fabrication.jpg"
//   },
//   {
//     title: "Robotic Welding",
//     description: "High-speed robotic welding cells with real-time quality monitoring.",
//     video: "https://media.istockphoto.com/id/450689881/video/robotic-arm-welding.mp4?s=mp4-640x640-is&k=20&c=zrMjZn44AZsYw87qQk-NC3EN4xb1kXOVjDNEvxctYgQ=",
//     duration: "3:12",
//     thumbnail: "/thumbnails/welding.jpg"
//   },
//   {
//     title: "Quality Control",
//     description: "NDT testing, metallurgical analysis, and dimensional verification.",
//     video: "https://media.istockphoto.com/id/1979832873/video/metal-bending-machines.mp4?s=mp4-640x640-is&k=20&c=5_jHRDQtkOR89x40LBk0FDWk53fgiL9ZGuqKq3UsAug=",
//     duration: "2:18",
//     thumbnail: "/thumbnails/quality.jpg"
//   }
// ];

// export default function ProcessVideo() {
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

//   return (
//     <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="text-center max-w-3xl mx-auto">
//           <span className="chip">Manufacturing Excellence</span>
//           <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
//             Watch Our <span className="text-gradient">Process</span> in Action
//           </h2>
//           <p className="mt-4 text-muted-foreground">
//             See how advanced technology and skilled craftsmanship come together to create world-class steel structures.
//           </p>
//         </div>

//         <div className="mt-12 grid md:grid-cols-3 gap-6">
//           {processes.map((process, i) => (
//             <motion.div
//               key={process.title}
//               initial={{ opacity: 0, y: 24 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//               className="group cursor-pointer"
//               onClick={() => setSelectedVideo(process.video)}
//             >
//               <div className="relative rounded-2xl overflow-hidden glass-card">
//                 <div className="aspect-video bg-gradient-to-br from-[--brand]/20 to-[--brand-sky]/20 relative">
//                   {/* Video Thumbnail Placeholder */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="w-16 h-16 rounded-full bg-[--brand] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                       <Play className="w-6 h-6 ml-1" />
//                     </div>
//                   </div>
//                   <div className="absolute bottom-2 right-2 glass rounded px-2 py-1 text-xs">
//                     {process.duration}
//                   </div>
//                 </div>
//                 <div className="p-5">
//                   <h3 className="font-display font-semibold text-xl">{process.title}</h3>
//                   <p className="mt-2 text-sm text-muted-foreground">{process.description}</p>
//                   <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[--brand-deep] group-hover:gap-2 transition-all">
//                     Watch Video <ChevronRight className="w-4 h-4" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Video Modal */}
//       {selectedVideo && (
//         <div 
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur"
//           onClick={() => setSelectedVideo(null)}
//         >
//           <button
//             className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
//             onClick={() => setSelectedVideo(null)}
//           >
//             <X className="w-8 h-8" />
//           </button>
//           <div className="w-full max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
//             <video
//               src={selectedVideo}
//               controls
//               autoPlay
//               className="w-full rounded-2xl shadow-2xl"
//             />
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }




import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play, X, ChevronRight, Pause } from "lucide-react";

const processes = [
  {
    title: "Precision Fabrication",
    description: "CNC plasma cutting and automated drilling with micron-level accuracy.",
    video: "https://media.istockphoto.com/id/1003629774/video/close-up-shot-of-a-two-industrial-workers-pushing-wooden-board-through-the-cutting-machine.mp4?s=mp4-640x640-is&k=20&c=YkNqhFHrzEDDu3UNP7PN41aXzaggrHjrSXX-FqcaCr0=",
    thumbnail: "https://media.istockphoto.com/id/1003629774/video/close-up-shot-of-a-two-industrial-workers-pushing-wooden-board-through-the-cutting-machine.mp4?s=mp4-640x640-is&k=20&c=YkNqhFHrzEDDu3UNP7PN41aXzaggrHjrSXX-FqcaCr0=",
    duration: "2:34",
    poster: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop"
  },
  {
    title: "Robotic Welding",
    description: "High-speed robotic welding cells with real-time quality monitoring.",
    video: "https://media.istockphoto.com/id/450689881/video/robotic-arm-welding.mp4?s=mp4-640x640-is&k=20&c=zrMjZn44AZsYw87qQk-NC3EN4xb1kXOVjDNEvxctYgQ=",
    thumbnail: "https://media.istockphoto.com/id/450689881/video/robotic-arm-welding.mp4?s=mp4-640x640-is&k=20&c=zrMjZn44AZsYw87qQk-NC3EN4xb1kXOVjDNEvxctYgQ=",
    duration: "3:12",
    poster: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=600&h=400&fit=crop"
  },
  {
    title: "Quality Control",
    description: "NDT testing, metallurgical analysis, and dimensional verification.",
    video: "https://media.istockphoto.com/id/1979832873/video/metal-bending-machines.mp4?s=mp4-640x640-is&k=20&c=5_jHRDQtkOR89x40LBk0FDWk53fgiL9ZGuqKq3UsAug=",
    thumbnail: "https://media.istockphoto.com/id/1979832873/video/metal-bending-machines.mp4?s=mp4-640x640-is&k=20&c=5_jHRDQtkOR89x40LBk0FDWk53fgiL9ZGuqKq3UsAug=",
    duration: "2:18",
    poster: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&h=400&fit=crop"
  }
];

export default function ProcessVideo() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [playingPreviews, setPlayingPreviews] = useState<{ [key: number]: boolean }>({});
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    setPlayingPreviews(prev => ({ ...prev, [index]: true }));
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play().catch(err => console.log("Preview play failed:", err));
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredIndex(null);
    setPlayingPreviews(prev => ({ ...prev, [index]: false }));
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause();
      if (videoRefs.current[index]) {
        videoRefs.current[index].currentTime = 0;
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="chip">Manufacturing Excellence</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Watch Our <span className="text-gradient">Process</span> in Action
          </h2>
          <p className="mt-4 text-muted-foreground">
            See how advanced technology and skilled craftsmanship come together to create world-class steel structures.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {processes.map((process, i) => (
            <motion.div
              key={process.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(process.video)}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
            >
              <div className="relative rounded-2xl overflow-hidden glass-card">
                <div className="aspect-video bg-gradient-to-br from-[--brand]/20 to-[--brand-sky]/20 relative overflow-hidden">
                  {/* Video Preview on Hover */}
                  <video
                    ref={(el) => { videoRefs.current[i] = el; }}
                    src={process.video}
                    muted
                    loop
                    playsInline
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      playingPreviews[i] ? "opacity-100" : "opacity-0"
                    }`}
                    poster={process.poster}
                  />
                  
                  {/* Static Thumbnail / Poster Frame */}
                  <img
                    src={process.poster}
                    alt={process.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                      playingPreviews[i] ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[--brand] text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-6 h-6 ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 glass rounded px-2 py-1 text-xs backdrop-blur-sm">
                    {process.duration}
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-2 right-2 glass rounded-full px-2 py-1 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to expand
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="font-display font-semibold text-xl">{process.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{process.description}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[--brand-deep] group-hover:gap-2 transition-all">
                    Watch Full Video <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
          onClick={() => setSelectedVideo(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition z-10"
            onClick={() => setSelectedVideo(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button
            className="absolute top-6 left-6 text-white hover:text-gray-300 transition z-10"
            onClick={() => setSelectedVideo(null)}
          >
            ← Back
          </button>
          
          <div className="w-full max-w-5xl mx-4" onClick={(e) => e.stopPropagation()}>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-2xl shadow-2xl"
              poster={processes.find(p => p.video === selectedVideo)?.poster}
            />
          </div>
        </div>
      )}
    </section>
  );
}