import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Download, Mail, Award, BookOpen, Code, Users } from 'lucide-react';
import profilePic from './profile-pic.png';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-white">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Rahul Nimbalkar
            </h1>
            <h2 className="text-2xl mb-6 text-gray-300">
              AI Software Developer | SDE | AI/ML Engineer
            </h2>
            <p className="text-gray-400 mb-8">
              Passionate about building intelligent systems and solving complex problems through AI and software engineering.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Rahulraonimbalkar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/rahul-nimbalkarr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://twitter.com/rahulnimbalkar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.instagram.com/rahulrao__45/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="src/profile-pic.png"
              alt="Rahul Nimbalkar"
              className="rounded-full w-64 h-64 object-cover mx-auto border-4 border-purple-500"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Code, label: "Projects Completed", value: "10+" },
            
            { icon: Award, label: "Awards Won", value: "5+" },
            { icon: BookOpen, label: "Publications", value: "2" },
          ].map((stat, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-transform">
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              company: "Resilience Inc",
              role: "AI Software Developer",
              period: "Jan 2024 - Present",
              description: "Leading AI/ML initiatives and developing cutting-edge solutions"
            },
            {
              company: "Protonn",
              role: "Software Developer",
              period: "Feb 2021 - June 2022",
              description: "Full-stack development and ML model deployment"
            },
            {
              company: "University At Buffalo",
              role: "Teaching assistant",
              period: "Jan 2023 - May2023",
              description: "Developed and optimized ML models for production"
            },
            {
              company: "Shantala Pvt Ltd",
              role: "Data Analyst",
              period: "June 2020 - Dec 2020",
              description: "Data Analysis and e-commerce recommendation engine"
            }
          ].map((exp, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
              <h4 className="text-purple-400 mb-2">{exp.role}</h4>
              <p className="text-gray-400 mb-2">{exp.period}</p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "AI-Powered Analytics Platform",
              description: "Built an end-to-end analytics platform using machine learning",
              tech: ["Python", "TensorFlow", "React", "AWS"],
              image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?fit=crop&w=800&h=400"
            },
            {
              title: "Movie Recommendation Engine",
              description: "Developed a personalized recommendation system",
              tech: ["Python", "PyTorch", "FastAPI", "MongoDB"],
              image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?fit=crop&w=800&h=400"
            },
            {
              title: "Facial emotion detection",
              description: "Implemented object detection and recognition system",
              tech: ["Python", "OpenCV", "YOLO", "Docker"],
              image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=800&h=400"
            },
            {
              title: "RAG enhanced chat Platform",
              description: "Created an intelligent chatbot platform",
              tech: ["Python", "BERT", "Node.js", "Redis"],
              image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?fit=crop&w=800&h=400"
            }
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover hover:opacity-75 transition-opacity"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Education</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              degree: "Master of Science in Computer Science",
              school: "University At Buffalo",
              period: "2022 - 2024",
              description: "Specialized in Artificial Intelligence and Machine Learning"
            },
            {
              degree: "Bachelor of Engineering in Computer Science",
              school: "Visvesvaraya Institute of Technology",
              period: "2016 - 2020",
              description: "First Class with Distinction"
            }
          ].map((edu, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <h4 className="text-purple-400 mb-2">{edu.school}</h4>
              <p className="text-gray-400 mb-2">{edu.period}</p>
              <p className="text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Certifications</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "AWS Certified Machine Learning Specialist",
              issuer: "Amazon Web Services",
              year: "2023"
            },
            {
              title: "AWS Certified Assoiate Developer",
              issuer: "AWS",
              year: "2023"
            },
            // {
            //   title: "Deep Learning Specialization",
            //   issuer: "DeepLearning.AI",
            //   year: "2021"
            // }
          ].map((cert, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-purple-400 mb-1">{cert.issuer}</p>
              <p className="text-gray-400">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Python", "TensorFlow", "PyTorch", "Machine Learning",
            "Deep Learning", "Computer Vision", "NLP", "React",
            "Node.js", "AWS", "Docker", "MongoDB"
          ].map((skill, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-purple-500 transition-colors">
              <span className="text-white">{skill}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gray-800 p-8 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Get In Touch</h2>
          <div className="flex flex-col space-y-4 items-center">
            <a href="mailto:contact@rahulnimbalkar.com" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Mail size={20} />
              <span>contact@rahulnimbalkar.com</span>
            </a>
            <a href="/resume.pdf" download className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
