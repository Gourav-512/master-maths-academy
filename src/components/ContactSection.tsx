import { useState } from "react";
import { MapPin, Phone, MessageCircle, Clock, Users } from "lucide-react";
import { useContactForm } from "@/hooks/useContactForm";

const ContactSection = () => {
  const { submitForm, isSubmitting, errors } = useContactForm();
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phoneNumber: '',
    classLevel: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitForm(formData);
    if (success) {
      // Reset form
      setFormData({
        studentName: '',
        parentName: '',
        phoneNumber: '',
        classLevel: '',
        message: ''
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient-primary mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visit us or get in touch to start your educational journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location Cards */}
            <div className="card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Our Locations</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>📍 Behind Gadave Petrol Pump, in front of Varda Apartment, Miraj</p>
                    <p>📍 Old Police Line Fort Area, Miraj</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Phone Contact */}
            <div className="card-hover p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Contact Number</h3>
                  <a href="tel:9011913559" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
                    9011913559
                  </a>
                  <p className="text-muted-foreground mt-1">Available 9 AM - 8 PM</p>
                </div>
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="card-feature text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
              <div className="card-feature text-center">
                <Clock className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Secure Contact Form */}
          <div className="card-hover p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Quick Contact Form</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Student Name *</label>
                  <input 
                    type="text" 
                    value={formData.studentName}
                    onChange={(e) => handleInputChange('studentName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.studentName ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Enter student name"
                    maxLength={100}
                    required
                  />
                  {errors.studentName && (
                    <p className="text-sm text-destructive mt-1">{errors.studentName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Parent Name *</label>
                  <input 
                    type="text" 
                    value={formData.parentName}
                    onChange={(e) => handleInputChange('parentName', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.parentName ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Enter parent name"
                    maxLength={100}
                    required
                  />
                  {errors.parentName && (
                    <p className="text-sm text-destructive mt-1">{errors.parentName}</p>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    value={formData.phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.phoneNumber ? 'border-destructive' : 'border-input'
                    }`}
                    placeholder="Enter 10-digit phone number"
                    maxLength={10}
                    pattern="[6-9]\d{9}"
                    required
                  />
                  {errors.phoneNumber && (
                    <p className="text-sm text-destructive mt-1">{errors.phoneNumber}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Class/Standard *</label>
                  <select 
                    value={formData.classLevel}
                    onChange={(e) => handleInputChange('classLevel', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.classLevel ? 'border-destructive' : 'border-input'
                    }`}
                    required
                  >
                    <option value="">Select Class</option>
                    <option value="1st to 8th Standard">1st to 8th Standard</option>
                    <option value="9th Standard">9th Standard</option>
                    <option value="10th Standard">10th Standard</option>
                    <option value="11th Science">11th Science</option>
                    <option value="12th Science">12th Science</option>
                  </select>
                  {errors.classLevel && (
                    <p className="text-sm text-destructive mt-1">{errors.classLevel}</p>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full px-4 py-3 border border-input rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Any specific requirements or questions?"
                  maxLength={500}
                />
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-hero disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16">
          <a 
            href="tel:9011913559" 
            className="btn-hero group flex items-center justify-center gap-3"
          >
            <Phone className="w-5 h-5 group-hover:animate-bounce" />
            Call Now
          </a>
          
          <a 
            href="https://wa.me/9011913559" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group flex items-center justify-center gap-3"
          >
            <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;