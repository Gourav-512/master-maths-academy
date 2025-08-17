import { Award, Users, TrendingUp, DollarSign } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Faculty",
      description: "Highly qualified teachers with years of experience"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Personalized Attention",
      description: "Small batch sizes ensure individual focus on every student"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Regular Assessments",
      description: "Continuous evaluation and progress tracking"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Fees",
      description: "Quality education at reasonable costs"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted to-accent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient-primary mb-6">
            Why Choose Master Maths Academy?
          </h2>
          <div className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are committed to providing the highest quality education with a personal touch that helps every student achieve their academic goals.
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-feature group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Animated Text Reveal */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="text-2xl md:text-3xl font-semibold text-gradient-hero">
              Expert Faculty • Personalized Attention • Regular Assessments • Affordable Fees
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;