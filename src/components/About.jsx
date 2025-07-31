import React from "react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { portfolioData } from "../mock";
import { Brain, Code, Zap, Target } from "lucide-react";

const About = () => {
  const { personal, education } = portfolioData;

  const highlights = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Research Focus",
      description: "Deep dive into neural networks and cutting-edge ML algorithms"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Production Ready",
      description: "Building scalable ML solutions from concept to deployment"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Driven",
      description: "Pushing boundaries with creative problem-solving approaches"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Results Oriented",
      description: "90%+ accuracy achievements in computer vision projects"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Bio Section */}
            <div className="animate-in slide-in-from-left-4 duration-1000 delay-300">
              <h3 className="text-2xl font-bold mb-6 text-green-500">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  {personal.bio}
                </p>
                <p className="text-lg border-l-4 border-green-500 pl-4 bg-zinc-800/50 p-4 rounded-r-lg">
                  {personal.personalEdge}
                </p>
              </div>
            </div>

            {/* Education Section */}
            <div className="animate-in slide-in-from-right-4 duration-1000 delay-500">
              <h3 className="text-2xl font-bold mb-6 text-green-500">Education</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <Card key={edu.id} className="bg-zinc-800/50 border-zinc-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-white">{edu.degree}</h4>
                        {edu.status === "Current" && (
                          <Badge className="bg-green-500 text-black hover:bg-green-400">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-green-500 font-medium mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-400">{edu.duration}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="animate-in slide-in-from-bottom-4 duration-1000 delay-700">
            <h3 className="text-2xl font-bold mb-8 text-center text-green-500">What Drives Me</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="bg-zinc-800/50 border-zinc-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-2 group">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/10 rounded-lg mb-4 group-hover:bg-green-500/20 transition-colors duration-300">
                      <div className="text-green-500 group-hover:scale-110 transition-transform duration-300">
                        {highlight.icon}
                      </div>
                    </div>
                    <h4 className="font-semibold text-white mb-2">{highlight.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievement Quote */}
          <div className="mt-16 text-center animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl border border-green-500/20">
              <blockquote className="text-xl md:text-2xl font-light italic text-gray-200 mb-4">
                "From the first time I explored neural networks, I've been driven by curiosity and a relentless urge to push boundaries."
              </blockquote>
              <cite className="text-green-500 font-medium">— Building the future, one model at a time</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;