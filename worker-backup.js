// Cloudflare Worker para After Licors
// Este worker sirve la página HTML estática

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Servir el HTML para cualquier ruta
    const html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="After Licors - Bar Restaurante. Disfruta de los mejores cócteles, comida y ambiente.">
    <title>After Licors - Bar Restaurante</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --primary-color: #00d9ff;
            --secondary-color: #0a0e27;
            --accent-color: #00a8cc;
            --text-light: #ffffff;
            --text-dark: #333333;
            --bg-overlay: rgba(10, 14, 39, 0.85);
            --neon-glow: 0 0 10px #00d9ff, 0 0 20px #00d9ff, 0 0 30px #00d9ff;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            overflow-x: hidden;
        }

        header {
            position: fixed;
            top: 0;
            width: 100%;
            background: var(--secondary-color);
            padding: 1rem 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        nav {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 2rem;
        }

        .logo {
            font-size: 1.8rem;
            font-weight: bold;
            color: var(--primary-color);
            text-decoration: none;
            letter-spacing: 3px;
            text-shadow: var(--neon-glow);
            font-family: 'Arial Black', sans-serif;
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-links a {
            color: var(--text-light);
            text-decoration: none;
            transition: color 0.3s;
            font-weight: 500;
        }

        .nav-links a:hover {
            color: var(--primary-color);
        }

        .menu-toggle {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }

        .menu-toggle span {
            width: 25px;
            height: 3px;
            background: var(--text-light);
            margin: 3px 0;
            transition: 0.3s;
        }

        .hero {
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--text-light);
            position: relative;
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
            z-index: -2;
            object-fit: cover;
        }

        .hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--bg-overlay);
            z-index: -1;
        }

        .hero-content h1 {
            font-size: 4rem;
            margin-bottom: 0.5rem;
            color: var(--primary-color);
            text-shadow: var(--neon-glow);
            animation: fadeInDown 1s ease-out;
            font-family: 'Arial Black', sans-serif;
            letter-spacing: 4px;
        }

        .hero-subtitle {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: var(--text-light);
            opacity: 0.9;
            animation: fadeInUp 1s ease-out 0.2s backwards;
        }

        .hero-content p {
            font-size: 1.2rem;
            margin-bottom: 2.5rem;
            animation: fadeInUp 1s ease-out 0.3s backwards;
        }

        .cta-group {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
            animation: fadeInUp 1s ease-out 0.5s backwards;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: var(--primary-color);
            color: var(--secondary-color);
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.1rem;
            transition: transform 0.3s, box-shadow 0.3s;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 217, 255, 0.4);
        }

        .cta-button-secondary {
            background: transparent;
            border: 2px solid var(--primary-color);
            color: var(--text-light);
        }

        .cta-button-secondary:hover {
            background: var(--primary-color);
            color: var(--secondary-color);
        }

        .badge-container {
            display: flex;
            gap: 2rem;
            justify-content: center;
            margin-top: 2rem;
            flex-wrap: wrap;
        }

        .badge {
            background: rgba(0, 217, 255, 0.15);
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            border: 1px solid var(--primary-color);
            color: var(--text-light);
            font-size: 0.95rem;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        section {
            padding: 5rem 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        section h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--secondary-color);
            position: relative;
            padding-bottom: 1rem;
        }

        section h2::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 3px;
            background: var(--primary-color);
        }

        .about-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }

        .about-text {
            font-size: 1.1rem;
            line-height: 1.8;
        }

        .about-image {
            width: 100%;
            height: 400px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .about-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .feature-section {
            background: linear-gradient(135deg, var(--secondary-color), #1a1f3a);
            color: var(--text-light);
            padding: 5rem 2rem;
            margin: 0;
            max-width: 100%;
            text-align: center;
        }

        .feature-section h2 {
            color: var(--primary-color);
        }

        .feature-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
            margin-top: 3rem;
        }

        .feature-card {
            background: rgba(255, 255, 255, 0.05);
            padding: 2.5rem 2rem;
            border-radius: 15px;
            border: 2px solid rgba(0, 217, 255, 0.3);
            transition: transform 0.3s, border-color 0.3s;
        }

        .feature-card:hover {
            transform: translateY(-10px);
            border-color: var(--primary-color);
        }

        .feature-icon {
            font-size: 3.5rem;
            margin-bottom: 1rem;
        }

        .feature-card h3 {
            color: var(--primary-color);
            font-size: 1.6rem;
            margin-bottom: 1rem;
        }

        .feature-card p {
            font-size: 1.05rem;
            line-height: 1.6;
            opacity: 0.9;
        }

        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .menu-category {
            background: #ffffff;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s, box-shadow 0.3s;
            border: 2px solid transparent;
        }

        .menu-category:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 30px rgba(0, 217, 255, 0.2);
            border-color: var(--primary-color);
        }

        .menu-category h3 {
            color: var(--primary-color);
            font-size: 1.8rem;
            margin-bottom: 1.5rem;
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 0.5rem;
        }

        .menu-item {
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #ddd;
        }

        .menu-item:last-child {
            border-bottom: none;
        }

        .menu-item-name {
            font-weight: bold;
            color: var(--secondary-color);
            margin-bottom: 0.3rem;
        }

        .menu-item-desc {
            font-size: 0.9rem;
            color: #666;
            font-style: italic;
        }

        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .gallery-item {
            height: 280px;
            border-radius: 15px;
            overflow: hidden;
            transition: transform 0.3s, box-shadow 0.3s;
            cursor: pointer;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
            position: relative;
        }

        .gallery-item::after {
            content: '🔍 Ver';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: var(--primary-color);
            color: var(--secondary-color);
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            font-weight: bold;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .gallery-item:hover::after {
            opacity: 1;
        }

        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s;
        }

        .gallery-item:hover {
            transform: scale(1.05);
        }

        .gallery-item:hover img {
            transform: scale(1.1);
        }

        .hours-content {
            max-width: 700px;
            margin: 0 auto;
            background: linear-gradient(135deg, #ffffff, #f8f9fa);
            padding: 2.5rem;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            border: 2px solid rgba(0, 217, 255, 0.2);
        }

        .hours-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2rem 0;
            border-bottom: 2px solid rgba(0, 217, 255, 0.1);
        }

        .hours-row:last-child {
            border-bottom: none;
        }

        .hours-day {
            font-weight: bold;
            color: var(--secondary-color);
        }

        .hours-time {
            color: var(--primary-color);
            font-weight: 600;
        }

        .contact-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
        }

        .contact-map {
            width: 100%;
            height: 450px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
            margin-bottom: 2rem;
        }

        .contact-map iframe {
            width: 100%;
            height: 100%;
            border: 0;
        }

        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .contact-form input,
        .contact-form textarea {
            padding: 1rem;
            border: 2px solid #ddd;
            border-radius: 5px;
            font-family: inherit;
            font-size: 1rem;
            transition: border-color 0.3s;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
            outline: none;
            border-color: var(--primary-color);
        }

        .contact-form textarea {
            resize: vertical;
            min-height: 150px;
        }

        .contact-form button {
            padding: 1rem;
            background: var(--primary-color);
            color: var(--secondary-color);
            border: none;
            border-radius: 5px;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.3s;
        }

        .contact-form button:hover {
            background: var(--accent-color);
            color: var(--text-light);
        }

        .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }

        .contact-item {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 15px;
            text-align: center;
            transition: transform 0.3s, box-shadow 0.3s;
            border: 2px solid transparent;
        }

        .contact-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(0, 217, 255, 0.2);
            border-color: var(--primary-color);
        }

        .contact-icon {
            font-size: 2.5rem;
            color: var(--primary-color);
            margin-bottom: 1rem;
        }

        .contact-details h3 {
            color: var(--secondary-color);
            margin-bottom: 0.5rem;
        }

        footer {
            background: var(--secondary-color);
            color: var(--text-light);
            text-align: center;
            padding: 2rem;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 1rem;
        }

        .social-links a {
            color: var(--primary-color);
            font-size: 1.5rem;
            transition: transform 0.3s;
            text-decoration: none;
        }

        .social-links a:hover {
            transform: scale(1.2);
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
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
                background: var(--secondary-color);
                width: 100%;
                padding: 2rem;
                transition: left 0.3s;
            }

            .nav-links.active {
                left: 0;
            }

            .hero-content h1 {
                font-size: 2.5rem;
            }

            .hero-subtitle {
                font-size: 1.1rem;
            }

            .hero-content p {
                font-size: 1rem;
            }

            .cta-group {
                flex-direction: column;
                align-items: stretch;
            }

            .cta-button {
                width: 100%;
                text-align: center;
            }

            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
            }

            .feature-grid {
                grid-template-columns: 1fr;
            }

            section {
                padding: 3rem 1rem;
            }

            section h2 {
                font-size: 2rem;
            }

            .gallery-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <a href="#" class="logo">AFTER LICORS</a>
            <div class="menu-toggle" id="menuToggle">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav-links" id="navLinks">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#menu">Menú</a></li>
                <li><a href="#galeria">Galería</a></li>
                <li><a href="#horarios">Horarios</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <section id="inicio" class="hero">
        <video class="hero-video" autoplay muted loop playsinline>
            <source src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/paneo.mp4" type="video/mp4">
        </video>
        <div class="hero-content">
            <h1>AFTER LICORS</h1>
            <p class="hero-subtitle">🍹 Bar Restaurante | 🎤 Karaoke | 🎉 Eventos</p>
            <p>El mejor lugar para compartir con amigos en Quito</p>
            <div class="cta-group">
                <a href="#menu" class="cta-button">Ver Menú</a>
                <a href="#contacto" class="cta-button cta-button-secondary">📍 Ubicación</a>
                <a href="https://www.instagram.com/after.licors8" target="_blank" class="cta-button cta-button-secondary">📸 Instagram</a>
            </div>
            <div class="badge-container">
                <div class="badge">🍔 Comida Rápida</div>
                <div class="badge">🍹 Cócteles</div>
                <div class="badge">🎤 Karaoke</div>
            </div>
        </div>
    </section>

    <section id="nosotros">
        <h2>Sobre Nosotros</h2>
        <div class="about-content">
            <div class="about-text">
                <p>
                    Bienvenidos a <strong>After Licors</strong>, tu bar restaurante de confianza en Quito. 
                    Somos el lugar perfecto para compartir con amigos, disfrutar de deliciosos cócteles 
                    y comida rápida de calidad.
                </p>
                <p style="margin-top: 1rem;">
                    Ofrecemos un ambiente relajado y divertido donde puedes disfrutar de hamburguesas, 
                    salchipapas, papipollos y mucho más. Además, tenemos <strong>karaoke</strong> para 
                    que cantes tus canciones favoritas y organizamos eventos especiales en nuestro local.
                </p>
                <p style="margin-top: 1rem;">
                    Nuestro equipo está listo para prepararte los mejores cócteles y atenderte con una sonrisa. 
                    ¡Ven y pasa un buen rato con nosotros!
                </p>
            </div>
            <div class="about-image">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/logo-hero.jpg" alt="After Licors Bar">
            </div>
        </div>
    </section>

    <section class="feature-section">
        <h2>¿Qué ofrecemos?</h2>
        <div class="feature-grid">
            <div class="feature-card">
                <div class="feature-icon">🎤</div>
                <h3>Karaoke</h3>
                <p>Canta tus canciones favoritas y diviértete con amigos. Sistema de karaoke profesional con amplio catálogo musical.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🎉</div>
                <h3>Eventos Especiales</h3>
                <p>Organizamos tus fiestas, cumpleaños y celebraciones. Local disponible para eventos privados.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🍹</div>
                <h3>Cócteles</h3>
                <p>Amplia variedad de cócteles clásicos y creativos preparados por nuestros bartenders expertos.</p>
            </div>
            <div class="feature-card">
                <div class="feature-icon">🍔</div>
                <h3>Comida Rápida</h3>
                <p>Hamburguesas, salchipapas, papipollos, alitas y más. Comida deliciosa para acompañar tu velada.</p>
            </div>
        </div>
    </section>

    <section id="menu">
        <h2>Nuestro Menú</h2>
        <div class="menu-grid">
            <div class="menu-category">
                <h3>🍹 Cócteles & Bebidas</h3>
                <div class="menu-item">
                    <div class="menu-item-name">Mojitos</div>
                    <div class="menu-item-desc">Clásico, frutilla, maracuyá, mango</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Margaritas</div>
                    <div class="menu-item-desc">Tradicional, fresa, tamarindo</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Piña Colada</div>
                    <div class="menu-item-desc">Ron, piña, coco</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Cervezas & Licores</div>
                    <div class="menu-item-desc">Variedad de cervezas nacionales e importadas</div>
                </div>
            </div>

            <div class="menu-category">
                <h3>� Hamburguesas</h3>
                <div class="menu-item">
                    <div class="menu-item-name">Hamburguesa Clásica</div>
                    <div class="menu-item-desc">Carne, queso, lechuga, tomate, salsas</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Hamburguesa BBQ</div>
                    <div class="menu-item-desc">Carne, queso, tocineta, cebolla caramelizada, salsa BBQ</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Hamburguesa de Pollo</div>
                    <div class="menu-item-desc">Pechuga de pollo, queso, vegetales frescos</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Hamburguesa After Licors</div>
                    <div class="menu-item-desc">Doble carne, queso, tocineta, huevo, salsas especiales</div>
                </div>
            </div>

            <div class="menu-category">
                <h3>🍟 Comida Rápida</h3>
                <div class="menu-item">
                    <div class="menu-item-name">Salchipapas</div>
                    <div class="menu-item-desc">Papas fritas con salchicha y salsas variadas</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Papipollos</div>
                    <div class="menu-item-desc">Papas fritas con pollo apanado y salsas</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Alitas de Pollo</div>
                    <div class="menu-item-desc">BBQ, picantes o al limón con papas</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Pinchos</div>
                    <div class="menu-item-desc">Mixtos de carne, pollo o chorizo</div>
                </div>
            </div>

            <div class="menu-category">
                <h3>� Entretenimiento</h3>
                <div class="menu-item">
                    <div class="menu-item-name">Karaoke</div>
                    <div class="menu-item-desc">¡Canta tus canciones favoritas con amigos!</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Eventos Especiales</div>
                    <div class="menu-item-desc">Organizamos eventos, fiestas y celebraciones</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Piqueos para Compartir</div>
                    <div class="menu-item-desc">Tabla de quesos, nachos, deditos de queso</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Botanas</div>
                    <div class="menu-item-desc">Canguil, maní, chifles</div>
                </div>
            </div>
        </div>
    </section>

    <section id="galeria">
        <h2>Galería</h2>
        <div class="gallery-grid">
            <div class="gallery-item">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/bar-licores.jpg" alt="Barra de licores">
            </div>
            <div class="gallery-item">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/cocteles-rodajas.jpg" alt="Cócteles con rodajas">
            </div>
            <div class="gallery-item">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/cocteles-neon.jpg" alt="Cócteles coloridos">
            </div>
            <div class="gallery-item">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/premio.jpg" alt="Premio After Licors">
            </div>
            <div class="gallery-item">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/ambiente-azul.jpg" alt="Ambiente del bar">
            </div>
            <div class="gallery-item">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/evento.jpg" alt="Evento en After Licors">
            </div>
            <div class="gallery-item">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/logo-vintage.jpg" alt="Logo vintage">
            </div>
            <div class="gallery-item">
                <img src="https://pub-2f53dac3240d4adf8c4c464c1dfbe141.r2.dev/bar-licores.jpg" alt="Vista de la barra">
            </div>
        </div>
    </section>

    <section id="horarios">
        <h2>Horarios</h2>
        <div class="hours-content">
            <div class="hours-row">
                <span class="hours-day">Lunes - Jueves</span>
                <span class="hours-time">18:00 - 02:00</span>
            </div>
            <div class="hours-row">
                <span class="hours-day">Viernes</span>
                <span class="hours-time">18:00 - 03:00</span>
            </div>
            <div class="hours-row">
                <span class="hours-day">Sábado</span>
                <span class="hours-time">12:00 - 03:00</span>
            </div>
            <div class="hours-row">
                <span class="hours-day">Domingo</span>
                <span class="hours-time">12:00 - 00:00</span>
            </div>
        </div>
    </section>

    <section id="contacto">
        <h2>Contáctanos</h2>
        <div class="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7643457997497!2d-78.459526!3d-0.2980273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd62568f22ef%3A0x53ab80a4106ecba4!2sAFTER%20LICORS!5e0!3m2!1ses-419!2sec!4v1768842266364!5m2!1ses-419!2sec" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="contact-info">
            <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div class="contact-details">
                    <h3>Ubicación</h3>
                    <p>Quito, Ecuador</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">🕒</div>
                <div class="contact-details">
                    <h3>Horarios</h3>
                    <p>Ver sección arriba</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">📸</div>
                <div class="contact-details">
                    <h3>Instagram</h3>
                    <p>@after.licors8</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">🎵</div>
                <div class="contact-details">
                    <h3>TikTok</h3>
                    <p>@after.licors8</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">🎉</div>
                <div class="contact-details">
                    <h3>Eventos</h3>
                    <p>Contáctanos por redes</p>
                </div>
            </div>
            <div class="contact-item">
                <div class="contact-icon">🎤</div>
                <div class="contact-details">
                    <h3>Karaoke</h3>
                    <p>Disponible todos los días</p>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="social-links">
            <a href="https://www.instagram.com/after.licors8?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" title="Instagram">📷</a>
            <a href="https://www.tiktok.com/@after.licors8?_r=1&_t=ZM-93C1cVW3jQm" target="_blank" rel="noopener noreferrer" title="TikTok">🎵</a>
            <a href="https://www.after-licors.online" target="_blank" rel="noopener noreferrer" title="Sitio Web">🌐</a>
        </div>
        <p>&copy; 2026 After Licors. Todos los derechos reservados.</p>
    </footer>

    <script>
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

        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            e.target.reset();
        });

        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
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
