import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  duration: string;
  description: string;
  slug: string;
  image: string;
  bgColor?: string;
}

export default function CourseCard({ title, duration, description, slug, image, bgColor }: CourseCardProps) {
  return (
    <div className={`${bgColor || "bg-white"} dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow`}>
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1 text-black dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{duration}</p>
        <p className="text-gray-700 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Link
            href={`/courses/${slug}`}
            className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
          >
            View Outline
          </Link>
          <Link
            href={`/enroll/${slug}`}
            className="px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
