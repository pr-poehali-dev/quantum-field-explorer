export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">COFFEE*TIME</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">О нас</a>
          <a href="#">Атмосфера</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ТВОЙ КОФЕ,
              <br />
              ТВОЙ <span>ритм</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Место, где рождаются идеи. Качественный specialty-кофе, уютная атмосфера и wi-fi для тех, кто живёт на полной скорости.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Смотреть меню
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                О кофейне
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/a33ab994-c8b8-4a1a-adf8-51ba4fe8c095/files/885e8ee4-117a-485f-85b9-dc8bf89e8718.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="sticker">
              SPECIALTY
              <br />
              КОФЕ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #COFFEETIME
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              WI-FI FREE
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * SPECIALTY КОФЕ * УЮТНАЯ АТМОСФЕРА * БЫСТРЫЙ WI-FI * ОТКРЫТЫ С 8:00 * АВТОРСКИЕ НАПИТКИ * СВЕЖАЯ ОБЖАРКА *
            SPECIALTY КОФЕ * УЮТНАЯ АТМОСФЕРА * БЫСТРЫЙ WI-FI * ОТКРЫТЫ С 8:00 * АВТОРСКИЕ НАПИТКИ * СВЕЖАЯ ОБЖАРКА
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">НАШЕ МЕНЮ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/a33ab994-c8b8-4a1a-adf8-51ba4fe8c095/files/a0d212a6-8111-4065-b2b8-e13a5215a584.jpg"
                alt="Капучино"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Капучино</h3>
                  <span className="price">250 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Нежная молочная пена, двойной эспрессо из свежеобжаренных зёрен. Классика на максималках.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Авторский
              </span>
              <img
                src="https://cdn.poehali.dev/projects/a33ab994-c8b8-4a1a-adf8-51ba4fe8c095/files/a5023195-927b-4713-9257-b7f0500fdfae.jpg"
                alt="Холодный колд брю"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Cold Brew</h3>
                  <span className="price">320 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Холодное заваривание 18 часов. Мягкий вкус без горечи — идеально для учёбы.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/a33ab994-c8b8-4a1a-adf8-51ba4fe8c095/files/78aec811-ce3c-42fa-9421-92a711514e6a.jpg"
                alt="Латте"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Латте</h3>
                  <span className="price">280 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Рисунок на пене, шелковистое молоко и насыщенный эспрессо. Каждая чашка — произведение искусства.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">АТМОСФЕРА ДЛЯ СВОИХ.</h2>
            <p className="vibe-text">
              Coffee Time — это не просто кофейня. Это твоё второе рабочее место, место для встреч и вдохновения. Удобные кресла, быстрый интернет, тихая музыка и, конечно, лучший кофе в городе. Просто приходи.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О кофейне
            </button>
          </div>
          <div
            className="vibe-img"
            style={{
              backgroundImage: `url("https://cdn.poehali.dev/projects/a33ab994-c8b8-4a1a-adf8-51ba4fe8c095/files/28d7b1b5-88bf-4f42-a2ea-b0f4c3cdd3d0.jpg")`,
            }}
          ></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @COFFEE.TIME
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Кофе 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Кофе 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Кофе 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Кофе 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">COFFEE*TIME</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Specialty-кофейня для студентов, молодых профессионалов и всех, кто ценит качество. Каждый день с 8:00 до 22:00.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн – Пт: 08:00 – 22:00</li>
            <li>Сб – Вс: 09:00 – 23:00</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>+7 (999) 000-00-00</li>
            <li>hello@coffeetime.ru</li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Instagram
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
