import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Page",
  description: "Esta es la página de contacto de mi sitio web.",
  keywords: ["About Page", "Santiago"],
};

const AboutPage = () => {
  return <span className="text-7xl">AboutPage</span>;
};

export default AboutPage;
