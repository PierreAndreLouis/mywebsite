import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function ContactSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Contact - Pierre-André Louis, Développeur Web</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Contactez Pierre-André Louis, développeur web spécialisé dans la création de sites personnels, portfolios et sites de promotion de services. Discutons de votre projet !"
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="contact développeur web, Pierre-André Louis, création de site web, portfolio, service promotion, site internet, freelance" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Contact - Pierre-André Louis, Développeur Web" />
                <meta property="og:description" content="Envie de créer un site web professionnel ? Contactez Pierre-André Louis pour discuter de votre projet." />
                <meta property="og:image" content="https://mon-site.com/images/contact-page.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/contact" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact - Pierre-André Louis, Développeur Web" />
                <meta name="twitter:description" content="Vous avez un projet web en tête ? Contactez-moi pour en discuter et obtenir un devis." />
                <meta name="twitter:image" content="https://mon-site.com/images/contact-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Pierre-André Louis",
              "url": "https://mon-site.com/contact",
              "jobTitle": "Développeur Web",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Support",
                "email": "contact@mon-site.com",
                "url": "https://mon-site.com/contact"
              }
            }
          `}
                </script>

                <meta name="google-site-verification" content="N-zeL1g6i8H01BkSrgIW_lM7MYrYGG3lVzsGMGvSq4o" />

                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-GFV9GQVC5K"></script>
                <script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-GFV9GQVC5K');
                    `}
                </script>
            </Helmet>
        </div>
    )
}
