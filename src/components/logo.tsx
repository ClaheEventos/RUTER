"use client";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Image
        src="/RUTER/logo.png"  // Le agregás el basePath al inicio
        alt="Logo de la empresa"
        width={250}
        height={250}
      />
    </header>
  );
}