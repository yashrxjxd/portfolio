import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Github, Mail, MapPin, ChevronDown } from "lucide-react";
import { portfolioData } from "../mock";

const TypingEffect = ({ text, speed = 100, className = "" }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span className={className}>{displayText}</span>;
};

const Hero = () => {
  const { personal } = portfolioData;
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTyping(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* 3D Geometric Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-32 h-32 border border-green-500/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 bg-gradient-to-r from-green-500/20 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-green-400 rounded-full animate-ping delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Animation */}
          <div className="mb-8 animate-in slide-in-from-bottom-4 duration-1000">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-green-500 to-white bg-clip-text text-transparent">
              {personal.name}
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-4 font-mono">
              {showTyping ? (
                <TypingEffect 
                  text={personal.title}
                  speed={80}
                  className="border-r-2 border-green-500 pr-1 animate-pulse"
                />
              ) : (
                <span className="opacity-0"></span>
              )}
            </div>
            <p className="text-lg md:text-xl text-green-500 font-semibold animate-in slide-in-from-bottom-4 duration-1000 delay-500">
              {personal.subtitle}
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-12 animate-in slide-in-from-bottom-4 duration-1000 delay-700">
            <p className="text-xl md:text-2xl text-gray-200 italic font-light max-w-2xl mx-auto leading-relaxed">
              "{personal.tagline}"
            </p>
          </div>

          {/* Stats/Highlights */}
          <div className="mb-12 animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">90%+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">ASL Detection Accuracy</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">4+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">AI/ML Certifications</div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold text-green-500 mb-2">2025</div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">ML Industry Experience</div>
              </div>
            </div>
          </div>

          {/* Contact Info Quick Access */}
          <div className="mb-12 animate-in slide-in-from-bottom-4 duration-1000 delay-1200">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 hover:text-green-500 transition-colors duration-300">
                <Mail size={16} />
                <span>{personal.email}</span>
              </div>
              <div className="flex items-center gap-2 hover:text-green-500 transition-colors duration-300">
                <MapPin size={16} />
                <span>Ahmedabad, India</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-16 animate-in slide-in-from-bottom-4 duration-1000 delay-1400">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white border-0 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
                onClick={() => scrollToAbout()}
              >
                Explore My Work
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-green-500 text-green-500 hover:bg-green-500 hover:text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                onClick={() => window.open('#', '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-1600">
            <button 
              onClick={scrollToAbout}
              className="mx-auto flex flex-col items-center text-gray-500 hover:text-green-500 transition-colors duration-300 group"
            >
              <span className="text-xs uppercase tracking-wider mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-green-500" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating Code Snippets */}
      <div className="absolute top-20 right-10 opacity-20 animate-float hidden lg:block">
        <pre className="text-xs text-green-500 font-mono">
{`import tensorflow as tf
model = tf.keras.Sequential([
  tf.keras.layers.Conv2D(32, 3),
  tf.keras.layers.MaxPooling2D(),
  tf.keras.layers.Dense(10)
])`}
        </pre>
      </div>

      <div className="absolute bottom-32 left-10 opacity-20 animate-float-delayed hidden lg:block">
        <pre className="text-xs text-green-500 font-mono">
{`# ASL Detection Pipeline
def predict_sign(image):
    preprocessed = preprocess(image)
    prediction = model.predict(preprocessed)
    return decode_prediction(prediction)`}
        </pre>
      </div>
    </section>
  );
};

export default Hero;