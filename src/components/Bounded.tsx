import clsx from "clsx";

export default function Bounded({
  as: Comp = "div",
  className,
  children,
}: {
  as?: any;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Comp className={clsx("px-4 py-8 md:py-10 md:px-6 lg:py-12", className)}>
      <div className={"mx-auto w-full max-w-6xl"}>{children}</div>
    </Comp>
  );
}
