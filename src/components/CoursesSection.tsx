import { useState } from "react";
import { BookOpen, Calculator, Atom, Globe } from "lucide-react";

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const courses = [
    {
      title: "1st to 8th Standard",
      subtitle: "Foundation Building",
      medium: "Marathi & English Medium",
      subjects: ["Mathematics", "Science", "English", "General Knowledge"],
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-primary to-primary-light"
    },
    {
      title: "9th & 10th Standard",
      subtitle: "Board Preparation",
      medium: "English & Marathi Medium",
      subjects: ["Mathematics", "Science", "English", "Social Studies"],
      icon: <Calculator className="w-6 h-6" />,
      color: "from-secondary to-secondary-light"
    },
    {
      title: "11th & 12th Science",
      subtitle: "Advanced Learning",
      medium: "Complete Science Stream",
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology (Optional)"],
      icon: <Atom className="w-6 h-6" />,
      color: "from-primary via-secondary to-primary-light"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gradient-primary mb-6">
            Our Courses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive coaching programs designed for every academic level
          </p>
        </div>
        
        {/* Course Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {courses.map((course, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === index
                  ? 'bg-gradient-to-r text-white shadow-lg scale-105 ' + course.color
                  : 'bg-muted text-muted-foreground hover:bg-accent hover:scale-105'
              }`}
            >
              {course.icon}
              {course.title}
            </button>
          ))}
        </div>
        
        {/* Active Course Content */}
        <div className="max-w-4xl mx-auto">
          <div className="card-hover p-8 text-center">
            <div className="mb-6">
              <h3 className="text-3xl font-bold text-foreground mb-2">
                {courses[activeTab].title}
              </h3>
              <div className="text-xl text-gradient-secondary font-semibold mb-2">
                {courses[activeTab].subtitle}
              </div>
              <div className="text-lg text-muted-foreground">
                {courses[activeTab].medium}
              </div>
            </div>
            
            {/* Subjects Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {courses[activeTab].subjects.map((subject, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-accent to-muted p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-lg font-semibold text-foreground">
                    {subject}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Enroll Button */}
            <div className="mt-8">
              <button className="btn-primary">
                Enroll in {courses[activeTab].title}
              </button>
            </div>
          </div>
        </div>
        
        {/* Course Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl mb-4">📅</div>
            <h4 className="text-xl font-semibold mb-2">Flexible Timings</h4>
            <p className="text-muted-foreground">Morning and evening batches available</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📚</div>
            <h4 className="text-xl font-semibold mb-2">Study Material</h4>
            <p className="text-muted-foreground">Comprehensive notes and practice papers</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🏆</div>
            <h4 className="text-xl font-semibold mb-2">Proven Results</h4>
            <p className="text-muted-foreground">Excellent board exam performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;