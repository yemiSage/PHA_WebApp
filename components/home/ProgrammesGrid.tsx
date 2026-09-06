import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { courses } from "@/data/home";

const description = "Learn to create visually compelling and user-friendly digital products.";

function CourseCard({ course }: { course: (typeof courses)[number] }) {
  const href = course.title === "Data Analytics" ? "/courses/data-science" : "/contact?subject=course";
  return (
    <article className="course-card">
      <div className="course-card__image"><Image {...course.image} alt="" /></div>
      <div className="course-card__content">
        <h3>{course.title}</h3>
        <p>{description}</p>
        <Button href={href} variant="ghost" size="small" arrow>Start course</Button>
      </div>
    </article>
  );
}

export function ProgrammesGrid() {
  return (
    <div className="section-shell programmes-grid">
      <div className="course-grid">{courses.slice(0, 6).map((course) => <CourseCard course={course} key={course.title} />)}</div>
      <details className="course-grid__more">
        <summary className="course-grid__toggle"><span>View more</span><span>View less</span></summary>
        <div className="course-grid course-grid--more">{courses.slice(6).map((course) => <CourseCard course={course} key={course.title} />)}</div>
      </details>
    </div>
  );
}
