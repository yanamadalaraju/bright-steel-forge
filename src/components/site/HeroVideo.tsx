// HeroVideo.tsx
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, ArrowRight, ChevronRight } from "lucide-react";
import heroVideo from "@/assets/hero-manufacturing.mp4";
import { Counter } from "@/components/site/Counter";

const stats = [
  { v: 28, s: "+", l: "Years of Engineering" },
  { v: 1200, s: "+", l: "Projects Delivered" },
  { v: 65000, s: "T", l: "Annual Steel Output" },
  { v: 42, s: "", l: "Countries Served" },
];

export default function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useState<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef[0]) {
      if (isPlaying) {
        videoRef[0].pause();
      } else {
        videoRef[0].play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef[0]) {
      videoRef[0].muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        ref={(el) => { videoRef[0] = el; }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.6)" }}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-white text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Live Production
            </span>
            
            <h1 className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.02] tracking-tight">
              Engineering Strength.
              <br />
              Building the <span className="text-gradient">Future</span>
            </h1>
            
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Watch how precision manufacturing meets industrial innovation at our state-of-the-art facility.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </Link>
              {/* <Link to="/virtual-tour" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur text-white font-semibold text-sm hover:bg-white/20 transition">
                <Play className="w-4 h-4" /> Virtual Tour
              </Link> */}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.l} className="glass rounded-xl px-4 py-4 bg-white/10 backdrop-blur">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-white">
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-white/60 mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-6 right-6 flex gap-2">
        <button
          onClick={togglePlay}
          className="glass rounded-full p-2 hover:bg-white/20 transition"
        >
          {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
        </button>
        <button
          onClick={toggleMute}
          className="glass rounded-full p-2 hover:bg-white/20 transition"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
        </button>
      </div>
    </section>
  );
}