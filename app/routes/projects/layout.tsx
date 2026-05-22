import { Link, Outlet, useLocation } from "react-router";

const BreadCrumbs = () => { }

const ProjectsLayout = () => {
    const { pathname } = useLocation();
    let url = pathname.trim().substring(1).split("/");

    return <>
        {/* Bread crumbs */}
        <div className="container py-2 flex gap-x-1 md:gap-x-4 text-ellipsis overflow-x-auto">
            <Link to={"/"} className="breadcrumb-item">Home</Link>
            <span>{">"}</span>
            <Link to={"/#projects"} className="breadcrumb-item">Projects</Link>
            <span>{">"}</span>
            <span>{url[url.length - 1].replaceAll("-", " ").split(" ").map((i) => i[0].toLocaleUpperCase() + i.substring(1)).join(" ")}</span>
        </div>

        <div className="container md:py-8">
            <Outlet />
        </div>
    </>
};

export default ProjectsLayout;
