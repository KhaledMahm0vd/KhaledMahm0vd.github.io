import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  const skills = [
    'Node.js & Express.js',
    'Python & Django',
    'Jest & Cypress',
    'Docker & Kubernetes',
    'MongoDB & PostgreSQL',
    'CI/CD Pipelines',
    'API Design',
    'Test Automation'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
          <div className="prose prose-indigo max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate backend developer and testing specialist with over 5 years
              of experience in building robust and scalable applications. My expertise
              lies in creating efficient backend systems and implementing comprehensive
              testing strategies.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Throughout my career, I've worked with various technologies and frameworks,
              always focusing on writing clean, maintainable code and ensuring the highest
              quality through thorough testing methodologies.
            </p>
            <p className="text-lg text-gray-600">
              I'm constantly learning and staying up-to-date with the latest technologies
              and best practices in software development and testing.
            </p>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-indigo-600" />
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}