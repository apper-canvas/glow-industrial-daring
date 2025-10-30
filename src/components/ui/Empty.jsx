import React from "react";
import ApperIcon from "@/components/ApperIcon";

const Empty = ({ 
  message = "No items found", 
  description = "Get started by adding your first item.",
  actionLabel = "Get Started",
  onAction 
}) => {
  return (
    <div className="flex items-center justify-center min-h-[300px]">
      <div className="text-center max-w-md mx-auto p-6">
        <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <ApperIcon name="Factory" className="w-10 h-10 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{message}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        {onAction && (
          <button
            onClick={onAction}
            className="btn-primary inline-flex items-center px-6 py-3 text-white rounded-lg font-medium transition-all"
          >
            <ApperIcon name="Plus" className="w-4 h-4 mr-2" />
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Empty;