import { c as createComponent, a as renderTemplate, r as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DdgGWpub.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, d as data, b as $$Footer } from '../chunks/Footer_D9OFzVf_.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<script defer>

   document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      console.log("form 1");
      const data = Object.fromEntries(new FormData(form).entries());
         console.log("form 2");
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        alert('Sent \u2014 thanks!');
        form.reset();
      } else {
        alert('Error: ' + (json.error || 'unknown'));
      }
    });
  });
<\/script> `, " "])), renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-uw5kdbxl": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="smooth-wrapper" data-astro-cid-uw5kdbxl> <div id="smooth-content" data-astro-cid-uw5kdbxl> <main id="primary" class="site-main" data-astro-cid-uw5kdbxl> <div class="space-for-header" data-astro-cid-uw5kdbxl></div> <!-- start: Breadcrumb Section --> <section class="tj-page-header section-gap-x"${addAttribute(data.general.contactUsImage, "data-bg-image")} data-astro-cid-uw5kdbxl> <div class="container" data-astro-cid-uw5kdbxl> <div class="row" data-astro-cid-uw5kdbxl> <div class="col-lg-12" data-astro-cid-uw5kdbxl> <div class="tj-page-header-content text-center" data-astro-cid-uw5kdbxl> <h1 class="tj-page-title" data-astro-cid-uw5kdbxl>Contact Us</h1> <div class="tj-page-link" data-astro-cid-uw5kdbxl> <span data-astro-cid-uw5kdbxl><i class="tji-home" data-astro-cid-uw5kdbxl></i></span> <span data-astro-cid-uw5kdbxl> <a href="index.html" data-astro-cid-uw5kdbxl>Home</a> </span> <span data-astro-cid-uw5kdbxl><i class="tji-arrow-right" data-astro-cid-uw5kdbxl></i></span> <span data-astro-cid-uw5kdbxl> <span data-astro-cid-uw5kdbxl>Contact Us</span> </span> </div> </div> </div> </div> </div> <div class="page-header-overlay"${addAttribute(data.general.aboutUsImage2, "data-bg-image")} data-astro-cid-uw5kdbxl></div> </section> <!-- end: Breadcrumb Section --> <!-- start: Contact Top Section --> <div class="tj-contact-area section-gap" data-astro-cid-uw5kdbxl> <div class="container" data-astro-cid-uw5kdbxl> <div class="row" data-astro-cid-uw5kdbxl> <div class="col-12" data-astro-cid-uw5kdbxl> <div class="sec-heading text-center" data-astro-cid-uw5kdbxl> <span class="sub-title wow fadeInUp" data-wow-delay=".1s" data-astro-cid-uw5kdbxl><i class="tji-box" data-astro-cid-uw5kdbxl></i>Contact info</span> <h2 class="sec-title title-anim" data-astro-cid-uw5kdbxl><span data-astro-cid-uw5kdbxl>Reach</span> Out to Us</h2> </div> </div> </div> <div class="row row-gap-4" data-astro-cid-uw5kdbxl> <div class="col-xl-3 col-lg-6 col-sm-6" data-astro-cid-uw5kdbxl> <div class="location-style wow fadeInUp" data-wow-delay=".3s" data-astro-cid-uw5kdbxl> <div class="contact-icon" data-astro-cid-uw5kdbxl> <i class="tji-location-3" data-astro-cid-uw5kdbxl></i> </div> <h3 class="contact-title" data-astro-cid-uw5kdbxl>Our Locations</h3> <div data-astro-cid-uw5kdbxl> <div data-astro-cid-uw5kdbxl><b data-astro-cid-uw5kdbxl>Head Office:</b>${data.contact.location}</div> <div data-astro-cid-uw5kdbxl><b data-astro-cid-uw5kdbxl>Operations Office:</b>${data.contact.operationsLocation}</div> </div> </div> </div> <div class="col-xl-3 col-lg-6 col-sm-6" data-astro-cid-uw5kdbxl> <div class="contact-item style-2 wow fadeInUp" data-wow-delay=".5s" data-astro-cid-uw5kdbxl> <div class="contact-icon" data-astro-cid-uw5kdbxl> <i class="tji-envelop" data-astro-cid-uw5kdbxl></i> </div> <h3 class="contact-title" data-astro-cid-uw5kdbxl>Email us</h3> <ul class="contact-list" data-astro-cid-uw5kdbxl> <li data-astro-cid-uw5kdbxl><a${addAttribute("mailto:" + data.contact.email, "href")} data-astro-cid-uw5kdbxl>${data.contact.email}</a></li> </ul> </div> </div> <div class="col-xl-3 col-lg-6 col-sm-6" data-astro-cid-uw5kdbxl> <div class="contact-item style-2 wow fadeInUp" data-wow-delay=".7s" data-astro-cid-uw5kdbxl> <div class="contact-icon" data-astro-cid-uw5kdbxl> <i class="tji-phone" data-astro-cid-uw5kdbxl></i> </div> <h3 class="contact-title" data-astro-cid-uw5kdbxl>Call us</h3> <ul class="contact-list" data-astro-cid-uw5kdbxl> <li data-astro-cid-uw5kdbxl><a${addAttribute("tel:" + data.contact.phone, "href")} data-astro-cid-uw5kdbxl>${data.contact.phone}</a></li> </ul> </div> </div> <div class="col-xl-3 col-lg-6 col-sm-6" data-astro-cid-uw5kdbxl> <div class="contact-item style-2 wow fadeInUp" data-wow-delay=".9s" data-astro-cid-uw5kdbxl> <div class="contact-icon" data-astro-cid-uw5kdbxl> <i class="tji-chat" data-astro-cid-uw5kdbxl></i> </div> <h3 class="contact-title" data-astro-cid-uw5kdbxl>Live chat</h3> <ul class="contact-list" data-astro-cid-uw5kdbxl> <li data-astro-cid-uw5kdbxl><a${addAttribute("https://wa.me/" + data.contact.whatsApp, "href")} data-astro-cid-uw5kdbxl>${data.contact.whatsApp}</a></li> <li class="active" data-astro-cid-uw5kdbxl><a href="contact.html" data-astro-cid-uw5kdbxl>Need help?</a></li> </ul> </div> </div> </div> </div> </div> <!-- end: Contact Top Section --> <!-- start: Contact Section --> <section class="tj-contact-section-2 section-bottom-gap" data-astro-cid-uw5kdbxl> <div class="container" data-astro-cid-uw5kdbxl> <div class="row" data-astro-cid-uw5kdbxl> <div class="col-lg-6" data-astro-cid-uw5kdbxl> <div class="contact-form wow fadeInUp" data-wow-delay=".1s" data-astro-cid-uw5kdbxl> <h3 class="title" data-astro-cid-uw5kdbxl>Feel Free to Get in Touch or Visit our Location.</h3> <form id="contact-form" data-astro-cid-uw5kdbxl> <div class="row" data-astro-cid-uw5kdbxl> <div class="col-sm-6" data-astro-cid-uw5kdbxl> <div class="form-input" data-astro-cid-uw5kdbxl> <input type="text" name="Name" placeholder="Name" data-astro-cid-uw5kdbxl> <!-- <label class="cf-label">Full Name <span>*</span></label> --> </div> </div> <div class="col-sm-6" data-astro-cid-uw5kdbxl> <div class="form-input" data-astro-cid-uw5kdbxl> <input type="email" name="Email" placeholder="Email" data-astro-cid-uw5kdbxl> <!-- <label class="cf-label">Email Address <span>*</span></label> --> </div> </div> <div class="col-sm-6" data-astro-cid-uw5kdbxl> <div class="form-input" data-astro-cid-uw5kdbxl> <input type="tel" name="Phone" placeholder="Phone" data-astro-cid-uw5kdbxl> </div> </div> <!-- <div class="col-sm-6">
                        <div class="form-input">
                          <div class="tj-nice-select-box">
                            <div class="tj-select">
                              <select name="cfSubject">
                                <option value="0">Chose a option</option>
                                <option value="1">Aluminium doors, windows, and curtain walls</option>
                                <option value="2">Structural glazing and skylight systems</option>
                                <option value="3">Glass partitions and shower enclosures</option>
                                <option value="4">Aluminium composite panel (ACP) cladding</option>
                                <option value="5">Handrails, balustrades, and shopfronts</option>
                                <option value="6">Supply and installation of all glass & aluminium accessories</option>
                                <option value="7">Manpower Suppply Service</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div> --> <div class="col-sm-12" data-astro-cid-uw5kdbxl> <div class="form-input message-input" data-astro-cid-uw5kdbxl> <textarea name="Message" id="message" placeholder="message" data-astro-cid-uw5kdbxl></textarea> </div> </div> <div class="submit-btn" data-astro-cid-uw5kdbxl> <button class="tj-primary-btn" type="submit" data-astro-cid-uw5kdbxl> <span class="btn-text" data-astro-cid-uw5kdbxl><span data-astro-cid-uw5kdbxl>Submit Now</span></span> <span class="btn-icon" data-astro-cid-uw5kdbxl><i class="tji-arrow-right-long" data-astro-cid-uw5kdbxl></i></span> </button> </div> </div> </form> </div> </div> <div class="col-lg-6" data-astro-cid-uw5kdbxl> <div class="map-area wow fadeInUp" data-wow-delay=".3s" data-astro-cid-uw5kdbxl> <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3604.540132009582!2d55.44298167538793!3d25.386724477589503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDIzJzEyLjIiTiA1NcKwMjYnNDQuMCJF!5e0!3m2!1sen!2sbd!4v1764332307854!5m2!1sen!2sbd" data-astro-cid-uw5kdbxl></iframe> </div> </div> </div> </div> </section> <!-- end: Contact Section --> <!-- start: Cta Section --> <!-- end: Cta Section --> </main> <!-- start: Footer Section --> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-uw5kdbxl": true })} <!-- end: Footer Section --> </div> </div> ` }));
}, "/workspaces/sardargroup-vercel/src/pages/contact.astro", void 0);

const $$file = "/workspaces/sardargroup-vercel/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
