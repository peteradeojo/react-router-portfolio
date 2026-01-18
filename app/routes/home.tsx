import Container from "~/components/Container";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import { FaExternalLinkAlt } from "react-icons/fa";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Boluwatife Peter Ade-Ojo" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <Container>
        {/* Hero section */}
        <div className="grid md:grid-cols-2">
          {/* Introduction */}
          <div>
            <span className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Boluwatife Peter, Ade-Ojo
              </h2>
              <p className="font-medium italic">Senior Backend Engineer</p>

              <p className="p-4 md:py-8">
                Backend Engineer building production-ready systems
              </p>
            </span>

            <ul className="list-disc px-4">
              <li>API & Service Design</li>
              <li>Data modeling & Performance</li>
              <li>Observability & Reliability</li>
              <li>Deployment & Operations</li>
            </ul>
          </div>

          {/* Headshot */}
          <div className="hidden md:block rounded-lg bg-gray-100 dark:bg-gray-700 transform hover:scale-110 duration-200"></div>
        </div>

        {/* Projects & Links */}
        <section
          id="projects"
          aria-label="Projects section"
          className="py-4 md:py-24"
        >
          <h3 className="text-2xl md:text-3xl text-center md:text-left font-medium md:font-bold uppercase pt-8 pb-4 md:py-8">
            Projects
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project, i) => (
              <div
                className="p-2 rounded-sm border dark:border-0 dark:bg-gray-700 grid gap-y-4"
                key={project.name}
              >
                <p className="text-xl">{project.name}</p>
                <p>{project.statement}</p>
                <Link className="text-sm inline-link self-end" to={project.to}>
                  View Case Study &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <h3 className="text-xl font-semibold text-center pt-16 pb-8 uppercase">
            Toolkit
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border">
                  <th className="border p-2 text-md md:text-xl uppercase tracking-widest">
                    Languages
                  </th>
                  <th className="border p-2 text-md md:text-xl uppercase tracking-widest">
                    Databases
                  </th>
                  <th className="border p-2 text-md md:text-xl uppercase tracking-widest">
                    Infra
                  </th>
                  <th className="border p-2 text-md md:text-xl uppercase tracking-widest">
                    Observability
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-1 md:p-2">
                    <ul className="md:list-disc p-1">
                      <li>PHP/Laravel</li>
                      <li>JavaScript/TypeScript</li>
                      <li>Python</li>
                      <li>Java</li>
                    </ul>
                  </td>
                  <td className="border p-1 md:p-2">
                    <ul className="md:list-disc p-1">
                      <li>MySQL</li>
                      <li>PostgreSQL</li>
                      <li>MongoDB</li>
                      <li>Redis</li>
                    </ul>
                  </td>
                  <td className="border p-1 md:p-2">
                    <ul className="md:list-disc p-1">
                      <li>Linux</li>
                      <li>Nginx</li>
                      <li>Docker</li>
                      <li>AWS</li>
                    </ul>
                  </td>
                  <td className="border p-1 md:p-2 align-middle">
                    <ul className="md:list-disc p-1">
                      <li>Grafana</li>
                      <li>Prometheus</li>
                      <li>Loki</li>
                      <li>Datadog</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td className="border p-2" colSpan={4}>
                    Others: RabbitMQ, WebSockets, Pub/Sub
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div className="flex gap-4 flex-wrap md:gap-x-24 items-center snap-start justify-center overflow-x-auto">
            {/* {tech_stack.map((item, index) => (
              <div className="grid gap-y-2 place-items-center" key={index}>
                <span className="w-8 md:w-14">
                  {item.type != undefined && item.type == "svg" ? (
                    item.image
                  ) : (
                    <img src={item.image as string} alt={item.alt} />
                  )}
                </span>
                <p>{item.alt}</p>
              </div>
            ))} */}
          </div>
        </section>

        {/* Contact */}
        <section aria-label="Contact" className="py-4 md:py-8">
          <div className="grid sm:grid-cols-2 gap-x-4">
            <div>
              <h3 className="text-3xl font-semibold uppercase">Contact</h3>
              <div className="py-3"></div>
              <p>You can reach me at:</p>
              <p>
                E-mail:{" "}
                <a href="mailto:adeojopeter@gmail.com" className="inline-link">
                  adeojopeter@gmail.com
                </a>
              </p>
              <p>
                Tel: <a href="tel:+2348103490675">+234 81 0349 0675</a>
              </p>
              <p>
                Twitter/X:{" "}
                <a
                  href="https://x.com/boluwatifee__"
                  target="_blank"
                  className="inline-link"
                >
                  @boluwatifee__ <FaExternalLinkAlt className="inline" />{" "}
                </a>
              </p>
            </div>

            <div></div>
          </div>
        </section>
      </Container>
    </>
  );
}

const projects = [
  {
    name: "Realtime Bank Transaction Success Rate Monitor",
    to: "/projects/network-monitor",
    statement:
      "Goal: A realtime view of the performance of different banking partners for successful completion of transfer/card transactions",
  },
  {
    name: "Electronic Medical Record System",
    to: "/projects/electronic-medical-system",
    statement:
      "Goal: To design, develop and deploy a fully-featured, customized electronic medical record system for a hospital handling all operations from patient record keeping, appointments and management to billing, accounting and reporting.",
  },
  // {
  //   name: "Realtime Bank Transaction Success Rate Monitor",
  //   to: "/",
  //   statement:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo at, in atque praesentium veritatis itaque nulla, impedit aliquam quas fugit maiores illum. Modi veniam enim possimus dignissimos ipsam excepturi.",
  // },
];

const tech_stack = [
  {
    alt: "PHP",
    type: "svg",
    image: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="Php"
        className="w-full dark:fill-white"
      >
        <desc>Php Streamline Icon: https://streamlinehq.com</desc>
        <title>PHP</title>
        <path
          d="M7.01 10.207h-0.944l-0.515 2.648h0.838c0.556 0 0.97 -0.105 1.242 -0.314 0.272 -0.21 0.455 -0.559 0.55 -1.049 0.092 -0.47 0.05 -0.802 -0.124 -0.995 -0.175 -0.193 -0.523 -0.29 -1.047 -0.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0 -3.486 -5.373 -6.312 -12 -6.312zm-3.26 7.451c-0.261 0.25 -0.575 0.438 -0.917 0.551 -0.336 0.108 -0.765 0.164 -1.285 0.164H5.357l-0.327 1.681H3.652l1.23 -6.326h2.65c0.797 0 1.378 0.209 1.744 0.628 0.366 0.418 0.476 1.002 0.33 1.752a2.836 2.836 0 0 1 -0.305 0.847c-0.143 0.255 -0.33 0.49 -0.561 0.703zm4.024 0.715 0.543 -2.799c0.063 -0.318 0.039 -0.536 -0.068 -0.651 -0.107 -0.116 -0.336 -0.174 -0.687 -0.174H11.46l-0.704 3.625H9.388l1.23 -6.327h1.367l-0.327 1.682h1.218c0.767 0 1.295 0.134 1.586 0.401s0.378 0.7 0.263 1.299l-0.572 2.944h-1.389zm7.597 -2.265a2.782 2.782 0 0 1 -0.305 0.847c-0.143 0.255 -0.33 0.49 -0.561 0.703a2.44 2.44 0 0 1 -0.917 0.551c-0.336 0.108 -0.765 0.164 -1.286 0.164h-1.18l-0.327 1.682h-1.378l1.23 -6.326h2.649c0.797 0 1.378 0.209 1.744 0.628 0.366 0.417 0.477 1.001 0.331 1.751zm-2.595 -1.382h-0.943l-0.516 2.648h0.838c0.557 0 0.971 -0.105 1.242 -0.314 0.272 -0.21 0.455 -0.559 0.551 -1.049 0.092 -0.47 0.049 -0.802 -0.125 -0.995s-0.524 -0.29 -1.047 -0.29z"
          strokeWidth="1"
        ></path>
      </svg>
    ),
  },
  {
    alt: "Laravel",
    type: "svg",
    image: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="Laravel"
        className="w-full fill-[#f53003]"
      >
        <desc>Laravel Logo 2 Streamline Icon: https://streamlinehq.com</desc>
        <path
          fillRule="evenodd"
          d="M5 1a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4 -4V5a4 4 0 0 0 -4 -4H5Zm3.257 5.69a0.625 0.625 0 0 0 -0.612 -0.311l-3.214 0.357a0.625 0.625 0 0 0 -0.501 0.878l3.214 7.143a0.625 0.625 0 0 0 0.718 0.35l3.307 -0.801 1.717 3.004c0.155 0.27 0.485 0.386 0.775 0.27l5.357 -2.142a0.625 0.625 0 0 0 0.276 -0.944l-1.314 -1.84 1.667 -0.404a0.625 0.625 0 0 0 0.333 -1.007L18.194 9.1a0.625 0.625 0 0 0 -0.568 -0.219l-2.5 0.357a0.625 0.625 0 0 0 -0.42 0.982l1.182 1.655 -4.1 0.994 -3.531 -6.18Zm-0.882 0.977 3.149 5.509 -2.453 0.594 -2.649 -5.886 1.953 -0.217Zm6.326 8.55L12.434 14l4.237 -1.027 1.143 1.6 -4.113 1.646Zm4.676 -4.945 -1.18 0.286 -0.877 -1.227 1.137 -0.163 0.92 1.104Z"
          clipRule="evenodd"
          strokeWidth="1"
        ></path>
      </svg>
    ),
  },
  {
    alt: "JavaScript",
    type: "svg",
    image: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="Javascript--Streamline-Simple-Icons"
        className="w-full fill-yellow-400 "
      >
        <desc>Javascript Streamline Icon: https://streamlinehq.com</desc>
        <title>JavaScript</title>
        {/* <rect className="bg-black" width="100%" height="100%" /> */}
        <path
          d="M0 0h24v24H0V0zm22.034 18.276c-0.175 -1.095 -0.888 -2.015 -3.003 -2.873 -0.736 -0.345 -1.554 -0.585 -1.797 -1.14 -0.091 -0.33 -0.105 -0.51 -0.046 -0.705 0.15 -0.646 0.915 -0.84 1.515 -0.66 0.39 0.12 0.75 0.42 0.976 0.9 1.034 -0.676 1.034 -0.676 1.755 -1.125 -0.27 -0.42 -0.404 -0.601 -0.586 -0.78 -0.63 -0.705 -1.469 -1.065 -2.834 -1.034l-0.705 0.089c-0.676 0.165 -1.32 0.525 -1.71 1.005 -1.14 1.291 -0.811 3.541 0.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205 0.24 1.17 -0.87 1.545 -1.966 1.41 -0.811 -0.18 -1.26 -0.586 -1.755 -1.336l-1.83 1.051c0.21 0.48 0.45 0.689 0.81 1.109 1.74 1.756 6.09 1.666 6.871 -1.004 0.029 -0.09 0.24 -0.705 0.074 -1.65l0.046 0.067zm-8.983 -7.245h-2.248c0 1.938 -0.009 3.864 -0.009 5.805 0 1.232 0.063 2.363 -0.138 2.711 -0.33 0.689 -1.18 0.601 -1.566 0.48 -0.396 -0.196 -0.597 -0.466 -0.83 -0.855 -0.063 -0.105 -0.11 -0.196 -0.127 -0.196l-1.825 1.125c0.305 0.63 0.75 1.172 1.324 1.517 0.855 0.51 2.004 0.675 3.207 0.405 0.783 -0.226 1.458 -0.691 1.811 -1.411 0.51 -0.93 0.402 -2.07 0.397 -3.346 0.012 -2.054 0 -4.109 0 -6.179l0.004 -0.056z"
          strokeWidth="1"
          // fill="#000"
        ></path>
      </svg>
    ),
  },
  {
    alt: "PostgreSQL",
    type: "svg",
    image: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="Postgresql--Streamline-Simple-Icons"
        // height="56"
        // width="56"
        className="w-full dark:fill-white"
      >
        <desc>Postgresql Streamline Icon: https://streamlinehq.com</desc>
        <title>PostgreSQL</title>
        <path
          d="M23.5594 14.7228a0.5269 0.5269 0 0 0 -0.0563 -0.1191c-0.139 -0.2632 -0.4768 -0.3418 -1.0074 -0.2321 -1.6533 0.3411 -2.2935 0.1312 -2.5256 -0.0191 1.342 -2.0482 2.445 -4.522 3.0411 -6.8297 0.2714 -1.0507 0.7982 -3.5237 0.1222 -4.7316a1.5641 1.5641 0 0 0 -0.1509 -0.235C21.6931 0.9086 19.8007 0.0248 17.5099 0.0005c-1.4947 -0.0158 -2.7705 0.3461 -3.1161 0.4794a9.449 9.449 0 0 0 -0.5159 -0.0816 8.044 8.044 0 0 0 -1.3114 -0.1278c-1.1822 -0.0184 -2.2038 0.2642 -3.0498 0.8406 -0.8573 -0.3211 -4.7888 -1.645 -7.2219 0.0788C0.9359 2.1526 0.3086 3.8733 0.4302 6.3043c0.0409 0.818 0.5069 3.334 1.2423 5.7436 0.4598 1.5065 0.9387 2.7019 1.4334 3.582 0.553 0.9942 1.1259 1.5933 1.7143 1.7895 0.4474 0.1491 1.1327 0.1441 1.8581 -0.7279 0.8012 -0.9635 1.5903 -1.8258 1.9446 -2.2069 0.4351 0.2355 0.9064 0.3625 1.39 0.3772a0.0569 0.0569 0 0 0 0.0004 0.0041 11.0312 11.0312 0 0 0 -0.2472 0.3054c-0.3389 0.4302 -0.4094 0.5197 -1.5002 0.7443 -0.3102 0.064 -1.1344 0.2339 -1.1464 0.8115 -0.0025 0.1224 0.0329 0.2309 0.0919 0.3268 0.2269 0.4231 0.9216 0.6097 1.015 0.6331 1.3345 0.3335 2.5044 0.092 3.3714 -0.6787 -0.017 2.231 0.0775 4.4174 0.3454 5.0874 0.2212 0.5529 0.7618 1.9045 2.4692 1.9043 0.2505 0 0.5263 -0.0291 0.8296 -0.0941 1.7819 -0.3821 2.5557 -1.1696 2.855 -2.9059 0.1503 -0.8707 0.4016 -2.8753 0.5388 -4.1012 0.0169 -0.0703 0.0357 -0.1207 0.057 -0.1362 0.0007 -0.0005 0.0697 -0.0471 0.4272 0.0307a0.3673 0.3673 0 0 0 0.0443 0.0068l0.2539 0.0223 0.0149 0.001c0.8468 0.0384 1.9114 -0.1426 2.5312 -0.4308 0.6438 -0.2988 1.8057 -1.0323 1.5951 -1.6698zM2.371 11.8765c-0.7435 -2.4358 -1.1779 -4.8851 -1.2123 -5.5719 -0.1086 -2.1714 0.4171 -3.6829 1.5623 -4.4927 1.8367 -1.2986 4.8398 -0.5408 6.108 -0.13 -0.0032 0.0032 -0.0066 0.0061 -0.0098 0.0094 -2.0238 2.044 -1.9758 5.536 -1.9708 5.7495 -0.0002 0.0823 0.0066 0.1989 0.0162 0.3593 0.0348 0.5873 0.0996 1.6804 -0.0735 2.9184 -0.1609 1.1504 0.1937 2.2764 0.9728 3.0892 0.0806 0.0841 0.1648 0.1631 0.2518 0.2374 -0.3468 0.3714 -1.1004 1.1926 -1.9025 2.1576 -0.5677 0.6825 -0.9597 0.5517 -1.0886 0.5087 -0.3919 -0.1307 -0.813 -0.5871 -1.2381 -1.3223 -0.4796 -0.839 -0.9635 -2.0317 -1.4155 -3.5126zm6.0072 5.0871c-0.1711 -0.0428 -0.3271 -0.1132 -0.4322 -0.1772 0.0889 -0.0394 0.2374 -0.0902 0.4833 -0.1409 1.2833 -0.2641 1.4815 -0.4506 1.9143 -1.0002 0.0992 -0.126 0.2116 -0.2687 0.3673 -0.4426a0.3549 0.3549 0 0 0 0.0737 -0.1298c0.1708 -0.1513 0.2724 -0.1099 0.4369 -0.0417 0.156 0.0646 0.3078 0.26 0.3695 0.4752 0.0291 0.1016 0.0619 0.2945 -0.0452 0.4444 -0.9043 1.2658 -2.2216 1.2494 -3.1676 1.0128zm2.094 -3.988 -0.0525 0.141c-0.133 0.3566 -0.2567 0.6881 -0.3334 1.003 -0.6674 -0.0021 -1.3168 -0.2872 -1.8105 -0.8024 -0.6279 -0.6551 -0.9131 -1.5664 -0.7825 -2.5004 0.1828 -1.3079 0.1153 -2.4468 0.079 -3.0586 -0.005 -0.0857 -0.0095 -0.1607 -0.0122 -0.2199 0.2957 -0.2621 1.6659 -0.9962 2.6429 -0.7724 0.4459 0.1022 0.7176 0.4057 0.8305 0.928 0.5846 2.7038 0.0774 3.8307 -0.3302 4.7363 -0.084 0.1866 -0.1633 0.3629 -0.2311 0.5454zm7.3637 4.5725c-0.0169 0.1768 -0.0358 0.376 -0.0618 0.5959l-0.146 0.4383a0.3547 0.3547 0 0 0 -0.0182 0.1077c-0.0059 0.4747 -0.054 0.6489 -0.115 0.8693 -0.0634 0.2292 -0.1353 0.4891 -0.1794 1.0575 -0.11 1.4143 -0.8782 2.2267 -2.4172 2.5565 -1.5155 0.3251 -1.7843 -0.4968 -2.0212 -1.2217a6.5824 6.5824 0 0 0 -0.0769 -0.2266c-0.2154 -0.5858 -0.1911 -1.4119 -0.1574 -2.5551 0.0165 -0.5612 -0.0249 -1.9013 -0.3302 -2.6462 0.0044 -0.2932 0.0106 -0.5909 0.019 -0.8918a0.3529 0.3529 0 0 0 -0.0153 -0.1126 1.4927 1.4927 0 0 0 -0.0439 -0.208c-0.1226 -0.4283 -0.4213 -0.7866 -0.7797 -0.9351 -0.1424 -0.059 -0.4038 -0.1672 -0.7178 -0.0869 0.067 -0.276 0.1831 -0.5875 0.309 -0.9249l0.0529 -0.142c0.0595 -0.16 0.134 -0.3257 0.213 -0.5012 0.4265 -0.9476 1.0106 -2.2453 0.3766 -5.1772 -0.2374 -1.0981 -1.0304 -1.6343 -2.2324 -1.5098 -0.7207 0.0746 -1.3799 0.3654 -1.7088 0.5321a5.6716 5.6716 0 0 0 -0.1958 0.1041c0.0918 -1.1064 0.4386 -3.1741 1.7357 -4.4823a4.0306 4.0306 0 0 1 0.3033 -0.276 0.3532 0.3532 0 0 0 0.1447 -0.0644c0.7524 -0.5706 1.6945 -0.8506 2.802 -0.8325 0.4091 0.0067 0.8017 0.0339 1.1742 0.081 1.939 0.3544 3.2439 1.4468 4.0359 2.3827 0.8143 0.9623 1.2552 1.9315 1.4312 2.4543 -1.3232 -0.1346 -2.2234 0.1268 -2.6797 0.779 -0.9926 1.4189 0.543 4.1729 1.2811 5.4964 0.1353 0.2426 0.2522 0.4522 0.2889 0.5413 0.2403 0.5825 0.5515 0.9713 0.7787 1.2552 0.0696 0.087 0.1372 0.1714 0.1885 0.245 -0.4008 0.1155 -1.1208 0.3825 -1.0552 1.717 -0.0123 0.1563 -0.0423 0.4469 -0.0834 0.8148 -0.0461 0.2077 -0.0702 0.4603 -0.0994 0.7662zm0.8905 -1.6211c-0.0405 -0.8316 0.2691 -0.9185 0.5967 -1.0105a2.8566 2.8566 0 0 0 0.135 -0.0406 1.202 1.202 0 0 0 0.1342 0.103c0.5703 0.3765 1.5823 0.4213 3.0068 0.1344 -0.2016 0.1769 -0.5189 0.3994 -0.9533 0.6011 -0.4098 0.1903 -1.0957 0.333 -1.7473 0.3636 -0.7197 0.0336 -1.0859 -0.0807 -1.1721 -0.151zm0.5695 -9.2712c-0.0059 0.3508 -0.0542 0.6692 -0.1054 1.0017 -0.055 0.3576 -0.112 0.7274 -0.1264 1.1762 -0.0142 0.4368 0.0404 0.8909 0.0932 1.3301 0.1066 0.887 0.216 1.8003 -0.2075 2.7014a3.5272 3.5272 0 0 1 -0.1876 -0.3856c-0.0527 -0.1276 -0.1669 -0.3326 -0.3251 -0.6162 -0.6156 -1.1041 -2.0574 -3.6896 -1.3193 -4.7446 0.3795 -0.5427 1.3408 -0.5661 2.1781 -0.463zm0.2284 7.0137a12.3762 12.3762 0 0 0 -0.0853 -0.1074l-0.0355 -0.0444c0.7262 -1.1995 0.5842 -2.3862 0.4578 -3.4385 -0.0519 -0.4318 -0.1009 -0.8396 -0.0885 -1.2226 0.0129 -0.4061 0.0666 -0.7543 0.1185 -1.0911 0.0639 -0.415 0.1288 -0.8443 0.1109 -1.3505 0.0134 -0.0531 0.0188 -0.1158 0.0118 -0.1902 -0.0457 -0.4855 -0.5999 -1.938 -1.7294 -3.253 -0.6076 -0.7073 -1.4896 -1.4972 -2.6889 -2.0395 0.5251 -0.1066 1.2328 -0.2035 2.0244 -0.1859 2.0515 0.0456 3.6746 0.8135 4.8242 2.2824a0.908 0.908 0 0 1 0.0667 0.1002c0.7231 1.3556 -0.2762 6.2751 -2.9867 10.5405zm-8.8166 -6.1162c-0.025 0.1794 -0.3089 0.4225 -0.6211 0.4225a0.5821 0.5821 0 0 1 -0.0809 -0.0056c-0.1873 -0.026 -0.3765 -0.144 -0.5059 -0.3156 -0.0458 -0.0605 -0.1203 -0.178 -0.1055 -0.2844 0.0055 -0.0401 0.0261 -0.0985 0.0925 -0.1488 0.1182 -0.0894 0.3518 -0.1226 0.6096 -0.0867 0.3163 0.0441 0.6426 0.1938 0.6113 0.4186zm7.9305 -0.4114c0.0111 0.0792 -0.049 0.201 -0.1531 0.3102 -0.0683 0.0717 -0.212 0.1961 -0.4079 0.2232a0.5456 0.5456 0 0 1 -0.075 0.0052c-0.2935 0 -0.5414 -0.2344 -0.5607 -0.3717 -0.024 -0.1765 0.2641 -0.3106 0.5611 -0.352 0.297 -0.0414 0.6111 0.0088 0.6356 0.1851z"
          strokeWidth="2"
        ></path>
      </svg>
    ),
  },
  {
    alt: "Docker",
    type: "svg",
    image: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="Docker--Streamline-Simple-Icons"
        className="w-full fill-blue-300"
      >
        <desc>Docker Streamline Icon: https://streamlinehq.com</desc>
        <title>Docker</title>
        <path
          d="M13.983 11.078h2.119a0.186 0.186 0 0 0 0.186 -0.185V9.006a0.186 0.186 0 0 0 -0.186 -0.186h-2.119a0.185 0.185 0 0 0 -0.185 0.185v1.888c0 0.102 0.083 0.185 0.185 0.185m-2.954 -5.43h2.118a0.186 0.186 0 0 0 0.186 -0.186V3.574a0.186 0.186 0 0 0 -0.186 -0.185h-2.118a0.185 0.185 0 0 0 -0.185 0.185v1.888c0 0.102 0.082 0.185 0.185 0.185m0 2.716h2.118a0.187 0.187 0 0 0 0.186 -0.186V6.29a0.186 0.186 0 0 0 -0.186 -0.185h-2.118a0.185 0.185 0 0 0 -0.185 0.185v1.887c0 0.102 0.082 0.185 0.185 0.186m-2.93 0h2.12a0.186 0.186 0 0 0 0.184 -0.186V6.29a0.185 0.185 0 0 0 -0.185 -0.185H8.1a0.185 0.185 0 0 0 -0.185 0.185v1.887c0 0.102 0.083 0.185 0.185 0.186m-2.964 0h2.119a0.186 0.186 0 0 0 0.185 -0.186V6.29a0.185 0.185 0 0 0 -0.185 -0.185H5.136a0.186 0.186 0 0 0 -0.186 0.185v1.887c0 0.102 0.084 0.185 0.186 0.186m5.893 2.715h2.118a0.186 0.186 0 0 0 0.186 -0.185V9.006a0.186 0.186 0 0 0 -0.186 -0.186h-2.118a0.185 0.185 0 0 0 -0.185 0.185v1.888c0 0.102 0.082 0.185 0.185 0.185m-2.93 0h2.12a0.185 0.185 0 0 0 0.184 -0.185V9.006a0.185 0.185 0 0 0 -0.184 -0.186h-2.12a0.185 0.185 0 0 0 -0.184 0.185v1.888c0 0.102 0.083 0.185 0.185 0.185m-2.964 0h2.119a0.185 0.185 0 0 0 0.185 -0.185V9.006a0.185 0.185 0 0 0 -0.184 -0.186h-2.12a0.186 0.186 0 0 0 -0.186 0.186v1.887c0 0.102 0.084 0.185 0.186 0.185m-2.92 0h2.12a0.185 0.185 0 0 0 0.184 -0.185V9.006a0.185 0.185 0 0 0 -0.184 -0.186h-2.12a0.185 0.185 0 0 0 -0.184 0.185v1.888c0 0.102 0.082 0.185 0.185 0.185M23.763 9.89c-0.065 -0.051 -0.672 -0.51 -1.954 -0.51 -0.338 0.001 -0.676 0.03 -1.01 0.087 -0.248 -1.7 -1.653 -2.53 -1.716 -2.566l-0.344 -0.199 -0.226 0.327c-0.284 0.438 -0.49 0.922 -0.612 1.43 -0.23 0.97 -0.09 1.882 0.403 2.661 -0.595 0.332 -1.55 0.413 -1.744 0.42H0.751a0.751 0.751 0 0 0 -0.75 0.748 11.376 11.376 0 0 0 0.692 4.062c0.545 1.428 1.355 2.48 2.41 3.124 1.18 0.723 3.1 1.137 5.275 1.137 0.983 0.003 1.963 -0.086 2.93 -0.266a12.248 12.248 0 0 0 3.823 -1.389c0.98 -0.567 1.86 -1.288 2.61 -2.136 1.252 -1.418 1.998 -2.997 2.553 -4.4h0.221c1.372 0 2.215 -0.549 2.68 -1.009 0.309 -0.293 0.55 -0.65 0.707 -1.046l0.098 -0.288Z"
          strokeWidth="1"
        ></path>
      </svg>
    ),
  },
  {
    alt: "Nginx",
    type: "svg",
    image: (
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="Nginx--Streamline-Simple-Icons"
        className="w-full fill-green-500 dark:fill-green-400"
      >
        <desc>Nginx Streamline Icon: https://streamlinehq.com</desc>
        <title>NGINX</title>
        <path
          d="M12 0 1.605 6v12L12 24l10.395 -6V6L12 0zm6 16.59c0 0.705 -0.646 1.29 -1.529 1.29 -0.631 0 -1.351 -0.255 -1.801 -0.81l-6 -7.141v6.66c0 0.721 -0.57 1.29 -1.274 1.29H7.32c-0.721 0 -1.29 -0.6 -1.29 -1.29V7.41c0 -0.705 0.63 -1.29 1.5 -1.29 0.646 0 1.38 0.255 1.83 0.81l5.97 7.141V7.41c0 -0.721 0.6 -1.29 1.29 -1.29h0.075c0.72 0 1.29 0.6 1.29 1.29v9.18H18z"
          strokeWidth="1"
        ></path>
      </svg>
    ),
  },
];
