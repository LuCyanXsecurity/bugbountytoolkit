import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Seo: React.FC = () => {
  const siteUrl = 'https://bugbountytoolkit.vercel.app';
  const title = 'Bug Bounty Toolkit - Ultimate Collection of Hacking Tools, Payloads & Commands';
  const description = 'The most comprehensive bug bounty toolkit for ethical hackers and security researchers. Access 500+ tools, payloads, one-liner commands, reconnaissance techniques, and penetration testing methodologies. Free and open-source.';
  const keywords = 'bug bounty, bug bounty tools, pentesting, penetration testing, ethical hacking, security research, hacking tools, payloads, XSS payloads, SQL injection, SSRF, subdomain enumeration, reconnaissance, nuclei, burpsuite, ffuf, amass, subfinder, httpx, one-liner, hacking commands, security toolkit, cybersecurity, web security, vulnerability scanner, exploit, red team, offensive security';
  const author = 'LuCyanXsecurity';
  const ogImage = `${siteUrl}/logo-og.png`;

  // Structured Data for Software Application
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Bug Bounty Toolkit',
    url: siteUrl,
    description: description,
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://github.com/LuCyanXsecurity'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1'
    }
  };

  // Structured Data for Organization
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Bug Bounty Toolkit',
    url: siteUrl,
    logo: ogImage,
    sameAs: [
      'https://github.com/LuCyanXsecurity/bugbountytoolkit'
    ]
  };

  // Breadcrumb Structured Data
  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tools & Commands',
        item: `${siteUrl}/#commands`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Methodologies',
        item: `${siteUrl}/#methodology`
      }
    ]
  };

  // FAQ Structured Data for rich snippets
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is Bug Bounty Toolkit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Bug Bounty Toolkit is a comprehensive collection of tools, payloads, and commands curated for bug bounty hunters and security researchers. It includes reconnaissance tools, vulnerability scanners, exploitation techniques, and penetration testing methodologies.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Bug Bounty Toolkit free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Bug Bounty Toolkit is completely free and open-source. All tools, payloads, and commands are freely available for ethical hacking and security research purposes.'
        }
      },
      {
        '@type': 'Question',
        name: 'What tools are included in Bug Bounty Toolkit?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The toolkit includes tools for reconnaissance (Amass, Subfinder, Assetfinder), vulnerability scanning (Nuclei, Nikto), web fuzzing (Ffuf, Gobuster), and many one-liner commands for XSS, SSRF, SQL injection, and more.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I start bug bounty hunting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Start by learning the basics of web security, then use our toolkit to practice on legal platforms like HackerOne and Bugcrowd. Our methodology section provides step-by-step guides for reconnaissance, enumeration, and vulnerability discovery.'
        }
      }
    ]
  };

  return (
    <HelmetProvider>
      <Helmet>
        {/* Primary Meta Tags */}
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />
        <meta name="bingbot" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        {/* Theme Color */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Bug Bounty Toolkit - Comprehensive Security Research Tools" />
        <meta property="og:site_name" content="Bug Bounty Toolkit" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:image:alt" content="Bug Bounty Toolkit - Comprehensive Security Research Tools" />
        <meta name="twitter:creator" content="@LuCyanXsecurity" />
        <meta name="twitter:site" content="@LuCyanXsecurity" />

        {/* Additional SEO Meta Tags */}
        <meta name="application-name" content="Bug Bounty Toolkit" />
        <meta name="apple-mobile-web-app-title" content="Bug Bounty Toolkit" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Geo Meta Tags */}
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />

        {/* Content Language */}
        <meta httpEquiv="content-language" content="en" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(organizationData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqData)}
        </script>

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Helmet>
    </HelmetProvider>
  );
};

export default Seo;
