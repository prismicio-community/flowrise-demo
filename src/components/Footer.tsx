import { createClient } from "../../prismicio";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";

export default async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer">
      <div className="grid sm:grid-cols-3 grid-cols-1 md:place-items-stretch place-items-center gap-4">
        <Logo />
        <div className="flex gap-2 md:place-self-center">Social Links</div>
        <div className="flex text-center gap-4 text-sm md:place-self-end flex-wrap sm:flex-row flex-col">
          <p>
            © {new Date().getFullYear()} {settings.data.site_name}
          </p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </Bounded>
  );
}
