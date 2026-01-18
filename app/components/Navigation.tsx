import { Link } from "react-router";
import { FaGithub, FaLink } from "react-icons/fa";

const links = [
  { to: "/", label: <>Home</> },
  { to: "/about", label: <>About</> },
  { to: "/#projects", label: <>Projects</> },
];

export default function Navigation() {
  return (
    <div className="sticky bg-inherit w-full top-0">
      <div className="flex py-4 px-1 md:px-8 items-center justify-center md:justify-end md:gap-x-4 border-b md:border-0">
        {links.map(({ to, label }, i) => (
          <Link
            key={i}
            className="py-2.5 px-4 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-800 duration-200"
            to={to}
          >
            {label}
          </Link>
        ))}

        <a
          href="https://dev.to/peteradeojo"
          target="_blank"
          className="py-2.5 px-4 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-800 duration-200"
        >
          Blog
        </a>
        <a
          href="https://github.com/peteradeojo"
          target="_blank"
          className="py-2.5 px-4 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-800 duration-200"
        >
          <FaGithub className="text-xl" />
        </a>
      </div>
    </div>
  );
}
