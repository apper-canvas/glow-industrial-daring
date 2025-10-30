import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const HeroSection = () => {
  const stats = [
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Expert Team Members" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="hero-gradient text-white py-20 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <ApperIcon name="Factory" className="w-6 h-6 text-white" />
              </div>
              <span className="text-white/90 font-medium">Manufacturing Excellence Since 1999</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Precision Manufacturing 
              <span className="block text-accent-gradient">Solutions</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              From prototyping to full-scale production, we deliver world-class manufacturing 
              services with unmatched precision, quality, and reliability. Your vision, our expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button variant="accent" size="lg" className="w-full sm:w-auto">
                  <ApperIcon name="MessageCircle" className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                  <ApperIcon name="ArrowRight" className="w-5 h-5 mr-2" />
                  Explore Services
                </Button>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl font-bold text-accent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="backdrop-blur-glass rounded-2xl p-6 text-center">
                  <ApperIcon name="Cog" className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Precision Engineering</h3>
                  <p className="text-white/80 text-sm">±0.0001" tolerances</p>
                </div>
                <div className="backdrop-blur-glass rounded-2xl p-6 text-center">
                  <ApperIcon name="Award" className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Quality Certified</h3>
                  <p className="text-white/80 text-sm">ISO 9001:2015</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="backdrop-blur-glass rounded-2xl p-6 text-center">
                  <ApperIcon name="Clock" className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                  <p className="text-white/80 text-sm">On-time guarantee</p>
                </div>
                <div className="backdrop-blur-glass rounded-2xl p-6 text-center">
                  <ApperIcon name="Users" className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Expert Team</h3>
                  <p className="text-white/80 text-sm">50+ specialists</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;