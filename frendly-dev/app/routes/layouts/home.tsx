import { Outlet } from "react-router";
import Hero from "~/components/Hero";

const HomeLayout = () => {
  return (
    <div>
        <Hero text="YOLO" name="Sindre" />
        <section className="max-w-6xl mx-auto px-6 my-8">
            <Outlet />
        </section>
  </div>
  );
};

export default HomeLayout;