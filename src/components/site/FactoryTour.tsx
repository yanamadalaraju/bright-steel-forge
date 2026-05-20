// // FactoryTour.tsx
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { RotateCw, Maximize2, Minimize2, Info } from "lucide-react";

// const tourSpots = [
//   { x: 15, y: 30, title: "CNC Plasma Cutting", info: "80mm plate cutting capacity with ±0.5mm precision" },
//   { x: 45, y: 55, title: "Robotic Welding Cell", info: "12 robotic arms with real-time seam tracking" },
//   { x: 75, y: 40, title: "Quality Control Lab", info: "NDT, mechanical testing, and metallurgical analysis" },
//   { x: 85, y: 70, title: "Paint Shop", info: "Automated shot blasting and painting line" },
// ];

// export default function FactoryTour() {
//   const [activeSpot, setActiveSpot] = useState<number | null>(null);
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   return (
//     <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="text-center max-w-3xl mx-auto">
//           <span className="chip">Virtual Experience</span>
//           <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
//             Take a <span className="text-gradient">360° Factory</span> Tour
//           </h2>
//           <p className="mt-4 text-muted-foreground">
//             Explore our state-of-the-art manufacturing facility from anywhere in the world.
//           </p>
//         </div>

//         <div className="mt-12 relative">
//           {/* 360° View Container */}
//           <div className="relative rounded-2xl overflow-hidden glass-card aspect-video bg-gradient-to-br from-[--brand]/10 to-[--brand-sky]/10">
//             {/* 360° Image/Video Placeholder */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="text-center">
//                 <RotateCw className="w-16 h-16 text-[--brand] mx-auto animate-spin-slow" />
//                 <p className="mt-4 text-muted-foreground">360° Interactive Tour Loading...</p>
//               </div>
//             </div>

//             {/* Interactive Hotspots */}
//             {tourSpots.map((spot, idx) => (
//               <button
//                 key={idx}
//                 className="absolute group"
//                 style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
//                 onMouseEnter={() => setActiveSpot(idx)}
//                 onMouseLeave={() => setActiveSpot(null)}
//               >
//                 <div className="relative">
//                   <div className="w-4 h-4 bg-[--brand] rounded-full animate-ping absolute" />
//                   <div className="w-4 h-4 bg-[--brand] rounded-full relative" />
//                 </div>
                
//                 {/* Info Card */}
//                 {activeSpot === idx && (
//                   <motion.div
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className="absolute left-6 top-0 glass p-3 rounded-xl min-w-[200px] z-10"
//                   >
//                     <div className="flex items-start gap-2">
//                       <Info className="w-4 h-4 text-[--brand] mt-0.5" />
//                       <div>
//                         <h4 className="font-semibold text-sm">{spot.title}</h4>
//                         <p className="text-xs text-muted-foreground mt-1">{spot.info}</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 )}
//               </button>
//             ))}

//             {/* Controls */}
//             <div className="absolute bottom-4 right-4 flex gap-2">
//               <button className="glass rounded-full p-2 hover:bg-white/20 transition">
//                 <RotateCw className="w-5 h-5" />
//               </button>
//               <button 
//                 onClick={() => setIsFullscreen(!isFullscreen)}
//                 className="glass rounded-full p-2 hover:bg-white/20 transition"
//               >
//                 {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
//               </button>
//             </div>
//           </div>

//           <p className="text-center text-sm text-muted-foreground mt-4">
//             Hover over the dots to explore different areas of our facility
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { RotateCw, Maximize2, Minimize2, Info, Play, Pause, Volume2, VolumeX, X, Map, Compass } from "lucide-react";

// const tourSpots = [
//   { x: 15, y: 30, title: "CNC Plasma Cutting", info: "80mm plate cutting capacity with ±0.5mm precision", videoTime: 0 },
//   { x: 45, y: 55, title: "Robotic Welding Cell", info: "12 robotic arms with real-time seam tracking", videoTime: 15 },
//   { x: 75, y: 40, title: "Quality Control Lab", info: "NDT, mechanical testing, and metallurgical analysis", videoTime: 30 },
//   { x: 85, y: 70, title: "Paint Shop", info: "Automated shot blasting and painting line", videoTime: 45 },
// ];

// // 360° Factory Tour Video URL (replace with your actual 360° video)
// const TOUR_VIDEO_URL = "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4";
// // For actual 360° video, use something like:
// // const TOUR_VIDEO_URL = "https://your-cdn.com/factory-360-tour.mp4";

// export default function FactoryTour() {
//   const [activeSpot, setActiveSpot] = useState<number | null>(null);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [showHotspots, setShowHotspots] = useState(true);
//   const [showTourGuide, setShowTourGuide] = useState(true);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       if (isPlaying) {
//         videoRef.current.play();
//       } else {
//         videoRef.current.pause();
//       }
//     }
//   }, [isPlaying]);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.muted = isMuted;
//     }
//   }, [isMuted]);

//   const handleTimeUpdate = () => {
//     if (videoRef.current) {
//       setCurrentTime(videoRef.current.currentTime);
//     }
//   };

//   const seekTo = (time: number) => {
//     if (videoRef.current) {
//       videoRef.current.currentTime = time;
//       setIsPlaying(true);
//     }
//   };

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       containerRef.current?.requestFullscreen();
//       setIsFullscreen(true);
//     } else {
//       document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//   };

//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };
//     document.addEventListener('fullscreenchange', handleFullscreenChange);
//     return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
//   }, []);

//   return (
//     <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="text-center max-w-3xl mx-auto">
//           <span className="chip bg-white/10 text-white">Virtual Experience</span>
//           <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
//             Take a <span className="text-gradient">360° Factory</span> Tour
//           </h2>
//           <p className="mt-4 text-gray-300">
//             Explore our state-of-the-art manufacturing facility from anywhere in the world.
//             Drag to look around and click on hotspots to learn more.
//           </p>
//         </div>

//         <div className="mt-12 relative" ref={containerRef}>
//           {/* 360° Video Container */}
//           <div className={`relative rounded-2xl overflow-hidden glass-card ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'aspect-video'}`}>
//             {/* 360° Video Player */}
//             <video
//               ref={videoRef}
//               src={TOUR_VIDEO_URL}
//               className="w-full h-full object-cover"
//               autoPlay
//               loop
//               muted={isMuted}
//               onTimeUpdate={handleTimeUpdate}
//               playsInline
//               style={{ cursor: 'grab' }}
//             />

//             {/* 360° Badge */}
//             <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 text-xs flex items-center gap-1 z-10">
//               <Compass className="w-3 h-3" />
//               360° Interactive Tour
//             </div>

//             {/* Hotspots Toggle */}
//             <button
//               onClick={() => setShowHotspots(!showHotspots)}
//               className="absolute top-4 right-4 glass rounded-full p-2 hover:bg-white/20 transition z-10"
//             >
//               <Map className="w-4 h-4" />
//             </button>

//             {/* Interactive Hotspots */}
//             {showHotspots && tourSpots.map((spot, idx) => (
//               <button
//                 key={idx}
//                 className="absolute group z-10"
//                 style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
//                 onMouseEnter={() => setActiveSpot(idx)}
//                 onMouseLeave={() => setActiveSpot(null)}
//                 onClick={() => seekTo(spot.videoTime)}
//               >
//                 <div className="relative">
//                   <div className="w-4 h-4 bg-[--brand] rounded-full animate-ping absolute" />
//                   <div className="w-4 h-4 bg-[--brand] rounded-full relative animate-pulse" />
//                   <div className="absolute inset-0 w-8 h-8 -left-2 -top-2 bg-[--brand]/20 rounded-full animate-ripple" />
//                 </div>
                
//                 {/* Info Card */}
//                 <AnimatePresence>
//                   {activeSpot === idx && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                       animate={{ opacity: 1, y: 0, scale: 1 }}
//                       exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                       className="absolute left-8 top-0 glass-dark p-3 rounded-xl min-w-[220px] z-20 backdrop-blur-xl bg-black/80 border border-white/10"
//                     >
//                       <div className="flex items-start gap-2">
//                         <Info className="w-4 h-4 text-[--brand] mt-0.5 flex-shrink-0" />
//                         <div>
//                           <h4 className="font-semibold text-sm">{spot.title}</h4>
//                           <p className="text-xs text-gray-300 mt-1">{spot.info}</p>
//                           <button 
//                             onClick={(e) => {
//                               e.stopPropagation();
//                               seekTo(spot.videoTime);
//                             }}
//                             className="mt-2 text-xs text-[--brand] hover:underline flex items-center gap-1"
//                           >
//                             <Play className="w-3 h-3" /> Jump to this section
//                           </button>
//                         </div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </button>
//             ))}

//             {/* Video Controls Overlay */}
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-12 pb-3 px-4 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
//               <div className="flex items-center gap-3">
//                 {/* Play/Pause */}
//                 <button onClick={() => setIsPlaying(!isPlaying)} className="glass rounded-full p-2 hover:bg-white/20 transition">
//                   {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
//                 </button>

//                 {/* Mute */}
//                 <button onClick={() => setIsMuted(!isMuted)} className="glass rounded-full p-2 hover:bg-white/20 transition">
//                   {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
//                 </button>

//                 {/* Progress Bar */}
//                 <div className="flex-1">
//                   <input
//                     type="range"
//                     min={0}
//                     max={videoRef.current?.duration || 60}
//                     value={currentTime}
//                     onChange={(e) => seekTo(parseFloat(e.target.value))}
//                     className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[--brand]"
//                   />
//                 </div>

//                 {/* Time */}
//                 <div className="text-xs text-white">
//                   {Math.floor(currentTime / 60)}:{(Math.floor(currentTime % 60)).toString().padStart(2, '0')}
//                 </div>

//                 {/* Fullscreen */}
//                 <button onClick={toggleFullscreen} className="glass rounded-full p-2 hover:bg-white/20 transition">
//                   {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
//                 </button>
//               </div>

//               {/* Hotspots Hint */}
//               {showHotspots && (
//                 <div className="mt-2 text-center">
//                   <span className="text-[10px] text-white/60">✨ Hover over dots to explore, click to jump to sections</span>
//                 </div>
//               )}
//             </div>

//             {/* Loading Spinner */}
//             {!videoRef.current?.duration && (
//               <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur">
//                 <div className="text-center">
//                   <RotateCw className="w-12 h-12 text-[--brand] mx-auto animate-spin" />
//                   <p className="mt-4 text-white">Loading 360° Tour...</p>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Tour Guide Popup */}
//           <AnimatePresence>
//             {showTourGuide && (
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 20 }}
//                 className="absolute -bottom-16 left-1/2 -translate-x-1/2 glass-dark rounded-xl p-3 flex items-center gap-3 backdrop-blur-xl bg-black/80 border border-white/10 z-20 whitespace-nowrap"
//               >
//                 <Compass className="w-5 h-5 text-[--brand]" />
//                 <span className="text-sm">Drag to look around • Click on dots to explore</span>
//                 <button
//                   onClick={() => setShowTourGuide(false)}
//                   className="hover:bg-white/10 rounded-full p-1 transition"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <p className="text-center text-sm text-gray-400 mt-12">
//             🎥 360° Interactive Video Tour • {showHotspots ? "Hotspots active" : "Hotspots hidden"} • Drag to navigate
//           </p>
//         </div>
//       </div>

//       <style>{`
//         @keyframes ripple {
//           0% { transform: scale(1); opacity: 0.8; }
//           100% { transform: scale(2); opacity: 0; }
//         }
//         .animate-ripple {
//           animation: ripple 2s cubic-bezier(0, 0, 0.2, 1) infinite;
//         }
//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
//         .animate-spin-slow {
//           animation: spin-slow 3s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// }




// import { useState, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Play, Pause, Volume2, VolumeX, Maximize2, Minimize2, X, Map, ChevronLeft, ChevronRight } from "lucide-react";

// const tourSections = [
//   {
//     id: 1,
//     name: "Fabrication Bay",
//     video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//     thumbnail: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=450&fit=crop",
//     description: "State-of-the-art CNC plasma cutting and drilling operations",
//     hotspots: [
//       { x: 20, y: 40, title: "CNC Plasma", info: "80mm cutting capacity" },
//       { x: 60, y: 35, title: "Drilling Line", info: "Automated 12-spindle" }
//     ]
//   },
//   {
//     id: 2,
//     name: "Welding Section",
//     video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//     thumbnail: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=800&h=450&fit=crop",
//     description: "Robotic welding cells with real-time monitoring",
//     hotspots: [
//       { x: 40, y: 50, title: "Robotic Arm", info: "12-axis precision" },
//       { x: 70, y: 30, title: "Weld Monitor", info: "Real-time QC" }
//     ]
//   },
//   {
//     id: 3,
//     name: "Quality Lab",
//     video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
//     thumbnail: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&h=450&fit=crop",
//     description: "NDT testing and metallurgical analysis",
//     hotspots: [
//       { x: 50, y: 45, title: "NDT Lab", info: "Ultrasonic testing" },
//       { x: 30, y: 60, title: "Metallurgy", info: "Microstructure analysis" }
//     ]
//   }
// ];

// export default function FactoryTour() {
//   const [currentSection, setCurrentSection] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);
//   const [isFullscreen, setIsFullscreen] = useState(false);
//   const [showHotspots, setShowHotspots] = useState(true);
//   const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   const section = tourSections[currentSection];

//   const toggleFullscreen = () => {
//     if (!document.fullscreenElement) {
//       containerRef.current?.requestFullscreen();
//       setIsFullscreen(true);
//     } else {
//       document.exitFullscreen();
//       setIsFullscreen(false);
//     }
//   };

//   return (
//     <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="text-center max-w-3xl mx-auto">
//           <span className="chip bg-white/10 text-white">Virtual Experience</span>
//           <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
//             Take a <span className="text-gradient">360° Factory</span> Tour
//           </h2>
//           <p className="mt-4 text-gray-300">
//             Explore different areas of our facility through immersive 360° videos
//           </p>
//         </div>

//         <div className="mt-12 relative" ref={containerRef}>
//           {/* Section Selector */}
//           <div className="flex justify-center gap-3 mb-6">
//             {tourSections.map((sec, idx) => (
//               <button
//                 key={sec.id}
//                 onClick={() => {
//                   setCurrentSection(idx);
//                   setIsPlaying(true);
//                 }}
//                 className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
//                   currentSection === idx
//                     ? "bg-[--brand] text-white"
//                     : "glass text-gray-300 hover:bg-white/10"
//                 }`}
//               >
//                 {sec.name}
//               </button>
//             ))}
//           </div>

//           {/* 360° Video Container */}
//           <div className={`relative rounded-2xl overflow-hidden glass-card ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'aspect-video'}`}>
//             <video
//               ref={videoRef}
//               src={section.video}
//               className="w-full h-full object-cover"
//               autoPlay
//               loop
//               muted={isMuted}
//               playsInline
//             />

//             {/* Section Info */}
//             <div className="absolute top-4 left-4 glass-dark rounded-xl p-3 max-w-[280px] backdrop-blur-xl bg-black/60 z-10">
//               <h3 className="font-semibold text-sm">{section.name}</h3>
//               <p className="text-xs text-gray-300 mt-1">{section.description}</p>
//             </div>

//             {/* Hotspots */}
//             {showHotspots && section.hotspots.map((spot, idx) => (
//               <button
//                 key={idx}
//                 className="absolute group z-10"
//                 style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
//                 onMouseEnter={() => setActiveHotspot(idx)}
//                 onMouseLeave={() => setActiveHotspot(null)}
//               >
//                 <div className="w-3 h-3 bg-[--brand] rounded-full animate-pulse" />
//                 <div className="absolute inset-0 w-6 h-6 -left-1.5 -top-1.5 bg-[--brand]/30 rounded-full animate-ping" />
                
//                 <AnimatePresence>
//                   {activeHotspot === idx && (
//                     <motion.div
//                       initial={{ opacity: 0, x: 10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: 10 }}
//                       className="absolute left-5 top-0 glass-dark p-2 rounded-lg min-w-[180px] backdrop-blur-xl bg-black/80"
//                     >
//                       <h4 className="font-semibold text-xs">{spot.title}</h4>
//                       <p className="text-[10px] text-gray-300">{spot.info}</p>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </button>
//             ))}

//             {/* Controls */}
//             <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent pt-12 pb-3 px-4 opacity-0 hover:opacity-100 transition-opacity z-10">
//               <div className="flex items-center gap-3">
//                 <button onClick={() => setIsPlaying(!isPlaying)} className="glass rounded-full p-2">
//                   {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
//                 </button>
//                 <button onClick={() => setIsMuted(!isMuted)} className="glass rounded-full p-2">
//                   {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
//                 </button>
//                 <button onClick={() => setShowHotspots(!showHotspots)} className="glass rounded-full p-2">
//                   <Map className="w-4 h-4" />
//                 </button>
//                 <button onClick={toggleFullscreen} className="glass rounded-full p-2">
//                   {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <button
//             onClick={() => setCurrentSection(prev => Math.max(0, prev - 1))}
//             disabled={currentSection === 0}
//             className="absolute left-4 top-1/2 -translate-y-1/2 glass rounded-full p-2 disabled:opacity-50 z-10"
//           >
//             <ChevronLeft className="w-5 h-5" />
//           </button>
//           <button
//             onClick={() => setCurrentSection(prev => Math.min(tourSections.length - 1, prev + 1))}
//             disabled={currentSection === tourSections.length - 1}
//             className="absolute right-4 top-1/2 -translate-y-1/2 glass rounded-full p-2 disabled:opacity-50 z-10"
//           >
//             <ChevronRight className="w-5 h-5" />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }




import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCw, Maximize2, Minimize2, Info, Play, Pause, Volume2, VolumeX, X, Map, Compass } from "lucide-react";

const tourSpots = [
  { x: 15, y: 30, title: "CNC Plasma Cutting", info: "80mm plate cutting capacity with ±0.5mm precision", videoTime: 0 },
  { x: 45, y: 55, title: "Robotic Welding Cell", info: "12 robotic arms with real-time seam tracking", videoTime: 15 },
  { x: 75, y: 40, title: "Quality Control Lab", info: "NDT, mechanical testing, and metallurgical analysis", videoTime: 30 },
  { x: 85, y: 70, title: "Paint Shop", info: "Automated shot blasting and painting line", videoTime: 45 },
];

// 360° Factory Tour Video URL (replace with your actual 360° video)
// const TOUR_VIDEO_URL = "https://download.blender.org/peach/trailer/trailer_1080p.ogg";
const TOUR_VIDEO_URL = "https://www.pexels.com/download/video/35656633/";
// For actual 360° video, use something like:
// const TOUR_VIDEO_URL = "https://your-cdn.com/factory-360-tour.mp4";

export default function FactoryTour() {
  const [activeSpot, setActiveSpot] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showHotspots, setShowHotspots] = useState(true);
  const [showTourGuide, setShowTourGuide] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const seekTo = (time: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setIsPlaying(true);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto">
          <span className="chip bg-white/10 text-white">Virtual Experience</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Take a <span className="text-gradient">360° Factory</span> Tour
          </h2>
          <p className="mt-4 text-gray-300">
            Explore our state-of-the-art manufacturing facility from anywhere in the world.
            Drag to look around and click on hotspots to learn more.
          </p>
        </div>

        <div className="mt-12 relative" ref={containerRef}>
          {/* 360° Video Container */}
          <div className={`relative rounded-2xl overflow-hidden glass-card ${isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'aspect-video'}`}>
            {/* 360° Video Player */}
            <video
              ref={videoRef}
              src={TOUR_VIDEO_URL}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted={isMuted}
              onTimeUpdate={handleTimeUpdate}
              playsInline
              style={{ cursor: 'grab' }}
            />

            {/* 360° Badge */}
            <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 text-xs flex items-center gap-1 z-10">
              <Compass className="w-3 h-3" />
              360° Interactive Tour
            </div>

            {/* Hotspots Toggle */}
            <button
              onClick={() => setShowHotspots(!showHotspots)}
              className="absolute top-4 right-4 glass rounded-full p-2 hover:bg-white/20 transition z-10"
            >
              <Map className="w-4 h-4" />
            </button>

            {/* Interactive Hotspots */}
            {showHotspots && tourSpots.map((spot, idx) => (
              <button
                key={idx}
                className="absolute group z-10"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                onMouseEnter={() => setActiveSpot(idx)}
                onMouseLeave={() => setActiveSpot(null)}
                onClick={() => seekTo(spot.videoTime)}
              >
                <div className="relative">
                  <div className="w-4 h-4 bg-[--brand] rounded-full animate-ping absolute" />
                  <div className="w-4 h-4 bg-[--brand] rounded-full relative animate-pulse" />
                  <div className="absolute inset-0 w-8 h-8 -left-2 -top-2 bg-[--brand]/20 rounded-full animate-ripple" />
                </div>
                
                {/* Info Card */}
                <AnimatePresence>
                  {activeSpot === idx && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute left-8 top-0 glass-dark p-3 rounded-xl min-w-[220px] z-20 backdrop-blur-xl bg-black/80 border border-white/10"
                    >
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-[--brand] mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-sm">{spot.title}</h4>
                          <p className="text-xs text-gray-300 mt-1">{spot.info}</p>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              seekTo(spot.videoTime);
                            }}
                            className="mt-2 text-xs text-[--brand] hover:underline flex items-center gap-1"
                          >
                            <Play className="w-3 h-3" /> Jump to this section
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            ))}

            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-12 pb-3 px-4 opacity-0 hover:opacity-100 transition-opacity duration-300 z-10">
              <div className="flex items-center gap-3">
                {/* Play/Pause */}
                <button onClick={() => setIsPlaying(!isPlaying)} className="glass rounded-full p-2 hover:bg-white/20 transition">
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>

                {/* Mute */}
                <button onClick={() => setIsMuted(!isMuted)} className="glass rounded-full p-2 hover:bg-white/20 transition">
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                {/* Progress Bar */}
                <div className="flex-1">
                  <input
                    type="range"
                    min={0}
                    max={videoRef.current?.duration || 60}
                    value={currentTime}
                    onChange={(e) => seekTo(parseFloat(e.target.value))}
                    className="w-full h-1 bg-white/30 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[--brand]"
                  />
                </div>

                {/* Time */}
                <div className="text-xs text-white">
                  {Math.floor(currentTime / 60)}:{(Math.floor(currentTime % 60)).toString().padStart(2, '0')}
                </div>

                {/* Fullscreen */}
                <button onClick={toggleFullscreen} className="glass rounded-full p-2 hover:bg-white/20 transition">
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
              </div>

              {/* Hotspots Hint */}
              {showHotspots && (
                <div className="mt-2 text-center">
                  <span className="text-[10px] text-white/60">✨ Hover over dots to explore, click to jump to sections</span>
                </div>
              )}
            </div>

            {/* Loading Spinner */}
            {!videoRef.current?.duration && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur">
                <div className="text-center">
                  <RotateCw className="w-12 h-12 text-[--brand] mx-auto animate-spin" />
                  <p className="mt-4 text-white">Loading 360° Tour...</p>
                </div>
              </div>
            )}
          </div>

          {/* Tour Guide Popup */}
          <AnimatePresence>
            {showTourGuide && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 glass-dark rounded-xl p-3 flex items-center gap-3 backdrop-blur-xl bg-black/80 border border-white/10 z-20 whitespace-nowrap"
              >
                <Compass className="w-5 h-5 text-[--brand]" />
                <span className="text-sm">Drag to look around • Click on dots to explore</span>
                <button
                  onClick={() => setShowTourGuide(false)}
                  className="hover:bg-white/10 rounded-full p-1 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <p className="text-center text-sm text-gray-400 mt-12">
            🎥 360° Interactive Video Tour • {showHotspots ? "Hotspots active" : "Hotspots hidden"} • Drag to navigate
          </p>
        </div>
      </div>

      <style>{`
        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </section>
  );
}