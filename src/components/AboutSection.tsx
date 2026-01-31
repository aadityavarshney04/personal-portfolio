
import React from 'react';
import { Card, CardContent } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';

const AboutSection = () => {
  return <section id="about" className="py-20 bg-black-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-2">About Me</h2>
            <div className="w-20 h-1 bg-amber-400 mb-6"></div>
            <p className="text-gray-300 mb-6">
              I'm currently pursuing a B.Tech in Computer Science at Galgotias University, 
              Greater Noida. With a strong foundation in programming languages like 
              Java and Python, I am focused on mastering my problem-solving skills and 
              contributing to tech-driven solutions.
            </p>
            <p className="text-gray-300 mb-6">
              Alongside my technical expertise, I have certifications in Android 
              Development and Artificial Intelligence & Machine Learning.
            </p>
            <p className="text-gray-300">
              In my free time, I play tactical games, sports and music. These hobbies help me 
              stay balanced and bring creativity to my work.
            </p>
          </div>
          
          <div className="md:w-1/2 flex flex-col">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Personal Info</h2>
              <div className="w-20 h-1 bg-amber-400 mb-6"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-amber-400 font-semibold mb-2">Name</h3>
                    <p className="text-white">Aaditya Varshney</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-amber-400 font-semibold mb-2">Email</h3>
                    <p className="text-white">aaditya.varshney04@gmail.com</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-amber-400 font-semibold mb-2">Education</h3>
                    <p className="text-white">B.Tech in Computer Science</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-800 border-gray-700">
                  <CardContent className="p-6">
                    <h3 className="text-amber-400 font-semibold mb-2">University</h3>
                    <p className="text-white">Galgotias University</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <AspectRatio ratio={16 / 9} className="bg-gray-800 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Programmer at work" 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300" 
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default AboutSection;
