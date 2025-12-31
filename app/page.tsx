import OurCourses from "@/component/courses";
import TopBanner from "@/component/top-banner";
import WhyChooseUs from "@/component/WhyChooseUs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1120] bg-hero">
      <TopBanner />
      <WhyChooseUs/>
      <OurCourses />
    </div>
  );
}
