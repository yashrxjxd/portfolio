import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { portfolioData } from "../mock";
import { Github, ExternalLink, Eye, Code, Zap, Award } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="bg-zinc-800/50 border-zinc-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20 group overflow-hidden relative animate-in slide-in-from-bottom-4"
      style={{ animationDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <CardHeader className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Badge className="bg-green-500/10 text-green-500 border-green-500/30">
                {project.category}
              </Badge>
              {project.accuracy && (
                <Badge className="bg-yellow-500/10 text-yellow-500 border-yellow-500/30">
                  <Award className="w-3 h-3 mr-1" />
                  {project.accuracy}
                </Badge>
              )}
            </div>
            <CardTitle className="text-2xl font-bold text-white group-hover:text-green-500 transition-colors duration-300">
              {project.title}
            </CardTitle>
            <p className="text-green-500 font-medium mt-1">{project.subtitle}</p>
          </div>
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              variant="outline"
              className="border-green-500/50 text-green-500 hover:bg-green-500 hover:text-black"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="border-green-500/50 text-green-500 hover:bg-green-500 hover:text-black"
              onClick={() => window.open(project.demoUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="relative z-10">
        <p className="text-gray-300 mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-green-500 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Key Features
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-green-500 mb-3 flex items-center gap-2">
            <Code className="w-4 h-4" />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge 
                key={idx}
                variant="outline"
                className="border-zinc-600 text-gray-300 hover:border-green-500/50 hover:text-green-500 transition-colors duration-300"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Project Status */}
        <div className="flex items-center justify-between pt-4 border-t border-zinc-700">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-500 font-medium">{project.status}</span>
          </div>
          
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white border-0"
              onClick={() => window.open(project.demoUrl, '_blank')}
            >
              <Eye className="w-4 h-4 mr-2" />
              View Demo
            </Button>
          </div>
        </div>
      </CardContent>

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
    </Card>
  );
};

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Showcasing innovative AI/ML solutions with real-world impact and exceptional performance metrics
            </p>
          </div>

          {/* Project Stats */}
          <div className="mb-16 animate-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center bg-zinc-800/30 rounded-2xl p-6 border border-zinc-700 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-green-500 mb-2">{projects.length}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Completed Projects</div>
              </div>
              <div className="text-center bg-zinc-800/30 rounded-2xl p-6 border border-zinc-700 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-green-500 mb-2">90%+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Best Accuracy</div>
              </div>
              <div className="text-center bg-zinc-800/30 rounded-2xl p-6 border border-zinc-700 hover:border-green-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-green-500 mb-2">CV + AI</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Specializations</div>
              </div>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="mb-12 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  className={filter === category 
                    ? "bg-gradient-to-r from-green-600 to-green-500 text-white border-0 hover:from-green-500 hover:to-green-400" 
                    : "border-zinc-600 text-gray-300 hover:border-green-500/50 hover:text-green-500 hover:bg-green-500/10"
                  }
                  onClick={() => setFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-green-500">Interested in Collaboration?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm always excited to work on challenging AI/ML projects. Let's build something amazing together!
              </p>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white border-0 px-8"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;