interface Props {
  params: { slug: string };
}

export default function TrialPage({ params }: Props) {
  const { slug } = params;

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
      <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
        Book a Trial Lesson: {courseTitle}
      </h1>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Fill out the form to schedule a free trial lesson.
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
        <input
          type="date"
          placeholder="Preferred Date"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="time"
          placeholder="Preferred Time"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Schedule Trial
        </button>
      </form>
    </main>
  );
}
