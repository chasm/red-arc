# Astro-TypeScript version

Here is the HTML as output by the Astro build. It is 236 lines total. It is
clean and semantic, with no extraneous elements (`div` inside `div` in `div`).
It requires no JavaScript to work. It looks just like the React version, but
compare the two outputs to see what MUI does.

```html
<html dir="ltr" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width" name="viewport" />
    <meta content="RedArc prototype web site." name="description" />
    <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
    <meta content="Astro v1.7.2" name="generator" />
    <title>RedArc</title>
    <link href="/assets/index.3f0fd264.css" rel="stylesheet" />
    <link href="/assets/index.e81379c5.css" rel="stylesheet" />
  </head>
  <body class="home">
    <header>
      <h1 class="logotype">
        <span class="red">Red</span><span class="arc">Arc</span>
      </h1>
      <nav>
        <h2 class="off-screen">Site navigation</h2>
        <button id="menu-toggle" tabindex="0">
          <p class="off-screen">Menu</p>
          <span class="x">×</span>
          <svg
            aria-hidden="true"
            focusable="false"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            id="hamburger-menu"
          >
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </button>
        <ul>
          <li><a href="/about" tabindex="0">About</a></li>
          <li><a href="/services" tabindex="0">Services</a></li>
          <li><a href="/blog" tabindex="0">Blog</a></li>
          <li class="link-button">
            <a href="/contact" tabindex="0">Contact</a>
          </li>
          <li class="icon-link">
            <a href="/twitter" aria-label="Twitter" tabindex="0"
              ><span class="off-screen">Twitter</span>
              <svg
                aria-hidden="true"
                focusable="false"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                class="link-icon"
              >
                <path
                  d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                  fill="var(--header-icon-fill, #fff)"
                ></path></svg
            ></a>
          </li>
          <li class="icon-link">
            <a href="/linkedin" aria-label="LinkedIn" tabindex="0"
              ><span class="off-screen">LinkedIn</span>
              <svg
                aria-hidden="true"
                focusable="false"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                class="link-icon"
              >
                <path
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                  fill="var(--header-icon-fill, #fff)"
                ></path></svg
            ></a>
          </li>
        </ul>
      </nav>
      <script>
        const toggle = document.querySelector("#menu-toggle");
        toggle?.addEventListener("click", function () {
          document
            .querySelector("body > header > nav")
            ?.classList.toggle("open");
        });
      </script>
    </header>
    <main>
      <header class="hero">
        <div>
          <h2>Digital transformation through cloud</h2>
          <a href="/contact" class="call-to-action primary">Work with us</a>
        </div>
      </header>
      <article class="centered">
        <header><h2>Welcome to RedArc</h2></header>
        <p>
          We're here to help you and your team evaluate, establish, and evolve
          your ICT architecture ecosystems.
        </p>
        <p>Enabling you to deliver effective outcomes for your organization.</p>
        <a href="/get-started" class="call-to-action secondary">Get started</a>
      </article>
      <article class="services">
        <header><h2>Our services</h2></header>
        <ul class="service-cards">
          <li
            class="card"
            style="
              background-image: url(/images/cards/cloud-operating-model.webp);
            "
          >
            <h3>Cloud Operating Model</h3>
          </li>
          <li
            class="card"
            style="background-image: url(/images/cards/cyber-security.webp)"
          >
            <h3>Cyber Security</h3>
          </li>
          <li
            class="card"
            style="
              background-image: url(/images/cards/strategy-and-architecture.webp);
            "
          >
            <h3>Strategy and Architecture</h3>
          </li>
          <li
            class="card"
            style="
              background-image: url(/images/cards/managed-architecture-services.webp);
            "
          >
            <h3>Managed Architecture Services (MaaS)</h3>
          </li>
          <li
            class="card"
            style="
              background-image: url(/images/cards/architecture-practice-and-governance.webp);
            "
          >
            <h3>Architecture Practice and Governance</h3>
          </li>
          <li
            class="card"
            style="
              background-image: url(/images/cards/application-transformation.webp);
            "
          >
            <h3>Application Transformation</h3>
          </li>
        </ul>
      </article>
      <section class="box">
        <div>
          <p class="pre">We Help You</p>
          <h2>Here's what you need</h2>
          <p>Experience the Best</p>
          <a href="/check-it-out" class="call-to-action tertiary"
            >Check it out</a
          >
        </div>
      </section>
      <footer>
        <section>
          <h2>Follow us</h2>
          <ul class="social-links">
            <li class="icon-link">
              <a href="/facebook" class="icon-link" aria-label="Facebook"
                ><span class="off-screen">Facebook</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path
                    d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"
                    fill="var(--fill-footer-icon, var(--color-white, hsl(0, 0%, 100%)))"
                  ></path></svg
              ></a>
            </li>
            <li class="icon-link">
              <a href="/instagram" class="icon-link" aria-label="Instagram"
                ><span class="off-screen">Instagram</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path
                    d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                    fill="var(--fill-footer-icon, var(--color-white, hsl(0, 0%, 100%)))"
                  ></path></svg
              ></a>
            </li>
            <li class="icon-link">
              <a href="/twitter" class="icon-link" aria-label="Twitter"
                ><span class="off-screen">Twitter</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path
                    d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
                    fill="var(--fill-footer-icon, var(--color-white, hsl(0, 0%, 100%)))"
                  ></path></svg
              ></a>
            </li>
            <li class="icon-link">
              <a href="/linkedin" class="icon-link" aria-label="LinkedIn"
                ><span class="off-screen">LinkedIn</span>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                >
                  <path
                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                    fill="var(--fill-footer-icon, var(--color-white, hsl(0, 0%, 100%)))"
                  ></path></svg
              ></a>
            </li>
          </ul>
        </section>
        <p class="copyright">© 2022 RedArc Inc.</p>
      </footer>
    </main>
  </body>
</html>
```
