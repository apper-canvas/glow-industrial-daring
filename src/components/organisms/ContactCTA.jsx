import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const ContactCTA = () => {
  const contactMethods = [
    {
      icon: "Phone",
      title: "Call Us",
      description: "Speak with our experts",
      detail: "(555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: "Mail",
      title: "Email Us",
      description: "Send us your requirements",
      detail: "info@industrialhub.com",
      action: "mailto:info@industrialhub.com"
    },
    {
      icon: "MapPin",
      title: "Visit Us",
      description: "Tour our facility",
      detail: "123 Industrial Drive",
      action: "#"
    }
  ];

  return (
    <section className="py-20 hero-gradient text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <ApperIcon name="MessageSquare" className="w-5 h-5 text-white" />
            </div>
            <span className="text-white/90 font-medium">Get In Touch</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Start Your 
            <span className="block text-accent">Next Project?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            From initial consultation to final delivery, we're here to support your manufacturing needs. 
            Contact us today for a free quote and consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/contact">
              <Button variant="accent" size="lg" className="w-full sm:w-auto">
                <ApperIcon name="FileText" className="w-5 h-5 mr-2" />
                Get Free Quote
              </Button>
            </Link>
            <Link to="/equipment">
              <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                <ApperIcon name="Eye" className="w-5 h-5 mr-2" />
                View Our Capabilities
              </Button>
            </Link>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.action}
              className="backdrop-blur-glass rounded-2xl p-8 text-center card-hover transition-all duration-300 hover:bg-white/20 group"
            >
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <ApperIcon name={method.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
              <p className="text-white/80 mb-4">{method.description}</p>
              <p className="text-accent font-medium text-lg">{method.detail}</p>
            </a>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-accent mb-2">24hrs</div>
            <div className="text-white/80">Quote Response</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">Free</div>
            <div className="text-white/80">Initial Consultation</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">100%</div>
            <div className="text-white/80">Satisfaction Guarantee</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">25+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;