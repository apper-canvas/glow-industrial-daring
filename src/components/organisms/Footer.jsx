import React from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";

const Footer = () => {
  const services = [
    "Precision Machining",
    "Custom Manufacturing",
    "Assembly Services",
    "Quality Control"
  ];

  const company = [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about" },
    { name: "Careers", path: "/contact" },
    { name: "News", path: "/" }
  ];

  const contact = [
    { icon: "MapPin", text: "123 Industrial Drive, Manufacturing City, MC 12345" },
    { icon: "Phone", text: "(555) 123-4567" },
    { icon: "Mail", text: "info@industrialhub.com" },
    { icon: "Clock", text: "Mon-Fri: 7AM-6PM" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <ApperIcon name="Factory" className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gradient">Industrial Hub</h3>
                <p className="text-sm text-gray-400">Manufacturing Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Leading manufacturer providing precision machining and custom manufacturing solutions 
              for over 25 years. Quality, reliability, and innovation drive everything we do.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <ApperIcon name="Linkedin" className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <ApperIcon name="Twitter" className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <ApperIcon name="Youtube" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-gray-300 hover:text-accent transition-colors flex items-center"
                  >
                    <ApperIcon name="ChevronRight" className="w-4 h-4 mr-2" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="text-gray-300 hover:text-accent transition-colors flex items-center"
                  >
                    <ApperIcon name="ChevronRight" className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contact.map((item, index) => (
                <li key={index} className="flex items-start">
                  <ApperIcon name={item.icon} className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <ApperIcon name="Award" className="w-4 h-4 text-accent" />
                <span>ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <ApperIcon name="Shield" className="w-4 h-4 text-accent" />
                <span>AS9100D Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <ApperIcon name="CheckCircle" className="w-4 h-4 text-accent" />
                <span>ITAR Registered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Industrial Hub Manufacturing. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;