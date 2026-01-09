import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { FaCode, FaServer, FaTools, FaCloud } from 'react-icons/fa';

const Skills: React.FC = () => {
  const categories = [
    { id: 'frontend', name: 'Frontend', icon: <FaCode />, color: 'text-blue-500' },
    { id: 'backend', name: 'Backend', icon: <FaServer />, color: 'text-green-500' },
    { id: 'devops', name: 'DevOps', icon: <FaCloud />, color: 'text-purple-500' },
    { id: 'tools', name: 'Tools', icon: <FaTools />, color: 'text-orange-500' },
  ];

  const getSkillsByCategory = (categoryId: string) => {
    return skills.filter(skill => skill.category === categoryId);
  };

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`text-3xl mb-4 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.name}
              </h3>
              <div className="space-y-4">
                {getSkillsByCategory(category.id).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-primary font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-6">What I Bring to the Table</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <h4 className="font-bold mb-2">Fast Development</h4>
              <p className="text-blue-100">Quick prototyping and efficient coding practices</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🔧</div>
              <h4 className="font-bold mb-2">Problem Solving</h4>
              <p className="text-blue-100">Analytical approach to complex technical challenges</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🤝</div>
              <h4 className="font-bold mb-2">Team Collaboration</h4>
              <p className="text-blue-100">Experience working in Agile/Scrum teams</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;