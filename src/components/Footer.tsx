import { createClient } from "../../prismicio";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";

export default async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer">
      <div className="grid grid-cols-3 ">
        <Logo />
        <div className="flex gap-2 place-self-center">Social Links</div>
        <div className="flex gap-4 text-sm place-self-end">
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
