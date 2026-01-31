
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Button } from './ui/button';
import { Github } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Guessing Game",
      description: "A Python-based terminal game with six interactive mini-games in a single modular file. Focused on clean user input handling, replay logic, and difficulty settings to enhance gameplay.",
      tech: ["Python", "CLI", "random", "time modules"],
      date: "April 2024",
      github: "https://github.com/Aadi-Varshney/Guessing-Game",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase projects and skills in an interactive format.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      date: "May 2025",
      github: "https://github.com/Aadi-Varshney/carlos-portfolio-revival",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and interests.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 flex flex-col h-full hover:border-amber-400 transition-colors">
              <CardHeader>
                <CardTitle className="text-amber-400">{project.title}</CardTitle>
                <CardDescription className="text-gray-400">{project.tech.join(", ")} | {project.date}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <AspectRatio ratio={16/9} className="bg-black/20 mb-4 rounded-md overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </AspectRatio>
                <p className="text-gray-300">{project.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="outline" 
                  className="w-full border-gray-600 hover:border-amber-400 hover:bg-transparent group"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 group-hover:text-amber-400" /> 
                    <span className="group-hover:text-amber-400">View on GitHub</span>
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
