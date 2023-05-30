import clsx from "clsx";

export default function Bounded({
  as: Comp = "section",
  className,
  children,
}: {
  as?: any;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Comp className={clsx("px-4 py-10 md:py-14 md:px-6 lg:py-16", className)}>
      <div className={"mx-auto w-full max-w-6xl"}>{children}</div>
    </Comp>
  );
}
