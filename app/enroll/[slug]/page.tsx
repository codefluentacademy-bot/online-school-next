interface Props {
  params: { slug: string };
}

export default function EnrollPage({ params }: Props) {
  const { slug } = params;

  // Map slug to course title
  const courseTitles: Record<string, string> = {
    "web-design-html-css": "Web Design (HTML & CSS)",
    "css-bootstrap": "CSS & Bootstrap",
    "python-web-development": "Python Web Development",
    "game-development": "Game Development",
    "javascript-basics": "JavaScript Basics",
    "django": "Django",
    "reactjs-nextjs": "ReactJS & Next.js",
    "minecraft-blocks-game-dev": "Minecraft & Blocks Game Dev",
    "scratch": "Scratch",
    "unity": "Unity",
    "ast-canva": "AST & Canva",
    "core-subjects": "English, Science, Math",
  };

  const courseTitle = courseTitles[slug] || "Course";

  return (
    <main className="container mx-auto py-12 px-4 sm:px-8">
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Enroll in {courseTitle}</h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Fill out the form below to enroll in this course.
      </p>

      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Submit Enrollment
        </button>
      </form>
    </main>
  );
}
