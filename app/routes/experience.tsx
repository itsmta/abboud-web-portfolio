import type { Route } from "./+types/about";
import { Experience } from "../experience/experience";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New Experience Page" },
    { name: "description", content: "Welcome to the experience page" },
  ];
}

export default function ExperienceEntry() {
  return <Experience />;
}