import React from 'react'
import { Helmet } from 'react-helmet-async';

export default function PortfolioSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>Portfolio - Pierre-André Louis, Développeur Web</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Découvrez le portfolio de Pierre-André Louis, développeur web. Explorez ses projets récents et ses compétences en création de sites web modernes et performants."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="Pierre-André Louis, portfolio développeur web, projets web, création de sites internet, développement front-end, web design, services de développement" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="Portfolio - Pierre-André Louis, Développeur Web" />
                <meta property="og:description" content="Explorez le portfolio de Pierre-André Louis, un développeur web spécialisé en création de sites web modernes et performants." />
                <meta property="og:image" content="https://mon-site.com/images/portfolio-page.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/portfolio" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Portfolio - Pierre-André Louis, Développeur Web" />
                <meta name="twitter:description" content="Découvrez les projets récents de Pierre-André Louis, spécialiste en développement de sites web modernes." />
                <meta name="twitter:image" content="https://mon-site.com/images/portfolio-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "WebSite",
              "name": "Pierre-André Louis, Développeur Web",
              "url": "https://mon-site.com/portfolio",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://mon-site.com/search?q={search_term_string}",
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
