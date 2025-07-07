import article  from "./assets/icons/article.js";
import calendarCheck from "./assets/icons/calendarCheck.js";
import calendarClock from "./assets/icons/calendarClock.js";
import code from "./assets/icons/code.js";
import dashboard from "./assets/icons/dashboard.js"
import designComputer from "./assets/icons/designComputer.js";
import dollar from "./assets/icons/dollar.js";
import envelope from "./assets/icons/envelope.js";
import googleAnalytics from "./assets/icons/googleAnalytics.js";
import googleBusiness from "./assets/icons/googleBusiness.js";
import heartHandshake from "./assets/icons/heartHandshake.js";
import laptopCode from "./assets/icons/laptopCode.js";
import layers from "./assets/icons/layers.js";
import logoDesignFill from "./assets/icons/logoDesignFill.js";
import maintenance from "./assets/icons/maintenance.js";
import pencil from "./assets/icons/pencil.js";
import mobilePhone from "./assets/icons/mobilePhone.js";
import rocket from "./assets/icons/rocket.js";
import server from "./assets/icons/server.js";
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
    icon: "uiDesign.jpg",
    service: "Website Design",
    description: "Custom, responsive designs that capture your brand and convert visitors into customers.",
    href: "/",
    link: "Get started →"
  },
  {
    icon: "coding.jpg",
    service: "Website Development",
    description: "Fast, secure static sites built with modern code to deliver peak performance and a seamless user experience.",
    href: "/",
    link: "Get started →"
  },
  {
    icon: "logoDesign.jpg",
    service: "Logo Design",
    description: "Distinctive logo designs that boost brand recognition and create a memorable identity.",
    href: "/",
    link: "Get started →"
  },
  {
    icon: "engine.jpg",
    service: "SEO Optimization",
    description: "Strategic on-page SEO enhancements designed to boost your small business’s search rankings and drive organic traffic.",
    href: "/",
    link: "Get started →"
  },
  {
    icon: "typewriter.jpg",
    service: "Content & Copywriting",
    description: "Persuasive, SEO-friendly content that engages your audience and elevates your online presence.",
    href: "/",
    link: "Get started →"
  },
  {
    icon: "collaborating.jpg",
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

export const websiteFaqs = [
  {
    "question": "Can I pay for my website in one lump sum instead of a monthly or annual subscription?",
    "answer": "Yes! If you prefer to pay once for your website, we offer a flat one-time payment option of $3499.99. However, please note that none of the features that come with a subscription will be included, such as domain registration, hosting, maintenance, etc."
  },
  {
    "question": "Do I keep my domain if I cancel my subscription?",
    "answer": "Yes! Your domain and assets will always remain yours, regardless of your subscription status. Even if we purchased and registered the domain on your behalf, we will transfer the domain if you decide to cancel your subscription."
  },
  // {
  //   "question": "",
  //   "answer": ""
  // }
];

// WHAT'S NEXT STEPS (ContactUs.html)
export const nextSteps = [
    {
      "step": "1",
      "icon": `${calendarClock}`,
      "title": "Schedule a Call",
      "description": "Start your digital journey by scheduling a call with our expert web development team. We'll discuss your business goals, SEO strategy, and website needs to create a tailored plan for success."
    },
    {
      "step": "2",
      "icon": `${designComputer}`,
      "title": "Approve the Design",
      "description": "Our team crafts a custom, SEO-friendly design that aligns with your brand identity. Review and approve a sleek, mobile-responsive layout that drives conversions and enhances user engagement."
    },
    {
      "step": "3",
      "icon": `${laptopCode}`,
      "title": "Development & Revisions",
      "description": "Once the design is approved, we build a fast, secure, and SEO-optimized website. Our subscription includes unlimited revisions to ensure your site exceeds expectations and aligns with your goals."
    },
    {
      "step": "4",
      "icon": `${dashboard}`,
      "title": "Testing",
      "description": "We’ll collaboratively test your website with you to ensure everything works flawlessly. While we handle performance and functionality tests, you’ll review user experience and content accuracy to make sure it matches your vision."
    },
    {
      "step": "5",
      "icon": `${rocket}`,
      "title": "Launch",
      "description": "We handle all the technical details, including domain registration and hosting, to launch your fully optimized website. Enjoy peace of mind knowing your site is ready to convert and perform from day one."
    },
    {
      "step": "6",
      "icon": `${heartHandshake}`,
      "title": "Ongoing Support",
      "description": "Our subscription includes continuous monitoring, SEO updates, and 24/7 technical support. We ensure your site stays secure, fast, and optimized for maximum performance and growth."
    }
];