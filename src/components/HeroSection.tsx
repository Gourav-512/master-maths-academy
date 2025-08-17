import { Phone, PhoneCall } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
      
      {/* Floating Math Elements */}
      <div className="floating-element top-20 left-10 text-6xl animate-float">📐</div>
      <div className="floating-element top-40 right-20 text-5xl animate-bounce-slow" style={{ animationDelay: '1s' }}>📚</div>
      <div className="floating-element bottom-32 left-20 text-4xl animate-float" style={{ animationDelay: '2s' }}>📊</div>
      <div className="floating-element top-60 right-10 text-5xl animate-bounce-slow" style={{ animationDelay: '3s' }}>🧮</div>
      <div className="floating-element bottom-20 right-32 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>⚡</div>
      
      {/* Admissions Open Badge */}
      <div className="absolute top-8 right-8 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold text-sm animate-pulse-glow z-10">
        🎓 Admissions Open!
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Master Maths Academy
          </h1>
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold text-secondary-light mb-4">
            Shaping Minds, Building Futures
          </div>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Expert Coaching for Grades 1st to 12th | Maths, Science, English, Physics, Chemistry
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <button className="btn-hero group">
            🎯 Enroll Now
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
          
          <a 
            href="tel:9011913559" 
            className="btn-primary group flex items-center gap-3"
          >
            <PhoneCall size={20} className="transition-transform group-hover:rotate-12" />
            Call Now: 9011913559
          </a>
        </div>
        
        {/* Highlight Features */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center">
            <div className="text-3xl mb-2">👨‍🏫</div>
            <div className="text-white/90 font-medium">Expert Faculty</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">👥</div>
            <div className="text-white/90 font-medium">Personal Attention</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-white/90 font-medium">Regular Tests</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">💰</div>
            <div className="text-white/90 font-medium">Affordable Fees</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;