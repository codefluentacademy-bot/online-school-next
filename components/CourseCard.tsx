import Image from "next/image";
import Link from "next/link";

interface CourseCardProps {
  title: string;
  duration: string;
  description: string;
  slug: string;
  image: string;
  bgColor?: string;
  price: string;
  sessionOptions?: string[];
}

export default function CourseCard({ 
  title, 
  duration, 
  description, 
  slug, 
  image, 
  bgColor, 
  price,
  sessionOptions 
}: CourseCardProps) {
  return (
    <div className={`${bgColor || "bg-white"} dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col`}>
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <div className="p-4 flex flex-col grow">
        <h2 className="text-xl font-semibold mb-1 text-black dark:text-white">{title}</h2>
        
        {/* Price and Duration Row */}
        <div className="flex justify-between items-center mb-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium rounded-full">
            {price}
          </span>
          <span className="text-gray-600 dark:text-gray-300 text-sm">{duration}</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-400 mb-4 grow">{description}</p>
        
        {/* Session Options */}
        {sessionOptions && sessionOptions.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Session Duration:</p>
            <div className="flex flex-wrap gap-2">
              {sessionOptions.map((option, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded"
                >
                  {option}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Action Buttons - Only View Details/Contact */}
        <div className="flex flex-col gap-2 mt-auto">
          <Link
            href={`/courses/${slug}`}
            className="px-3 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center transition-colors duration-200 font-medium"
          >
            View Course Details
          </Link>
          
          <Link
            href={`/contact?course=${encodeURIComponent(title)}&price=${encodeURIComponent(price)}`}
            className="px-3 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center transition-colors duration-200 font-medium flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact for Enrollment
          </Link>
        </div>
      </div>
    </div>
  );
}