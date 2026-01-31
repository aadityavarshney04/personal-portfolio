import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const technicalSkills = [
    { category: "Programming Languages", skills: ["Java", "Python"] },
    { category: "Web Technologies", skills: ["HTML", "CSS", "JavaScript", "React.js"] },
    { category: "Data Analysis", skills: ["MySQL", "Python (Pandas, NumPy)"] },
    { category: "Tools & Frameworks", skills: ["PowerPoint", "Google Sheets", "GitHub", "VS Code", "Git", "Shadcn UI"] },
  ];

  const softSkills = ["Teamwork", "Analytical Thinking", "Problem-Solving",];

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen overflow-hidden scroll-mt-5"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/VNv3W0Vc/elevated-view-laptop-earphones-crumpled-papers-pencil-blank-spiral-notepad-frame-black-background-23.avif')",
        }}
      />

      {/* Top & Bottom Blending Gradients */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0c0c0c] to-transparent z-10" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0c0c0c] to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-end min-h-screen p-6">
        <div className="w-full md:w-1/2 p-6 text-white">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">My Skills</h2>
            <div className="w-20 h-1 bg-amber-400 mx-auto mb-4"></div>
            <p>
              I've developed a range of technical and soft skills through my education,
              projects, and personal development.
            </p>
          </div>

          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid grid-cols-2 mb-6">
              <TabsTrigger value="technical" className="data-[state=active]:bg-amber-400 data-[state=active]:text-black">
                Technical
              </TabsTrigger>
              <TabsTrigger value="soft" className="data-[state=active]:bg-amber-400 data-[state=active]:text-black">
                Soft
              </TabsTrigger>
            </TabsList>

            <TabsContent value="technical">
              <div className="grid grid-cols-1 gap-4">
                {technicalSkills.map((item, index) => (
                  <Card key={index} className="bg-transparent border border-gray-600">
                    <CardHeader>
                      <CardTitle className="text-amber-400">{item.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`cursor-pointer px-3 py-1 rounded-full text-sm transition transform duration-200 ${
                              activeSkill === skill
                                ? 'bg-yellow-400 text-black scale-110'
                                : 'bg-gray-800/80 text-white hover:scale-105 hover:bg-yellow-500'
                            }`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="soft">
              <Card className="bg-transparent border border-gray-600">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-3 items-center">
                    {softSkills.map((skill, idx) => (
                      <div
                        key={idx}
                        className={`cursor-pointer px-5 py-3 rounded-lg text-lg w-full text-center transition transform duration-200 ${
                          activeSkill === skill
                            ? 'bg-yellow-400 text-black scale-110'
                            : 'bg-gray-800/80 text-white hover:scale-105 hover:bg-yellow-500'
                        }`}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
