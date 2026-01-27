import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
    layout("components/layout/Layout.tsx", [  
        //website entry point
        index("routes/home.tsx"),

        //about page
        route("about", "routes/about.tsx"),

        //education page
        route("education", "routes/education.tsx"),

        //experience page
        route("experience", "routes/experience.tsx"),
    ]),
] satisfies RouteConfig;
