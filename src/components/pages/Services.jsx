import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import ServiceCard from "@/components/molecules/ServiceCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import serviceService from "@/services/api/serviceService";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Machining", "Assembly", "Quality", "Design"];

  const loadServices = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await serviceService.getAll();
      setServices(data);
    } catch (err) {
      setError("Failed to load services");
      console.error("Error loading services:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadServices();
  }, []);

const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category_c === selectedCategory);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadServices} />;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <ApperIcon name="Settings" className="w-6 h-6 text-primary" />
            </div>
            <span className="text-primary font-medium text-lg">Our Capabilities</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Manufacturing 
            <span className="text-gradient"> Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive manufacturing solutions designed to meet your exact specifications. 
            From precision machining to complete assembly, we deliver excellence at every step.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <Empty 
            message="No services found" 
            description="Try selecting a different category or contact us for custom solutions."
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredServices.map((service) => (
              <ServiceCard key={service.Id} service={service} />
            ))}
          </div>
        )}

        {/* Process Overview */}
        <div className="gradient-bg-1 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From concept to completion, our streamlined process ensures quality results and on-time delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "Initial project discussion and requirements analysis", icon: "MessageCircle" },
              { step: "02", title: "Design & Planning", description: "Technical drawings, material selection, and timeline planning", icon: "FileText" },
              { step: "03", title: "Manufacturing", description: "Precision machining and assembly with quality checkpoints", icon: "Cog" },
              { step: "04", title: "Delivery", description: "Final inspection, packaging, and on-time delivery", icon: "Truck" }
            ].map((phase, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                  {phase.step}
                </div>
                <div className="w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center mx-auto mb-4 -mt-6 relative z-10">
                  <ApperIcon name={phase.icon} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary to-accent transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
          <div className="max-w-3xl mx-auto">
            <ApperIcon name="MessageSquare" className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our engineering team today to discuss your project requirements and receive a detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center px-8 py-4 text-white rounded-lg font-medium transition-all"
              >
                <ApperIcon name="Phone" className="w-5 h-5 mr-2" />
                Get Free Quote
              </a>
              <a 
                href="mailto:info@industrialhub.com" 
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all"
              >
                <ApperIcon name="Mail" className="w-5 h-5 mr-2" />
                Send Specifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;