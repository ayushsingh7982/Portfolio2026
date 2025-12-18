import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "Ayush Singh - Full Stack Developer | React, TypeScript, Node.js",
  description = "Experienced Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. Creating premium digital experiences with clean, scalable code.",
  keywords = "Full Stack Developer, React Developer, TypeScript, Node.js, JavaScript, Web Development, Frontend Developer, Backend Developer, MERN Stack, Portfolio",
  image = "https://ayushsingh-portfolio.vercel.app/og-image.jpg",
  url = "https://ayushsingh-portfolio.vercel.app"
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement("meta");
        if (property) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute("content", content);
    };

    // Basic meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Ayush Singh");
    updateMetaTag("robots", "index, follow");
    updateMetaTag("viewport", "width=device-width, initial-scale=1.0");

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", url, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:site_name", "Ayush Singh Portfolio", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:creator", "@ayushsingh7982");

    // Additional SEO tags
    updateMetaTag("theme-color", "#00ffff");
    updateMetaTag("msapplication-TileColor", "#00ffff");

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Structured Data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ayush Singh",
      "jobTitle": "Full Stack Developer",
      "description": description,
      "url": url,
      "image": image,
      "sameAs": [
        "https://github.com/ayushsingh7982",
        "https://www.linkedin.com/in/ayushsingh7982/",
        "https://twitter.com/ayushsingh7982"
      ],
      "knowsAbout": [
        "JavaScript",
        "TypeScript",
        "React",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Full Stack Development",
        "Web Development",
        "Frontend Development",
        "Backend Development"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Your University Name"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Delhi",
        "addressCountry": "India"
      }
    };

    let jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLd) {
      jsonLd = document.createElement("script");
      jsonLd.setAttribute("type", "application/ld+json");
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);

  }, [title, description, keywords, image, url]);

  return null;
};

export default SEO;