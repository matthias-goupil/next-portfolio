"use client";

import { useI18n } from "@/locales/conf/client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { enKeys } from "@/locales/en";
import { frKeys } from "@/locales/fr";
interface IMenuProps {
  links: {
    icon: JSX.Element;
    href: string;
    label: enKeys | frKeys;
    id?: string;
  }[];
  variant?: "default";
}

function Menu({ links, variant = "default" }: IMenuProps) {
  const t = useI18n();
  const spanRef = useRef<HTMLSpanElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    links.forEach(({ id, href }) => {
      const element = document.getElementById(id || "");
      if (element) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (ulRef.current) {
                const link = ulRef.current.querySelector<HTMLLinkElement>(
                  `a[href='${href}']`
                );
                if (spanRef.current && link) {
                  spanRef.current.style.transform = `translateX(${
                    link.offsetLeft - spanRef.current.offsetLeft
                  }px)`;
                }
              }
            } else {
              console.log("oui");
            }
          });
        });

        observer.observe(element);
      }
    });
  }, [spanRef.current, ulRef.current, links]);

  return (
    <nav className="fixed bottom-0 left-0 mb-3 w-full flex items-center justify-center">
      <ul
        ref={ulRef}
        className="relative mx-auto flex gap-6 items-center rounded-full bg-white-600 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 px-4 py-2 w-fit"
      >
        <span
          ref={spanRef}
          className="bg-orange-300 absolute w-10 h-10 p-2 rounded-full transition-transform z-0"
        ></span>
        {links.map(({ href, label, icon }, id) => {
          return (
            <Link className="p-2 z-20" href={href} key={id} title={t(label)}>
              {icon}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

export default Menu;
