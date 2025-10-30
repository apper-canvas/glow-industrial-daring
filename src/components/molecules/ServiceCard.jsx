import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const ServiceCard = ({ service, className = "" }) => {
  return (
    <Card hover className={`service-card p-6 h-full ${className}`}>
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-6">
        <ApperIcon name={service.icon} className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
      <div className="space-y-2">
        {service.capabilities?.slice(0, 3).map((capability, index) => (
          <div key={index} className="flex items-center text-sm text-gray-700">
            <ApperIcon name="Check" className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
            <span>{capability}</span>
          </div>
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="text-primary hover:text-accent font-medium transition-colors flex items-center">
          Learn More 
          <ApperIcon name="ArrowRight" className="w-4 h-4 ml-2" />
        </button>
      </div>
    </Card>
  );
};

export default ServiceCard;