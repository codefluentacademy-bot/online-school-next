import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export default function CourseDetail({ params }: Props) {
  const { slug } = params;

  // Map slugs to course details, including syllabus
  const courseDetails: Record<string, { title: string; duration: string; description: string; image: string; syllabus: string[] }> = {
    "web-design-html-css": {
      title: "Web Design (HTML & CSS)",
      duration: "6 months",
      description: "Learn HTML and CSS from scratch.",
      image: "/images/webdesign.png",
      syllabus: [
        "Introduction to HTML",
        "HTML Elements & Attributes",
        "CSS Basics & Selectors",
        "CSS Layouts (Flexbox, Grid)",
        "Responsive Design",
        "Mini Project: Personal Portfolio"
      ],
    },
    "css-bootstrap": {
      title: "CSS & Bootstrap",
      duration: "6 months",
      description: "Project-focused CSS and Bootstrap course.",
      image: "/images/css-bootstrap.jpeg",
      syllabus: [
        "Advanced CSS Styling",
        "Bootstrap 5 Grid System",
        "Components: Buttons, Cards, Navbar",
        "Forms and Validation",
        "Bootstrap Utilities",
        "Mini Project: Landing Page"
      ],
    },
    "python-web-development": {
      title: "Python Web Development",
      duration: "1 year",
      description: "Build web apps using Python frameworks.",
      image: "/images/python-webdev.png",
      syllabus: [
        "Python Basics",
        "Flask/Django Introduction",
        "Routing & Templates",
        "Database Integration",
        "Authentication & Authorization",
        "Final Project: Web App"
      ],
    },
    "web-development": {
      title: "Javascript Development",
      duration: "1 year",
      description: "Learn web dev with JavaScript.",
      image: "/images/javascripy.jpg",
      syllabus: [
        "JavaScript Basics",
        "DOM Manipulation",
        "Event Handling",
        "ES6+ Features",
        "APIs & AJAX",
        "Project: Interactive Web App"
      ],
    },
    "javascript-basics": {
      title: "JavaScript Basics",
      duration: "6 months",
      description: "Learn scripting for web and apps.",
      image: "/images/javascript.svg",
      syllabus: [
        "Variables & Data Types",
        "Functions & Loops",
        "Conditionals",
        "Arrays & Objects",
        "Mini Project: Calculator"
      ],
    },
    "django": {
      title: "Django",
      duration: "2 years",
      description: "Professional web development with Django.",
      image: "/images/django.png",
      syllabus: [
        "Django Models",
        "Views & Templates",
        "Forms & Validation",
        "User Authentication",
        "REST API Development",
        "Final Project: Web Application"
      ],
    },
    "reactjs-nextjs": {
      title: "ReactJS & Next.js",
      duration: "1 year",
      description: "Front-end development with React and Next.js.",
      image: "/images/reactjs-nextjs.png",
      syllabus: [
        "React Basics & Components",
        "State & Props",
        "React Hooks",
        "Next.js Pages & Routing",
        "API Integration",
        "Final Project: SPA Website"
      ],
    },
    "minecraft-blocks-game-dev": {
      title: "Minecraft & Blocks Game Dev",
      duration: "6 months - 2 years",
      description: "Python & JavaScript game projects.",
      image: "/images/minecraft-.png",
      syllabus: [
        "Minecraft Modding Basics",
        "Python Scripting for Games",
        "JavaScript Game Mechanics",
        "Level Design & Logic",
        "Project: Custom Minecraft Game"
      ],
    },
    "scratch": {
      title: "Scratch",
      duration: "6 months",
      description: "Beginner coding projects with Scratch.",
      image: "/images/scratch.jpg",
      syllabus: [
        "Scratch Interface & Basics",
        "Sprites & Costumes",
        "Events & Loops",
        "Game Logic",
        "Project: Simple Interactive Game"
      ],
    },
    "unity": {
      title: "Unity",
      duration: "1 year",
      description: "3D game development using Unity.",
      image: "/images/unity.png",
      syllabus: [
        "Unity Basics & Interface",
        "3D Objects & Scenes",
        "Physics & Collisions",
        "Scripting with C#",
        "Game UI & Animations",
        "Final Project: 3D Game"
      ],
    },
    "canva-projects": {
      title: "Canva for Projects",
      duration: "6 months",
      description: "Learn Canva for static websites and digital projects.",
      image: "/images/canva.svg",
      syllabus: [
        "Canva Basics & Tools",
        "Design Templates",
        "Graphics & Branding",
        "Static Website Mockups",
        "Final Project: Portfolio Page"
      ],
    },
    "ast-editing": {
      title: "AST Editing",
      duration: "6 months",
      description: "Edit static websites and digital projects with AST.",
      image: "/images/ast.svg",
      syllabus: [
        "Introduction to AST",
        "HTML/CSS Editing",
        "JavaScript Integration",
        "Project: Digital Portfolio"
      ],
    },
    "english": {
      title: "English",
      duration: "6 months - 2 years",
      description: "Comprehensive English lessons for all levels.",
      image: "/images/english.svg",
      syllabus: [
        "Grammar & Vocabulary",
        "Reading Comprehension",
        "Writing Skills",
        "Speaking & Listening",
        "Project: Presentation & Essay"
      ],
    },
    "math": {
      title: "Math",
      duration: "6 months - 2 years",
      description: "Mathematics lessons covering core concepts.",
      image: "/images/math.svg",
      syllabus: [
        "Number Operations",
        "Fractions & Decimals",
        "Algebra Basics",
        "Geometry & Measurement",
        "Word Problems & Applications"
      ],
    },
    "science": {
      title: "Science",
      duration: "6 months - 2 years",
      description: "Science lessons for various age groups.",
      image: "/images/science.svg",
      syllabus: [
        "Biology Basics",
        "Chemistry Fundamentals",
        "Physics Concepts",
        "Earth & Space",
        "Experiments & Projects"
      ],
    },
    "after-school-tutoring": {
      title: "After School Tutoring",
      duration: "6 months",
      description: "Extra tutoring sessions to support learning.",
      image: "/images/after-school.svg",
      syllabus: [
        "Personalized Learning Plans",
        "Homework Assistance",
        "Test Preparation",
        "Extra Practice & Activities"
      ],
    },
  };

  const course = courseDetails[slug];

  if (!course) return <p className="text-center mt-20 text-red-500">Course not found.</p>;

  return (
    <main className="container mx-auto py-12 px-4 sm:px-8">
      
      {/* Course Image */}
      <div className="relative w-full h-60 sm:h-80 mb-6">
        <Image src={course.image} alt={course.title} fill className="object-cover rounded-xl" />
      </div>

      {/* Course Info */}
      <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">{course.title}</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">Duration: {course.duration}</p>
      <p className="text-gray-700 dark:text-gray-300 mb-6">{course.description}</p>

      {/* Syllabus */}
      {course.syllabus && course.syllabus.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Course Outline</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {course.syllabus.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <Link
          href={`/enroll/${slug}`}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-center"
        >
          Enroll Now
        </Link>
        <Link
          href={`/trial/${slug}`}
          className="px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-center"
        >
          Take Trial Lesson
        </Link>
      </div>
    </main>
  );
}
