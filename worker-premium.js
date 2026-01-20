// Cloudflare Worker - After Licors Premium Nightlife Experience
// Diseño optimizado para conversión y experiencia nocturna premium

export default {
  async fetch(request, env, ctx) {
    const html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="After Licors - Donde empieza el after. Coctelería de autor, música urbana y ambiente nocturno en Quito.">
    <title>AFTER LICORS | Coctelería & Música Urbana</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            /* Paleta Nightlife Premium */
            --cyan-neon: #00d9ff;
            --amber-warm: #ff6b35;
            --dark-bg: #050810;
            --dark-card: #0f1320;
            --dark-secondary: #0a0e27;
            --text-light: #ffffff;
            --text-gray: #b8c5d6;
            --neon-glow: 0 0 20px rgba(0, 217, 255, 0.6), 0 0 40px rgba(0, 217, 255, 0.3);
            --amber-glow: 0 0 20px rgba(255, 107, 53, 0.4);
            
            /* Tipografías */
            --font-heading: 'Montserrat', sans-serif;
            --font-body: 'Inter', sans-serif;
        }

        body {
            font-family: var(--font-body);
            background: var(--dark-bg);
            color: var(--text-light);
            line-height: 1.6;
            overflow-x: hidden;
        }

        /* === HEADER === */
        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: rgba(5, 8, 16, 0.95);
            backdrop-filter: blur(10px);
            padding: 1.2rem 0;
            z-index: 1000;
            border-bottom: 1px solid rgba(0, 217, 255, 0.1);
            transition: all 0.3s ease;
        }

        header.scrolled {
            padding: 0.8rem 0;
            box-shadow: 0 4px 30px rgba(0, 217, 255, 0.1);
        }

        nav {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        .logo {
            font-family: var(--font-heading);
            font-size: 1.8rem;
            font-weight: 900;
            color: var(--cyan-neon);
            text-decoration: none;
            letter-spacing: 3px;
            text-shadow: var(--neon-glow);
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2.5rem;
            align-items: center;
        }

        .nav-links a {
            color: var(--text-light);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
            font-size: 0.95rem;
            letter-spacing: 0.5px;
        }

        .nav-links a:hover {
            color: var(--cyan-neon);
        }

        .nav-cta {
            background: var(--cyan-neon);
            color: var(--dark-bg);
            padding: 0.7rem 1.8rem;
            border-radius: 30px;
            font-weight: 700;
            transition: all 0.3s;
        }

        .nav-cta:hover {
            background: var(--text-light);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 217, 255, 0.3);
        }

        .menu-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
            gap: 5px;
        }

        .menu-toggle span {
            width: 28px;
            height: 3px;
            background: var(--cyan-neon);
            border-radius: 2px;
            transition: 0.3s;
        }

        /* === HERO SECTION === */
        .hero {
            height: 100vh;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            overflow: hidden;
        }

        .hero-video {
            position: absolute;
            top: 50%;
            left: 50%;
            min-width: 100%;
            min-height: 100%;
            width: auto;
            height: auto;
            transform: translate(-50%, -50%);
            z-index: 1;
            object-fit: cover;
            filter: brightness(0.4);
        }

        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, 
                rgba(5, 8, 16, 0.7) 0%, 
                rgba(10, 14, 39, 0.8) 50%,
                rgba(5, 8, 16, 0.9) 100%);
            z-index: 2;
        }

        .hero-content {
            position: relative;
            z-index: 3;
            max-width: 900px;
            padding: 0 2rem;
            animation: fadeInUp 1s ease-out;
        }

        .hero-badge {
            display: inline-block;
            background: rgba(0, 217, 255, 0.15);
            border: 1px solid var(--cyan-neon);
            color: var(--cyan-neon);
            padding: 0.6rem 1.5rem;
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 2rem;
            letter-spacing: 1px;
        }

        .hero h1 {
            font-family: var(--font-heading);
            font-size: 5rem;
            font-weight: 900;
            color: var(--text-light);
            margin-bottom: 1rem;
            letter-spacing: 2px;
            line-height: 1.1;
            text-shadow: var(--neon-glow);
        }

        .hero h1 span {
            color: var(--cyan-neon);
        }

        .hero-subtitle {
            font-size: 1.4rem;
            color: var(--text-gray);
            margin-bottom: 1rem;
            font-weight: 300;
            letter-spacing: 0.5px;
        }

        .hero-description {
            font-size: 1.1rem;
            color: var(--text-gray);
            margin-bottom: 3rem;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-ctas {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
        }

        .cta-primary {
            background: var(--cyan-neon);
            color: var(--dark-bg);
            padding: 1.2rem 3rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 1.1rem;
            transition: all 0.3s;
            display: inline-flex;
            align-items: center;
            gap: 0.8rem;
            box-shadow: 0 8px 25px rgba(0, 217, 255, 0.3);
        }

        .cta-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 12px 35px rgba(0, 217, 255, 0.5);
            background: var(--text-light);
        }

        .cta-secondary {
            background: transparent;
            border: 2px solid var(--cyan-neon);
            color: var(--cyan-neon);
            padding: 1.2rem 3rem;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s;
        }

        .cta-secondary:hover {
            background: var(--cyan-neon);
            color: var(--dark-bg);
        }

        /* === FLOATING WHATSAPP === */
        .whatsapp-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: #25d366;
            width: 65px;
            height: 65px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5);
            z-index: 999;
            transition: all 0.3s;
            text-decoration: none;
            animation: pulse 2s infinite;
        }

        .whatsapp-float:hover {
            transform: scale(1.1);
            box-shadow: 0 12px 35px rgba(37, 211, 102, 0.7);
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        /* === SECTIONS === */
        section {
            padding: 6rem 2rem;
            max-width: 1400px;
            margin: 0 auto;
        }

        .section-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .section-badge {
            display: inline-block;
            background: rgba(0, 217, 255, 0.1);
            border: 1px solid rgba(0, 217, 255, 0.3);
            color: var(--cyan-neon);
            padding: 0.5rem 1.2rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            letter-spacing: 1.5px;
            text-transform: uppercase;
        }

        .section-title {
            font-family: var(--font-heading);
            font-size: 3.5rem;
            font-weight: 800;
            color: var(--text-light);
            margin-bottom: 1rem;
            letter-spacing: 1px;
        }

        .section-title span {
            color: var(--cyan-neon);
        }

        .section-description {
            font-size: 1.2rem;
            color: var(--text-gray);
            max-width: 700px;
            margin: 0 auto;
            line-height: 1.8;
        }

        /* === EXPERIENCIA SECTION === */
        .experience-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 2.5rem;
            margin-top: 3rem;
        }

        .experience-card {
            background: var(--dark-card);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.4s;
            border: 1px solid rgba(0, 217, 255, 0.1);
            position: relative;
        }

        .experience-card:hover {
            transform: translateY(-10px);
            border-color: var(--cyan-neon);
            box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);
        }

        .experience-card img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            transition: transform 0.6s;
        }

        .experience-card:hover img {
            transform: scale(1.1);
        }

        .experience-content {
            padding: 2.5rem;
        }

        .experience-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .experience-content h3 {
            font-family: var(--font-heading);
            font-size: 1.8rem;
            color: var(--text-light);
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .experience-content p {
            color: var(--text-gray);
            font-size: 1.05rem;
            line-height: 1.8;
        }

        /* === COCTELERÍA SECTION === */
        .cocktails-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 3rem;
        }

        .cocktail-card {
            background: var(--dark-card);
            border-radius: 20px;
            overflow: hidden;
            transition: all 0.4s;
            border: 1px solid rgba(0, 217, 255, 0.1);
            cursor: pointer;
        }

        .cocktail-card:hover {
            transform: translateY(-8px);
            border-color: var(--amber-warm);
            box-shadow: 0 15px 35px rgba(255, 107, 53, 0.3);
        }

        .cocktail-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            transition: transform 0.6s;
        }

        .cocktail-card:hover .cocktail-image {
            transform: scale(1.1);
        }

        .cocktail-info {
            padding: 1.8rem;
        }

        .cocktail-info h3 {
            font-family: var(--font-heading);
            font-size: 1.4rem;
            color: var(--text-light);
            margin-bottom: 0.8rem;
            font-weight: 700;
        }

        .cocktail-info p {
            color: var(--text-gray);
            font-size: 0.95rem;
            line-height: 1.6;
        }

        .cocktail-recommended {
            background: linear-gradient(135deg, var(--amber-warm), #d4145a);
            border: 2px solid var(--amber-warm);
        }

        .cocktail-recommended .cocktail-info {
            position: relative;
        }

        .recommended-badge {
            position: absolute;
            top: -50px;
            right: 10px;
            background: var(--amber-warm);
            color: var(--dark-bg);
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            letter-spacing: 1px;
            text-transform: uppercase;
            box-shadow: var(--amber-glow);
        }

        /* === EVENTOS SECTION === */
        .dark-section {
            background: var(--dark-secondary);
            padding: 6rem 2rem;
            margin: 4rem 0;
            max-width: 100%;
        }

        .eventos-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2.5rem;
            max-width: 1400px;
            margin: 3rem auto 0;
        }

        .evento-card {
            background: var(--dark-card);
            border-radius: 20px;
            padding: 2.5rem;
            border: 2px solid transparent;
            transition: all 0.4s;
            text-align: center;
        }

        .evento-card:hover {
            border-color: var(--cyan-neon);
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 217, 255, 0.2);
        }

        .evento-icon {
            font-size: 4rem;
            margin-bottom: 1.5rem;
        }

        .evento-card h3 {
            font-family: var(--font-heading);
            font-size: 1.8rem;
            color: var(--text-light);
            margin-bottom: 1rem;
            font-weight: 700;
        }

        .evento-card p {
            color: var(--text-gray);
            font-size: 1.05rem;
            line-height: 1.8;
            margin-bottom: 1.5rem;
        }

        .evento-cta {
            display: inline-block;
            background: transparent;
            border: 2px solid var(--cyan-neon);
            color: var(--cyan-neon);
            padding: 0.9rem 2rem;
            border-radius: 30px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s;
        }

        .evento-cta:hover {
            background: var(--cyan-neon);
            color: var(--dark-bg);
        }

        /* === GALERÍA === */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 3rem;
        }

        .gallery-item {
            position: relative;
            height: 350px;
            border-radius: 15px;
            overflow: hidden;
            cursor: pointer;
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s;
        }

        .gallery-item:hover img {
            transform: scale(1.15);
        }

        .gallery-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, transparent 0%, rgba(0, 217, 255, 0.8) 100%);
            opacity: 0;
            transition: opacity 0.4s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .gallery-item:hover .gallery-overlay {
            opacity: 1;
        }

        .gallery-icon {
            font-size: 3rem;
            color: white;
        }

        /* === CONTACTO === */
        .contacto-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
            margin-top: 3rem;
        }

        .contacto-map {
            width: 100%;
            height: 500px;
            border-radius: 20px;
            overflow: hidden;
            border: 2px solid rgba(0, 217, 255, 0.2);
        }

        .contacto-map iframe {
            width: 100%;
            height: 100%;
            border: 0;
        }

        .contacto-info {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .info-card {
            background: var(--dark-card);
            padding: 2rem;
            border-radius: 15px;
            border: 1px solid rgba(0, 217, 255, 0.1);
            transition: all 0.3s;
        }

        .info-card:hover {
            border-color: var(--cyan-neon);
            transform: translateX(5px);
        }

        .info-card h3 {
            font-family: var(--font-heading);
            font-size: 1.3rem;
            color: var(--cyan-neon);
            margin-bottom: 0.8rem;
            display: flex;
            align-items: center;
            gap: 0.8rem;
        }

        .info-card p {
            color: var(--text-gray);
            font-size: 1.05rem;
            line-height: 1.8;
        }

        .info-card a {
            color: var(--text-light);
            text-decoration: none;
            transition: color 0.3s;
        }

        .info-card a:hover {
            color: var(--cyan-neon);
        }

        .final-cta {
            background: linear-gradient(135deg, var(--cyan-neon), #0088cc);
            padding: 3rem;
            border-radius: 20px;
            text-align: center;
            margin-top: 3rem;
        }

        .final-cta h3 {
            font-family: var(--font-heading);
            font-size: 2.5rem;
            color: var(--dark-bg);
            margin-bottom: 1rem;
            font-weight: 800;
        }

        .final-cta p {
            color: var(--dark-bg);
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }

        /* === FOOTER === */
        footer {
            background: var(--dark-secondary);
            padding: 3rem 2rem 2rem;
            text-align: center;
            border-top: 1px solid rgba(0, 217, 255, 0.1);
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
        }

        .social-links a {
            color: var(--cyan-neon);
            font-size: 2rem;
            transition: all 0.3s;
            text-decoration: none;
        }

        .social-links a:hover {
            transform: translateY(-5px) scale(1.2);
            text-shadow: var(--neon-glow);
        }

        footer p {
            color: var(--text-gray);
            font-size: 0.95rem;
        }

        /* === ANIMATIONS === */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(40px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
            .contacto-container {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 768px) {
            .menu-toggle {
                display: flex;
            }

            .nav-links {
                position: fixed;
                top: 70px;
                left: -100%;
                flex-direction: column;
                background: rgba(5, 8, 16, 0.98);
                backdrop-filter: blur(20px);
                width: 100%;
                padding: 2rem;
                transition: left 0.4s;
                align-items: flex-start;
            }

            .nav-links.active {
                left: 0;
            }

            .hero h1 {
                font-size: 3rem;
            }

            .hero-subtitle {
                font-size: 1.1rem;
            }

            .section-title {
                font-size: 2.5rem;
            }

            .hero-ctas {
                flex-direction: column;
            }

            .cta-primary,
            .cta-secondary {
                width: 100%;
                text-align: center;
                justify-content: center;
            }

            .experience-grid,
            .cocktails-grid,
            .eventos-grid,
            .gallery-grid {
                grid-template-columns: 1fr;
            }

            .whatsapp-float {
                bottom: 20px;
                right: 20px;
                width: 60px;
                height: 60px;
            }

            section {
                padding: 4rem 1.5rem;
            }
        }
    </style>
</head>
<body>
    <!-- HEADER -->
    <header id="header">
        <nav>
            <a href="#" class="logo">AFTER LICORS</a>
            <div class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-links" id="navLinks">
                <li><a href="#experiencia">Experiencia</a></li>
                <li><a href="#cocteleria">Coctelería</a></li>
                <li><a href="#eventos">Eventos</a></li>
                <li><a href="#galeria">Galería</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li><a href="https://wa.me/593991809928?text=Hola!%20Quiero%20reservar%20mesa%20en%20After%20Licors" target="_blank" class="nav-cta">Reservar</a></li>
            </ul>
        </nav>
    </header>

    <!-- FLOATING WHATSAPP -->
    <a href="https://wa.me/593991809928?text=Hola!%20Quiero%20información%20sobre%20After%20Licors" target="_blank" class="whatsapp-float" aria-label="WhatsApp">
        💬
    </a>

    <!-- HERO -->
    <section class="hero" id="inicio">
        <video class="hero-video" autoplay muted loop playsinline>
            <source src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/paneo.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <div class="hero-badge">🎵 MÚSICA URBANA • COCTELERÍA • AMBIENTE NOCTURNO</div>
            <h1>DONDE EMPIEZA<br><span>EL AFTER</span></h1>
            <p class="hero-subtitle">Coctelería de autor + Música urbana + Experiencia premium</p>
            <p class="hero-description">El lugar donde la noche cobra vida. Ven y descubre por qué somos el punto de encuentro favorito en Quito.</p>
            <div class="hero-ctas">
                <a href="https://wa.me/593991809928?text=Hola!%20Quiero%20reservar%20mesa%20en%20After%20Licors" target="_blank" class="cta-primary">
                    💬 Reservar por WhatsApp
                </a>
                <a href="#eventos" class="cta-secondary">🎉 Ver Eventos</a>
            </div>
        </div>
    </section>

    <!-- EXPERIENCIA AFTER LICORS -->
    <section id="experiencia">
        <div class="section-header fade-in">
            <div class="section-badge">LA EXPERIENCIA</div>
            <h2 class="section-title">Más que un bar, una <span>experiencia</span></h2>
            <p class="section-description">Cada detalle está pensado para que vivas momentos inolvidables</p>
        </div>

        <div class="experience-grid">
            <div class="experience-card fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/ambiente-azul.jpg" alt="Ambiente After Licors" loading="lazy">
                <div class="experience-content">
                    <div class="experience-icon">🌃</div>
                    <h3>Ambiente Nocturno</h3>
                    <p>Luces neón, música envolvente y una atmósfera única que te hará sentir la energía de la noche desde el primer momento.</p>
                </div>
            </div>

            <div class="experience-card fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/evento.jpg" alt="Música After Licors" loading="lazy">
                <div class="experience-content">
                    <div class="experience-icon">🎵</div>
                    <h3>Música Urbana</h3>
                    <p>Los mejores DJs, karaoke en vivo y eventos especiales que hacen de cada noche una fiesta memorable.</p>
                </div>
            </div>

            <div class="experience-card fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/bar-licores.jpg" alt="Servicio After Licors" loading="lazy">
                <div class="experience-content">
                    <div class="experience-icon">⭐</div>
                    <h3>Servicio Premium</h3>
                    <p>Atención personalizada, rapidez en la respuesta y un equipo comprometido con hacer de tu visita algo especial.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- COCTELERÍA -->
    <section id="cocteleria">
        <div class="section-header fade-in">
            <div class="section-badge">NUESTRA CARTA</div>
            <h2 class="section-title">Coctelería de <span>autor</span></h2>
            <p class="section-description">Creaciones únicas preparadas por bartenders expertos</p>
        </div>

        <div class="cocktails-grid">
            <div class="cocktail-card cocktail-recommended fade-in">
                <span class="recommended-badge">⭐ Recomendado</span>
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/cocteles-neon.jpg" alt="Cóctel Signature" class="cocktail-image" loading="lazy">
                <div class="cocktail-info">
                    <h3>After Signature</h3>
                    <p>Nuestra creación especial con ron premium, frutas tropicales frescas y un toque de menta. El favorito de la casa.</p>
                </div>
            </div>

            <div class="cocktail-card fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/cocteles-rodajas.jpg" alt="Mojitos" class="cocktail-image" loading="lazy">
                <div class="cocktail-info">
                    <h3>Mojitos Premium</h3>
                    <p>Clásico, frutilla, maracuyá o mango. Preparados con hierbas frescas y los mejores ingredientes.</p>
                </div>
            </div>

            <div class="cocktail-card fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/cocteles-neon.jpg" alt="Margaritas" class="cocktail-image" loading="lazy">
                <div class="cocktail-info">
                    <h3>Margaritas</h3>
                    <p>Tradicional, fresa o tamarindo. El equilibrio perfecto entre dulce, ácido y tequila de calidad.</p>
                </div>
            </div>

            <div class="cocktail-card fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/cocteles-rodajas.jpg" alt="Piña Colada" class="cocktail-image" loading="lazy">
                <div class="cocktail-info">
                    <h3>Piña Colada</h3>
                    <p>Cremosa y tropical. Ron, piña fresca y coco para transportarte a una playa paradisíaca.</p>
                </div>
            </div>

            <div class="cocktail-card fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/bar-licores.jpg" alt="Whisky & Gin" class="cocktail-image" loading="lazy">
                <div class="cocktail-info">
                    <h3>Whisky & Gin</h3>
                    <p>Amplia selección de whiskys premium y gin tonics artesanales con botánicos seleccionados.</p>
                </div>
            </div>

            <div class="cocktail-card fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/bar-licores.jpg" alt="Shots & Cervezas" class="cocktail-image" loading="lazy">
                <div class="cocktail-info">
                    <h3>Shots & Cervezas</h3>
                    <p>Variedad de shots creativos y cervezas nacionales e importadas bien frías.</p>
                </div>
            </div>
        </div>

        <div style="text-align: center; margin-top: 3rem;">
            <a href="https://wa.me/593991809928?text=Hola!%20Quiero%20ver%20la%20carta%20completa" target="_blank" class="cta-primary">
                📋 Ver Carta Completa
            </a>
        </div>
    </section>

    <!-- EVENTOS & MÚSICA -->
    <div class="dark-section">
        <section id="eventos" style="padding: 0; max-width: 1400px; margin: 0 auto;">
            <div class="section-header fade-in">
                <div class="section-badge">ENTRETENIMIENTO</div>
                <h2 class="section-title">Eventos & <span>Música</span></h2>
                <p class="section-description">Cada noche es una experiencia diferente</p>
            </div>

            <div class="eventos-grid">
                <div class="evento-card fade-in">
                    <div class="evento-icon">🎤</div>
                    <h3>Karaoke en Vivo</h3>
                    <p>Canta tus canciones favoritas todos los días. Sistema profesional con amplio catálogo de música urbana, rock, pop y más.</p>
                    <a href="https://wa.me/593991809928?text=Hola!%20Quiero%20información%20sobre%20karaoke" target="_blank" class="evento-cta">Más info</a>
                </div>

                <div class="evento-card fade-in">
                    <div class="evento-icon">🎉</div>
                    <h3>Eventos Especiales</h3>
                    <p>Fiestas privadas, cumpleaños y celebraciones. Organizamos tu evento con DJ, decoración y menú personalizado.</p>
                    <a href="https://wa.me/593991809928?text=Hola!%20Quiero%20organizar%20un%20evento" target="_blank" class="evento-cta">Cotizar evento</a>
                </div>

                <div class="evento-card fade-in">
                    <div class="evento-icon">🎧</div>
                    <h3>DJs & Sets</h3>
                    <p>Los mejores DJs de la escena urbana. Reggaeton, trap, hip hop y los éxitos del momento para que bailes toda la noche.</p>
                    <a href="https://wa.me/593991809928?text=Hola!%20Quiero%20info%20de%20próximos%20eventos" target="_blank" class="evento-cta">Próximos eventos</a>
                </div>
            </div>

            <div style="text-align: center; margin-top: 3rem;">
                <p style="color: var(--cyan-neon); font-weight: 600; font-size: 1.1rem; margin-bottom: 1rem;">⚡ Cupos limitados en eventos especiales</p>
                <p style="color: var(--text-gray);">Reserva con anticipación para garantizar tu espacio</p>
            </div>
        </section>
    </div>

    <!-- GALERÍA -->
    <section id="galeria">
        <div class="section-header fade-in">
            <div class="section-badge">GALERÍA</div>
            <h2 class="section-title">Vive la <span>experiencia</span></h2>
            <p class="section-description">Un vistazo a las mejores noches en After Licors</p>
        </div>

        <div class="gallery-grid">
            <div class="gallery-item fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/bar-licores.jpg" alt="Bar After Licors" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-icon">🔍</span>
                </div>
            </div>
            <div class="gallery-item fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/cocteles-neon.jpg" alt="Cócteles" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-icon">🔍</span>
                </div>
            </div>
            <div class="gallery-item fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/ambiente-azul.jpg" alt="Ambiente" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-icon">🔍</span>
                </div>
            </div>
            <div class="gallery-item fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/evento.jpg" alt="Eventos" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-icon">🔍</span>
                </div>
            </div>
            <div class="gallery-item fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/premio.jpg" alt="Reconocimientos" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-icon">🔍</span>
                </div>
            </div>
            <div class="gallery-item fade-in">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/cocteles-rodajas.jpg" alt="Bebidas" loading="lazy">
                <div class="gallery-overlay">
                    <span class="gallery-icon">🔍</span>
                </div>
            </div>
        </div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto">
        <div class="section-header fade-in">
            <div class="section-badge">UBICACIÓN</div>
            <h2 class="section-title">Encuéntranos en <span>Quito</span></h2>
            <p class="section-description">Estamos listos para atenderte</p>
        </div>

        <div class="contacto-container">
            <div class="contacto-map fade-in">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7643457997497!2d-78.459526!3d-0.2980273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd62568f22ef%3A0x53ab80a4106ecba4!2sAFTER%20LICORS!5e0!3m2!1ses-419!2sec!4v1768842266364!5m2!1ses-419!2sec" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="contacto-info">
                <div class="info-card fade-in">
                    <h3>📍 Ubicación</h3>
                    <p>Quito, Ecuador<br>
                    <a href="https://goo.gl/maps/tuenlace" target="_blank">Ver en Google Maps →</a></p>
                </div>

                <div class="info-card fade-in">
                    <h3>🕐 Horarios</h3>
                    <p>Lunes - Jueves: 18:00 - 02:00<br>
                    Viernes: 18:00 - 03:00<br>
                    Sábado: 12:00 - 03:00<br>
                    Domingo: 12:00 - 00:00</p>
                </div>

                <div class="info-card fade-in">
                    <h3>💬 WhatsApp</h3>
                    <p><a href="https://wa.me/593991809928" target="_blank">+593 99 180 9928</a><br>
                    <span style="font-size: 0.9rem; opacity: 0.8;">✅ Respuesta rápida • Reservas en minutos</span></p>
                </div>

                <div class="info-card fade-in">
                    <h3>📱 Redes Sociales</h3>
                    <p>
                        Instagram: <a href="https://www.instagram.com/after.licors8" target="_blank">@after.licors8</a><br>
                        TikTok: <a href="https://www.tiktok.com/@after.licors8" target="_blank">@after.licors8</a>
                    </p>
                </div>
            </div>
        </div>

        <div class="final-cta fade-in">
            <h3>¿Listo para vivir el after?</h3>
            <p>Reserva tu mesa ahora y asegura tu lugar en la mejor experiencia nocturna de Quito</p>
            <a href="https://wa.me/593991809928?text=Hola!%20Quiero%20reservar%20mesa%20en%20After%20Licors%20para%20[FECHA]%20[HORA]%20[NÚMERO%20DE%20PERSONAS]" target="_blank" class="cta-primary" style="background: white; color: var(--dark-bg);">
                💬 Reservar Mi Mesa Ahora
            </a>
        </div>
    </section>

    <!-- FOOTER -->
    <footer>
        <div class="social-links">
            <a href="https://www.instagram.com/after.licors8" target="_blank" aria-label="Instagram">📷</a>
            <a href="https://www.tiktok.com/@after.licors8" target="_blank" aria-label="TikTok">🎵</a>
            <a href="https://wa.me/593991809928" target="_blank" aria-label="WhatsApp">💬</a>
        </div>
        <p>&copy; 2026 AFTER LICORS. Todos los derechos reservados.</p>
        <p style="margin-top: 0.5rem; font-size: 0.85rem; opacity: 0.7;">Disfruta responsablemente</p>
    </footer>

    <script>
        // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Header Scroll Effect
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Scroll Animation Observer
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Lazy Loading for Images
        if ('loading' in HTMLImageElement.prototype) {
            const images = document.querySelectorAll('img[loading="lazy"]');
            images.forEach(img => {
                img.src = img.src;
            });
        }
    </script>
</body>
</html>`;

    return new Response(html, {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 'public, max-age=3600',
      },
    });
  },
};
