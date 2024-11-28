"use client";
import { PropsWithChildren } from "react";
import { I18nProviderClient } from "@/locales/conf/client";

export const Providers = ({
  locale,
  children,
}: PropsWithChildren<{ locale: string }>): JSX.Element => {
  return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
};
