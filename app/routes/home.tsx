import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Abboud Home" },
    { name: "description", content: "Welcome to the home page" },
  ];
}

export default function Home() {
  return <Welcome />;
}
