import React from 'react';
import { Brain, Sparkles, Shield, MessageCircle, ChevronRight, Bot, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <Brain className="text-indigo-600" size={28} />
              <span className="font-semibold text-xl">Mental AI</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition-colors">How it Works</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="text-indigo-600" size={24} />
              <span className="text-indigo-600 font-medium">AI-Powered Mental Wellness</span>
            </div>
            <h1 className="text-5xl font-bold text-gray-900">
              Your Personal Mental Health Companion
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Experience the future of mental wellness with our AI-powered platform that provides 
              personalized support, insights, and guidance for your emotional well-being.
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors 
                               flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ChevronRight size={20} />
              </button>
              <button className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg 
                               hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-16">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80" 
              alt="Mental wellness visualization" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Empowering Features</h2>
            <p className="mt-4 text-gray-600">Discover how Mental AI can help you achieve better mental wellness</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Bot className="text-indigo-600" size={32} />,
                title: "AI Therapy Assistant",
                description: "24/7 access to our advanced AI therapy assistant for immediate support and guidance."
              },
              {
                icon: <Shield className="text-indigo-600" size={32} />,
                title: "Private & Secure",
                description: "Your mental health data is protected with enterprise-grade encryption and privacy measures."
              },
              {
                icon: <Heart className="text-indigo-600" size={32} />,
                title: "Personalized Care",
                description: "Tailored mental wellness plans that adapt to your unique needs and progress."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Mental Wellness Journey Today
            </h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of others who have transformed their mental well-being with Mental AI's 
              innovative approach to emotional support and personal growth.
            </p>
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-medium 
                             hover:bg-indigo-50 transition-colors inline-flex items-center space-x-2">
              <MessageCircle size={20} />
              <span>Begin Free Trial</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Brain className="text-indigo-600" size={24} />
              <span className="font-semibold">Mental AI</span>
            </div>
            <div className="text-gray-600">
              © {new Date().getFullYear()} Mental AI. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;