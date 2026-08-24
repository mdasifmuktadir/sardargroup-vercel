import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DdgGWpub.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, b as $$Footer } from '../chunks/Footer_D9OFzVf_.mjs';
import { g as getCollection } from '../chunks/_astro_content_pH6TkKjb.mjs';
import '../chunks/index_CYyG6us9.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B4CX9v1r.mjs';
import { C as CTGABG } from '../chunks/cta-bg_DUW8Rfbj.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Portfolio = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-hcjuqwdu": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="smooth-wrapper" data-astro-cid-hcjuqwdu> <div id="smooth-content" data-astro-cid-hcjuqwdu> <main id="primary" class="site-main" data-astro-cid-hcjuqwdu> <div class="space-for-header" data-astro-cid-hcjuqwdu></div> <!-- start: Breadcrumb Section --> <section class="tj-page-header section-gap-x" data-bg-image="assets/images/about/about-us-2.jpg" data-astro-cid-hcjuqwdu> <div class="container" data-astro-cid-hcjuqwdu> <div class="row" data-astro-cid-hcjuqwdu> <div class="col-lg-12" data-astro-cid-hcjuqwdu> <div class="tj-page-header-content text-center" data-astro-cid-hcjuqwdu> <h1 class="tj-page-title" data-astro-cid-hcjuqwdu>Portfolio</h1> <div class="tj-page-link" data-astro-cid-hcjuqwdu> <span data-astro-cid-hcjuqwdu><i class="tji-home" data-astro-cid-hcjuqwdu></i></span> <span data-astro-cid-hcjuqwdu> <a href="index.html" data-astro-cid-hcjuqwdu>Home</a> </span> <span data-astro-cid-hcjuqwdu><i class="tji-arrow-right" data-astro-cid-hcjuqwdu></i></span> <span data-astro-cid-hcjuqwdu> <span data-astro-cid-hcjuqwdu>Portfolio</span> </span> </div> </div> </div> </div> </div> <div class="page-header-overlay" data-bg-image="assets/images/shape/pheader-overlay.webp" data-astro-cid-hcjuqwdu></div> </section> <!-- end: Breadcrumb Section --> <!-- start: Project Section --> <section class="tj-project-section section-gap" data-astro-cid-hcjuqwdu> <div class="container" data-astro-cid-hcjuqwdu> <div class="row row-gap-4" data-astro-cid-hcjuqwdu> ${projects.map((project) => renderTemplate`<div class="col-xl-4 col-md-6" data-astro-cid-hcjuqwdu> <div class="project-item wow fadeInUp" data-wow-delay=".1s" data-astro-cid-hcjuqwdu> <div class="project-img" data-astro-cid-hcjuqwdu> ${project.data.heroImage && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "height": 200, "width": 200, "src": project.data.heroImage, "alt": "", "data-astro-cid-hcjuqwdu": true })}`} </div> <div class="project-content" data-astro-cid-hcjuqwdu> <span class="categories w-full" data-astro-cid-hcjuqwdu><a${addAttribute("/project/" + project.id, "href")} data-astro-cid-hcjuqwdu>${project.data.name}</a></span> <div class="project-text" data-astro-cid-hcjuqwdu> <h4 class="title" data-astro-cid-hcjuqwdu><a style="font-size:medium"${addAttribute("/project/" + project.id, "href")} data-astro-cid-hcjuqwdu>${project.data.longName}</a></h4> <a class="project-btn"${addAttribute("/project/" + project.id, "href")} data-astro-cid-hcjuqwdu> <i class="tji-arrow-right-big" data-astro-cid-hcjuqwdu></i> </a> </div> </div> </div> </div>`)} </div> <!-- <div class="tj-pagination d-flex justify-content-center">
              <ul>
                <li>
                  <span aria-current="page" class="page-numbers current">1</span>
                </li>
                <li>
                  <a class="page-numbers" href="#">2</a>
                </li>
                <li>
                  <a class="page-numbers" href="#">3</a>
                </li>
                <li>
                  <a class="next page-numbers" href="#"><i class="tji-arrow-right-long"></i></a>
                </li>
              </ul>
            </div> --> </div> </section> <!-- end: Project Section --> <!-- start: Cta Section --> <section class="tj-cta-section" data-astro-cid-hcjuqwdu> <div class="container" data-astro-cid-hcjuqwdu> <div class="row" data-astro-cid-hcjuqwdu> <div class="col-12" data-astro-cid-hcjuqwdu> <div class="cta-area" data-astro-cid-hcjuqwdu> <div class="cta-content" data-astro-cid-hcjuqwdu> <h2 class="title title-anim" data-astro-cid-hcjuqwdu>Let’s Build Future Together with Sardar Group</h2> <div class="cta-btn wow fadeInUp" data-wow-delay=".6s" data-astro-cid-hcjuqwdu> <a class="tj-primary-btn btn-dark" href="/contact" data-astro-cid-hcjuqwdu> <span class="btn-text" data-astro-cid-hcjuqwdu><span data-astro-cid-hcjuqwdu>Get Started Now</span></span> <span class="btn-icon" data-astro-cid-hcjuqwdu><i class="tji-arrow-right-long" data-astro-cid-hcjuqwdu></i></span> </a> </div> </div> <div class="cta-img" data-astro-cid-hcjuqwdu> ${renderComponent($$result2, "Image", $$Image, { "src": CTGABG, "alt": "", "data-astro-cid-hcjuqwdu": true })}</div> </div> </div> </div> </div> </section> <!-- end: Cta Section --> </main> <!-- start: Footer Section --> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-hcjuqwdu": true })} <!-- end: Footer Section --> </div> </div> ` })} `;
}, "/workspaces/sardargroup-vercel/src/pages/portfolio.astro", void 0);

const $$file = "/workspaces/sardargroup-vercel/src/pages/portfolio.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Portfolio,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
