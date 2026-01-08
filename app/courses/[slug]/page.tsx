"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import jsPDF from "jspdf";
import { useParams } from "next/navigation";

interface CourseOutline {
  month: string;
  sessions: string[];
}

interface Course {
  title: string;
  duration: string;
  description: string;
  image: string;
  outline: CourseOutline[];
  pricing?: string[];
  note?: string;
  sessionOptions?: string[];
}

export default function CourseDetail() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [course, setCourse] = useState<Course | null>(null);
  const [openMonthIndex, setOpenMonthIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!slug) return;

    const courseDetails: Record<string, Course> = {
      "web-design-html-css": {
        title: "Web Design (HTML & CSS)",
        duration: "6 months",
        description: "Learn HTML and CSS from scratch.",
        image: "/images/webdesign.jpg",
        outline: [
          { month: "Month 1", sessions: ["Intro to Web", "HTML Basics", "Tags & Structure", "Mini Page"] },
          { month: "Month 2", sessions: ["CSS Basics", "Colors & Fonts", "Box Model", "Styling Page"] },
          { month: "Month 3", sessions: ["Layouts", "Flexbox", "Grid", "Page Layout"] },
          { month: "Month 4", sessions: ["Responsive Design", "Media Queries", "Mobile Layout"] },
          { month: "Month 5", sessions: ["Forms", "Images", "Best Practices", "Project Build"] },
          { month: "Month 6", sessions: ["Final Website", "Polish", "Review", "Presentation"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for customized plans"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
        note: "Prices may vary based on course intensity and personalization",
      },
      "css-bootstrap": {
        title: "CSS & Bootstrap",
        duration: "6 months",
        description: "Project-focused CSS and Bootstrap course.",
        image: "/images/css-bootstrap.jpeg",
        outline: [
          { month: "Month 1", sessions: ["Advanced CSS", "Selectors", "Positioning", "Layouts"] },
          { month: "Month 2", sessions: ["Bootstrap Intro", "Grid System", "Containers"] },
          { month: "Month 3", sessions: ["Bootstrap Components", "Navbar", "Cards", "Buttons"] },
          { month: "Month 4", sessions: ["Forms", "Utilities", "Responsive Design"] },
          { month: "Month 5", sessions: ["Landing Pages", "Customization", "Project"] },
          { month: "Month 6", sessions: ["Final Website", "Optimization", "Presentation"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for customized plans"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "python-web-development": {
        title: "Python Web Development",
        duration: "1 year",
        description: "Build web applications using Python frameworks.",
        image: "/images/python-webdev.png",
        outline: [
          { month: "Month 1", sessions: ["Python Basics", "Variables", "Functions", "Practice"] },
          { month: "Month 2", sessions: ["Flask/Django Intro", "Routing", "Templates"] },
          { month: "Month 3", sessions: ["Databases", "Models", "CRUD Operations"] },
          { month: "Month 4", sessions: ["Forms", "Authentication", "Security"] },
          { month: "Month 5", sessions: ["APIs", "Deployment", "Project Build"] },
          { month: "Month 6", sessions: ["Final Project", "Testing", "Presentation"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for advanced modules"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "javascript-development": {
        title: "JavaScript Development",
        duration: "1 year",
        description: "Learn web development using JavaScript.",
        image: "/images/javascript.jpg",
        outline: [
          { month: "Month 1", sessions: ["JS Basics", "Variables", "Operators", "Practice"] },
          { month: "Month 2", sessions: ["Functions", "Loops", "Conditions"] },
          { month: "Month 3", sessions: ["Arrays", "Objects", "Mini Project"] },
          { month: "Month 4", sessions: ["DOM", "Events", "Forms"] },
          { month: "Month 5", sessions: ["APIs", "Async JS", "Interactive App"] },
          { month: "Month 6", sessions: ["Final Project", "Review", "Presentation"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for customized plans"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "javascript-basics": {
        title: "JavaScript Basics",
        duration: "6 months",
        description: "Learn scripting for web and apps.",
        image: "/images/javascript.png",
        outline: [
          { month: "Month 1", sessions: ["Variables", "Data Types", "Practice"] },
          { month: "Month 2", sessions: ["Functions", "Loops"] },
          { month: "Month 3", sessions: ["Conditions", "Arrays"] },
          { month: "Month 4", sessions: ["Objects", "Mini App"] },
          { month: "Month 5", sessions: ["DOM Basics", "Events"] },
          { month: "Month 6", sessions: ["Final Project", "Presentation"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for customized plans"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "typescript-development": {
        title: "TypeScript Development",
        duration: "1 year",
        description: "Master TypeScript for modern web development.",
        image: "/images/typescript.jpeg",
        outline: [
          { month: "Month 1", sessions: ["TypeScript Intro", "Type System", "Basic Types"] },
          { month: "Month 2", sessions: ["Interfaces", "Classes", "Modules"] },
          { month: "Month 3", sessions: ["Generics", "Decorators", "Advanced Types"] },
          { month: "Month 4", sessions: ["TypeScript with React", "Type Safety"] },
          { month: "Month 5", sessions: ["TypeScript with Node.js", "Backend Development"] },
          { month: "Month 6", sessions: ["Project Configuration", "Build Tools", "Final Project"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for advanced topics"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "wordpress-development": {
        title: "WordPress Development",
        duration: "6 months",
        description: "Build websites with WordPress themes and plugins.",
        image: "/images/wordpress.jpg",
        outline: [
          { month: "Month 1", sessions: ["WordPress Basics", "Dashboard", "Pages & Posts"] },
          { month: "Month 2", sessions: ["Theme Development", "Template Hierarchy"] },
          { month: "Month 3", sessions: ["Plugin Development", "Hooks & Filters"] },
          { month: "Month 4", sessions: ["Custom Post Types", "Advanced Custom Fields"] },
          { month: "Month 5", sessions: ["WooCommerce Development", "E-commerce Setup"] },
          { month: "Month 6", sessions: ["Performance Optimization", "Security", "Final Project"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for e-commerce modules"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "php-development": {
        title: "PHP Development",
        duration: "1 year",
        description: "Server-side programming with PHP.",
        image: "/images/php.png",
        outline: [
          { month: "Month 1", sessions: ["PHP Basics", "Syntax", "Variables", "Operators"] },
          { month: "Month 2", sessions: ["Functions", "Arrays", "Forms Handling"] },
          { month: "Month 3", sessions: ["Object-Oriented PHP", "Classes & Objects"] },
          { month: "Month 4", sessions: ["Database Integration", "MySQL with PHP"] },
          { month: "Month 5", sessions: ["PHP Frameworks", "Laravel Basics"] },
          { month: "Month 6", sessions: ["REST APIs", "Authentication", "Final Project"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for framework specialization"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "mastery-programming-projects": {
        title: "Mastery of Programming Projects",
        duration: "Custom",
        description: "Advanced project development and deployment mastery.",
        image: "/images/mastery.jpg",
        outline: [
          { month: "Phase 1", sessions: ["Project Planning", "Architecture Design", "Tech Stack Selection"] },
          { month: "Phase 2", sessions: ["Advanced Development", "Code Quality", "Testing Strategies"] },
          { month: "Phase 3", sessions: ["Performance Optimization", "Security Hardening"] },
          { month: "Phase 4", sessions: ["Deployment Strategies", "CI/CD Pipeline"] },
          { month: "Phase 5", sessions: ["Monitoring", "Maintenance", "Scaling"] },
          { month: "Phase 6", sessions: ["Project Documentation", "Client Handover"] },
        ],
        pricing: ["Custom pricing based on project scope", "Contact for consultation"],
        sessionOptions: ["1.5 hours", "2 hours"],
        note: "This is a premium mentorship program for serious developers",
      },
      "github-deployment": {
        title: "GitHub & Deployment",
        duration: "3-6 months",
        description: "Version control, CI/CD, and deployment strategies.",
        image: "/images/github-deploy.jpg",
        outline: [
          { month: "Month 1", sessions: ["Git Fundamentals", "Branching Strategies", "GitHub Basics"] },
          { month: "Month 2", sessions: ["Collaborative Workflows", "Pull Requests", "Code Reviews"] },
          { month: "Month 3", sessions: ["CI/CD Introduction", "GitHub Actions", "Automated Testing"] },
          { month: "Month 4", sessions: ["Deployment Platforms", "Vercel/Netlify", "Docker Basics"] },
          { month: "Month 5", sessions: ["Server Deployment", "AWS/Google Cloud Basics", "SSL Certificates"] },
          { month: "Month 6", sessions: ["Monitoring", "Performance Tracking", "Final Project"] },
        ],
        pricing: ["Starts at ¥25,000+ per month", "Contact for team training"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "django": {
        title: "Django",
        duration: "2 years",
        description: "Professional web development with Django.",
        image: "/images/django.png",
        outline: [
          { month: "Month 1", sessions: ["Python Review", "Django Setup"] },
          { month: "Month 2", sessions: ["Views", "Templates", "URLs"] },
          { month: "Month 3", sessions: ["Models", "Admin Panel"] },
          { month: "Month 4", sessions: ["Forms", "Authentication"] },
          { month: "Month 5", sessions: ["Security", "REST APIs"] },
          { month: "Month 6", sessions: ["Final Project", "Deployment"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for comprehensive 2-year plan"],
        sessionOptions: ["1.5 hours", "2 hours"],
      },
      "reactjs-nextjs": {
        title: "ReactJS & Next.js",
        duration: "1 year",
        description: "Front-end development with React and Next.js.",
        image: "/images/reactjs-nextjs.png",
        outline: [
          { month: "Month 1", sessions: ["React Intro", "Components", "JSX"] },
          { month: "Month 2", sessions: ["Props", "State", "Events"] },
          { month: "Month 3", sessions: ["Hooks", "Forms"] },
          { month: "Month 4", sessions: ["Next.js Routing", "Layouts"] },
          { month: "Month 5", sessions: ["API Integration", "SEO"] },
          { month: "Month 6", sessions: ["Final Project", "Deployment"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for advanced Next.js features"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "minecraft-blocks-game-dev": {
        title: "Minecraft & Blocks Game Dev",
        duration: "6 months - 2 years",
        description: "Python & JavaScript game projects.",
        image: "/images/minecraft-.jpg",
        outline: [
          { month: "Month 1", sessions: ["Blocks Coding", "Game Logic"] },
          { month: "Month 2", sessions: ["Events", "Loops"] },
          { month: "Month 3", sessions: ["Levels", "Scoring"] },
          { month: "Month 4", sessions: ["Python Games"] },
          { month: "Month 5", sessions: ["JS Games"] },
          { month: "Month 6", sessions: ["Final Game Project"] },
        ],
        pricing: ["Starts at ¥22,000+ per month", "Contact for extended game development"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "scratch": {
        title: "Scratch",
        duration: "6 months",
        description: "Beginner coding projects with Scratch.",
        image: "/images/scratch.jpg",
        outline: [
          { month: "Month 1", sessions: ["Scratch Basics", "Sprites"] },
          { month: "Month 2", sessions: ["Events", "Motion"] },
          { month: "Month 3", sessions: ["Loops", "Logic"] },
          { month: "Month 4", sessions: ["Game Design"] },
          { month: "Month 5", sessions: ["Interactive Projects"] },
          { month: "Month 6", sessions: ["Final Game"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for group discounts"],
        sessionOptions: ["1 hour", "1.5 hours"],
      },
      "unity": {
        title: "Unity",
        duration: "1 year",
        description: "3D game development using Unity.",
        image: "/images/unity.png",
        outline: [
          { month: "Month 1", sessions: ["Unity Interface", "Scenes"] },
          { month: "Month 2", sessions: ["C# Basics", "Movement"] },
          { month: "Month 3", sessions: ["Physics", "Collisions"] },
          { month: "Month 4", sessions: ["Animations", "UI"] },
          { month: "Month 5", sessions: ["Game Levels"] },
          { month: "Month 6", sessions: ["Final Game"] },
        ],
        pricing: ["Starts at ¥22,000+ per month", "Contact for 3D modeling add-ons"],
        sessionOptions: ["1.5 hours", "2 hours"],
      },
      "canva-projects": {
        title: "Canva for Projects",
        duration: "6 months",
        description: "Learn Canva for digital projects.",
        image: "/images/canvapic.png",
        outline: [
          { month: "Month 1", sessions: ["Canva Basics", "Layouts"] },
          { month: "Month 2", sessions: ["Typography", "Colors"] },
          { month: "Month 3", sessions: ["Branding", "Graphics"] },
          { month: "Month 4", sessions: ["Social Media Designs"] },
          { month: "Month 5", sessions: ["Web Mockups"] },
          { month: "Month 6", sessions: ["Final Portfolio"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for business templates"],
        sessionOptions: ["1 hour", "1.5 hours"],
      },
      "ast-editing": {
        title: "AST Editing",
        duration: "6 months",
        description: "Edit static websites and digital projects.",
        image: "/images/ast-webdev.jpg",
        outline: [
          { month: "Month 1", sessions: ["HTML Review", "Editing"] },
          { month: "Month 2", sessions: ["CSS Updates"] },
          { month: "Month 3", sessions: ["Layouts"] },
          { month: "Month 4", sessions: ["Navigation"] },
          { month: "Month 5", sessions: ["SEO Basics"] },
          { month: "Month 6", sessions: ["Final Website"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for website maintenance plans"],
        sessionOptions: ["1 hour", "1.5 hours"],
      },
      "english": {
        title: "English",
        duration: "6 months - 2 years",
        description: "Comprehensive English lessons.",
        image: "/images/english.png",
        outline: [
          { month: "Month 1", sessions: ["Grammar Basics", "Vocabulary"] },
          { month: "Month 2", sessions: ["Reading Skills"] },
          { month: "Month 3", sessions: ["Writing"] },
          { month: "Month 4", sessions: ["Speaking"] },
          { month: "Month 5", sessions: ["Listening"] },
          { month: "Month 6", sessions: ["Final Presentation"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for exam preparation"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "math": {
        title: "Math",
        duration: "6 months - 2 years",
        description: "Core mathematics lessons.",
        image: "/images/math.jpg",
        outline: [
          { month: "Month 1", sessions: ["Number Operations"] },
          { month: "Month 2", sessions: ["Fractions & Decimals"] },
          { month: "Month 3", sessions: ["Algebra Basics"] },
          { month: "Month 4", sessions: ["Geometry"] },
          { month: "Month 5", sessions: ["Word Problems"] },
          { month: "Month 6", sessions: ["Review & Assessment"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for advanced math topics"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "science": {
        title: "Science",
        duration: "6 months - 2 years",
        description: "Science lessons for all levels.",
        image: "/images/science.jpg",
        outline: [
          { month: "Month 1", sessions: ["Biology Basics"] },
          { month: "Month 2", sessions: ["Chemistry"] },
          { month: "Month 3", sessions: ["Physics"] },
          { month: "Month 4", sessions: ["Earth Science"] },
          { month: "Month 5", sessions: ["Experiments"] },
          { month: "Month 6", sessions: ["Final Project"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for lab experiment sessions"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
      "after-school-tutoring": {
        title: "After School Tutoring",
        duration: "6 months",
        description: "Extra tutoring sessions.",
        image: "/images/tutoring.png",
        outline: [
          { month: "Month 1", sessions: ["Assessment", "Study Skills"] },
          { month: "Month 2", sessions: ["Homework Support"] },
          { month: "Month 3", sessions: ["Skill Building"] },
          { month: "Month 4", sessions: ["Test Prep"] },
          { month: "Month 5", sessions: ["Confidence Building"] },
          { month: "Month 6", sessions: ["Final Review"] },
        ],
        pricing: ["Starts at ¥18,500+ per month", "Contact for multiple subject packages"],
        sessionOptions: ["1 hour", "1.5 hours", "2 hours"],
      },
    };

    const foundCourse = courseDetails[slug];
    setCourse(foundCourse);
  }, [slug]);

  if (!course) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  const toggleAccordion = (index: number) => {
    setOpenMonthIndex(openMonthIndex === index ? null : index);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(course.title, 10, 10);
    doc.setFontSize(12);
    doc.text(`Duration: ${course.duration}`, 10, 20);
    doc.text(`Description: ${course.description}`, 10, 30);
    
    let y = 40;
    
    if (course.pricing) {
      doc.text("Pricing:", 10, y);
      y += 7;
      course.pricing.forEach((p) => {
        doc.text(`- ${p}`, 15, y);
        y += 6;
      });
      y += 4;
    }
    
    if (course.sessionOptions) {
      doc.text("Session Options:", 10, y);
      y += 7;
      course.sessionOptions.forEach((option) => {
        doc.text(`- ${option} sessions available`, 15, y);
        y += 6;
      });
      y += 4;
    }
    
    doc.text("Course Outline:", 10, y);
    y += 10;

    course.outline.forEach((m) => {
      doc.text(m.month, 10, y);
      y += 7;
      m.sessions.forEach((s) => {
        doc.text(`- ${s}`, 15, y);
        y += 6;
      });
      y += 4;
    });

    if (course.note) {
      y += 10;
      doc.setFontSize(10);
      doc.text(`Note: ${course.note}`, 10, y, { maxWidth: 180 });
    }

    doc.save(`${course.title.replace(/\s+/g, '-')}-Outline.pdf`);
  };

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="relative h-80 mb-8">
        <Image 
          src={course.image} 
          alt={course.title} 
          fill 
          className="object-cover rounded-2xl shadow-lg" 
          priority
        />
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-2 text-gray-800">{course.title}</h1>
        
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {course.duration}
          </span>
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            Starting at {course.pricing?.[0].replace(" per month", "") || "¥18,500+"}
          </span>
          
          {course.sessionOptions && course.sessionOptions.length > 0 && (
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              {course.sessionOptions.length} session options
            </span>
          )}
        </div>
        
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">{course.description}</p>

        {course.sessionOptions && course.sessionOptions.length > 0 && (
          <div className="mb-8 p-6 bg-linear-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
            <h2 className="text-2xl font-semibold mb-3 text-gray-800">Session Options</h2>
            <p className="text-gray-700 mb-4">Choose from flexible session durations:</p>
            <div className="flex flex-wrap gap-3">
              {course.sessionOptions.map((option, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-white px-4 py-2 rounded-lg border border-purple-200 shadow-sm"
                >
                  <svg className="w-5 h-5 text-purple-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{option}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mb-10 p-6 bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">Pricing & Enrollment</h2>
          {course.pricing && (
            <ul className="mb-4">
              {course.pricing.map((p, idx) => (
                <li key={idx} className="flex items-center text-gray-700 mb-2">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          )}
          {course.note && (
            <p className="text-sm text-gray-600 italic bg-white p-3 rounded-lg border">
              {course.note}
            </p>
          )}
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Course Outline</h2>
          <div className="space-y-4">
            {course.outline.map((m, i) => (
              <div key={i} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <button
                  onClick={() => toggleAccordion(i)}
                  className="w-full text-left p-5 font-semibold flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg text-gray-800">{m.month}</span>
                  <span className="text-2xl text-blue-600">
                    {openMonthIndex === i ? "−" : "+"}
                  </span>
                </button>
                {openMonthIndex === i && (
                  <div className="p-5 bg-white border-t border-gray-200">
                    <ul className="space-y-3">
                      {m.sessions.map((s, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
          <Link
            href={`/contact?course=${encodeURIComponent(course.title)}&price=${encodeURIComponent(course.pricing?.[0] || "¥18,500+")}`}
            className="px-8 py-4 bg-linear-to-r from-green-600 to-emerald-600 text-white rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Enroll Now - Contact for Details
          </Link>

          <button
            onClick={downloadPDF}
            className="px-8 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Course Outline (PDF)
          </button>
        </div>
      </div>
    </main>
  );
}