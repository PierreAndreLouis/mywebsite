import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutSeo() {
    return (
        <div>
            {/* Helmet pour les balises SEO */}
            <Helmet>
                {/* Titre de la page */}
                <title>À Propos - Pierre-André Louis</title>

                {/* Meta Description */}
                <meta
                    name="description"
                    content="Découvrez l'histoire et le parcours de Pierre-André Louis, développeur web spécialisé dans la création de sites personnels et promotionnels."
                />

                {/* Mots-clés SEO */}
                <meta name="keywords" content="Pierre-André Louis, développeur web, création de sites web, portfolio, service promotionnel, freelance" />

                {/* Open Graph Tags */}
                <meta property="og:title" content="À Propos - Pierre-André Louis" />
                <meta property="og:description" content="Apprenez-en plus sur Pierre-André Louis, son expertise en développement web, et ses projets professionnels." />
                <meta property="og:image" content="https://mon-site.com/images/about-page.jpg" /> {/* Remplace par une URL d'image appropriée */}

                <meta property="og:url" content="https://mon-site.com/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Card Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="À Propos - Pierre-André Louis" />
                <meta name="twitter:description" content="Découvrez le parcours de Pierre-André Louis, développeur web passionné et expert en création de sites web sur mesure." />
                <meta name="twitter:image" content="https://mon-site.com/images/about-page.jpg" />

                {/* JSON-LD pour le SEO structuré */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Pierre-André Louis",
              "url": "https://mon-site.com/about",
              "jobTitle": "Développeur Web",
              "description": "Développeur spécialisé dans la création de sites web personnels et promotionnels pour les freelancers.",
              "image": "https://mon-site.com/images/about-page.jpg"
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
    );
}
