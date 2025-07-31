import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { portfolioData } from "../mock";
import { Building, Calendar, Award, TrendingUp } from "lucide-react";

const ExperienceCard = ({ experience, index }) => {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700 hover:border-green-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-green-500/10 group animate-in slide-in-from-left-4" style={{ animationDelay: `${index * 200}ms` }}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-xl font-bold text-white group-hover:text-green-500 transition-colors duration-300 flex items-center gap-2">
              <Building className="w-5 h-5 text-green-500" />
              {experience.company}
            </CardTitle>
            <p className="text-green-500 font-semibold mt-1">{experience.position}</p>
            <div className="flex items-center gap-2 mt-2">
              <Calendar className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">{experience.duration}</span>
              <Badge className="bg-green-500/10 text-green-500 border-green-500/30 ml-2">
                {experience.type}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-green-500 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {experience.achievements.map((achievement, idx) => (
              <li key={idx} className="text-sm text-gray-300 flex items-start gap-2">
                <div className="w-1 h-1 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

const CertificationCard = ({ certification, index }) => {
  return (
    <Card className="bg-zinc-800/50 border-zinc-700 hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10 group animate-in slide-in-from-right-4" style={{ animationDelay: `${index * 100}ms` }}>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors duration-300">
              <Award className="w-6 h-6 text-green-500" />
            </div>
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-white group-hover:text-green-500 transition-colors duration-300">
              {certification.title}
            </h4>
            <p className="text-green-500 text-sm font-medium mt-1">{certification.issuer}</p>
            <p className="text-gray-400 text-sm mt-1">{certification.year}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  const { experience, certifications } = portfolioData;

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent">
              Experience & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional journey in machine learning with industry experience and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Work Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-green-500 animate-in slide-in-from-left-4 duration-1000 delay-300">
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <ExperienceCard key={exp.id} experience={exp} index={index} />
                ))}
              </div>

              {/* Timeline Visualization */}
              <div className="mt-8 animate-in slide-in-from-left-4 duration-1000 delay-500">
                <div className="bg-zinc-800/30 rounded-2xl p-6 border border-zinc-700">
                  <h4 className="text-lg font-semibold text-green-500 mb-4">Career Timeline</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-white font-medium">Current: B.Tech AI/ML Student</p>
                        <p className="text-sm text-gray-400">2023 - 2027</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div>
                        <p className="text-white font-medium">ML Engineering Internship</p>
                        <p className="text-sm text-gray-400">2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                      <div>
                        <p className="text-white font-medium">High School Completion</p>
                        <p className="text-sm text-gray-400">2020 - 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-green-500 animate-in slide-in-from-right-4 duration-1000 delay-300">
                Certifications & Learning
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <CertificationCard key={cert.id} certification={cert} index={index} />
                ))}
              </div>

              {/* Learning Stats */}
              <div className="mt-8 animate-in slide-in-from-right-4 duration-1000 delay-700">
                <div className="bg-zinc-800/30 rounded-2xl p-6 border border-zinc-700">
                  <h4 className="text-lg font-semibold text-green-500 mb-4">Learning Achievements</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500 mb-1">{certifications.length}</div>
                      <div className="text-sm text-gray-400">Certifications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500 mb-1">2024</div>
                      <div className="text-sm text-gray-400">Most Active Year</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills Focus */}
              <div className="mt-6 animate-in slide-in-from-right-4 duration-1000 delay-900">
                <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-6 rounded-2xl border border-green-500/20">
                  <h4 className="text-lg font-semibold text-green-500 mb-4">Certification Focus Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {["LLaMA 2 & 3", "Supervised Learning", "Neural Networks", "Generative AI"].map((skill, index) => (
                      <Badge key={index} className="bg-green-500/10 text-green-500 border-green-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Future Goals */}
          <div className="mt-16 text-center animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
            <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900/50 p-8 rounded-2xl border border-green-500/20">
              <h3 className="text-2xl font-bold mb-4 text-green-500">What's Next?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Currently seeking opportunities in AI research and development, with a focus on computer vision and generative AI applications in real-world scenarios.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {["PhD Research", "AI Startup", "Big Tech", "Open Source"].map((goal, index) => (
                  <Badge key={index} className="bg-green-500/10 text-green-500 border-green-500/30 px-4 py-2">
                    {goal}
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

export default Experience;