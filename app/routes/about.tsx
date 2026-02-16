import type { Route } from "./+types/about";
import { About } from "../about/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Abboud About" },
    { name: "description", content: "Welcome to the about page" },
  ];
}

export default function AboutEntry() {
  return <About />;
}