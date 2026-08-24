import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DdgGWpub.mjs';
import 'kleur/colors';
import { g as getCollection } from '../chunks/_astro_content_pH6TkKjb.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_B4CX9v1r.mjs';
import { C as CTGABG } from '../chunks/cta-bg_DUW8Rfbj.mjs';
import { $ as $$BaseLayout, b as $$Footer } from '../chunks/Footer_D9OFzVf_.mjs';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

const $$SisterConcerns = createComponent(async ($$result, $$props, $$slots) => {
  var companies = await getCollection("businesses");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-q2jz6cuh": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="tj-testimonial-section section-gap section-gap-x" data-astro-cid-q2jz6cuh> <div class="container" data-astro-cid-q2jz6cuh> <div class="row justify-content-between" data-astro-cid-q2jz6cuh> <div class="col-12" data-astro-cid-q2jz6cuh> <div class="sec-heading-wrap" data-astro-cid-q2jz6cuh> <span class="sub-title wow fadeInUp" data-wow-delay=".3s" data-astro-cid-q2jz6cuh><i class="tji-box" data-astro-cid-q2jz6cuh></i>Sister Concerns</span> <div class="heading-wrap-content" data-astro-cid-q2jz6cuh> <div class="sec-heading" data-astro-cid-q2jz6cuh> <h2 class="sec-title title-anim" data-astro-cid-q2jz6cuh>Same <span data-astro-cid-q2jz6cuh>Commitment</span> Different Faces with <span style="color:#5c3d91" data-astro-cid-q2jz6cuh>Sardar Group</span></h2> </div> </div> </div> </div> </div> <!-- Testimonials grid --> <div class="testimonial-wrapper" style="display:flex; flex-wrap:wrap; gap:30px; justify-content:center;" data-astro-cid-q2jz6cuh> <!-- Card 1 --> ${companies.map((company, index) => renderTemplate`<div style="flex:1  300px; max-width: 300px;" data-astro-cid-q2jz6cuh> <div class="testimonial-item card-style wow fadeInUp" data-wow-delay=".5s" data-astro-cid-q2jz6cuh>  <div class="desc" data-astro-cid-q2jz6cuh> <p data-astro-cid-q2jz6cuh>${company.data.name}</p> </div> <div class="testimonial-author" style="" data-astro-cid-q2jz6cuh> <div class="author-inner" data-astro-cid-q2jz6cuh>  <div class="author-header" data-astro-cid-q2jz6cuh> <h4 class="title" data-astro-cid-q2jz6cuh>${company.data.location}</h4>  </div> </div> </div> </div> </div>`)} <!-- Card 2 --> <!-- Card 3 --> <!-- Add more testimonial cards as needed --> </div> <!-- End testimonial-wrapper --> </div> <div class="bg-shape-1" data-astro-cid-q2jz6cuh> <img src="assets/images/shape/pattern-2.svg" alt="" data-astro-cid-q2jz6cuh> </div> <div class="bg-shape-2" data-astro-cid-q2jz6cuh> <img src="assets/images/shape/pattern-3.svg" alt="" data-astro-cid-q2jz6cuh> </div> </section> <section class="tj-cta-section" data-astro-cid-q2jz6cuh> <div class="container" data-astro-cid-q2jz6cuh> <div class="row" data-astro-cid-q2jz6cuh> <div class="col-12" data-astro-cid-q2jz6cuh> <div class="cta-area" data-astro-cid-q2jz6cuh> <div class="cta-content" data-astro-cid-q2jz6cuh> <h2 class="title title-anim" data-astro-cid-q2jz6cuh>Let’s Build Future Together with Sardar Group.</h2> <div class="cta-btn wow fadeInUp" data-wow-delay=".6s" data-astro-cid-q2jz6cuh> <a class="tj-primary-btn btn-dark" href="/contact" data-astro-cid-q2jz6cuh> <span class="btn-text" data-astro-cid-q2jz6cuh><span data-astro-cid-q2jz6cuh>Get Started Now</span></span> <span class="btn-icon" data-astro-cid-q2jz6cuh><i class="tji-arrow-right-long" data-astro-cid-q2jz6cuh></i></span> </a> </div> </div> <div class="cta-img" data-astro-cid-q2jz6cuh> ${renderComponent($$result2, "Image", $$Image, { "src": CTGABG, "alt": "", "data-astro-cid-q2jz6cuh": true })}</div> </div> </div> </div> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-q2jz6cuh": true })} ` })} `;
}, "/workspaces/sardargroup-vercel/src/pages/sister-concerns.astro", void 0);

const $$file = "/workspaces/sardargroup-vercel/src/pages/sister-concerns.astro";
const $$url = "/sister-concerns";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SisterConcerns,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
