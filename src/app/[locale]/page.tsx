import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getI18n } from "@/locales/conf/server";
import { Suspense } from "react";

export default async function Home() {
  const t = await getI18n();

  return (
    <div>
      <p className="font-poppins">{t("hello")}</p>
      <div id="home" className="h-[120vh] py-10 border-b-2 w-full"></div>
      <div id="about-me" className="h-[120vh] py-10  border-b-2 w-full"></div>
      <div id="skills" className="h-[120vh] py-10  border-b-2 w-full"></div>
      <div id="projects" className="h-[120vh] py-10  border-b-2 w-full"></div>
      <div id="contact-me" className="h-[120vh] py-10  border-b-2 w-full"></div>
    </div>
  );
}
