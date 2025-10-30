import React, { useState } from "react";
import { toast } from "react-toastify";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Select from "@/components/atoms/Select";
import inquiryService from "@/services/api/inquiryService";

const ContactForm = ({ className = "" }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const serviceTypes = [
    "Precision Machining",
    "Custom Manufacturing",
    "Assembly Services",
    "Quality Control",
    "Prototyping",
    "Other"
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }
    if (!formData.contactName.trim()) {
      newErrors.contactName = "Contact name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await inquiryService.create({
        ...formData,
        timestamp: new Date().toISOString(),
        attachments: []
      });
      
      toast.success("Inquiry submitted successfully! We'll contact you soon.");
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        serviceType: "",
        message: ""
      });
      setErrors({});
    } catch (error) {
      toast.error("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          error={errors.companyName}
          placeholder="Your company name"
          required
        />
        <Input
          label="Contact Name"
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
          error={errors.contactName}
          placeholder="Your full name"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="your.email@company.com"
          required
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="(555) 123-4567"
        />
      </div>

      <Select
        label="Service Type"
        name="serviceType"
        value={formData.serviceType}
        onChange={handleChange}
        error={errors.serviceType}
        required
      >
        <option value="">Select a service</option>
        {serviceTypes.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </Select>

      <Textarea
        label="Project Details"
        name="message"
        value={formData.message}
        onChange={handleChange}
        error={errors.message}
        placeholder="Please describe your project requirements, timeline, and any specific needs..."
        rows={5}
        required
      />

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? (
          <>
            <ApperIcon name="Loader2" className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <ApperIcon name="Send" className="w-5 h-5 mr-2" />
            Submit Inquiry
          </>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;