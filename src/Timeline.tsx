import { motion } from 'framer-motion';

const timeline = [
  {
    year: "2024",
    title: "AI Software Developer",
    institution: "Resilience inc",
    description: "Leading mobile and AI projects"
  },
  {
    year: "2022",
    title: "Master's in Computer Science",
    institution: "University At Buffalo",
    description: "Specialized in AI/ML and Mobile Computing"
  },
  {
    year: "2020",
    title: "Software Engineering Intern",
    institution: "StartUp Inc",
    description: "Full-stack development experience"
  },
  {
    year: "2016",
    title: "Bachelor's in Computer Engineering",
    institution: "Engineering College",
    description: "First Class with Distinction"
  }
];

export default function Timeline() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Timeline</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-500"/>
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-8 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'} md:w-1/2`}
            >
              <div className="bg-gray-800 p-6 rounded-lg">
                <div className="absolute top-6 -left-3 w-6 h-6 bg-teal-500 rounded-full"/>
                <span className="text-teal-400 font-bold">{item.year}</span>
                <h3 className="text-xl font-bold text-white mt-2">{item.title}</h3>
                <p className="text-gray-400">{item.institution}</p>
                <p className="text-gray-300 mt-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
