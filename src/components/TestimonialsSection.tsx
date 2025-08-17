import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      class: "12th Science",
      rating: 5,
      text: "Master Maths Academy helped me excel in Physics and Chemistry. The teachers are amazing and always ready to help with doubts.",
      result: "90% in Boards"
    },
    {
      name: "Arjun Patil",
      class: "10th Standard", 
      rating: 5,
      text: "The regular tests and personalized attention helped me improve my Mathematics skills significantly. Highly recommended!",
      result: "95% in Maths"
    },
    {
      name: "Sneha Kulkarni",
      class: "11th Science",
      rating: 5,
      text: "Excellent teaching methods and affordable fees. The academy has a very supportive learning environment.",
      result: "Class Topper"
    },
    {
      name: "Rohit Desai",
      class: "9th Standard",
      rating: 5,
      text: "My child's performance improved dramatically after joining Master Maths Academy. The faculty is highly qualified.",
      result: "85% Improvement"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient-primary mb-6">
            Student Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our successful students and their parents about their journey with us
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="card-hover p-8 text-center">
                    {/* Quote Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Rating Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Student Info */}
                    <div className="border-t pt-6">
                      <h4 className="text-xl font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-muted-foreground mb-2">{testimonial.class}</p>
                      <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                        {testimonial.result}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:scale-110 transition-transform"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-primary scale-125'
                    : 'bg-muted hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-secondary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-primary mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient-secondary mb-2">50+</div>
            <div className="text-muted-foreground">Toppers</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;