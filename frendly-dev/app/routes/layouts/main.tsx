import { Outlet } from "react-router";
import type { Route } from "../about/+types";

export function meta({}:Route.MetaArgs){
  return [
    {title: "the frendly dev 2"},
    {name: "description", content: "custom website development"}
  ];
};

const MainLayout = () => {
  return (
    <div> 
        <section className="max-w-6xl mx-auto px-6 my-8">
            <Outlet />
        </section>
  </div>
  );
};

export default MainLayout;