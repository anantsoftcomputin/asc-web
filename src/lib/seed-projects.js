import { projectAPI } from './firebase-admin';

export const ALL_PROJECTS = [
  {
    title: "Gazra.org",
    category: "ngo",
    image: "https://anantsoft.com/assets/images/blog/google-business-profile-local-seo.jpg",
    gradient: "from-teal-400 to-emerald-600",
    shortDesc: "Inclusive community website for Project Gazra",
    fullDesc: "Gazra.org is a community-focused website for Project Gazra, presenting initiatives, support pathways, events, gallery, resources, and volunteer engagement in a clear, mobile-friendly experience.",
    detailedDesc: "Anant Soft Computing built Gazra.org as a trust-first public website for Project Gazra, helping visitors understand the mission, explore initiatives, access support resources, and participate through events and community programs.",
    technologies: ["React", "Responsive Web Design", "SEO"],
    features: [
      "Mission and initiative pages",
      "Event and gallery sections",
      "Support resource discovery",
      "Volunteer and community engagement paths",
      "SEO-friendly responsive website structure",
      "Mobile-first public website experience",
    ],
    results: [
      "Central digital presence for Project Gazra",
      "Improved access to community information and resources",
      "Mobile-friendly website for awareness, events, and engagement",
    ],
    liveLink: "https://gazra.org",
    githubLink: "",
    stat1Label: "Website", stat1Value: "Live",
    stat2Label: "Focus", stat2Value: "Community",
    stat3Label: "Experience", stat3Value: "Mobile-First",
    problemStatement: "Project Gazra needed a public website that clearly explained its mission, initiatives, support pathways, and community programs. Visitors needed a simple way to understand the work, explore resources, and find the right participation path without confusion.",
    ourApproach: "We structured the website around trust, accessibility, and easy discovery. The content flow helps visitors quickly understand Project Gazra, move through initiative and resource sections, and connect with events or community engagement opportunities from any device.",
    solutionDelivered: "We delivered a responsive public website with initiative pages, event and gallery sections, resource-focused content, and clear calls to connect with the community. The build is designed for fast mobile browsing and straightforward discovery by users and search engines.",
    caseStudyOutcome: "Gazra.org now gives Project Gazra a central digital presence for awareness, resources, events, and community engagement. The website acts as a clear front door for people who want to learn, participate, or connect with the initiative.",
    featured: false,
  },
  {
    title: "Trinetra Studio",
    category: "e-commerce",
    image: "https://anantsoft.com/assets/images/blog/website-vs-web-app.jpg",
    gradient: "from-fuchsia-500 to-rose-600",
    shortDesc: "E-commerce website for Trinetra Studio",
    fullDesc: "Trinetra Studio is an e-commerce website built to present products clearly, support browsing and enquiries, and give the brand a professional online storefront.",
    detailedDesc: "Anant Soft Computing built Trinetra Studio as a responsive e-commerce presence focused on product discovery, visual presentation, trust, and a smooth path from browsing to customer enquiry or purchase intent.",
    technologies: ["React", "E-commerce", "Responsive Web Design", "SEO"],
    features: [
      "Product catalogue structure",
      "Responsive shopping experience",
      "Brand-focused product presentation",
      "Search-friendly content architecture",
      "Customer enquiry and conversion paths",
      "Mobile-first storefront design",
    ],
    results: [
      "Professional online storefront for Trinetra Studio",
      "Clearer product discovery for customers",
      "Mobile-friendly e-commerce experience",
    ],
    liveLink: "https://trinetrastudio.in",
    githubLink: "",
    stat1Label: "Type", stat1Value: "E-commerce",
    stat2Label: "Platform", stat2Value: "Website",
    stat3Label: "Status", stat3Value: "Live",
    problemStatement: "Trinetra Studio needed a professional e-commerce website that could present its products online, build trust with visitors, and support customer discovery beyond social media or offline channels.",
    ourApproach: "We structured the website around simple product browsing, mobile-first presentation, brand clarity, and conversion-focused paths so visitors could understand the offering and move toward enquiry or purchase intent quickly.",
    solutionDelivered: "We delivered a responsive e-commerce website with product-focused pages, clean visual hierarchy, SEO-ready structure, and customer-friendly navigation designed for desktop and mobile shoppers.",
    caseStudyOutcome: "Trinetra Studio now has a dedicated digital storefront that supports product visibility, customer discovery, and a more professional online buying journey.",
    featured: false,
  },
  {
    title: "Connexsould",
    category: "mobile",
    image: "https://anantsoft.com/assets/images/blog/mobile-app-development-cost-india.jpg",
    gradient: "from-sky-500 to-indigo-700",
    shortDesc: "Upcoming Android and iOS social networking mobile app",
    fullDesc: "Connexsould is an upcoming Android and iOS mobile application combining social feeds, community interaction, messaging, and media sharing inspired by the engagement patterns of Instagram, Facebook, and WhatsApp.",
    detailedDesc: "Anant Soft Computing is developing Connexsould as a cross-platform social mobile app where users can connect, share media, follow updates, communicate, and build communities in one integrated experience.",
    technologies: ["Android", "iOS", "Mobile App", "Realtime Chat", "Social Networking"],
    features: [
      "User profiles and social feeds",
      "Media sharing and engagement interactions",
      "Realtime messaging experience",
      "Community and connection workflows",
      "Android and iOS app delivery",
      "Scalable social-app architecture",
    ],
    results: [
      "Upcoming cross-platform social app",
      "Unified experience for feed, messaging, and community interaction",
      "Designed for Android and iOS launch",
    ],
    liveLink: "https://connexsould.com",
    githubLink: "",
    stat1Label: "Status", stat1Value: "Upcoming",
    stat2Label: "Platforms", stat2Value: "Android + iOS",
    stat3Label: "Type", stat3Value: "Social App",
    problemStatement: "Connexsould needed a mobile-first product concept that could combine feed-based discovery, social connection, direct communication, and media sharing without forcing users across separate tools.",
    ourApproach: "We approached the product as a unified social experience, balancing familiar interaction patterns from major social and messaging apps with a scalable architecture for profiles, feeds, engagement, and realtime communication.",
    solutionDelivered: "We are delivering a cross-platform mobile application for Android and iOS with user profiles, social feed interactions, media sharing, messaging, and community-oriented workflows.",
    caseStudyOutcome: "Connexsould is positioned as an upcoming social networking product that brings feed, community, and messaging interactions into one mobile application experience.",
    featured: false,
  },
  {
    title: "Baagay",
    category: "e-commerce",
    image: "https://anantsoft.com/assets/images/blog/custom-vs-ready-made-software.jpg",
    gradient: "from-emerald-500 to-teal-700",
    shortDesc: "E-commerce website for Baagay",
    fullDesc: "Baagay is an e-commerce website built to help the brand showcase products, guide customers through discovery, and support a clean online shopping or enquiry experience.",
    detailedDesc: "Anant Soft Computing built Baagay as a responsive e-commerce website with a product-led structure, clear category browsing, trust-focused presentation, and mobile-friendly customer journeys.",
    technologies: ["React", "E-commerce", "Responsive Web Design", "SEO"],
    features: [
      "Product catalogue and category structure",
      "Responsive storefront experience",
      "Brand and product presentation",
      "SEO-friendly page architecture",
      "Customer enquiry and conversion paths",
      "Mobile-first shopping flow",
    ],
    results: [
      "Professional e-commerce presence for Baagay",
      "Improved product visibility online",
      "Mobile-friendly storefront for customers",
    ],
    liveLink: "",
    githubLink: "",
    stat1Label: "Type", stat1Value: "E-commerce",
    stat2Label: "Platform", stat2Value: "Website",
    stat3Label: "Focus", stat3Value: "Products",
    problemStatement: "Baagay needed a clean e-commerce website that could move the brand from scattered product presentation to a structured digital storefront customers could browse easily.",
    ourApproach: "We focused on product clarity, mobile usability, category structure, and trust-building presentation so customers can understand the offering and move toward enquiry or purchase intent with less friction.",
    solutionDelivered: "We delivered a responsive e-commerce website with product catalogue structure, category browsing, brand-focused content, and conversion-oriented navigation.",
    caseStudyOutcome: "Baagay now has a structured e-commerce presence that improves product visibility and gives customers a clearer path to explore the brand online.",
    featured: false,
  },
    {
    title: "iversity.in",
    category: "education",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/iversity.webp",
    gradient: "from-violet-500 to-indigo-700",
    shortDesc: "An AI-powered LMS for teaching and learning artificial intelligence, with tutor and student workspaces",
    fullDesc: "iversity.in is a modern learning management system built specifically for AI education — where tutors create rich, interactive AI courses with quizzes and assignments, and students enrol, learn, track their progress, and get their submissions assessed automatically by AI.",
    detailedDesc: "Anant Soft Computing designed and built iversity.in as a purpose-built AI-learning platform. It pairs a clean, expressive interface with serious learning infrastructure — Gemini-powered assignment assessment, adaptive learning, and gamification — to keep learners engaged while giving tutors everything they need to author and run modern AI courses.",
    technologies: ["React", "Vite", "Material UI", "Firebase", "Gemini API"],
    features: [
      "Separate tutor and student workspaces with role-based access",
      "Tutor course builder for creating AI courses, lessons, and quizzes",
      "Student enrolment, learning, and real-time progress tracking",
      "AI-assessed assignment submissions powered by the Gemini API",
      "Adaptive learning that responds to each student's performance",
      "Gamification with achievements, certificates, and milestones",
      "Google sign-in with secure Firebase authentication",
      "Server-side rendering for fast loads and strong SEO",
    ],
    results: [
      "Purpose-built AI-learning experience for both tutors and students",
      "Automated assignment grading via Gemini, reducing tutor workload",
      "Adaptive, gamified learning to drive engagement and consistency",
      "Mobile-first, SSR architecture for performance and discoverability",
    ],
    liveLink: "https://iversity.in",
    githubLink: "",
    stat1Label: "User Roles", stat1Value: "2",
    stat2Label: "AI Grading", stat2Value: "Gemini",
    stat3Label: "Lighthouse", stat3Value: "95+",
    problemStatement: "Artificial intelligence is one of the most in-demand skills, yet most general-purpose learning platforms are not built for teaching it well. Tutors lacked a focused environment to author structured AI courses with quizzes and assignments, while students had no single place to enrol, study, track their own progress, and get meaningful feedback. Manual assignment grading was a major bottleneck — slow, inconsistent, and impossible to scale as cohorts grew — and generic course platforms offered none of the adaptivity or motivation mechanics that help learners actually finish what they start.",
    ourApproach: "We designed iversity.in around two distinct user journeys — the tutor who creates and runs courses, and the student who learns from them — and built each workspace to fit its job precisely. We chose React with Vite and Material UI for a fast, expressive interface, added server-side rendering for performance and SEO, and used Firebase for authentication and backend so the platform could scale without heavy infrastructure. The defining decision was to use the Gemini API to assess student assignments automatically, removing the grading bottleneck, and to layer in adaptive learning and gamification so the platform actively helps students stay consistent.",
    solutionDelivered: "We delivered a full AI-learning platform with a tutor dashboard for building courses, lessons, quizzes, and assignments; a student experience covering registration, enrolment, structured learning, and progress tracking; Gemini-powered automatic assessment of submitted assignments; an adaptive learning layer that adjusts to each student's performance; a gamification system with achievements, certificates, and milestones; Google sign-in via Firebase authentication; and a server-side-rendered React front end for fast load times and search visibility.",
    caseStudyOutcome: "iversity.in gives AI educators a platform built for the subject they teach — tutors can author and run complete courses, while students get a guided, adaptive, gamified path through them. Automatic Gemini-based grading removes the biggest scaling bottleneck in online teaching, returning feedback to students instantly and freeing tutors to focus on content and mentoring. The SSR architecture keeps the experience fast and discoverable. [Add measured outcomes — enrolments, courses published, completion rates — once available.]",
    featured: false,
  },
  {
    title: "Asia Biomass",
    category: "greenenergy",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/asiabiomass.webp",
    gradient: "from-green-500 to-lime-600",
    shortDesc: "Lead-generation website for a biomass waste-to-energy company serving sugar mills on a zero-investment model",
    fullDesc: "asiabiomass.in is the digital presence for Asia Biomass Tradelink — a biomass and bagasse-to-energy solutions provider that helps sugar mills and industries turn waste into fuel through a unique zero-investment, build-own-operate model.",
    detailedDesc: "Anant Soft Computing built Asia Biomass Tradelink's website as a focused lead-generation engine. It explains a fairly technical, capital-heavy offering — on-site briquetting, pelleting, and gasification of agro-waste — in clear, benefit-led terms that speak to plant owners, and routes qualified enquiries straight to the sales team.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Node.js"],
    features: [
      "Benefit-led explanation of the zero-investment BOOT energy model",
      "Product and capability pages for shredding, drying, briquetting, pelleting, and gasification",
      "Industry-specific content targeting sugar mills and bagasse waste",
      "SEO-optimised blog for high-intent biomass and waste-to-energy keywords",
      "Lead-capture and free-assessment enquiry forms",
      "WhatsApp and direct-call integration for instant enquiries",
      "Mobile-first, fast-loading responsive design",
    ],
    results: [
      "Clear positioning of a complex, capital-heavy offering for plant owners",
      "Structured lead capture routing enquiries straight to the sales team",
      "SEO content foundation targeting sugar-mill and bagasse keywords",
      "Mobile-first presence with instant WhatsApp enquiry routing",
    ],
    liveLink: "https://asiabiomass.in",
    githubLink: "",
    stat1Label: "Model", stat1Value: "Zero-Investment",
    stat2Label: "Focus", stat2Value: "Sugar Mills",
    stat3Label: "Solutions", stat3Value: "Waste-to-Energy",
    problemStatement: "Asia Biomass Tradelink offers something genuinely valuable but hard to communicate: a zero-investment model where they install and operate biomass waste-to-energy equipment at a client's site, turning agro-waste like bagasse into profitable fuel. The challenge is that this is a complex, capital-intensive, trust-dependent proposition aimed at industrial decision-makers such as sugar-mill owners. Without a clear digital presence, the company had no scalable way to explain the model, demonstrate credibility, rank for the technical terms buyers search, or capture and qualify the high-value leads that this kind of B2B sale depends on.",
    ourApproach: "We treated the website as a lead-generation tool first and a brochure second. We led with the client's pain — waste disposal cost, fire risk, lost energy revenue — and reframed it around the company's benefit-led, zero-investment model, so a plant owner could quickly grasp 'what's in it for me'. We chose Next.js for performance and SEO, and built an industry-specific content layer (especially around sugar mills and bagasse) to rank for the exact problems prospects search for. Every page was designed to funnel toward a low-friction enquiry — a free assessment form or an instant WhatsApp message.",
    solutionDelivered: "We delivered a Next.js website with clear, benefit-led pages explaining the zero-investment BOOT model; capability pages covering the full equipment range (shredders, hammer mills, dewatering and thermal drying, briquetting, pelleting, and gasification); industry-targeted content and an SEO-optimised blog aimed at sugar mills and bagasse-to-energy keywords; lead-capture and free-assessment forms; and WhatsApp and click-to-call integration for instant enquiries — all in a fast, mobile-first responsive build.",
    caseStudyOutcome: "Asia Biomass Tradelink now has a digital presence that turns a complex industrial offering into a clear, compelling case for plant owners. The site explains the zero-investment model in language decision-makers understand, builds credibility, and channels prospects toward a single, low-friction next step — a free assessment or a WhatsApp message — giving the sales team a steady, qualified pipeline. The SEO foundation positions the company to capture organic demand from sugar mills searching for bagasse and waste-to-energy solutions. [Add measured lead-volume or ranking outcomes once tracked.]",
    featured: false,
  },
  {
    title: "Aadhya Green Solutions",
    category: "greenenergy",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/aadhyagreensolutions.webp",
    gradient: "from-emerald-500 to-green-700",
    shortDesc: "Corporate website for a biomass briquette and pellet supplier serving industrial boilers",
    fullDesc: "aadhyagreensolutions.com is the corporate website for Aadhya Green Solutions, a Vadodara-based supplier of biomass briquettes and pellets — a clean, economical alternative to coal and wood for industrial boilers across the FMCG, pharma, dairy, and chemical sectors.",
    detailedDesc: "Anant Soft Computing built Aadhya Green Solutions a clean, credibility-building corporate website that presents their biomass briquette and pellet products, explains the environmental and cost advantages over coal and wood, showcases their industrial client base, and drives quote requests from procurement teams.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    features: [
      "Product showcase for biomass briquettes and pellets",
      "Comparison content positioning briquettes against coal and wood logs",
      "Industry-use section spanning pharma, dairy, FMCG, chemical, and more",
      "Client logo wall to build trust and credibility",
      "Request-a-quote and contact enquiry forms",
      "WhatsApp and click-to-call integration",
      "Responsive, mobile-friendly design",
    ],
    results: [
      "Professional digital presence establishing credibility with industrial buyers",
      "Clear cost and environmental case for briquettes over coal and wood",
      "Showcased a marquee client base across multiple industries",
      "Quote-request funnel for procurement enquiries",
    ],
    liveLink: "https://aadhyagreensolutions.com",
    githubLink: "",
    stat1Label: "Fuel Savings", stat1Value: "30-40%",
    stat2Label: "Emissions", stat2Value: "Lower CO2 & NOx",
    stat3Label: "Industries", stat3Value: "15+",
    problemStatement: "Aadhya Green Solutions supplies biomass briquettes and pellets — a cleaner, more economical fuel than coal or wood for industrial boilers — but they lacked a professional digital presence to make that case to industrial buyers. Procurement teams at pharma plants, dairies, FMCG units, and chemical factories evaluate fuel suppliers partly on credibility, and without a clear website the company had no way to present its products, demonstrate the cost and environmental advantages over coal, showcase its existing clients, or capture quote requests from new prospects searching online.",
    ourApproach: "We focused the site on two jobs: establishing credibility and generating quote enquiries. We built clear product pages for the briquettes and pellets, paired with comparison content that spells out the concrete advantages over coal and wood — higher calorific value, 30–40% fuel-cost savings, lower emissions, and no fly ash. We highlighted the breadth of industries served and put the company's recognisable client logos front and centre to build trust quickly. Every page guides procurement visitors toward a request-a-quote action or an instant WhatsApp enquiry.",
    solutionDelivered: "We delivered a responsive corporate website presenting Aadhya Green Solutions' biomass briquette and pellet products; benefit and comparison sections positioning briquettes against coal and wood logs; an industry-use section covering pharma, dairy, FMCG, chemical, and other sectors; a client logo wall for credibility; request-a-quote and contact forms; and WhatsApp and click-to-call integration so industrial buyers can enquire instantly.",
    caseStudyOutcome: "Aadhya Green Solutions now presents itself online with the credibility its product and client base deserve. The website makes a clear, evidence-led case for biomass briquettes over conventional fuels, showcases a trusted industrial client roster, and channels procurement visitors toward quote requests and direct enquiries — giving the company a professional front door for new B2B business. [Add measured enquiry or conversion outcomes once tracked.]",
    featured: false,
  },
  {
    title: "Pramesh Wealth",
    category: "finance",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/prameshwealth.webp",
    gradient: "from-teal-500 to-emerald-700",
    shortDesc: "Modern website for a wealth-management firm offering mutual funds, insurance, and portfolio management",
    fullDesc: "prameshwealth.com is the digital presence for Pramesh Wealth Pvt Ltd — a financial services firm registered as a corporate mutual fund distributor (AMFI), insurance corporate agent (IRDAI), and for portfolio management services (APMI) — built to establish trust and convert visitors into clients.",
    detailedDesc: "Anant Soft Computing built Pramesh Wealth a clean, trust-first website that communicates the firm's regulatory credentials, explains its wealth-management offerings across mutual funds, insurance, and portfolio management, and gives prospective investors a clear path to get in touch and begin their financial journey.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Firebase"],
    features: [
      "Service pages for mutual funds, insurance, and portfolio management",
      "Prominent display of AMFI, IRDAI, and APMI registrations for trust",
      "Investor education and resources content",
      "Lead-capture and consultation enquiry forms",
      "Clean, professional, finance-appropriate visual design",
      "Mobile-first responsive layout",
      "SEO-friendly structure for financial-services search terms",
    ],
    results: [
      "Trust-first presence highlighting regulatory credentials",
      "Clear presentation of mutual fund, insurance, and PMS offerings",
      "Consultation enquiry funnel for prospective investors",
      "Professional, mobile-first design appropriate to financial services",
    ],
    liveLink: "https://www.prameshwealth.com",
    githubLink: "",
    stat1Label: "Registrations", stat1Value: "AMFI · IRDAI · APMI",
    stat2Label: "Services", stat2Value: "3",
    stat3Label: "Focus", stat3Value: "Wealth Management",
    problemStatement: "In financial services, trust is everything — and trust online is built or lost in seconds. Pramesh Wealth holds the credentials that matter (AMFI corporate mutual fund distributor, IRDAI insurance corporate agent, and APMI for portfolio management services), but needed a website that conveyed that credibility instantly, explained its range of offerings clearly to prospective investors, and turned interest into qualified consultation enquiries. A generic or dated presence would undermine confidence in a sector where clients are entrusting their savings.",
    ourApproach: "We designed the site to lead with trust. Regulatory registrations and credentials are surfaced prominently, because in wealth management they are the single strongest conversion signal. We organised the offering into clear service areas — mutual funds, insurance, and portfolio management — so visitors can quickly find what's relevant to them, and added investor-education content to demonstrate expertise. The visual design is deliberately clean and professional, appropriate to financial services, with every page guiding the visitor toward a consultation enquiry.",
    solutionDelivered: "We delivered a modern, mobile-first website with dedicated service pages for mutual funds, insurance, and portfolio management; prominent display of the firm's AMFI, IRDAI, and APMI registrations; investor education and resources content; consultation and lead-capture enquiry forms; and an SEO-friendly structure to help the firm surface for relevant financial-services searches — all wrapped in a clean, trust-first visual design.",
    caseStudyOutcome: "Pramesh Wealth now has a digital presence that earns trust on first impression — leading with the regulatory credentials that matter most in financial services, clearly presenting its mutual fund, insurance, and portfolio-management offerings, and giving prospective investors a straightforward path to a consultation. The result is a professional front door that converts interest into qualified enquiries. [Add measured enquiry or client-acquisition outcomes once tracked.]",
    featured: false,
  },
 
  {
    title: "Thakkar Auctioneer",
    category: "realestate",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/thakkarauctioneer.webp",
    gradient: "from-amber-500 to-orange-700",
    shortDesc: "Real-estate and auction-services website for a Mumbai and Vadodara property specialist",
    fullDesc: "thakkarauctioneer.com is the digital presence for Thakkar Auctioneer & Realtors Pvt. Ltd. — an auctioneer, real-estate consultant, and solution provider for banks with expertise in Court Receiver and Debt Recovery Tribunal matters.",
    detailedDesc: "Anant Soft Computing built a responsive real-estate platform that presents Thakkar Auctioneer's auction and property expertise, highlights verified Mumbai property listings, supports advanced search by location, property type, BHK, budget, and area, and routes enquiries through a structured lead form.",
    technologies: ["Next.js", "React", "Tailwind CSS", "SEO Schema"],
    features: [
      "Real-estate landing page focused on Mumbai property discovery",
      "Advanced property search by location, type, BHK, budget, and area",
      "Property enquiry flow covering apartments, villas, penthouses, studios, and commercial spaces",
      "SEO metadata and structured business schema for local discovery",
      "Prominent contact details for Mumbai and Vadodara offices",
      "Trust-building sections for verified listings, pricing clarity, and client support",
      "Responsive navigation, footer, and quick-enquiry experience",
    ],
    results: [
      "500+ properties positioned through the public-facing platform",
      "1000+ client trust signal highlighted on the website",
      "15+ years of experience surfaced clearly for credibility",
      "Property enquiries routed into a structured contact flow",
    ],
    liveLink: "https://thakkarauctioneer.com",
    githubLink: "",
    stat1Label: "Properties", stat1Value: "500+",
    stat2Label: "Clients", stat2Value: "1000+",
    stat3Label: "Experience", stat3Value: "15+ Years",
    problemStatement: "Thakkar Auctioneer & Realtors needed a professional digital presence that could communicate two sides of the business at once: premium real-estate discovery for buyers and specialist auction services for banks, legal entities, and property owners. Their credibility as an Ex: Court Receiver and Debt Recovery Tribunal specialist had to be visible, while buyers also needed a simple way to search properties and send enquiries.",
    ourApproach: "We structured the website around trust and discoverability. The homepage leads with property search and clear Mumbai positioning, while the about and footer content establish the firm's auction background, bank-solution-provider role, Mumbai and Vadodara presence, and years of experience. We designed the flow so visitors can move from broad property discovery into a quick enquiry without friction.",
    solutionDelivered: "We delivered a Next.js real-estate website with responsive navigation, advanced property filters, popular-search shortcuts, verified-listing trust sections, office and contact details, SEO metadata, local business schema, and a quick enquiry form for property-interest capture. The site presents Thakkar Auctioneer as both a property-discovery platform and a specialist auction and real-estate advisory firm.",
    caseStudyOutcome: "The finished website gives Thakkar Auctioneer a credible public front door for buyers, banks, and legal/property clients. It surfaces key trust signals — 500+ properties, 1000+ happy clients, and 15+ years of experience — while giving visitors a practical way to search by location, property type, BHK, budget, and area, then enquire directly through a structured form.",
    featured: false,
  },
 
  {
    title: "Horizon Edu Consulting LLC",
    category: "education",
    image: "https://anantsoftcomputing.com/media/portfolio/projects/gallery/horizonfellc.webp",
    gradient: "from-sky-500 to-blue-700",
    shortDesc: "Consulting website for helping higher-education institutions expand into international markets",
    fullDesc: "horizonfellc.com is the digital presence for Horizon Edu Consulting LLC — a consulting and launchpad-services firm that helps higher-education institutions enter emerging international markets through research, representation, staffing, and operational support.",
    detailedDesc: "Anant Soft Computing built Horizon Edu Consulting LLC a polished one-page website that explains its global education-market expansion offer, presents founder Jagat Patel's two-decade overseas-education background, highlights target markets, and routes institutional enquiries through a direct contact path.",
    technologies: ["HTML", "CSS", "JavaScript", "EmailJS"],
    features: [
      "One-page navigation for About Us, Services, Our Approach, Founder, and Contact",
      "Clear positioning for international higher-education market expansion",
      "Country-market highlights including Canada, Australia, UK, United States, Germany, and France",
      "Service sections for staff recruitment, research and assessment, and in-country representation",
      "Founder profile for Jagat Patel and his overseas-education background",
      "Testimonial-style sections describing market analysis, recruitment, operations, and digital outreach",
      "EmailJS-powered contact path for institutional enquiries",
    ],
    results: [
      "Clear explanation of Horizon's role as an on-ground office for partner institutions",
      "Founder credibility surfaced through 20+ years of education-industry experience",
      "Services organised around research, representation, compliance, recruitment, and operational management",
      "Direct enquiry path for institutions exploring global expansion",
    ],
    liveLink: "https://horizonfellc.com",
    githubLink: "",
    stat1Label: "Founder Exp.", stat1Value: "20+ Years",
    stat2Label: "Target Markets", stat2Value: "6",
    stat3Label: "Services", stat3Value: "3 Core",
    problemStatement: "Horizon Edu Consulting LLC serves higher-education institutions that want to expand internationally, but that proposition is complex: universities need to understand local markets, recruit capable in-country staff, comply with local financial and tax expectations, build brand visibility, and manage operations without immediately setting up a full regional office.",
    ourApproach: "We shaped the website around Horizon's core promise: acting as a trusted local partner and on-ground office for institutions entering emerging markets. The content architecture introduces the mission first, then supports it with founder credibility, target-market context, service pillars, and testimonial-style proof points around student recruitment, market analysis, local representation, staffing, and outreach.",
    solutionDelivered: "We delivered a responsive one-page website with section navigation, a strong hero message, about and mission copy, market highlights for major destination regions, service cards for staff recruitment recommendation, research and assessment, and in-country representation, a founder profile for Jagat Patel, testimonials, and an email-based enquiry flow.",
    caseStudyOutcome: "The site gives Horizon Edu Consulting LLC a focused business-development platform for institutional partners. It turns a broad consulting offer into a clear global-expansion story, shows why the founder is credible in overseas education, and gives universities a simple path to start a conversation about research, in-country representation, recruitment, and operational management.",
    featured: false,
  },
];

export const PROJECT_SEED_COUNT = ALL_PROJECTS.length;

function normalizeProjectKey(value) {
  return String(value || '')
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/^www\./, '')
    .replace(/\/$/, '');
}

function getProjectKeys(project) {
  return [
    normalizeProjectKey(project.title),
    normalizeProjectKey(project.liveLink),
  ].filter(Boolean);
}

export async function seedProjects() {
  const results = { success: 0, skipped: 0, failed: 0, errors: [] };
  const existingResult = await projectAPI.getAll();

  if (!existingResult.success) {
    return {
      ...results,
      failed: ALL_PROJECTS.length,
      errors: [{ title: 'Project seed check', error: existingResult.error }],
    };
  }

  const existingKeys = new Set();
  existingResult.data.forEach((project) => {
    getProjectKeys(project).forEach((key) => existingKeys.add(key));
  });

  for (const project of ALL_PROJECTS) {
    const projectKeys = getProjectKeys(project);
    const alreadyExists = projectKeys.some((key) => existingKeys.has(key));

    if (alreadyExists) {
      results.skipped++;
      continue;
    }

    const result = await projectAPI.create(project);
    if (result.success) {
      results.success++;
      projectKeys.forEach((key) => existingKeys.add(key));
    } else {
      results.failed++;
      results.errors.push({ title: project.title, error: result.error });
    }
  }

  return results;
}
