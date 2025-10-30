import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import ServiceCard from "@/components/molecules/ServiceCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import serviceService from "@/services/api/serviceService";

const ServicesOverview = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadServices = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await serviceService.getAll();
      setServices(data.slice(0, 6)); // Show only first 6 services
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

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadServices} />;
  if (services.length === 0) return <Empty message="No services available" />;

  return (
    <section className="py-20 gradient-bg-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <ApperIcon name="Settings" className="w-5 h-5 text-primary" />
            </div>
            <span className="text-primary font-medium">Our Capabilities</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Manufacturing 
            <span className="text-gradient"> Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive manufacturing solutions from concept to completion. 
            We deliver precision, quality, and reliability across all our services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.Id} service={service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="mr-4">
              <ApperIcon name="Eye" className="w-5 h-5 mr-2" />
              View All Services
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" size="lg">
              <ApperIcon name="MessageCircle" className="w-5 h-5 mr-2" />
              Discuss Your Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;