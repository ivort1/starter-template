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