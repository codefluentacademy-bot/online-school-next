import CourseCard from "../../components/CourseCard";

// Courses organized by categories
const coursesByCategory = {
  "Web & Programming": [
    { 
      title: "Web Design (HTML & CSS)", 
      duration: "6 months", 
      slug: "web-design-html-css", 
      description: "Learn HTML and CSS from scratch", 
      image: "/images/webdesign.jpg", 
      price: "¥18,500+", 
      sessionOptions: ["1 hour", "1.5 hours", "2 hours","4 sessions each month "] 
    },
    { 
      title: "CSS & Bootstrap", 
      duration: "6 months", 
      slug: "css-bootstrap", 
      description: "Project-focused CSS and Bootstrap course", 
      image: "/images/css-bootstrap.jpg", 
      price: "¥18,500+", 
      sessionOptions: ["1 hour", "1.5 hours", "2 hours","4 sessions each month "] 
    },
    { 
      title: "Python Web Development", 
      duration: "1 year", 
      slug: "python-web-development", 
      description: "Build web apps using Python frameworks", 
      image: "/images/python.jpg", 
      price: "¥18,500+", 
      sessionOptions: ["1 hour", "1.5 hours", "2 hours","4 sessions each month "] 
    },
    { 
      title: "JavaScript Development", 
      duration: "1 year", 
      slug: "javascript-development", 
      description: "Learn web dev with JavaScript", 
      image: "/images/jsweb.jpg", 
      price: "¥18,500+", 
      sessionOptions: ["1 hour", "1.5 hours", "2 hours","4 sessions each month "] 
    },
    { 
      title: "JavaScript Basics", 
      duration: "6 months", 
      slug: "javascript-basics", 
      description: "Learn scripting for web and apps", 
      image: "/images/js.jpg", 
      price: "¥18,500+", 
      sessionOptions: [ "1.5 hours", "2 hours","4 sessions each month"] 
    },
    { 
      title: "TypeScript Development", 
      duration: "1 year", 
      slug: "typescript-development", 
      description: "Master TypeScript for modern web development", 
      image: "/images/TypeScript.jpg", 
      price: "¥22,000+", 
      sessionOptions: ["2 hours per session ", "4 sessions each month "] 
    },
    { 
      title: "Django", 
      duration: "2 years", 
      slug: "django", 
      description: "Professional web development with Django", 
      image: "/images/django.jpg", 
      price: "¥22,000+",
      sessionOptions: ["2 hours","4 sessions each month "] 
    },
    { 
      title: "ReactJS & Next.js", 
      duration: "1 year", 
      slug: "reactjs-nextjs", 
      description: "Front-end development with React and Next.js", 
      image: "/images/react.jpg", 
      price: "¥22,000+", 
      sessionOptions: ["2 hours","4 sessions each month "] 
    },
    { 
      title: "WordPress Development", 
      duration: "2 years", 
      slug: "wordpress-development", 
      description: "Build websites with WordPress themes and plugins", 
      image: "/images/wordP.jpg", 
      price: "¥25,000+", 
      sessionOptions: [ "2 hours","4 sessions each month "] 
    },
    { 
      title: "PHP Development", 
      duration: "1 year", 
      slug: "php-development", 
      description: "Server-side programming with PHP", 
      image: "/images/php-pic.jpg", 
      price: "¥22,000+", 
      sessionOptions: [ "2 hours","4 sessions each month "] 
    },
    { 
      title: "Mastery of Programming Projects", 
      duration: "Custom", 
      slug: "mastery-programming-projects", 
      description: "Advanced project development and deployment mastery", 
      image: "/images/custom.jpg", 
      price: "Contact for custom pricing", 
      sessionOptions: ["1.5 hours", "2 hours","4 sessions each month "] 
    },
    { 
      title: "GitHub & Deployment", 
      duration: "3-6 months", 
      slug: "github-deployment", 
      description: "Version control, CI/CD, and deployment strategies", 
      image: "/images/github.jpg", 
      price: "¥25,000+", 
      sessionOptions: ["1 hour", "1.5 hours", "2 hours","4 sessions each month "] 
    },
  ],
  "Game Development": [
    { 
      title: "Scratch", 
      duration: "6 months", 
      slug: "scratch", 
      description: "Beginner coding projects with Scratch", 
      image: "/images/scratchP.jpg", 
      price: "¥16,500+", 
      sessionOptions: ["1 hour", "1.5 hours", "2 hours","4 sessions each month "] 
    },
    { 
      title: "Minecraft & Blocks Game Dev", 
      duration: "6 months - 2 years", 
      slug: "minecraft-blocks-game-dev", 
      description: "Python & JavaScript game projects", 
      image: "/images/minecraft.jpg", 
      price: "Tuition Fee :¥15,000 + Yearly Minecraft Subcription: ¥6,000 ", 
      sessionOptions: ["1 hour", "1.5 hours","4 sessions each month "] 
    },
    { 
      title: "Unity", 
      duration: "1 year", 
      slug: "unity", 
      description: "3D game development using Unity", 
      image: "/images/unity.jpg", 
      price: "¥22,000+", 
      sessionOptions: ["1.5 hours", "2 hours","4 sessions each month "] 
    },
  ],
  "Design Tools": [
    { 
      title: "Canva for Projects", 
      duration: "6 months", 
      slug: "canva-projects", 
      description: "Learn Canva for static websites and digital projects", 
      image: "/images/canva.jpg", 
      price: "¥22,000+", 
      sessionOptions: ["1 hour", "1.5 hours","4 sessions each month "] 
    },
    { 
      title: "AST Editing", 
      duration: "6 months", 
      slug: "ast-editing", 
      description: "Edit static websites and digital projects with AST", 
      image: "/images/ast-webdev.jpg", 
      price: "¥22,000+", 
      sessionOptions: ["1 hour", "1.5 hours","4 sessions each month "] 
    },
  ],
  "Academic Subjects": [
    { 
      title: "English", 
      duration: "6 months - 2 years", 
      slug: "english", 
      description: "Comprehensive English lessons for all levels", 
      image: "/images/english.jpg", 
      price: "¥15,000+", 
      sessionOptions: ["1 hour", "1.5 hours", "2 hours","4 sessions each month "] 
    },
    { 
      title: "Math", 
      duration: "6 months - 2 years", 
      slug: "math", 
      description: "Mathematics lessons covering core concepts", 
      image: "/images/mathpic.jpg", 
      price: "¥18,500+", 
      sessionOptions: ["1 hour", "1.5 hours", "2 hours","4 sessions each month "] 
    },
    { 
      title: "Science", 
      duration: "6 months - 2 years", 
      slug: "science", 
      description: "Science lessons for various age groups", 
      image: "/images/sciencepic.jpg", 
      price: "¥18,500+", 
      sessionOptions: ["1 hour", "1.5 hours", "2 hours","4 sessions each month "] 
    },
  ],
  "After School Tutoring": [
    { 
      title: "After School Tutoring", 
      duration: "6 months", 
      slug: "after-school-tutoring", 
      description: "Extra tutoring sessions to support learning", 
      image: "/images/AST.jpg", 
      price: "¥18,500+", 
      sessionOptions: ["1 hour", "1.5 hours", "2 hours","4 sessions each month "] 
    },
  ]
};

const colors = ["bg-blue-50", "bg-white", "bg-purple-50"]; // alternating colors

export default function CoursesPage() {
  return (
   <main className="container mx-auto py-12 px-4 sm:px-8">
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold mb-4 text-purple-700 dark:text-purple-400">Our Courses</h1>
    <p className="text-purple-600 dark:text-purple-300 max-w-2xl mx-auto">
      Choose from a variety of courses with flexible session durations. 
    </p>
  </div>

      {Object.entries(coursesByCategory).map(([category, courses]) => (
        <section key={category} className="mb-16">
         <h2 className="text-2xl font-semibold mb-6 text-purple-600 dark:text-purple-400 border-b border-gray-200 dark:border-gray-700 pb-2">
  {category}
</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard
                key={course.slug}
                title={course.title}
                duration={course.duration}
                description={course.description}
                slug={course.slug}
                image={course.image}
                bgColor={colors[index % colors.length]}
                price={course.price}
                sessionOptions={course.sessionOptions}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}