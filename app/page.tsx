import OurCourses from "@/component/courses";
import TopBanner from "@/component/top-banner";
import WhyChooseUs from "@/component/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <WhyChooseUs/>
      <OurCourses />
    </div>
  );
}
