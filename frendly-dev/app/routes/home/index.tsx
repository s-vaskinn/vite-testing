import { useEffect } from "react";
import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The frendly dev | Welcome home" },
    { name: "description", content: "Custom website development" },
  ];
}

export default function Home() {
  //console.log("Home page rendered");
  //useEffect(() => {
  //  console.log("Home page useEffect executed");
  //  console.log(window.scrollX);
  //}, []);
  //const now = new Date().toISOString();
  //if (typeof window !== "undefined") {
  //  console.log("Current time (client):", now);
  //} else {
  //  console.log("Current time (server):", now);
  //}
  
  return <section> my app </section>;
}