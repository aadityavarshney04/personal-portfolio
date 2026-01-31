
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { GraduationCap } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      institution: "Galgotias University, Greater Noida",
      period: "2022-2026",
      grade: "CGPA: 7.78"
    },
    {
      degree: "Class XII",
      institution: "Rajendra Lohia Vidya Mandir, CBSE",
      period: "2022",
      grade: "Percentage: 79.3%"
    },
    {
      degree: "Class X",
      institution: "Rajendra Lohia Vidya Mandir, CBSE",
      period: "2020",
      grade: "Percentage: 81%"
    }
  ];

  const certifications = [
    {
      name: "Google Android Developer",
      issuer: "AICTE & Google",
      year: "2025"
    },
    {
      name: "Artificial Intelligence & Machine Learning",
      issuer: "AICTE & Google",
      year: "2025"
    },
    {
      name: "Complier Design",
      issuer: "NPTEL",
      year: "2025"
    },
    {
      name: "Software Engineering",
      issuer: "NPTEL",
      year: "2024"
    },
    {
      name: "AWS Data Engineering",
      issuer: "AICTE & AWS Academy",
      year: "2024"
    },
  ];

  return (
    <section id="education" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Education & Certifications</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <GraduationCap className="mr-2 text-amber-400" /> Education
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-amber-400">{item.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white mb-1">{item.institution}</p>
                    <p className="text-gray-400 mb-2">{item.period}</p>
                    <p className="text-gray-300">{item.grade}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((item, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-amber-400">{item.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">{item.issuer}</p>
                    <p className="text-gray-400">{item.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
