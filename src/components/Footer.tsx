import { createClient } from "@/prismicio";
import Bounded from "@/components/Bounded";
import Logo from "@/components/Logo";

export default async function Footer() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded as="footer">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
        <Logo />

        <div className="flex text-center gap-4 text-sm flex-wrap sm:flex-row flex-col">
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
