import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import TeamCard from "@/components/molecules/TeamCard";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Empty from "@/components/ui/Empty";
import teamService from "@/services/api/teamService";

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTeamMembers = async () => {
    try {
      setError("");
      setLoading(true);
      const data = await teamService.getAll();
      setTeamMembers(data);
    } catch (err) {
      setError("Failed to load team members");
      console.error("Error loading team members:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const milestones = [
    { year: "1999", title: "Company Founded", description: "Started with a vision for precision manufacturing excellence" },
    { year: "2005", title: "ISO Certification", description: "Achieved ISO 9001:2000 certification for quality management" },
    { year: "2010", title: "Facility Expansion", description: "Expanded to 50,000 sq ft with state-of-the-art equipment" },
    { year: "2015", title: "Aerospace Division", description: "Launched aerospace manufacturing with AS9100 certification" },
    { year: "2020", title: "Digital Integration", description: "Implemented Industry 4.0 technologies and automation" },
    { year: "2024", title: "Continued Growth", description: "500+ successful projects and expanding global partnerships" }
  ];

  const values = [
    {
      icon: "Target",
      title: "Precision",
      description: "We deliver exceptional accuracy and attention to detail in every project, maintaining tolerances that exceed industry standards."
    },
    {
      icon: "Shield",
      title: "Quality",
      description: "Our commitment to quality is unwavering, with rigorous testing and certification processes ensuring excellence."
    },
    {
      icon: "Users",
      title: "Partnership",
      description: "We build lasting relationships with our clients, working as true partners to achieve their manufacturing goals."
    },
    {
      icon: "Zap",
      title: "Innovation",
      description: "Continuous improvement and cutting-edge technology drive our manufacturing processes and capabilities."
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <ApperIcon name="Building" className="w-6 h-6 text-primary" />
            </div>
            <span className="text-primary font-medium text-lg">About Us</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Manufacturing 
            <span className="text-gradient"> Leaders</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            For over 25 years, Industrial Hub has been at the forefront of precision manufacturing, 
            delivering world-class solutions to industries that demand excellence.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Founded in 1999 with a simple mission: to provide unparalleled precision manufacturing 
              services that exceed customer expectations. What started as a small machine shop has grown 
              into a comprehensive manufacturing solutions provider.
            </p>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Today, we serve industries ranging from aerospace and defense to medical devices and 
              automotive, maintaining the same commitment to quality and precision that established 
              our reputation.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gradient-to-br from-surface to-white rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-surface to-white rounded-lg border border-gray-200">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
<img src="https://picsum.photos/250/200?random=1" alt="Manufacturing floor" className="w-full h-48 object-cover rounded-lg shadow-md" />
<img src="https://picsum.photos/250/200?random=2" alt="Precision equipment" className="w-full h-48 object-cover rounded-lg shadow-md" />
              </div>
              <div className="space-y-4 mt-8">
<img src="https://picsum.photos/250/200?random=3" alt="Quality control" className="w-full h-48 object-cover rounded-lg shadow-md" />
<img src="https://picsum.photos/250/200?random=4" alt="Team collaboration" className="w-full h-48 object-cover rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg border border-gray-200 card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <ApperIcon name={value.icon} className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped our growth and evolution over the years.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 card-hover">
                      <div className="text-2xl font-bold text-accent mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg relative z-10"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering exceptional manufacturing solutions.
            </p>
          </div>

          {loading && <Loading />}
          {error && <Error message={error} onRetry={loadTeamMembers} />}
          {!loading && !error && teamMembers.length === 0 && (
            <Empty message="No team members found" description="Our team information will be available soon." />
          )}
          {!loading && !error && teamMembers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <TeamCard key={member.Id} member={member} />
              ))}
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-br from-primary to-accent rounded-2xl p-12 text-white">
          <ApperIcon name="Handshake" className="w-16 h-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Experience the difference of working with a team that truly cares about your success. 
            Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="btn-accent inline-flex items-center px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-all"
            >
              <ApperIcon name="MessageCircle" className="w-5 h-5 mr-2" />
              Start a Conversation
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-primary transition-all"
            >
              <ApperIcon name="Eye" className="w-5 h-5 mr-2" />
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;