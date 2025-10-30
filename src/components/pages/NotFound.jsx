import React from "react";
import { useNavigate } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-slate-100">
      <div className="text-center space-y-6 p-8 max-w-md">
        <div className="flex justify-center">
          <div className="bg-blue-100 p-6 rounded-full">
            <ApperIcon name="AlertCircle" size={64} className="text-blue-600" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h1 className="text-6xl font-bold text-gradient">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
          <p className="text-gray-600 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Button
            onClick={() => navigate("/")}
            className="btn-primary text-white px-6 py-3 rounded-lg font-medium inline-flex items-center gap-2"
          >
            <ApperIcon name="Home" size={20} />
            Back to Home
          </Button>
          
          <Button
            onClick={() => navigate(-1)}
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 inline-flex items-center gap-2"
          >
            <ApperIcon name="ArrowLeft" size={20} />
            Go Back
          </Button>
        </div>

        <div className="pt-6 border-t border-gray-200 mt-8">
          <p className="text-sm text-gray-500">
            Need help? <a href="/contact" className="text-blue-600 hover:underline font-medium">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;