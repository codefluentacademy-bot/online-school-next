import CourseCard from "../../components/CourseCard";

// Courses organized by categories
const coursesByCategory = {
  "Web & Programming": [
    { title: "Web Design (HTML & CSS)", duration: "6 months", slug: "web-design-html-css", description: "Learn HTML and CSS from scratch", image: "/images/webdesign.jpg" },
    { title: "CSS & Bootstrap", duration: "6 months", slug: "css-bootstrap", description: "Project-focused CSS and Bootstrap course", image: "/images/css-bootstrap.jpeg" },
    { title: "Python Web Development", duration: "1 year", slug: "python-web-development", description: "Build web apps using Python frameworks", image: "/images/python-webdev.png" },
    { title: "Javascript Development", duration: "1 year", slug: "javascript-development", description: "Learn web dev with JavaScript", image: "/images/javascript.jpg" },
    { title: "JavaScript Basics", duration: "6 months", slug: "javascript-basics", description: "Learn scripting for web and apps", image: "/images/javascript.png" },
    { title: "Django", duration: "2 years", slug: "django", description: "Professional web development with Django", image: "/images/django.png" },
    { title: "ReactJS & Next.js", duration: "1 year", slug: "reactjs-nextjs", description: "Front-end development with React and Next.js", image: "/images/reactjs-nextjs.png" },
    { title: "Minecraft & Blocks Game Dev", duration: "6 months - 2 years", slug: "minecraft-blocks-game-dev", description: "Python & JavaScript game projects", image: "/images/minecraft-.jpg" },
    { title: "Scratch", duration: "6 months", slug: "scratch", description: "Beginner coding projects with Scratch", image: "/images/scratch.jpg" },
    { title: "Unity", duration: "1 year", slug: "unity", description: "3D game development using Unity", image: "/images/unity.png" },
  ],
  "Design Tools": [
    { title: "Canva for Projects", duration: "6 months", slug: "canva-projects", description: "Learn Canva for static websites and digital projects", image: "/images/canvapic.png" },
    { title: "AST Editing", duration: "6 months", slug: "ast-editing", description: "Edit static websites and digital projects with AST", image: "/images/ast-webdev.jpg" },
  ],
  "Academic Subjects": [
    { title: "English", duration: "6 months - 2 years", slug: "english", description: "Comprehensive English lessons for all levels", image: "/images/english.png" },
    { title: "Math", duration: "6 months - 2 years", slug: "math", description: "Mathematics lessons covering core concepts", image: "/images/math.jpg" },
    { title: "Science", duration: "6 months - 2 years", slug: "science", description: "Science lessons for various age groups", image: "/images/science.jpg" },
  ],
  "After School Tutoring": [
    { title: "After School Tutoring", duration: "6 months", slug: "after-school-tutoring", description: "Extra tutoring sessions to support learning", image: "/images/tutoring.png" },
  ],
};

const colors = ["bg-blue-100", "bg-white", "bg-purple-100"]; // alternating colors

export default function CoursesPage() {
  return (
    <main className="container mx-auto py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-black dark:text-white">Our Courses</h1>

      {Object.entries(coursesByCategory).map(([category, courses]) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-black dark:text-white">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <CourseCard
                key={course.slug}
                title={course.title}
                duration={course.duration}
                description={course.description}
                slug={course.slug}
                image={course.image}
                bgColor={colors[index % colors.length]}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
