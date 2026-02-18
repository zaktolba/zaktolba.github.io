export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zakarya Tolba",
    jobTitle: "Swift / iOS, macOS, visionOS Developer",
    email: "zakarya.tolba@icloud.com",
    telephone: "+33631991872",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lyon",
      addressCountry: "FR",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "YNOV Lyon (Ingésup)",
      },
      {
        "@type": "EducationalOrganization",
        name: "ICOF",
      },
    ],
    knowsAbout: [
      "Swift",
      "SwiftUI",
      "visionOS",
      "RealityKit",
      "Reality Composer Pro",
      "ARKit",
      "iOS Development",
      "macOS Development",
      "React Native",
      "TypeScript",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Novelab (Mantu)",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lyon",
        addressCountry: "FR",
      },
    },
    hasOccupation: [
      {
        "@type": "Occupation",
        name: "visionOS & XR Developer",
        occupationLocation: {
          "@type": "City",
          name: "Lyon",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
