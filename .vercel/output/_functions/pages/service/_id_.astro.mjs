import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, d as createAstro, r as renderComponent } from '../../chunks/astro/server_DdgGWpub.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_pH6TkKjb.mjs';
import { $ as $$BaseLayout, b as $$Footer } from '../../chunks/Footer_D9OFzVf_.mjs';
import 'clsx';
import { $ as $$Image } from '../../chunks/_astro_assets_B4CX9v1r.mjs';
export { renderers } from '../../renderers.mjs';

const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const services = await getCollection("services");
  return renderTemplate`${maybeRenderHead()}<div class="col-lg-4"> <div class="tj-main-sidebar slidebar-stickiy"> <div class="tj-sidebar-widget service-categories wow fadeInUp" data-wow-delay=".1s"> <h4 class="widget-title">More services</h4> <ul> ${services.map((service) => renderTemplate`<li><a${addAttribute("../service/" + service.id, "href")}>${service.data.name}<span class="icon"><i class="tji-arrow-right"></i></span></a></li>`)} </ul> </div> <!-- <div class="tj-sidebar-widget widget-feature-item wow fadeInUp" data-wow-delay=".3s">
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
                  </div> --> </div> </div>`;
}, "/workspaces/sardargroup-vercel/src/components/Services.astro", void 0);

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const services = await getCollection("services");
  var id = Astro2.params.id;
  var service = services.find((serv) => serv.id === id);
  if (!service) {
    return new Response("Service not found", { status: 404 });
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="smooth-wrapper"> <div id="smooth-content"> <main id="primary" class="site-main"> <div class="space-for-header"></div> <!-- start: Breadcrumb Section --> <section class="tj-page-header section-gap-x"${addAttribute(`background-image: url('${service.data.heroImage?.src ?? "/assets/fallback-hero.jpg"}'); `, "style")}> <div class="container"> <div class="row"> <div class="col-lg-12"> <div class="tj-page-header-content text-center"> <h1 class="tj-page-title">Service Details</h1> <div class="tj-page-link"> <span><i class="tji-home"></i></span> <span> <a href="index.html">Home</a> </span> <span><i class="tji-arrow-right"></i></span> <span> <span>Service Details</span> </span> </div> </div> </div> </div> </div> <div class="page-header-overlay"${addAttribute(service.data.heroImage?.src, "data-bg-image")}></div> </section> <!-- end: Breadcrumb Section --> <!-- start: Blog Section --> <section class="tj-blog-section section-gap slidebar-stickiy-container"> <div class="container"> <div class="row row-gap-5"> <div class="col-lg-8"> <div class="post-details-wrapper"> <div class="blog-images wow fadeInUp" data-wow-delay=".1s"> ${service.data.mainImage && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": service.data.mainImage, "alt": "", "height": "400", "width": "800" })}`} </div> <h2 class="title title-anim">${service.data.title}</h2> <div class="blog-text"> <p class="wow fadeInUp" data-wow-delay=".3s">${service.data.description} </p> <p class="wow fadeInUp" style="font-weight:bold" data-wow-delay=".3s">${service.data.benefitsTitle}:</p> <ul class="wow fadeInUp" data-wow-delay=".3s"> ${service.data.benefits.map((benefit) => renderTemplate`<li><span><i class="tji-check"></i></span>${benefit}</li>`)} </ul> <div class="images-wrap"> <div class="row"> <div class="col-sm-6"> <div class="image-box wow fadeInUp" data-wow-delay=".3s"> ${service.data.image1 && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": service.data.image1, "alt": "", "width": "400", "height": "400" })}`} </div> </div> <div class="col-sm-6"> <div class="image-box wow fadeInUp" data-wow-delay=".5s"> ${service.data.image2 && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": service.data.image2, "alt": "", "width": "400", "height": "400" })}`} </div> </div> </div> </div> <h3 class="wow fadeInUp" data-wow-delay=".3s">${service.data.subServicesTitle}</h3> <p class="wow fadeInUp" data-wow-delay=".3s">${service.data.subServicesDescription}</p> <div class="details-content-box"> ${(service.data.subServices ?? []).map((subService, index) => renderTemplate`<div class="service-details-item wow fadeInUp" data-wow-delay=".2s"> <span class="number">01.</span> <h6 class="title">${subService.title}</h6> <div class="desc"> <p>${subService.description}</p> </div> </div>`)} </div> <h3 class="wow fadeInUp" data-wow-delay=".3s">Frequently asked questions</h3> <div class="accordion tj-faq style-2" id="faqOne"> ${service.data.faqs.map((faq, serial) => serial === 0 ? renderTemplate`<div class="accordion-item active wow fadeInUp" data-wow-delay=".3s"> <button class="faq-title" type="button" data-bs-toggle="collapse"${addAttribute(`#faq-${serial + 1}`, "data-bs-target")} aria-expanded="true"> ${faq.question} </button> <div${addAttribute(`faq-${serial + 1}`, "id")} class="collapse show" data-bs-parent="#faqOne"> <div class="accordion-body faq-text"> <p>${faq.answer}</p> </div> </div> </div>` : renderTemplate`<div class="accordion-item wow fadeInUp" data-wow-delay=".3s"> <button class="faq-title collapsed" type="button" data-bs-toggle="collapse"${addAttribute(`#faq-${serial + 1}`, "data-bs-target")} aria-expanded="false"> ${faq.question} </button> <div${addAttribute(`faq-${serial + 1}`, "id")} class="collapse" data-bs-parent="#faqOne"> <div class="accordion-body faq-text"> <p>${faq.answer}</p> </div> </div> </div>`)} </div> </div> </div> </div> ${renderComponent($$result2, "Services", $$Services, {})} </div> </div> </section> <!-- end: Blog Section --> <!-- start: Cta Section --> <section class="tj-cta-section"> <div class="container"> <div class="row"> <div class="col-12"> <div class="cta-area"> <div class="cta-content"> <h2 class="title title-anim">Let’s Build Future Together with Sardar Group.</h2> <div class="cta-btn wow fadeInUp" data-wow-delay=".6s"> <a class="tj-primary-btn btn-dark" href="/contact"> <span class="btn-text"><span>Get Started Now</span></span> <span class="btn-icon"><i class="tji-arrow-right-long"></i></span> </a> </div> </div> <div class="cta-img"> ${service.data.image3 && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": service.data.image3, "alt": "", "height": "100", "width": "100 " })}`} </div> </div> </div> </div> </div> </section> <!-- end: Cta Section --> </main> <!-- start: Footer Section --> ${renderComponent($$result2, "Footer", $$Footer, {})} <!-- end: Footer Section --> </div> </div> ` })}`;
}, "/workspaces/sardargroup-vercel/src/pages/service/[id].astro", void 0);

const $$file = "/workspaces/sardargroup-vercel/src/pages/service/[id].astro";
const $$url = "/service/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$id,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
