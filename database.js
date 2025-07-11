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

export const faqs = {
  pricingAndPaymentsFaqs: [
    {
      question: "Is the $99.99 charge for each additional page a one-time fee or a recurring monthly payment?",
      answer:
        "Each additional page is a one-time payment. For instance, if you need 3 extra pages, the total cost would be $299.97. There are no ongoing fees for additional pages."
    },
    {
      question: "What forms of payment do you accept for website development services?",
      answer:
        "We invoice via Stripe, which supports all major credit and debit cards. Monthly subscription fees are paid using a credit or debit card. For lump sum payments, we accept ACH bank transfers to reduce processing fees. We do not accept checks or money orders."
    },
    {
      question: "How do you handle late or missed payments?",
      answer:
        "Clients have a 7-day grace period after the due date. A $25 late fee is applied if payment is not received within this period. After 30 days, a 15% monthly interest fee will be added, and the website will go offline until payment is made. If no communication is received after 90 days, the contract will be terminated, and the total balance plus any accrued fees will become due. We encourage open communication if you're facing payment issues—we're here to help."
    },
    {
      question: "What is your refund policy?",
      answer:
        "If we can't deliver a website design that meets your expectations, we offer a full refund for the amount you've paid up to that point. Once the design is approved and the site is live, there is a 14-day trial period. If you cancel during this window, the contract will be voided, but you’ll still be responsible for any charges already incurred. After the 14-day trial, refunds are no longer available, and the full contract amount becomes due."
    }
  ],

  subscriptionsFaqs: [
    {
      question: "Is there a minimum contract length for the monthly website subscription?",
      answer:
        "Yes, the monthly website subscription has a 12-month minimum commitment. After the first year, it switches to a month-to-month plan that can be canceled anytime without penalties."
    },
    {
      question: "If I cancel my website subscription, do I retain ownership of my domain, images, and other assets?",
      answer:
        "You retain ownership of your domain, images, and assets provided to you. However, the website code is licensed for use only during an active subscription. If you cancel, access to the code will be revoked, but we will transfer the domain to you upon request."
    },
    {
      question: "Can I purchase my website with a single upfront payment instead of a monthly subscription?",
      answer:
        "Absolutely. We offer a one-time payment option for $3999.99. However, this option does not include services like hosting, domain registration, ongoing support, or maintenance."
    },
    {
      question: "What’s the difference between the monthly subscription and the one-time payment option?",
      answer:
        "The monthly subscription includes everything you need: domain registration, hosting, unlimited updates, maintenance, and ongoing support. The one-time payment covers just the website design and development—no ongoing services are included. While the subscription is more affordable upfront, it costs more over time. The one-time payment is higher initially but saves you money in the long run."
    },
    {
      question: "Can I add ongoing support and maintenance to my one-time website purchase?",
      answer:
        "Yes! You can add a maintenance and support plan for $49.99/month with a 12-month commitment. This includes hosting, domain management, unlimited edits, and continuous support. The plan renews annually and can be canceled after the first year."
    },
    {
      "question": "What is the long-term value of choosing a monthly website subscription versus a one-time payment with a maintenance plan?",
      "answer": "If you're deciding between the monthly subscription and the one-time lump sum payment, here's a simple breakdown to help clarify the cost difference. The monthly subscription is \$200 per month, which totals \$2,400 per year and includes everything you need like domain registration, hosting, unlimited updates, maintenance, and support. The one-time payment option is \$3,999.99 for the website design and development, and if you choose to add the \$50/month maintenance plan, that adds \$600 per year. In the first year, the one-time payment plus maintenance totals \$4,599.99. After that, the only ongoing cost is \$600 per year for maintenance, compared to \$2,400 per year with the subscription. Around month 20, both options will have cost about the same. From that point forward, the one-time payment option starts saving you around \$1,800 per year, making it the better long-term value in our ongoing business relationship and mutual commitment to keeping your website thriving."
}
  ],

  websiteFaqs: [
    {
      question: "How long does the website design and development process take?",
      answer:
        "From consultation to launch, our typical turnaround time is 2–4 weeks. This timeline includes design, development, testing, and revisions. The speed of completion largely depends on how quickly we receive your content, feedback, and approval."
    },
    {
      question: "Why do you build custom-coded websites instead of using WordPress or drag-and-drop builders?",
      answer:
        "We create custom-coded websites using HTML, CSS, and vanilla JavaScript to ensure superior performance, security, and SEO. Unlike WordPress or other page builders, our sites load faster, are easier to maintain, and have fewer security risks. This tailored approach also allows us to craft unique, lightweight, and high-performing websites specific to your brand."
    },
    {
      question: "What platform do you use for managing blog content?",
      answer:
        "We use a high-performance blogging platform built with 11ty.js and Decap CMS. This ensures lightning-fast load times, enhanced security, and a user-friendly content management experience. The blog integrates seamlessly with your website and is fully customizable."
    },
    {
      question: "How do I request changes or updates to my website?",
      answer:
        "You can request edits by emailing us at edits@goldenbeardigital.com. Please include the subject line '[Your Business Name] - Edit Request' and provide detailed instructions. We'll follow up with confirmation and a timeline for your updates."
    }
  ]
};

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