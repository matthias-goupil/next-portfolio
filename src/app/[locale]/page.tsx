import LanguageSwitcher from "@/components/LanguageSwitcher";
import { getI18n } from "@/locales/conf/server";
import { Suspense } from "react";

export default async function Home() {
  const t = await getI18n();

  return (
    <div>
      <p className="font-poppins">{t("hello")}</p>
      <Suspense>
        <LanguageSwitcher />
      </Suspense>
    </div>
  );
}
