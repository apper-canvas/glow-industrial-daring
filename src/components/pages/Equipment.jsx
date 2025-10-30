import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import EquipmentCard from "@/components/molecules/EquipmentCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import equipmentService from "@/services/api/equipmentService";

const Equipment = () => {
  const [equipment, setEquipment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "CNC Machines", "Inspection", "Assembly", "Finishing"];

  const loadEquipment = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await equipmentService.getAll();
      setEquipment(data);
    } catch (err) {
      setError("Failed to load equipment");
      console.error("Error loading equipment:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEquipment();
  }, []);

  const filteredEquipment = selectedCategory === "All" 
    ? equipment 
    : equipment.filter(item => item.category === selectedCategory);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadEquipment} />;

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <ApperIcon name="Wrench" className="w-6 h-6 text-primary" />
            </div>
            <span className="text-primary font-medium text-lg">Our Capabilities</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Manufacturing 
            <span className="text-gradient"> Equipment</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            State-of-the-art manufacturing equipment and facilities designed to deliver 
            precision, quality, and efficiency across all our manufacturing processes.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center p-6 bg-gradient-to-br from-surface to-white rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="Factory" className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">50,000</div>
            <div className="text-gray-600">sq ft Facility</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-surface to-white rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="Cog" className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">25+</div>
            <div className="text-gray-600">CNC Machines</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-surface to-white rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="Target" className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">±0.0001"</div>
            <div className="text-gray-600">Tolerance</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-surface to-white rounded-xl border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <ApperIcon name="Clock" className="w-6 h-6 text-primary" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-gray-600">Operations</div>
          </div>
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

        {/* Equipment Grid */}
        {filteredEquipment.length === 0 ? (
          <Empty 
            message="No equipment found" 
            description="Try selecting a different category or contact us about our latest capabilities."
          />
        ) : (
          <div className="equipment-grid mb-16">
            {filteredEquipment.map((item) => (
              <EquipmentCard key={item.Id} equipment={item} />
            ))}
          </div>
        )}

        {/* Capabilities Overview */}
        <div className="gradient-bg-1 rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Manufacturing <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive manufacturing capabilities span multiple disciplines and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Zap",
                title: "High-Speed Machining",
                features: ["40,000 RPM spindles", "±0.0001\" tolerance", "Complex geometries", "Short lead times"]
              },
              {
                icon: "Target",
                title: "Precision Inspection",
                features: ["CMM measurement", "Surface finish analysis", "Dimensional verification", "Statistical process control"]
              },
              {
                icon: "Layers",
                title: "Multi-Axis Processing",
                features: ["5-axis simultaneous", "Complex contours", "Single setup machining", "Reduced handling"]
              },
              {
                icon: "Shield",
                title: "Quality Systems",
                features: ["ISO 9001:2015", "AS9100D certified", "First article inspection", "Traceability systems"]
              },
              {
                icon: "Truck",
                title: "Material Handling",
                features: ["Automated loading", "Pallet systems", "Lights-out operation", "Workflow optimization"]
              },
              {
                icon: "Cpu",
                title: "Smart Manufacturing",
                features: ["Real-time monitoring", "Predictive maintenance", "Data analytics", "Industry 4.0 integration"]
              }
            ].map((capability, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md border border-gray-200 card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <ApperIcon name={capability.icon} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <ul className="space-y-2">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <ApperIcon name="Check" className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Tour CTA */}
        <div className="text-center bg-white rounded-2xl p-12 shadow-lg border border-gray-200">
          <div className="max-w-3xl mx-auto">
            <ApperIcon name="Building" className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See Our Equipment in Action
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Schedule a facility tour to see our state-of-the-art equipment and discuss how 
              our capabilities can meet your manufacturing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center px-8 py-4 text-white rounded-lg font-medium transition-all"
              >
                <ApperIcon name="Calendar" className="w-5 h-5 mr-2" />
                Schedule Tour
              </a>
              <a 
                href="tel:+15551234567" 
                className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-all"
              >
                <ApperIcon name="Phone" className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;