import React from "react";
import ApperIcon from "@/components/ApperIcon";
import ContactForm from "@/components/molecules/ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: "MapPin",
      title: "Visit Our Facility",
      details: ["123 Industrial Drive", "Manufacturing City, MC 12345", "United States"],
      action: "#"
    },
    {
      icon: "Phone",
      title: "Call Us",
      details: ["Main: (555) 123-4567", "Sales: (555) 123-4568", "Emergency: (555) 123-4569"],
      action: "tel:+15551234567"
    },
    {
      icon: "Mail",
      title: "Email Us",
      details: ["info@industrialhub.com", "sales@industrialhub.com", "support@industrialhub.com"],
      action: "mailto:info@industrialhub.com"
    },
    {
      icon: "Clock",
      title: "Business Hours",
      details: ["Monday - Friday: 7:00 AM - 6:00 PM", "Saturday: 8:00 AM - 2:00 PM", "Sunday: Emergency Only"],
      action: "#"
    }
  ];

  const departments = [
    { name: "Sales & Quotes", phone: "(555) 123-4568", email: "sales@industrialhub.com" },
    { name: "Engineering", phone: "(555) 123-4570", email: "engineering@industrialhub.com" },
    { name: "Quality Control", phone: "(555) 123-4571", email: "quality@industrialhub.com" },
    { name: "Customer Service", phone: "(555) 123-4567", email: "support@industrialhub.com" }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
              <ApperIcon name="MessageSquare" className="w-6 h-6 text-primary" />
            </div>
            <span className="text-primary font-medium text-lg">Get In Touch</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact 
            <span className="text-gradient"> Our Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Ready to discuss your manufacturing project? Our experienced team is here to provide 
            expert guidance and detailed quotes for all your manufacturing needs.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Send Us Your Requirements</h2>
                <p className="text-gray-600">
                  Fill out the form below with your project details and we'll get back to you within 24 hours 
                  with a detailed quote and timeline.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-gradient-to-br from-surface to-white rounded-xl p-6 border border-gray-200 card-hover">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <ApperIcon name={info.icon} className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{info.title}</h3>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Department <span className="text-gradient">Contacts</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect directly with the right department for faster, more specialized assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200 card-hover">
                <h3 className="font-bold text-gray-900 mb-4">{dept.name}</h3>
                <div className="space-y-3">
                  <a 
                    href={`tel:${dept.phone.replace(/\D/g, '')}`}
                    className="flex items-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <ApperIcon name="Phone" className="w-4 h-4 mr-2" />
                    <span className="text-sm">{dept.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${dept.email}`}
                    className="flex items-center text-gray-600 hover:text-primary transition-colors"
                  >
                    <ApperIcon name="Mail" className="w-4 h-4 mr-2" />
                    <span className="text-sm">{dept.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Response Promise */}
        <div className="gradient-bg-1 rounded-2xl p-12 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <ApperIcon name="Zap" className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Response Promise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">24 Hours</div>
                <div className="text-gray-600">Initial Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">48 Hours</div>
                <div className="text-gray-600">Detailed Quote</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-gray-600">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Placeholder & Directions */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gray-100 h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <ApperIcon name="MapPin" className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">123 Industrial Drive, Manufacturing City</p>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Facility</h3>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <ApperIcon name="MapPin" className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Address</p>
                    <p className="text-gray-600">123 Industrial Drive<br />Manufacturing City, MC 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="Car" className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Parking</p>
                    <p className="text-gray-600">Free parking available on-site</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ApperIcon name="Clock" className="w-5 h-5 text-primary mt-1 mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">Tour Hours</p>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 4:00 PM<br />By appointment only</p>
                  </div>
                </div>
              </div>
              <a 
                href="/contact" 
                className="btn-primary inline-flex items-center px-6 py-3 text-white rounded-lg font-medium transition-all"
              >
                <ApperIcon name="Calendar" className="w-5 h-5 mr-2" />
                Schedule Tour
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;