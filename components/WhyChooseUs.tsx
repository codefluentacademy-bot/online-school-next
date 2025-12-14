export default function WhyChooseUs() {
const reasons = [
"Live online classes",
"Small group or 1-on-1",
"Beginner-friendly curriculum",
"Patient and experienced teachers",
];


return (
<section className="py-16">
<div className="max-w-5xl mx-auto px-4 text-center">
<h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
<ul className="grid md:grid-cols-2 gap-6">
{reasons.map((reason) => (
<li key={reason} className="p-6 border rounded-lg">
{reason}
</li>
))}
</ul>
</div>
</section>
);
}