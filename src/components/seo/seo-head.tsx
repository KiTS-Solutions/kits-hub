import Head from 'next/head'

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  ogImage?: string
  ogType?: string
  noindex?: boolean
  structuredData?: Record<string, any>
}

export function SEOHead({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noindex = false,
  structuredData,
}: SEOHeadProps) {
  const siteTitle = 'KiTS Hub - CRM Solutions & Business Software'
  const siteDescription = 'Empowering businesses with cutting-edge CRM solutions and custom software development. Transform your operations with our comprehensive suite of tools and services.'
  const baseUrl = 'https://kits-hub.com'
  
  const finalTitle = title ? `${title} | KiTS Hub` : siteTitle
  const finalDescription = description || siteDescription
  const finalCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl
  const finalOgImage = ogImage || `${baseUrl}/kits-logo.png`

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={finalCanonical} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="KiTS Hub" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="googlebot" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      <meta name="author" content="KiTS Hub" />
      <meta name="keywords" content="CRM, business software, customer relationship management, lead management, sales automation, business analytics" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </Head>
  )
}
