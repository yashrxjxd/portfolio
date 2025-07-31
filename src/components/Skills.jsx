import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { portfolioData } from "../mock";

const SkillBar = ({ skill, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level]);

  return (
    <div className="mb-6 group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium text-white group-hover:text-green-500 transition-colors duration-300">
          {skill.name}
        </span>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-xs border-zinc-600 text-gray-400">
            {skill.category}
          </Badge>
          <span className="text-sm text-green-500 font-mono">{skill.level}%</span>
        </div>
      </div>
      <div className="w-full bg-zinc-800 rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
          style={{ width: `${animatedLevel}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

const SkillCategory = ({ title, skills, icon, isVisible, delay = 0 }) => {
  return (
    <Card className={`bg-zinc-800/50 border-zinc-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/10 ${isVisible ? 'animate-in slide-in-from-bottom-4' : 'opacity-0'}`} style={{ animationDelay: `${delay}ms` }}>
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-green-500">
          {icon && <span className="text-2xl">{icon}</span>}
          <span className="text-xl font-bold">{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {skills.map((skill, index) => (
          <SkillBar key={index} skill={skill} isVisible={isVisible} />
        ))}
      </CardContent>
    </Card>
  );
};

const Skills = () => {
  const { skills } = portfolioData;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming & Data Science",
      skills: skills.programming,
      icon: "🐍",
      delay: 0
    },
    {
      title: "AI/ML Frameworks",
      skills: skills.frameworks,
      icon: "🧠",
      delay: 200
    },
    {
      title: "Generative AI & LLMs",
      skills: skills.ai,
      icon: "🤖",
      delay: 400
    },
    {
      title: "Soft Skills",
      skills: skills.soft,
      icon: "⚡",
      delay: 600
    }
  ];

  // Calculate overall proficiency
  const allSkills = [
    ...skills.programming,
    ...skills.frameworks,
    ...skills.databases,
    ...skills.ai,
    ...skills.soft
  ];
  const averageLevel = Math.round(
    allSkills.reduce((sum, skill) => sum + skill.level, 0) / allSkills.length
  );

  return (
    <section ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized in cutting-edge machine learning technologies with hands-on experience in production environments
            </p>
          </div>

          {/* Overall Stats */}
          <div className="mb-16 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-zinc-800/30 rounded-2xl p-6 border border-zinc-700 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-green-500 mb-2">{allSkills.length}+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Technologies</div>
              </div>
              <div className="text-center bg-zinc-800/30 rounded-2xl p-6 border border-zinc-700 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-green-500 mb-2">{averageLevel}%</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Avg Proficiency</div>
              </div>
              <div className="text-center bg-zinc-800/30 rounded-2xl p-6 border border-zinc-700 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-green-500 mb-2">3+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Years Learning</div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory
                key={index}
                title={category.title}
                skills={category.skills}
                icon={category.icon}
                isVisible={isVisible}
                delay={category.delay}
              />
            ))}
          </div>

          {/* Database & Special Skills */}
          {skills.databases.length > 0 && (
            <div className="mt-8 animate-in slide-in-from-bottom-4 duration-1000 delay-800">
              <Card className="bg-zinc-800/50 border-zinc-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/10">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-green-500">
                    <span className="text-2xl">🗄️</span>
                    <span className="text-xl font-bold">Database & Systems</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  {skills.databases.map((skill, index) => (
                    <SkillBar key={index} skill={skill} isVisible={isVisible} />
                  ))}
                </CardContent>
              </Card>
            </div>
          )}

          {/* Technology Focus */}
          <div className="mt-16 text-center animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-green-500">Current Focus Areas</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {["Computer Vision", "Deep Learning", "Generative AI", "LLM Fine-tuning", "MLOps", "Real-time AI"].map((tech, index) => (
                  <Badge key={index} className="bg-green-500/10 text-green-500 border-green-500/30 hover:bg-green-500/20 transition-colors duration-300 px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;