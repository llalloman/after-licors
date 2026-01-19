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
            background: linear-gradient(var(--bg-overlay), var(--bg-overlay)),
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%231a1a1a"/><path fill="%23d4af37" opacity="0.1" d="M0 400 Q300 200 600 400 T1200 400 V800 H0 Z"/></svg>') center/cover;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: var(--text-light);
            position: relative;
        }

        .hero-content h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
            color: var(--primary-color);
            text-shadow: var(--neon-glow);
            animation: fadeInDown 1s ease-out;
            font-family: 'Arial Black', sans-serif;
            letter-spacing: 4px;
        }

        .hero-content p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
            animation: fadeInUp 1s ease-out 0.3s backwards;
        }

        .cta-button {
            display: inline-block;
            padding: 1rem 2.5rem;
            background: var(--primary-color);
            color: var(--secondary-color);
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            transition: transform 0.3s, box-shadow 0.3s;
            animation: fadeInUp 1s ease-out 0.6s backwards;
        }

        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
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
            background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-light);
            font-size: 3rem;
        }

        .menu-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }

        .menu-category {
            background: #f8f8f8;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s;
        }

        .menu-category:hover {
            transform: translateY(-5px);
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
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
        }

        .gallery-item {
            height: 250px;
            background: linear-gradient(135deg, var(--accent-color), var(--primary-color));
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-light);
            font-size: 2rem;
            transition: transform 0.3s;
            cursor: pointer;
        }

        .gallery-item:hover {
            transform: scale(1.05);
        }

        .hours-content {
            max-width: 600px;
            margin: 0 auto;
            background: #f8f8f8;
            padding: 2rem;
            border-radius: 10px;
        }

        .hours-row {
            display: flex;
            justify-content: space-between;
            padding: 1rem 0;
            border-bottom: 1px solid #ddd;
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
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 1rem;
        }

        .contact-icon {
            font-size: 1.5rem;
            color: var(--primary-color);
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

            .hero-content p {
                font-size: 1.2rem;
            }

            .about-content,
            .contact-content {
                grid-template-columns: 1fr;
            }

            section {
                padding: 3rem 1rem;
            }

            section h2 {
                font-size: 2rem;
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
        <div class="hero-content">
            <h1>AFTER LICORS</h1>
            <p>Donde cada momento se convierte en experiencia</p>
            <a href="#menu" class="cta-button">Ver Menú</a>
        </div>
    </section>

    <section id="nosotros">
        <h2>Sobre Nosotros</h2>
        <div class="about-content">
            <div class="about-text">
                <p>
                    Bienvenidos a <strong>After Licors</strong>, el destino perfecto para quienes buscan 
                    una experiencia gastronómica única. Nuestro bar restaurante combina la excelencia 
                    culinaria con una selecta carta de cócteles y licores premium.
                </p>
                <p style="margin-top: 1rem;">
                    Con un ambiente sofisticado y acogedor, After Licors es el lugar ideal para 
                    disfrutar de una velada inolvidable, ya sea para una cena romántica, 
                    reunión con amigos o celebración especial.
                </p>
                <p style="margin-top: 1rem;">
                    Nuestro equipo de expertos bartenders y chefs trabaja con pasión para 
                    ofrecerte lo mejor en cada visita. ¡Te esperamos!
                </p>
            </div>
            <div class="about-image">
                🍸
            </div>
        </div>
    </section>

    <section id="menu">
        <h2>Nuestro Menú</h2>
        <div class="menu-grid">
            <div class="menu-category">
                <h3>🍹 Cócteles Signature</h3>
                <div class="menu-item">
                    <div class="menu-item-name">After Sunset</div>
                    <div class="menu-item-desc">Ron premium, frutas tropicales, lima y menta</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Golden Night</div>
                    <div class="menu-item-desc">Whisky escocés, amaretto, naranja y especias</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Midnight Martini</div>
                    <div class="menu-item-desc">Vodka premium, vermut, aceitunas gourmet</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Passion Mojito</div>
                    <div class="menu-item-desc">Ron blanco, maracuyá, hierbabuena fresca</div>
                </div>
            </div>

            <div class="menu-category">
                <h3>🍽️ Entrantes</h3>
                <div class="menu-item">
                    <div class="menu-item-name">Tabla de Quesos Artesanales</div>
                    <div class="menu-item-desc">Selección de quesos premium con mermeladas caseras</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Carpaccio de Res</div>
                    <div class="menu-item-desc">Láminas finas con rúcula, parmesano y aceite de trufa</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Croquetas Gourmet</div>
                    <div class="menu-item-desc">Jamón ibérico o setas con salsa alioli</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Tártaro de Atún</div>
                    <div class="menu-item-desc">Atún rojo, aguacate, sésamo y soja</div>
                </div>
            </div>

            <div class="menu-category">
                <h3>🥩 Platos Principales</h3>
                <div class="menu-item">
                    <div class="menu-item-name">Entrecot a la Parrilla</div>
                    <div class="menu-item-desc">400g de carne premium con guarnición de temporada</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Salmón a la Plancha</div>
                    <div class="menu-item-desc">Con risotto de espárragos y salsa de cítricos</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Pasta Negra con Mariscos</div>
                    <div class="menu-item-desc">Tinta de calamar, langostinos y mejillones</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Risotto de Hongos</div>
                    <div class="menu-item-desc">Setas variadas, parmesano y aceite de trufa</div>
                </div>
            </div>

            <div class="menu-category">
                <h3>🍰 Postres</h3>
                <div class="menu-item">
                    <div class="menu-item-name">Coulant de Chocolate</div>
                    <div class="menu-item-desc">Con helado de vainilla y frutos rojos</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Tiramisú Clásico</div>
                    <div class="menu-item-desc">Receta tradicional italiana</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Cheesecake de Frutos Rojos</div>
                    <div class="menu-item-desc">Base de galleta y coulis de frambuesa</div>
                </div>
                <div class="menu-item">
                    <div class="menu-item-name">Crema Catalana</div>
                    <div class="menu-item-desc">Con azúcar caramelizado y canela</div>
                </div>
            </div>
        </div>
    </section>

    <section id="galeria">
        <h2>Galería</h2>
        <div class="gallery-grid">
            <div class="gallery-item">🍸</div>
            <div class="gallery-item">🍽️</div>
            <div class="gallery-item">🍷</div>
            <div class="gallery-item">🥂</div>
            <div class="gallery-item">🍕</div>
            <div class="gallery-item">🎵</div>
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
        <h2>Contacto</h2>
        <div class="contact-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7643457997497!2d-78.459526!3d-0.2980273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd62568f22ef%3A0x53ab80a4106ecba4!2sAFTER%20LICORS!5e0!3m2!1ses-419!2sec!4v1768842266364!5m2!1ses-419!2sec" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div class="contact-content">
            <form class="contact-form" id="contactForm">
                <input type="text" placeholder="Nombre completo" required>
                <input type="email" placeholder="Email" required>
                <input type="tel" placeholder="Teléfono">
                <textarea placeholder="Mensaje o reserva" required></textarea>
                <button type="submit">Enviar Mensaje</button>
            </form>
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <div class="contact-details">
                        <h3>Dirección</h3>
                        <p>Quito, Ecuador<br>Ver en el mapa arriba</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📞</div>
                    <div class="contact-details">
                        <h3>Teléfono / WhatsApp</h3>
                        <p>Contáctanos por redes sociales</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">✉️</div>
                    <div class="contact-details">
                        <h3>Redes Sociales</h3>
                        <p>@after.licors8</p>
                    </div>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">🕒</div>
                    <div class="contact-details">
                        <h3>Reservas</h3>
                        <p>Recomendamos reservar con anticipación<br>para garantizar tu mesa</p>
                    </div>
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
