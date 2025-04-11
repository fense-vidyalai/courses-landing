export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Vidyalai",
          url: "https://vidyalai.com",
          logo: "https://vidyalai.com/images/vidyalai-logo.png",
          sameAs: ["https://facebook.com/vidyalai", "https://twitter.com/vidyalai", "https://instagram.com/vidyalai"],
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+1-555-123-4567",
            contactType: "customer service",
            email: "info@vidyalai.com",
          },
        }),
      }}
    />
  )
}
