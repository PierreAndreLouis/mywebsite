import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function HomeSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Accueil - Développeur Web Freelance</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Développeur web freelance spécialisé dans la création de sites web professionnels, portfolios, et solutions adaptées aux freelances. Découvrez mes services sur-mesure."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="développeur web freelance, création de sites web, portfolio, site professionnel, services web, solutions freelances" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Accueil - Développeur Web Freelance" />
                <meta property="og:description" content="Découvrez mes services de développement web sur-mesure, adaptés aux besoins des freelances et entreprises." />
                <meta property="og:image" content="https://ton-site.com/images/developer-home-page.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://ton-site.com" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Accueil - Développeur Web Freelance" />
                <meta name="twitter:description" content="Services professionnels de développement web pour freelances et entreprises. Obtenez un site web qui correspond à vos besoins." />
                <meta name="twitter:image" content="https://ton-site.com/images/developer-home-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              "name": "Développeur Web Freelance",
              "url": "https://ton-site.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://ton-site.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
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
