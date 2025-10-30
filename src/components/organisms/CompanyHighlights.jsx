import React from "react";
import ApperIcon from "@/components/ApperIcon";

const CompanyHighlights = () => {
  const highlights = [
    {
      icon: "Trophy",
      title: "Industry Leader",
      description: "25+ years of manufacturing excellence with award-winning quality standards",
      stats: "500+ Projects Completed"
    },
    {
      icon: "Shield",
      title: "Quality Assured",
      description: "ISO 9001:2015 and AS9100D certified with rigorous quality control processes",
      stats: "99.8% Quality Rating"
    },
    {
      icon: "Users",
      title: "Expert Team",
      description: "Highly skilled engineers and technicians with decades of combined experience",
      stats: "50+ Specialists"
    },
    {
      icon: "Clock",
      title: "On-Time Delivery",
      description: "Reliable project management and efficient processes ensure timely completion",
      stats: "98% On-Time Rate"
    }
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management" },
    { name: "AS9100D", description: "Aerospace Standards" },
    { name: "ITAR Registered", description: "Defense Manufacturing" },
    { name: "RoHS Compliant", description: "Environmental Standards" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <ApperIcon name="Star" className="w-5 h-5 text-primary" />
            </div>
            <span className="text-primary font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Manufacturing 
            <span className="text-gradient"> Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies worldwide for our commitment to quality, 
            precision, and innovation in manufacturing solutions.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="text-center group card-hover bg-gradient-to-br from-white to-surface rounded-2xl p-8 border border-gray-200 shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <ApperIcon name={highlight.icon} className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h3>
              <p className="text-gray-600 mb-4">{highlight.description}</p>
              <div className="text-accent font-bold text-lg">{highlight.stats}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="backdrop-blur-glass rounded-2xl p-8 border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Certifications & Standards
            </h3>
            <p className="text-gray-600">
              Maintaining the highest industry standards and compliance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-white/50 transition-colors">
                <div className="flex items-center justify-center mb-3">
                  <ApperIcon name="Award" className="w-8 h-8 text-accent" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHighlights;