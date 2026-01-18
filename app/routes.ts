import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),

  ...prefix('projects', [
    route('network-monitor', 'routes/projects/network-monitor.tsx'),
    route('electronic-medical-system', 'routes/projects/emr.tsx'),
  ]),
] satisfies RouteConfig;
