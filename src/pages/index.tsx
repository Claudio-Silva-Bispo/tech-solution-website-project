import Head from 'next/head';
import Hero from '../components/Hero'
import About from '../components/About'
import ClientsMarquee from '../components/ClientsMarquee'
import CompleteServicesPage from '../components/CompleteServicesPage'
import ContactForm from '../components/ContactForm'
import TestimonialsSection from '../components/TestimonialsSection'

export default function Home() {
  return (
    <>
      <Head>
        {/* Título principal que aparece na aba e no Google */}
        <title>Tech Solution - Desenvolvimento Web, Power BI e Sistemas para Pequenas Empresas</title>
        
        {/* Descrição que aparece no Google */}
        <meta 
          name="description" 
          content="Soluções em tecnologia para pequenos negócios: Criação de sites profissionais, Aplicativos para celulares, Sistemas, dashboards em Power BI, engenharia de dados, Google Meu Negócio e gestão de redes sociais. Transforme seu negócio digital."
        />
        
        {/* Palavras-chave */}
        <meta 
          name="keywords" 
          content="desenvolvimento web, criação de sites, criação de aplicativos para celular, power bi, dashboard, engenharia de dados, google meu negócio, redes sociais, pequenas empresas, landing page, site institucional, loja virtual"
        />
        
        {/* Autor */}
        <meta name="author" content="Tech Solution" />
        
        {/* Viewport para responsividade */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph para redes sociais */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Tech Solution - Soluções em Tecnologia" />
        <meta property="og:description" content="Desenvolvimento Web, Power BI, Sistemas e Consultoria para Pequenas Empresas" />
        <meta property="og:image" content="https://bctechsolutionsadvisory.com/logo/logo-principal/original_sem_fundo.png" />
        <meta property="og:url" content="https://bctechsolutionsadvisory.com" />
        <meta property="og:site_name" content="Tech Solution" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tech Solution - Soluções em Tecnologia" />
        <meta name="twitter:description" content="Desenvolvimento Web, Power BI e Sistemas para Pequenas Empresas" />
        <meta name="twitter:image" content="https://bctechsolutionsadvisory.com/logo/logo-principal/original_sem_fundo.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://bctechsolutionsadvisory.com" />
        
        {/* Schema.org para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tech Solution",
              "url": "https://bctechsolutionsadvisory.com",
              "logo": "https://bctechsolutionsadvisory.com/logo/logo-principal/original_sem_fundo.png",
              "description": "Soluções em tecnologia para pequenas empresas: Desenvolvimento Web, Power BI, Sistemas e Consultoria",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55-11-95875-7740",
                "contactType": "Customer Service",
                "availableLanguage": ["Portuguese", "English"]
              },
              "sameAs": [
                "https://www.instagram.com/bctech.solutions/",
                "https://github.com/Claudio-Silva-Bispo",
                "https://www.linkedin.com/in/claudiosbispo/"
              ],
              "offers": {
                "@type": "AggregateOffer",
                "offerCount": "6",
                "lowPrice": "499",
                "highPrice": "4500",
                "priceCurrency": "BRL"
              }
            })
          }}
        />
      </Head>

      <div> 
        <Hero/>
        <About/>
        <CompleteServicesPage/>
        <ContactForm/>
        <ClientsMarquee/>
        <TestimonialsSection/>
      </div>
    </>
  )
}