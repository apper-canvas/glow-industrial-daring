import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const TeamCard = ({ member, className = "" }) => {
  return (
    <Card hover className={`team-card text-center p-6 ${className}`}>
      <div className="relative mb-6">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
          <img 
            src={member.image_c || "/api/placeholder/150/150"} 
            alt={member.name_c}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white rounded-full p-2 shadow-lg">
          <ApperIcon name="User" className="w-4 h-4 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name_c}</h3>
      <p className="text-accent font-medium mb-3">{member.role_c}</p>
      <p className="text-gray-600 text-sm mb-4">{member.bio_c}</p>
      <div className="flex items-center justify-center text-sm text-gray-500">
        <ApperIcon name="Award" className="w-4 h-4 mr-2" />
        <span>{member.experience_c} years experience</span>
      </div>
    </Card>
  );
};

export default TeamCard;