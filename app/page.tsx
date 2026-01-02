import OurCourses from "@/component/courses";
import TopBanner from "@/component/top-banner";
import WhyChooseUs from "@/component/why-choose-us";
import CourseOutline from "./course-outline/course-outline";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <WhyChooseUs />
      <OurCourses />
      <CourseOutline />
    </div>
  );
}
