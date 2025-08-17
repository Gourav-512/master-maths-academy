import { CheckCircle, Target, Users, BookCheck, Clock, Award } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Exam Preparation",
      description: "Comprehensive preparation for board exams and competitive tests"
    },
    {
      icon: <BookCheck className="w-8 h-8" />,
      title: "Regular Tests & Doubt Sessions",
      description: "Weekly assessments and dedicated doubt clearing sessions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Guidance",
      description: "Individual attention and customized learning plans"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experienced Teachers",
      description: "Learn from qualified faculty with proven track records"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Timings",
      description: "Multiple batch options to suit your schedule"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Affordable Fees",
      description: "Quality education at competitive and reasonable prices"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-accent via-muted to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient-primary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational services designed to ensure every student's success
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-feature group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon with animated background */}
              <div className="relative mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                {/* Animated checkmark that appears on hover */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              
              {/* Animated progress bar */}
              <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white shadow-xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Excel in Your Studies?</h3>
            <p className="text-xl mb-6 opacity-90">Join thousands of successful students at Master Maths Academy</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;