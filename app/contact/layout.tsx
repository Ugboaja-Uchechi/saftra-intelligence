import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Saftra Intelligence",
  description:
    "Get in touch with Saftra Intelligence for inquiries about RFID, AI, logistics automation, tolling, intelligent transportation systems, or enterprise solutions.",
  openGraph: {
    title: "Contact Saftra Intelligence",
    description:
      "Reach out to our team for consultations, partnerships, enterprise solutions, and support.",
    url: "https://saftraintelligence.com/contact",
  },
  alternates: {
    canonical: "https://saftraintelligence.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}