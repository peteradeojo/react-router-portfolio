import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),

  ...prefix("projects", [
    layout("routes/projects/layout.tsx", [
      route("network-monitor", "routes/projects/network-monitor.tsx"),
      route("electronic-medical-system", "routes/projects/emr.tsx", {
        id: "electronic-medical-record-system",
      }),
    ]),
    // route("network-monitor", "routes/projects/network-monitor.tsx"),
    // route("electronic-medical-system", "routes/projects/emr.tsx"),
  ]),
] satisfies RouteConfig;
