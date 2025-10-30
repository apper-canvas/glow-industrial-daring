import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const EquipmentCard = ({ equipment, className = "" }) => {
  const parseSpecifications = (specsString) => {
    try {
      return typeof specsString === 'string' ? JSON.parse(specsString) : specsString || {};
    } catch (e) {
      return {};
    }
  };

  const specifications = parseSpecifications(equipment.specifications_c);

  return (
    <Card hover className={`overflow-hidden ${className}`}>
      <div className="relative image-overlay">
        <img 
          src="https://picsum.photos/400/250?random=equipment" 
          alt={equipment.name_c}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
          {equipment.category_c}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{equipment.name_c}</h3>
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          {Object.entries(specifications).slice(0, 4).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
              <span className="font-medium text-gray-900">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default EquipmentCard;