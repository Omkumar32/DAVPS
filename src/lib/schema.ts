import { SCHOOL_INFO } from "@/data/schoolData";

export function generateSchoolJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "School",
    "name": SCHOOL_INFO.name,
    "alternateName": "DAV Public School Ranchi",
    "url": "https://dayanandariaschool.edu.in",
    "logo": "https://dayanandariaschool.edu.in/logo.png",
    "description": SCHOOL_INFO.tagline,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kandri More, Mandar",
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "postalCode": "835214",
      "addressCountry": "IN"
    },
    "telephone": SCHOOL_INFO.phone,
    "email": SCHOOL_INFO.email,
    "foundingDate": SCHOOL_INFO.established,
    "sameAs": [
      "https://facebook.com",
      "https://twitter.com",
      "https://instagram.com",
      "https://youtube.com"
    ]
  };
}
