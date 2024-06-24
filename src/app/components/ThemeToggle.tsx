"use client";

import { Separator } from "@/components/ui/separator";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";

function LangToggle() {
  const [fr, setFr] = useState(true);

  return (
    <div
      className="flex flex-row items-center gap-4 cursor-pointer select-none"
      onClick={() => setFr((curr) => !curr)}
    >
      <p className={cn((!fr && "font-thin"))}>FR</p>
      <Separator orientation="vertical" />
      <p className={cn((fr && "font-thin"))}>EN</p>
    </div>
  );
}

export default LangToggle;
