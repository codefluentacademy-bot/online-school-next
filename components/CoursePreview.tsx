import Link from "next/link";


export default function CoursePreview() {
const courses = [
{ title: "Scratch Programming", level: "Beginner" },
{ title: "Python for Kids", level: "Intermediate" },
{ title: "Web Development", level: "Advanced" },
];


return (
<section className="py-16 bg-gray-50">
<div className="max-w-6xl mx-auto px-4">
<h2 className="text-3xl font-bold text-center mb-10">
Our Programs
</h2>


<div className="grid md:grid-cols-3 gap-6">
{courses.map((course) => (
<div
key={course.title}
className="bg-white p-6 rounded-xl shadow"
>
<h3 className="text-xl font-semibold mb-2">
{course.title}
</h3>
<p className="text-gray-600 mb-4">
Level: {course.level}
</p>
<Link
href="/courses"
className="text-blue-600 font-medium"
>
Learn more →
</Link>
</div>
))}
</div>
</div>
</section>
);
}