import type React from "react";
import type { JSX } from "react";

export default function Container({
  children,
  className,
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>): JSX.Element {
  return (
    <div className={"p-4 md:px-16 max-w-full m-auto " + className}>
      {children}
    </div>
  );
}
