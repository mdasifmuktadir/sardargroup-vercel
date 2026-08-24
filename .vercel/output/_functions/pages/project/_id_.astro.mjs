import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DdgGWpub.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_pH6TkKjb.mjs';
import { $ as $$BaseLayout, b as $$Footer } from '../../chunks/Footer_D9OFzVf_.mjs';
import '../../chunks/index_CYyG6us9.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_B4CX9v1r.mjs';
import { C as CTGABG } from '../../chunks/cta-bg_DUW8Rfbj.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const projects = await getCollection("projects");
  var id = Astro2.params.id;
  var project = projects.find((proj) => proj.id === id);
  if (!project) {
    return new Response("Project not found", { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="smooth-wrapper"> <div id="smooth-content"> <main id="primary" class="site-main"> <div class="space-for-header"></div> <!-- start: Breadcrumb Section --> <section class="tj-page-header section-gap-x"${addAttribute(`background-image: url('${project.data.heroImage?.src}')`, "style")}> <div class="container"> <div class="row"> <div class="col-lg-12"> <div class="tj-page-header-content text-center"> <h1 class="tj-page-title">${project.data.name}</h1> <div class="tj-page-link"> <span><i class="tji-home"></i></span> <span><a href="/">Home</a></span> <span><i class="tji-arrow-right"></i></span> <span><span>Portfolio Details</span></span> </div> </div> </div> </div> </div> <div class="page-header-overlay"${addAttribute(`background-image: url('${project.data.heroImage?.src}')`, "style")}></div> </section> <!-- end: Breadcrumb Section --> <!-- start: Blog Section --> <section class="tj-blog-section section-gap slidebar-stickiy-container"> <div class="container"> <div class="row row-gap-5"> <div class="col-lg-8"> <div class="post-details-wrapper"> <div class="blog-text"></div> </div> </div> <div class="col-lg-12"> <div class=""> <div class="tj-sidebar-widget widget-categories wow fadeInUp" data-wow-delay=".1s"> <h4 class="widget-title">Project Info</h4> <div class="infos-item"> <div class="project-icons"> <i class="tji-user"></i> </div> <div class="project-text"> <span>Client</span> <h6 class="title">${project.data.client}</h6> </div> </div> <div class="infos-item"> <div class="project-icons"> <i class="tji-location-2"></i> </div> <div class="project-text"> <span>Location</span> <h6 class="title">${project.data.location}</h6> </div> </div> <div class="infos-item"> <div class="project-icons"> <i class="tji-calendar"></i> </div> <div class="project-text"> <span>Complete date</span> <h6 class="title">${project.data.date}</h6> </div> </div> </div> <!-- <div class="tj-sidebar-widget widget-feature-item wow fadeInUp" data-wow-delay=".3s">
                    <div class="feature-box">
                      <div class="feature-content">
                        <h2 class="title">Modern</h2>
                        <span>Home Makeover</span>
                        <a class="read-more feature-contact" href="tel:8321890640">
                          <i class="tji-phone-3"></i>
                          <span>+8 (321) 890-640</span>
                        </a>
                      </div>
                      <div class="feature-images">
                        <img src="assets/images/service/service-ad.webp" alt="">
                      </div>
                    </div>
                  </div> --> </div> </div> </div> </div> </section> <!-- end: Blog Section --> <!-- start: Cta Section --> <section class="tj-cta-section"> <div class="container"> <div class="row"> <div class="col-12"> <div class="cta-area"> <div class="cta-content"> <h2 class="title title-anim">Let’s Build Future Together with Sardar Group.</h2> <div class="cta-btn wow fadeInUp" data-wow-delay=".6s"> <a class="tj-primary-btn btn-dark" href="/contact"> <span class="btn-text"><span>Get Started Now</span></span> <span class="btn-icon"><i class="tji-arrow-right-long"></i></span> </a> </div> </div> <div class="cta-img"> ${renderComponent($$result2, "Image", $$Image, { "src": CTGABG, "alt": "" })}</div> </div> </div> </div> </div> </section> <!-- end: Cta Section --> </main> <!-- start: Footer Section --> <!-- <footer class="tj-footer-section footer-1 section-gap-x">
        <div class="footer-main-area">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="footer-widget wow fadeInUp" data-wow-delay=".1s">
                  <div class="footer-logo">
                    <a href="index.html">
                      <img src="assets/images/logos/logo.webp" alt="Logos">
                    </a>
                  </div>
                  <div class="footer-text">
                    <p>Developing personalze our customer journeys to increase satisfaction & loyalty of our expansion.
                    </p>
                  </div>
                  <div class="award-logo-area">
                    <div class="award-logo">
                      <img src="assets/images/footer/award-logo-1.webp" alt="">
                    </div>
                    <div class="award-logo">
                      <img src="assets/images/footer/award-logo-2.webp" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div class="footer-widget widget-nav-menu wow fadeInUp" data-wow-delay=".3s">
                  <h5 class="title">Services</h5>
                  <ul>
                    <li><a href="#">Customer Experience</a></li>
                    <li><a href="#">Training Programs</a></li>
                    <li><a href="#">Business Strategy</a></li>
                    <li><a href="#">Training Program</a></li>
                    <li><a href="#">ESG Consulting</a></li>
                    <li><a href="#">Development Hub</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-2 col-lg-4 col-md-6">
                <div class="footer-widget widget-nav-menu wow fadeInUp" data-wow-delay=".5s">
                  <h5 class="title">Resources</h5>
                  <ul>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Team Member</a></li>
                    <li><a href="#">Recognitions</a></li>
                    <li><a href="careers.html">Careers <span class="badge">New</span></a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Feedback</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-xl-4 col-lg-5 col-md-6">
                <div class="footer-widget widget-subscribe wow fadeInUp" data-wow-delay=".7s">
                  <h3 class="title">Subscribe to Our Newsletter.</h3>
                  <div class="subscribe-form">
                    <form action="#">
                      <input type="email" name="email" placeholder="Enter email">
                      <button type="submit"><i class="tji-plane"></i></button>
                      <label for="agree"><input id="agree" type="checkbox">Agree to our <a href="#">Terms &
                          Condition?</a></label>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tj-copyright-area">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <div class="copyright-content-area">
                  <div class="footer-contact">
                    <ul>
                      <li>
                        <a href="tel:10095447818">
                          <span class="icon"><i class="tji-phone-2"></i></span>
                          <span class="text">+1 (009) 544-7818</span>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:info@bexon.com">
                          <span class="icon"><i class="tji-envelop-2"></i></span>
                          <span class="text">info@bexon.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="social-links">
                    <ul>
                      <li><a href="https://www.facebook.com/" target="_blank"><i
                            class="fa-brands fa-facebook-f"></i></a>
                      </li>
                      <li><a href="https://www.instagram.com/" target="_blank"><i
                            class="fa-brands fa-instagram"></i></a>
                      </li>
                      <li><a href="https://x.com/" target="_blank"><i class="fa-brands fa-x-twitter"></i></a></li>
                      <li><a href="https://www.linkedin.com/" target="_blank"><i
                            class="fa-brands fa-linkedin-in"></i></a>
                      </li>
                    </ul>
                  </div>
                  <div class="copyright-text">
                    <p>&copy; 2025 <a href="https://themeforest.net/user/theme-junction/portfolio"
                        target="_blank">Bexon</a>
                      All right reserved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-shape-1">
          <img src="assets/images/shape/pattern-2.svg" alt="">
        </div>
        <div class="bg-shape-2">
          <img src="assets/images/shape/pattern-3.svg" alt="">
        </div>
      </footer> --> ${renderComponent($$result2, "Footer", $$Footer, {})} <!-- end: Footer Section --> </div> </div> ` })}`;
}, "/workspaces/sardargroup-vercel/src/pages/project/[id].astro", void 0);

const $$file = "/workspaces/sardargroup-vercel/src/pages/project/[id].astro";
const $$url = "/project/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
