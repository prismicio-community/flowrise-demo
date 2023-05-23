import { createClient } from "../../prismicio";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="header">
      <div className="flex justify-between">
        <Logo />
        <nav>Navigation</nav>
      </div>
    </Bounded>
  );
}
