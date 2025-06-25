import article  from "./assets/icons/article.js";
import calendarCheck from "./assets/icons/calendarCheck.js";
import calendarClock from "./assets/icons/calendarClock.js";
import code from "./assets/icons/code.js";
import codeWindow from "./assets/icons/codeWindow.js";
import designComputer from "./assets/icons/designComputer.js";
import designTools from "./assets/icons/designTools.js";
import dollar from "./assets/icons/dollar.js";
import envelope from "./assets/icons/envelope.js";
import googleAnalytics from "./assets/icons/googleAnalytics.js";
import googleBusiness from "./assets/icons/googleBusiness.js";
import heartHandshake from "./assets/icons/heartHandshake.js";
import laptopCode from "./assets/icons/laptopCode.js";
import layers from "./assets/icons/layers.js";
import logoDesign from "./assets/icons/logoDesign.js";
import logoDesignFill from "./assets/icons/logoDesignFill.js";
import maintenance from "./assets/icons/maintenance.js";
import pencil from "./assets/icons/pencil.js";
import mobilePhone from "./assets/icons/mobilePhone.js";
import rocket from "./assets/icons/rocket.js";
import seo from "./assets/icons/seo.js";
import server from "./assets/icons/server.js";
import typewriter from "./assets/icons/typewriter.js";
import worldWideWeb from "./assets/icons/worldWideWeb.js";

// CONTACT INFORMATION
export const contactInformation = [
  {
    icon: `${envelope}`,
    title: "Email",
    information: "sales@goldenbeardigital.com"
  },
  {
    icon: `${mobilePhone}`,
    title: "Phone",
    information: "(626) 384-7075"
  },
];

// SERVICES
export const whatWeOffer = [
  {
    icon: `${designTools}`,
    service: "Website Design",
    description: "Custom, responsive designs that capture your brand and convert visitors into customers.",
    href: "/",
    link: "Get started →"
  },
  {
    icon: `${codeWindow}`,
    service: "Website Development",
    description: "Fast, secure static sites built with modern code to deliver peak performance and a seamless user experience.",
    href: "/",
    link: "Get started →"
  },
  {
    icon: `${logoDesign}`,
    service: "Logo Design",
    description: "Distinctive logo designs that boost brand recognition and create a memorable identity.",
    href: "/",
    link: "Get started →"
  },
  {
    icon: `${seo}`,
    service: "SEO Optimization",
    description: "Strategic on-page SEO enhancements designed to boost your small business’s search rankings and drive organic traffic.",
    href: "/",
    link: "Get started →"
  },
  {
    icon: `${typewriter}`,
    service: "Content & Copywriting",
    description: "Persuasive, SEO-friendly content that engages your audience and elevates your online presence.",
    href: "/",
    link: "Get started →"
  },
  {
    icon: null,
    service: "Looking to Grow Your Business?",
    description: "Elevate your online presence with custom web solutions engineered to drive traffic. Visit our Services page for full details and pricing.",
    href: "/",
    link: "Our services →"
  },
];

// WHY WORK WITH US?
export const whyWorkWithUs = [
   {
    "feature": "Based in the United States.",
    "description": "Working out of Southern California, our experts deliver personalized, industry-leading web solutions that keep your business ahead—without you lifting a finger."
  },
  {
    "feature": "Unrivaled Customer Support.",
    "description": "Around the clock support ensures your site runs flawlessly 24/7—even in emergencies—so you never have to worry about technical issues."
  },
  {
    "feature": "Opt-Out Assurance.",
    "description": "Once your website goes live, we offer a 30-day trial and your total spend is capped at the charges incurred up to that point—no additional fees will be applied. Experience our hands-free service with minimal commitment."
  },
];

// PRICING ANNUAL FEATURES
export const annualFeatures = [
  "One-time annual payment",
  "Cancel anytime after 12 months"
]

// PRICING MONTHLY FEATURES
export const monthlyFeatures = [
  "No upfront fees with $0 down",
  "Cancel anytime after 12 months",
  "Month-to-month afterwards"
]

// FEATURES
export const features = [
    {
      "includedInSubscription": true,
      "price": "0",
      "per": null,
      "icon": `${code}`,
      "feature": "100% Custom Site",
      "description": "Fully custom-coded websites—no WordPress, Wix, Squarespace, etc. Each site is uniquely designed and optimized for a fast, responsive online presence."
    },
    {
      "includedInSubscription": true,
      "price": "0",
      "per": null,
      "icon": `${pencil}`,
      "feature": "Unlimited Edits",
      "description": "Enjoy unlimited revisions to perfect your site’s design and functionality, keeping your web presence up-to-date and user-friendly."
    },
    {
      "includedInSubscription": true,
      "price": "0",
      "per": null,
      "icon": `${maintenance}`,
      "feature": "Maintenance",
      "description": "Keep your website running smoothly with our proactive maintenance services, including regular updates, security checks, and performance optimization."
    },
    {
      "includedInSubscription": true,
      "price": "0",
      "per": null,
      "icon": `${server}`,
      "feature": "Hosting",
      "description": "Benefit from our secure and scalable hosting solutions that deliver fast load times, 99.9% uptime, and robust data protection."
    },
    {
      "includedInSubscription": true,
      "price": "0",
      "per": null,
      "icon": `${worldWideWeb}`,
      "feature": "Domain Name Registration",  
      "description": "Seamlessly connect an existing domain or register a brand-new one. Our expert domain management services boost your search engine visibility and drive organic traffic to help your business stand out online."
    },
    {
      "includedInSubscription": true,
      "price": "0",
      "per": null,
      "icon": `${googleBusiness}`,
      "feature": "Google Business Profile",
      "description": "Enhance your local SEO with a fully optimized Google Business Profile, designed to attract more local customers and improve online visibility."
    },
    {
      "includedInSubscription": true,
      "price": "0",
      "per": null,
      "icon": `${googleAnalytics}`,
      "feature": "Google Analytics",
      "description": "Gain actionable insights with integrated Google Analytics, helping you track user behavior, optimize performance, and drive conversions."
    },
    {
      "includedInSubscription": true,
      "price": "0",
      "per": null,
      "icon": `${dollar}`,
      "feature": "Accept Digital Payments",
      "description": "Streamline your online transactions with Stripe or Square Up and provide a frictionless and efficient e-commerce payment experience for your customers."
    },
    {
      "includedInSubscription": false,
      "price": "99.99",
      "per": "(one-time payment)",
      "icon": `${layers}`,
      "feature": "Additional Page(s)",
      "description": "Streamline your online transactions with Stripe or Square Up and provide a frictionless and efficient e-commerce payment experience for your customers."
    },
    {
      "includedInSubscription": false,
      "price": "19.99",
      "per": "/month",
      "icon": `${article}`,
      "feature": "Blog",
      "description": "Streamline your online transactions with Stripe or Square Up and provide a frictionless and efficient e-commerce payment experience for your customers."
    },
    {
      "includedInSubscription": false,
      "price": "9.99",
      "per": "/month",
      "icon": `${calendarCheck}`,
      "feature": "Scheduling / Appointments",
      "description": "Streamline your online transactions with Stripe or Square Up and provide a frictionless and efficient e-commerce payment experience for your customers."
    },
    {
      "includedInSubscription": false,
      "price": "199.99",
      "per": "(one-time payment)",
      "icon": `${logoDesignFill}`,
      "feature": "Logo Design",
      "description": "Streamline your online transactions with Stripe or Square Up and provide a frictionless and efficient e-commerce payment experience for your customers."
    },
];

// ADDITIONAL FEATURES
export const additionalFeatures = [
  {
    "feature": "Additional Page",
    "price": "99.99",
    "per": "one-time payment",
    "description": "Add an extra page to your website, expanding your content and enhancing user engagement with a one-time fee."
  },
  {
    "feature": "Blog",
    "price": "19.99",
    "per": "per month",
    "description": "Add an extra page to your website, expanding your content and enhancing user engagement with a one-time fee."
  },
  {
    "feature": "Appointments / Scheduling",
    "price": "9.99",
    "per": "per month",
    "description": "Add an extra page to your website, expanding your content and enhancing user engagement with a one-time fee."
  },
  {
    "feature": "Logo Design & Creation",
    "price": "199.99",
    "per": "one-time payment",
    "description": "Your logo is the cornerstone of your brand identity—it tells your story in a single visual image. Our logo design service combines creativity with strategy to produce a unique, memorable logo that represents the essence of your business."
  }
];

// WHAT'S NEXT STEPS (ContactUs.html)
export const nextSteps = [
    {
      "step": "1",
      "icon": `${calendarClock}`,
      "title": "Schedule a Call",
      "description": "Kickstart your digital journey by scheduling a call with our expert web development agency. During this initial consultation, we’ll dive into your business vision, goals, and online needs. We discuss everything from user experience and mobile responsiveness to SEO strategies that drive organic traffic. Our subscription service caters specifically to small businesses, ensuring every aspect of your website—design, development, hosting, domain registration, and even logo creation—is expertly managed. This personalized approach sets the stage for a robust online presence and positions your brand for success."
    },
    {
      "step": "2",
      "icon": `${designComputer}`,
      "title": "Approve the Design",
      "description": "Once we’ve captured your vision, our creative team crafts a custom, SEO-friendly design tailored to your brand. We create a modern, responsive user interface that not only looks sleek but is optimized for search engines, helping you reach more customers online. You’ll have the opportunity to review and approve the design, ensuring every element—from layout to color scheme—aligns with your business identity. Our design process is built to drive conversions, improve user engagement, and establish a strong foundation for your website’s development."
    },
    {
      "step": "3",
      "icon": `${laptopCode}`,
      "title": "Development & Revisions",
      "description": "With your design approved, we move into development, transforming ideas into a fully functional, high-performance website. Our team employs the latest coding practices to build a site that is fast, secure, and optimized for SEO. We understand that perfection is a process—our subscription model includes unlimited revisions. This iterative approach allows us to refine every detail until your website not only meets but exceeds your expectations. Our comprehensive development process ensures that every piece is perfectly aligned with your business goals, resulting in a site that drives traffic and enhances your online reputation."
    },
    {
      "step": "4",
      "icon": `${rocket}`,
      "title": "Launch",
      "description": "The final step is launching your website and making it live for the world to see. We handle all the technical details, including domain registration and reliable hosting, so you never have to worry about downtime or technical glitches. Our launch process is designed to ensure your site is fully optimized for search engines from day one. With our all-in-one web development subscription, your small business gets a polished online presence, ready to convert visitors into loyal customers. Enjoy the peace of mind that comes with knowing every aspect of your digital footprint is professionally managed."
    },
    {
      "step": "5",
      "icon": `${heartHandshake}`,
      "title": "Ongoing Support",
      "description": "Once your website is launched, our dedicated team continuously monitors and maintains your online presence—ensuring your site stays secure, fast, and search engine optimized. Our subscription-based service includes regular performance updates, proactive troubleshooting, and 24/7 technical assistance to keep your website operating at peak efficiency. We empower your business to focus on growth without worrying about digital downtime and with our reliable ongoing support, your online presence remains cutting-edge, fully optimized for search engines, and perfectly aligned with your business objectives."
    }
];

// SERVICES (Services.html)
export const servicesInDepth = [
  {
    includedInSubscription: true,
    price: "0",
    per: null,
    integration: false,
    link: "‣ Web Design",
    href: "webDesign",
    header: "Website Design",
    content: `
      Our web design service is all about creating modern, visually stunning websites that reflect your brand’s unique identity. We build custom,
      responsive web designs that not only look amazing but also deliver a seamless user experience across desktops, tablets, and smartphones. With a
      focus on mobile-first principles and intuitive navigation, every design is crafted to increase visitor engagement and improve conversion rates.
      
      <p>
        Our process includes:
        <ul>
          <li><span class="list-item-header">• User Experience (UX) Design:</span> Meticulous planning and wireframing ensure your site is easy to navigate so customers quickly find the information they need.</li>
          <li><span class="list-item-header">• Responsive & Mobile-First Layouts:</span> Designs that automatically adapt to any device, ensuring your website always looks professional and loads quickly.</li>
          <li><span class="list-item-header">• SEO-Friendly Design Elements:</span> Clean, semantic HTML and fast-loading pages help your site rank higher, driving meaningful organic traffic from search engines.</li>
        </ul> 
      </p>
    `
  },
  {
    includedInSubscription: true,
    price: "0",
    per: null,
    integration: false,
    link: "‣ Web Development",
    href: "webDevelopment",
    header: "Website Development",
    content: `
      Our web development service transforms elegant designs into fully functional websites with lightning-fast performance. We use industry best practices and modern static site techniques to code websites that are both secure and scalable. Every site is built with clean HTML, CSS, and JavaScript, ensuring optimal performance, quick load times, and a seamless browsing experience for your customers.
    `
  },
  {
    includedInSubscription: true,
    price: "0",
    per: null,
    integration: true,
    link: "‣ Digital Payments",
    href: "digitalPayments",
    header: "Digital Payments",
    content: `
      We integrate secure payment processing systems, such as Stripe and Square Up, that allow you to accept online payments with ease. These systems are embedded directly into your website, enabling smooth e-commerce functionality while safeguarding customer data.    `
  },
  {
    includedInSubscription: false,
    price: "10.00",
    per: "/month",
    integration: true,
    link: "‣ Scheduling/Appointments",
    href: "scheduling",
    header: "Scheduling / Appointments",
    content: `
      Seamless appointment scheduling is a must for service-based businesses. We integrate leading scheduling solutions, such as Calendly, into your website so customers can book appointments directly online—quickly, efficiently, and without the need for manual coordination.
    `
  },
  {
    includedInSubscription: false,
    price: "20.00",
    per: "/month",
    integration: true,
    link: "‣ Blog",
    href: "blog",
    header: "Blog",
    content: `
      Content is at the heart of online engagement and SEO. By integrating a robust blog system into your website, we make it easy to publish regular, SEO-optimized articles. This not only helps improve your search engine visibility but also builds your brand as an authority in your industry.
    `
  },
  {
    includedInSubscription: false,
    price: "200.00",
    per: "(one-time payment)",
    integration: false,
    link: "‣ Logo Creation",
    href: "logo",
    header: "Logo Creation",
    content: `
      Your logo is the cornerstone of your brand identity—it tells your story in a single visual image. Our logo design service combines creativity with strategy to produce a unique, memorable logo that represents the essence of your business.
      <p>
        We focus on:
        <ul>
          <li><span class="list-item-header">• Brand Identity and Recognition:</span> A well-crafted logo helps you stand out from the competition and builds trust with your customers.</li>
          <li><span class="list-item-header">• Clean, Modern Aesthetics:</span> Our designs are minimal yet striking, ensuring your logo remains versatile across digital and print media.</li>
          <li><span class="list-item-header">• Customized Concepts:</span> Whether you need a bold, dynamic mark or a sleek, modern emblem, our designs are tailored to resonate with your target audience.</li>
        </ul>
      </p>
    `
  },
  {
    includedInSubscription: true,
    price: "0",
    per: null,
    integration: false,
    link: "‣ On-Page SEO",
    href: "onPageSeo",
    header: "On-Page Search Engine Optimization",
    content: `
      In today’s digital landscape, your website’s visibility is everything. Our SEO optimization service is designed to help your site rank higher in search engine results, driving organic traffic and increasing your online presence. We implement best practices and advanced techniques to ensure your website is fully optimized for search engines from day one.
    
      <p>
        Our approach includes:
        <ul>
          <li><span class="list-item-header">• On-Page SEO:</span> Every page is built with clean, semantic code, optimized meta tags, header hierarchies, and structured data to help search engines understand your content.</li>
          <li><span class="list-item-header">• Technical SEO:</span> We improve site speed, mobile performance, and URL structures, which are critical ranking factors for Google and other search engines.</li>
          <li><span class="list-item-header">• Local SEO Integration:</span> For small businesses, capturing local search traffic is key. We enhance your site’s local SEO to ensure you’re visible to customers in your area.</li>
        </ul>
      </p>  
    `
  },
  {
    includedInSubscription: false,
    price: "500.00",
    per: "(one-time payment)",
    integration: false,
    link: "‣ Copywriting/Content",
    href: "copywriting",
    header: "Copywriting / Content Creation",
    content: `
      In today’s digital landscape, your website’s visibility is everything. Our SEO optimization service is designed to help your site rank higher in search engine results, driving organic traffic and increasing your online presence. We implement best practices and advanced techniques to ensure your website is fully optimized for search engines from day one.
    
      <p>
        Our approach includes:
        <ul>
          <li><span class="list-item-header">• On-Page SEO:</span> Every page is built with clean, semantic code, optimized meta tags, header hierarchies, and structured data to help search engines understand your content.</li>
          <li><span class="list-item-header">• Technical SEO:</span> We improve site speed, mobile performance, and URL structures, which are critical ranking factors for Google and other search engines.</li>
          <li><span class="list-item-header">• Local SEO Integration:</span> For small businesses, capturing local search traffic is key. We enhance your site’s local SEO to ensure you’re visible to customers in your area.</li>
        </ul>
      </p>  
    `
  },
];