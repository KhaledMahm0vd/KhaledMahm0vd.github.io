import React from 'react';
import { ArrowRight, Database, TestTube2, Server } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Backend Development & Testing Expert
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Crafting robust backend solutions and ensuring quality through comprehensive testing
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Core Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Database className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
            <p className="text-gray-600">
              Building scalable APIs, microservices, and database architectures
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <TestTube2 className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Software Testing</h3>
            <p className="text-gray-600">
              Comprehensive testing strategies including unit, integration, and E2E testing
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Server className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">DevOps & CI/CD</h3>
            <p className="text-gray-600">
              Implementing automated deployment pipelines and infrastructure management
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}