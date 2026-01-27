import type { Route } from "./+types/education";
import { Education } from "../education/education";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New Education Page" },
    { name: "description", content: "Welcome to the education page" },
  ];
}

export default function EductionEntry() {
  return <Education />;
}