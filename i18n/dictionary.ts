export type Lang = "en" | "ar";

export const dictionary = {
  en: {
    nav: {
      services: "What we do",
      work: "Our work",
      process: "Process",
      contact: "Contact",
      cta: "Start a project",
      menu: "Menu",
      close: "Close",
    },

    hero: {
      eyebrow: "Founder-led studio · United Arab Emirates",
      titleLines: [
        "Digital presence for GCC brands",
        "that refuse to look ordinary.",
      ],
      sub: "Premium websites, brand systems, and launch assets — built by an Emirati-led studio for ambitious hospitality, beauty, retail, and real estate businesses across the GCC.",
      ctaPrimary: "Book your strategy call",
      ctaSecondary: "Get your site audited",
      meta: [
        "UAE-based",
        "GCC-focused",
        "Bilingual EN / AR",
      ],
    },

    trust: {
      eyebrow: "How we work",
      title: "Premium delivery, without the agency overhead.",
      items: [
        {
          title: "Founder-led, based in the UAE",
          body: "You work directly with the studio lead. No account chains, no handoffs — local context, regional sensibility.",
        },
        {
          title: "Bilingual by design",
          body: "Native English and Arabic — written, designed, and considered for both audiences from the first sketch.",
        },
        {
          title: "No outsourcing",
          body: "Every asset is designed and built in-studio. No subcontracting, no offshoring — just the studio's hand on the work.",
        },
        {
          title: "Transparent starting points",
          body: "Clear starting points listed openly on this site. Final commercial terms are defined during project scoping, not implied here.",
        },
        {
          title: "Limited capacity for quality control",
          body: "A small number of engagements at a time. Each one receives the studio's full focus.",
        },
        {
          title: "Scoped, not improvised",
          body: "Deliverables and timelines agreed in writing before we start. Scope, milestones, and revisions are defined during scoping — never assumed.",
        },
      ],
      drift: [
        "Brand strategy",
        "Visual identity",
        "Editorial websites",
        "Campaign creative",
        "Bilingual delivery",
        "Launch direction",
        "Premium content",
        "Founder-led execution",
      ],
    },

    services: {
      eyebrow: "What we do",
      title: "Five clear offerings. One standard.",
      sub: "Premium, understandable, and built for UAE businesses. Clear starting points. Transparent pricing.",
      pricePrefix: "from",
      currency: "AED",
      customLabel: "Custom quote",
      availableLabel: "Available after scoping",
      includesLabel: "Includes",
      tierLabel: "Tier",
      items: [
        {
          n: "01",
          tag: "Identity",
          title: "Brand Identity",
          summary: "Craft a visual identity your audience remembers.",
          tiers: [
            {
              name: "Starting Package",
              price: "1,500",
              position: "Essential brand identity foundation.",
              includes: [
                "Custom logo concept",
                "Color palette",
                "Typography direction",
                "Mini brand guideline",
                "Basic brand assets",
              ],
            },
            {
              name: "Premium Upsells",
              price: "",
              position: "Expand your identity system.",
              includes: [
                "Business cards",
                "Packaging design",
                "Full brand systems",
                "Social templates",
                "Advanced brand guidelines",
              ],
            },
          ],
        },
        {
          n: "02",
          tag: "Web",
          title: "Website Design",
          summary: "Premium digital experiences designed to convert.",
          tiers: [
            {
              name: "Starting Package",
              price: "2,500",
              position: "Premium responsive website foundation.",
              includes: [
                "Premium responsive website",
                "Mobile optimization",
                "WhatsApp/contact integration",
                "Clean premium UI",
                "Basic multi-section structure",
              ],
            },
            {
              name: "Premium Upsells",
              price: "",
              position: "Enhance your digital presence.",
              includes: [
                "Arabic + English bilingual",
                "Booking systems",
                "Advanced animations",
                "Additional pages",
                "Landing pages",
                "Copywriting",
                "CMS integration",
              ],
            },
          ],
        },
        {
          n: "03",
          tag: "Trust",
          title: "Trust & Credibility",
          summary: "Build confidence before the first conversation.",
          tiers: [
            {
              name: "Starting Package",
              price: "1,200",
              position: "Trust-focused design enhancements.",
              includes: [
                "Trust-focused design enhancements",
                "Google Business profile polish",
                "Testimonial/credibility section setup",
                "Contact clarity improvements",
                "Trust signal enhancements",
              ],
            },
            {
              name: "Premium Upsells",
              price: "",
              position: "Strengthen your credibility.",
              includes: [
                "Review generation assets",
                "Trust collateral",
                "Certification display design",
                "Full credibility audit",
              ],
            },
          ],
        },
        {
          n: "04",
          tag: "Sales",
          title: "Sales Materials",
          summary: "Professional materials that help your business sell with confidence.",
          tiers: [
            {
              name: "Starting Package",
              price: "900",
              position: "Choose one premium sales material.",
              includes: [
                "Company profile",
                "Proposal template",
                "Brochure",
                "Pitch deck",
                "Capability deck",
              ],
            },
            {
              name: "Premium Upsells",
              price: "",
              position: "Expand your materials toolkit.",
              includes: [
                "Additional pages",
                "Bilingual versions",
                "Premium presentation design",
                "Presentation animations",
                "Multi-document packages",
              ],
            },
          ],
        },
        {
          n: "05",
          tag: "Campaign",
          title: "Campaign Creative",
          summary: "Creative campaigns designed to capture attention.",
          tiers: [
            {
              name: "Starting Package",
              price: "1,000",
              position: "Essential campaign creative assets.",
              includes: [
                "Campaign concept",
                "Promo visual design",
                "Ad creative asset(s)",
              ],
            },
            {
              name: "Premium Upsells",
              price: "",
              position: "Expand your campaign.",
              includes: [
                "Multiple creatives",
                "Campaign bundles",
                "Bilingual campaign assets",
                "Motion/video assets",
                "Launch campaign packages",
              ],
            },
          ],
        },
      ],
    },

    showcase: {
      eyebrow: "Our work",
      title: "Studio capability studies.",
      sub: "Creative explorations demonstrating how we think, execute, and position premium brands.",
      tag: "Studio capability",
      note: "These internal concept studies demonstrate our approach to premium brand execution. No commissioned client work is represented.",
      deliverablesLabel: "Deliverables",
      sectorLabel: "Sector",
      items: [
        {
          title: "Boutique Hospitality Experience",
          sector: "Hotels · Lounges · Hospitality",
          deliverables: ["Brand identity", "Website concept", "Social direction"],
          mockup: "hospitality",
        },
        {
          title: "Premium Restaurant Launch",
          sector: "Restaurants · Cafés",
          deliverables: ["Identity", "Menu system", "Launch campaign"],
          mockup: "restaurant",
        },
        {
          title: "Luxury Beauty Launch",
          sector: "Skincare · Beauty · Fragrance",
          deliverables: ["Identity", "Packaging concept", "Campaign visuals"],
          mockup: "beauty",
        },
        {
          title: "Real Estate Sales Experience",
          sector: "Real estate · Residences",
          deliverables: ["Brand system", "Web flow", "Campaign assets"],
          mockup: "realestate",
        },
      ],
    },

    process: {
      eyebrow: "Process",
      title: "How we work.",
      sub: "Five steps from first conversation to launch. Clear scope at every stage — no surprises between brief and delivery.",
      steps: [
        { n: "01", title: "Brand review", body: "We open with a short, structured review of your business, audience, and ambition." },
        { n: "02", title: "Scoping", body: "Positioning, deliverables, and timeline — agreed in writing before any execution begins." },
        { n: "03", title: "Design", body: "Typography, motion, words, and image — every detail considered, every decision intentional." },
        { n: "04", title: "Refine", body: "We tighten and polish at agreed checkpoints until the work feels effortless." },
        { n: "05", title: "Launch", body: "We bring the work to market — and support what comes after." },
      ],
    },

    audit: {
      eyebrow: "Private Brand Review",
      title: "A short brand review to start.",
      sub: "Five questions that give the studio the context we need to respond well. Submitted only when you choose to continue.",
      stepLabel: "Step",
      of: "of",
      back: "Back",
      next: "Continue",
      start: "Begin",
      restart: "Start over",
      summaryTitle: "Your direction",
      summarySub: "A clean summary of what you shared. We'll respond on your preferred channel within one working day.",
      continue: {
        whatsapp: "Continue on WhatsApp",
        email: "Send Inquiry",
        phone: "Submit Inquiry",
        fallback: "Send the review",
      },
      handoffIntro: "Hello ManageFlow,",
      handoffSubject: "Private Brand Review · ManageFlow",
      phoneCallbackNote: "Phone callback requested.",
      synthesisLead: "Based on your answers, your engagement likely starts with",
      labels: {
        businessType: "Business",
        link: "Presence",
        goal: "Goal",
        services: "Interests",
        contact: "Preferred contact",
      },
      questions: [
        {
          key: "businessType",
          question: "What kind of business are you?",
          helper: "A rough category is enough.",
          type: "single",
          options: [
            "Restaurant or café",
            "Hospitality",
            "Retail or boutique",
            "Beauty & wellness",
            "Real estate",
            "Professional services",
            "Other",
          ],
        },
        {
          key: "link",
          question: "Share your website or social handle.",
          helper: "Optional — helps us see where you are today.",
          placeholder: "yoursite.com or @your-handle",
          type: "text",
          skipLabel: "Skip — we don't have one yet",
        },
        {
          key: "goal",
          question: "What's the main thing you want to do next?",
          helper: "Pick the closest fit.",
          type: "single",
          options: [
            "Launch a new business",
            "Open a restaurant or venue",
            "Refine or rebrand an existing brand",
            "Build a new website",
            "Run a campaign or seasonal push",
            "Strengthen our brand presence",
          ],
        },
        {
          key: "services",
          question: "Which of our offerings interest you?",
          helper: "Pick more than one if relevant.",
          type: "multi",
          options: [
            "Website Systems",
            "Brand Identity",
            "Campaign Creative",
            "Social Content & Brand Presence",
          ],
        },
        {
          key: "contact",
          question: "How would you like us to follow up?",
          helper: "We'll respect your choice — and reach out within one working day.",
          type: "single",
          options: ["WhatsApp", "Email", "Phone"],
        },
      ],
    },

    faq: {
      eyebrow: "Client questions",
      title: "Working with the studio.",
      sub: "Practical answers to the questions we hear most often. Anything else, send us a brief.",
      items: [
        {
          q: "How do we begin?",
          a: "Send a brief through the contact section, or request a Private Brand Review. We respond within one working day with the next steps.",
        },
        {
          q: "Do you work with all businesses?",
          a: "We focus on premium hospitality, restaurants, beauty and wellness, real estate, and ambitious founder-led businesses across the UAE and the wider GCC. For projects outside that range, get in touch — we'll be honest about whether the studio is the right fit.",
        },
        {
          q: "Do you offer Arabic delivery?",
          a: "Yes. Bilingual EN/AR is the studio default. Both languages are written and designed together from the first sketch — never added on at the end.",
        },
        {
          q: "How are projects scoped?",
          a: "Each project opens with a Private Brand Review. From there we agree on scope and deliverables before any work begins. Commercial terms are defined during scoping, not implied on this page.",
        },
        {
          q: "Can you refine an existing brand?",
          a: "Often. We work as much with refinement and rebrands as with first-time launches. A Private Brand Review is the cleanest way to assess whether a refinement, evolution, or full rebrand is the right path.",
        },
        {
          q: "Do you support ongoing retainers?",
          a: "Yes. Ongoing content and brand presence support is available for select clients after a project completes and the system is established. Available after scoping.",
        },
      ],
    },

    contact: {
      eyebrow: "Contact",
      title: "Start a project.",
      sub: "Send us a brief, or reach the studio on a direct channel. We respond within one working day.",
      methodsTitle: "Direct channels",
      formTitle: "Send a brief",
      signals: [
        "Response within 24h",
        "UAE business hours (GMT+4)",
        "Bilingual EN / AR",
        "Founder-led execution",
      ],
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "Phone",
      form: {
        name: "Your name",
        company: "Company (optional)",
        message: "Tell us about your brand or project",
        submit: "Send brief",
        submitNote: "Opens in your email client",
        privacy: "Your details open in your email client. Nothing is stored on this site.",
        trustNote: "We review every inquiry personally and typically respond within one working day.",
        subject: "New project brief · manageflow.ae",
      },
    },

    footer: {
      tagline: "Founder-led boutique digital studio. United Arab Emirates.",
      rights: "All rights reserved.",
      navTitle: "Navigate",
      contactTitle: "Contact",
      studioTitle: "Studio",
      handcrafted: "Handcrafted in the UAE.",
      humanTouch: "Working directly with founders and operators who care about details, positioning, and digital trust.",
    },

    floatingWhats: "WhatsApp",

    strategyConcierce: {
      eyebrow: "AI Strategy Concierge",
      title: "Chat with a premium digital strategist.",
      subtitle: "Get personalized insights in 2 minutes. No forms, no wait.",
      greeting: "Hi! I'm ManageFlow's strategy concierge. Let me understand your business.",
      quickOptions: [
        "Website Design",
        "Brand Identity",
        "Trust & Credibility",
        "Sales Materials",
        "Campaign Creative",
        "Pricing",
        "Book a Call"
      ],
      questions: {
        business: "What type of business do you run?",
        goal: "What's your main goal right now?",
        bilingual: "Do you need Arabic + English?",
        timeline: "What's your timeline?"
      },
      followUpOptions: {
        goal: ["Build a website", "Refresh branding", "Build trust & credibility", "Create sales materials", "Develop campaign creative"],
        timeline: ["Urgent (2-4 weeks)", "Standard (4-8 weeks)", "Flexible (whenever)"]
      },
      summary: "Here's what I understand...",
      ctaPrimary: "Chat on WhatsApp",
      ctaSecondary: "Book 45-min strategy session"
    },

    websiteAudit: {
      eyebrow: "Free Website Audit",
      title: "Get a free audit of your website.",
      subtitle: "See what's working, what's not, and what to fix next.",
      inputPlaceholder: "Enter your website URL (e.g., yoursite.com)",
      submitButton: "Get Audit",
      scanningSteps: [
        "Reviewing brand impression...",
        "Checking UX clarity...",
        "Checking conversion flow...",
        "Reviewing Arabic/English readiness...",
        "Checking trust signals..."
      ],
      resultTitle: "Your Website Audit Results",
      scoreLabels: [
        "Brand Presence",
        "User Experience",
        "Conversion Readiness",
        "Trust & Credibility",
        "Content Clarity"
      ],
      recommendations: "Key areas to improve:",
      cta: "Send us your website for a real human review"
    },

    pricingConfigurator: {
      eyebrow: "Pricing Estimator",
      title: "Estimate your project cost.",
      subtitle: "Transparent, flexible pricing based on your scope.",
      services: [
        { label: "Website Design", description: "Premium responsive business websites" },
        { label: "Brand Identity", description: "Logo, visual system, brand foundations" },
        { label: "Trust & Credibility", description: "Trust signals, credibility upgrades" },
        { label: "Sales Materials", description: "Company profiles, proposals, decks" },
        { label: "Campaign Creative", description: "Campaign concepts and creative assets" }
      ],
      options: {
        bilingual: "Bilingual (EN/AR)",
        urgency: "Urgency level"
      },
      estimatedInvestment: "Estimated investment:",
      disclaimer: "Final pricing depends on scope after consultation.",
      cta: "Book your 45-minute strategy session"
    },

    whyManageFlow: {
      eyebrow: "Why choose ManageFlow",
      title: "Built for your success",
      sub: "We're not a generic agency. Here's what makes us different.",
      items: [
        {
          title: "Built for UAE businesses",
          description: "Designed specifically for GCC brands and local context. We understand your market."
        },
        {
          title: "Premium-first execution",
          description: "Every deliverable reflects luxury standards. No shortcuts, no compromise on quality."
        },
        {
          title: "Transparent starting pricing",
          description: "Clear price points. No hidden costs. Final quotes depend on scope during consultation."
        },
        {
          title: "Bilingual-ready solutions",
          description: "English and Arabic considered equally from concept. Both languages feel native."
        },
        {
          title: "Founder-led creative direction",
          description: "The studio lead works directly on your project. Your work gets personal attention."
        },
        {
          title: "Fast, focused delivery",
          description: "Limited capacity means your project is a priority. Scoped timelines, defined milestones."
        }
      ]
    },

    beforeAfter: {
      eyebrow: "Concept Transformations",
      title: "Concept transformations. Real potential.",
      subtitle: "Hover to explore what's possible.",
      scenarios: [
        { label: "Brand Identity", description: "From weak to memorable" },
        { label: "Website Design", description: "From outdated to premium" },
        { label: "Trust & Credibility", description: "From weak to confident" },
        { label: "Sales Materials", description: "From amateur to professional" },
        { label: "Campaign Creative", description: "From forgettable to premium" }
      ]
    },
  },

  ar: {
    nav: {
      services: "ما نقدّمه",
      work: "أعمالنا",
      process: "أسلوب العمل",
      contact: "تواصل",
      cta: "ابدأ مشروعك",
      menu: "القائمة",
      close: "إغلاق",
    },

    hero: {
      eyebrow: "استوديو يقوده مؤسّسه · الإمارات العربية المتحدة",
      titleLines: [
        "حضور رقمي لعلامات الخليج",
        "التي ترفض أن تبدو عادية.",
      ],
      sub: "مواقع راقية، أنظمة هويات، وأصول إطلاق — من استوديو يقوده مؤسّس إماراتي للأعمال الطموحة في الضيافة، التجميل، التجزئة، والعقارات في الخليج.",
      ctaPrimary: "احجز استشارة استراتيجية",
      ctaSecondary: "قيّم موقعك",
      meta: [
        "مقرّنا في الإمارات",
        "تركيزنا على الخليج",
        "بلغتين EN / AR",
      ],
    },

    trust: {
      eyebrow: "كيف نعمل",
      title: "تنفيذ راقٍ، بلا أعباء وكالات.",
      items: [
        {
          title: "يقوده مؤسّسه، من الإمارات",
          body: "تتواصل مباشرة مع قائد الاستوديو. لا سلاسل حسابات ولا تسليمات — سياق محلي، حسّ خليجي.",
        },
        {
          title: "بلغتين منذ البداية",
          body: "العربية والإنجليزية معاً — كتابةً، تصميماً، وتفكيراً، لكلا الجمهورين منذ أول رسمة.",
        },
        {
          title: "بلا إسناد خارجي",
          body: "كل عمل يُصمَّم ويُنفَّذ داخل الاستوديو. لا تعهيد ولا عمل خارجي — يدُ الاستوديو على كل التفاصيل.",
        },
        {
          title: "نقاط بداية شفافة",
          body: "نقاط بداية واضحة على هذا الموقع. الشروط التجارية النهائية تُحدَّد أثناء تحديد المشروع، لا تُفترض هنا.",
        },
        {
          title: "طاقة محدودة للحفاظ على الجودة",
          body: "عدد قليل من المشاريع في وقت واحد. كل مشروع يحظى بكامل تركيز الاستوديو.",
        },
        {
          title: "نطاق محدّد، لا ارتجال",
          body: "تسليمات وجداول زمنية متّفق عليها كتابةً قبل البدء. النطاق، المراحل، والمراجعات تُحدَّد أثناء التحديد — لا تُفترض.",
        },
      ],
      drift: [
        "استراتيجية العلامة",
        "الهوية البصرية",
        "مواقع راقية",
        "إبداع الحملات",
        "تنفيذ بلغتين",
        "إخراج الإطلاق",
        "محتوى راقٍ",
        "تنفيذ بقيادة المؤسّس",
      ],
    },

    services: {
      eyebrow: "ما نقدّمه",
      title: "خمس خدمات واضحة. مستوى واحد لا يتغير.",
      sub: "راقي، واضح، مصمّم للعلامات الإماراتية والخليجية. خيارات بداية واضحة. أسعار شفافة.",
      pricePrefix: "من",
      currency: "درهم",
      customLabel: "سعر مخصّص",
      availableLabel: "متاح بعد التحديد",
      includesLabel: "تشمل",
      tierLabel: "المستوى",
      items: [
        {
          n: "٠١",
          tag: "هوية",
          title: "الهوية البصرية",
          summary: "هوية بصرية لا تُنسى.",
          tiers: [
            {
              name: "الحزمة الأساسية",
              price: "١,٥٠٠",
              position: "أساس الهوية البصرية.",
              includes: [
                "تصميم شعار مخصّص",
                "لوحة ألوان",
                "توجيه الطباعة",
                "دليل هوية مصغّر",
                "أصول هوية أساسية",
              ],
            },
            {
              name: "إضافات مميزة",
              price: "",
              position: "وسّع نظام هويتك.",
              includes: [
                "بطاقات عمل",
                "تصميم العبوة",
                "أنظمة هوية متكاملة",
                "قوالب وسائل تواصل",
                "أدلة هوية متقدّمة",
              ],
            },
          ],
        },
        {
          n: "٠٢",
          tag: "ويب",
          title: "تصميم الموقع",
          summary: "تجارب رقمية راقية مصمّمة للتحويل.",
          tiers: [
            {
              name: "الحزمة الأساسية",
              price: "٢,٥٠٠",
              position: "أساس الموقع الراقي المتجاوب.",
              includes: [
                "موقع راقٍ متجاوب",
                "تحسين الموبايل",
                "تكامل واتساب والتواصل",
                "واجهة مستخدم راقية نظيفة",
                "بنية متعدّدة أقسام أساسية",
              ],
            },
            {
              name: "إضافات مميزة",
              price: "",
              position: "عزّز وجودك الرقمي.",
              includes: [
                "عربي وإنجليزي ثنائي اللغة",
                "أنظمة حجز",
                "رسوم متحركة متقدّمة",
                "صفحات إضافية",
                "صفحات هبوط",
                "كتابة نصوص",
                "تكامل إدارة المحتوى",
              ],
            },
          ],
        },
        {
          n: "٠٣",
          tag: "ثقة",
          title: "الثقة والمصداقية",
          summary: "بناء الثقة قبل أول محادثة.",
          tiers: [
            {
              name: "الحزمة الأساسية",
              price: "١,٢٠٠",
              position: "تحسينات تصميم تركّز على الثقة.",
              includes: [
                "تحسينات تصميم تركّز على الثقة",
                "تحسين ملف Google Business",
                "إعداد قسم شهادات والمصداقية",
                "تحسينات وضوح التواصل",
                "تحسينات إشارات الثقة",
              ],
            },
            {
              name: "إضافات مميزة",
              price: "",
              position: "قوّ مصداقيتك.",
              includes: [
                "أصول توليد التقييمات",
                "تدرجات الثقة",
                "تصميم عرض الشهادات",
                "تدقيق مصداقية متكامل",
              ],
            },
          ],
        },
        {
          n: "٠٤",
          tag: "مبيعات",
          title: "المواد التسويقية",
          summary: "مواد احترافية تساعد عملك على البيع بثقة.",
          tiers: [
            {
              name: "الحزمة الأساسية",
              price: "٩٠٠",
              position: "اختر مادة تسويقية مميزة واحدة.",
              includes: [
                "ملف الشركة",
                "قالب العرض",
                "الكتيب",
                "عرض الملعب",
                "عرض الكفاءات",
              ],
            },
            {
              name: "إضافات مميزة",
              price: "",
              position: "وسّع أدوات مواد التسويق.",
              includes: [
                "صفحات إضافية",
                "نسخ ثنائية اللغة",
                "تصميم عرض تقديمي مميز",
                "رسوم عرض تقديمي",
                "حزم وثائق متعدّدة",
              ],
            },
          ],
        },
        {
          n: "٠٥",
          tag: "حملات",
          title: "إبداع الحملات",
          summary: "حملات إبداعية مصمّمة لتجذب الانتباه.",
          tiers: [
            {
              name: "الحزمة الأساسية",
              price: "١,٠٠٠",
              position: "أصول حملة إبداعية أساسية.",
              includes: [
                "مفهوم الحملة",
                "تصميم صورة ترويجية",
                "أصول إبداعية إعلانية",
              ],
            },
            {
              name: "إضافات مميزة",
              price: "",
              position: "وسّع حملتك.",
              includes: [
                "إبداعيات متعدّدة",
                "حزم حملات",
                "أصول حملة ثنائية اللغة",
                "أصول حركة وفيديو",
                "حزم حملات إطلاق",
              ],
            },
          ],
        },
      ],
    },

    showcase: {
      eyebrow: "أعمالنا",
      title: "دراسات قدرات الاستوديو.",
      sub: "استكشافات إبداعية تُظهر كيف نفكّر ننفّذ، ونضع العلامات الراقية.",
      tag: "قدرات الاستوديو",
      note: "هذه الدراسات المفاهيمية الداخلية تُظهر نهجنا في تنفيذ العلامات الراقية. لا تمثّل أعمالاً موكّلة حقيقية.",
      deliverablesLabel: "العناصر",
      sectorLabel: "القطاع",
      items: [
        {
          title: "تجربة ضيافة بوتيكية",
          sector: "فنادق · صالات · ضيافة",
          deliverables: ["هوية بصرية", "مفهوم موقع", "إخراج سوشيال"],
          mockup: "hospitality",
        },
        {
          title: "إطلاق مطعم راقٍ",
          sector: "مطاعم · مقاهٍ",
          deliverables: ["هوية", "نظام قائمة", "حملة إطلاق"],
          mockup: "restaurant",
        },
        {
          title: "إطلاق منتج تجميل فاخر",
          sector: "عناية بالبشرة · تجميل · عطور",
          deliverables: ["هوية", "مفهوم تغليف", "أصول حملة"],
          mockup: "beauty",
        },
        {
          title: "تجربة مبيعات عقارية",
          sector: "عقارات · سكني",
          deliverables: ["نظام علامة", "تدفق ويب", "أصول حملة"],
          mockup: "realestate",
        },
      ],
    },

    process: {
      eyebrow: "أسلوب العمل",
      title: "كيف نعمل.",
      sub: "خمس خطوات من أول محادثة حتى الإطلاق. نطاق واضح في كل مرحلة — لا مفاجآت بين الموجز والتسليم.",
      steps: [
        { n: "٠١", title: "مراجعة العلامة", body: "نبدأ بمراجعة موجزة ومنظّمة لنشاطك، جمهورك، وطموحك." },
        { n: "٠٢", title: "التحديد", body: "الموقع، التسليمات، والجدول الزمني — متّفق عليه كتابةً قبل أي تنفيذ." },
        { n: "٠٣", title: "التصميم", body: "كل تفصيل مدروس: الطباعة، الحركة، الكلمة، الصورة." },
        { n: "٠٤", title: "الصقل", body: "نُحرّر ونصقل عند نقاط متّفق عليها حتى يبدو كل شيء بسيطاً وطبيعياً." },
        { n: "٠٥", title: "الإطلاق", body: "نُخرج العمل إلى السوق — وندعم ما يأتي بعده." },
      ],
    },

    audit: {
      eyebrow: "مراجعة علامة خاصة",
      title: "مراجعة موجزة لعلامتك.",
      sub: "خمسة أسئلة تمنح الاستوديو السياق الذي نحتاجه للرد جيداً. لا تُرسَل إلا عندما تختار المتابعة.",
      stepLabel: "خطوة",
      of: "من",
      back: "السابق",
      next: "متابعة",
      start: "ابدأ",
      restart: "ابدأ من جديد",
      summaryTitle: "اتجاهك",
      summarySub: "ملخّص واضح لما شاركته. سنرد عبر القناة المفضّلة لديك خلال يوم عمل واحد.",
      continue: {
        whatsapp: "تابع على واتساب",
        email: "أرسل الاستفسار",
        phone: "أرسل الطلب",
        fallback: "أرسل المراجعة",
      },
      handoffIntro: "السلام عليكم ManageFlow،",
      handoffSubject: "مراجعة علامة خاصة · ManageFlow",
      phoneCallbackNote: "العميل يطلب اتصالاً هاتفياً.",
      synthesisLead: "استناداً إلى إجاباتك، أنسب بداية لك على الأرجح هي",
      labels: {
        businessType: "النشاط",
        link: "الحضور",
        goal: "الهدف",
        services: "الاهتمامات",
        contact: "وسيلة التواصل المفضّلة",
      },
      questions: [
        {
          key: "businessType",
          question: "ما طبيعة نشاطك؟",
          helper: "تصنيف عام يكفي.",
          type: "single",
          options: [
            "مطعم أو مقهى",
            "ضيافة وفنادق",
            "تجزئة أو بوتيك",
            "تجميل وعافية",
            "عقارات",
            "خدمات احترافية",
            "آخر",
          ],
        },
        {
          key: "link",
          question: "شارك موقعك أو حسابك على السوشيال.",
          helper: "اختياري — يساعدنا في فهم وضعك الحالي.",
          placeholder: "yoursite.com أو @your-handle",
          type: "text",
          skipLabel: "تخطّي — لا يوجد لدينا حالياً",
        },
        {
          key: "goal",
          question: "ما الشيء الأهم الذي تريد فعله الآن؟",
          helper: "اختر الأقرب إلى أولويتك.",
          type: "single",
          options: [
            "إطلاق نشاط جديد",
            "افتتاح مطعم أو مكان",
            "صقل أو إعادة بناء علامة قائمة",
            "موقع إلكتروني جديد",
            "حملة أو دفعة موسمية",
            "تقوية حضور العلامة",
          ],
        },
        {
          key: "services",
          question: "أي من خدماتنا تهمّك؟",
          helper: "يمكنك اختيار أكثر من خدمة.",
          type: "multi",
          options: [
            "أنظمة المواقع",
            "الهوية البصرية",
            "إبداع الحملات",
            "محتوى السوشيال وحضور العلامة",
          ],
        },
        {
          key: "contact",
          question: "كيف تفضّل أن نتواصل معك؟",
          helper: "سنحترم اختيارك — ونرد خلال يوم عمل واحد.",
          type: "single",
          options: ["واتساب", "بريد إلكتروني", "هاتف"],
        },
      ],
    },

    faq: {
      eyebrow: "أسئلة العملاء",
      title: "العمل مع الاستوديو.",
      sub: "إجابات عملية للأسئلة الأكثر شيوعاً. سؤال آخر؟ أرسل لنا ملخصاً.",
      items: [
        {
          q: "كيف نبدأ؟",
          a: "أرسل ملخصاً عبر قسم التواصل، أو اطلب مراجعة علامة خاصة. نرد خلال يوم عمل واحد بالخطوات التالية.",
        },
        {
          q: "هل تعملون مع جميع الأعمال؟",
          a: "نركّز على الضيافة الراقية، المطاعم، التجميل والعافية، العقارات، والشركات الطموحة التي يقودها مؤسّسوها في الإمارات والخليج. للمشاريع خارج هذا النطاق، تواصل معنا — وسنكون صريحين بشأن ما إذا كان الاستوديو هو الخيار المناسب.",
        },
        {
          q: "هل توفّرون التنفيذ بالعربية؟",
          a: "نعم. العمل بلغتين EN/AR هو الأصل في الاستوديو. تُكتب وتُصمَّم اللغتان معاً منذ أول رسمة — لا تُضاف لاحقاً.",
        },
        {
          q: "كيف يتم تحديد نطاق المشاريع؟",
          a: "يبدأ كل مشروع بمراجعة علامة خاصة. بعدها نتفق على النطاق والتسليمات قبل أي عمل. تُحدَّد الشروط التجارية أثناء التحديد، لا تُفترض على هذه الصفحة.",
        },
        {
          q: "هل يمكنكم صقل علامة قائمة؟",
          a: "غالباً. نعمل مع الصقل وإعادة العلامات بقدر عملنا مع الإطلاقات الأولى. مراجعة العلامة الخاصة هي أنظف طريقة لتقييم ما إذا كان الصقل، التطوّر، أو إعادة العلامة الكاملة هو المسار الصحيح.",
        },
        {
          q: "هل تدعمون الاتفاقيات المستمرة؟",
          a: "نعم. دعم المحتوى وحضور العلامة المستمر متاح لعملاء مختارين بعد اكتمال المشروع وترسّخ النظام. متاح بعد التحديد.",
        },
      ],
    },

    contact: {
      eyebrow: "تواصل",
      title: "ابدأ مشروعك.",
      sub: "أرسل ملخصاً، أو تواصل معنا مباشرة. نرد خلال يوم عمل واحد.",
      methodsTitle: "قنوات مباشرة",
      formTitle: "أرسل ملخصاً",
      signals: [
        "نرد خلال ٢٤ ساعة",
        "ساعات عمل الإمارات (غرينتش +٤)",
        "بلغتين EN / AR",
        "تنفيذ بقيادة المؤسّس",
      ],
      whatsapp: "واتساب",
      email: "البريد",
      phone: "هاتف",
      form: {
        name: "اسمك",
        company: "الشركة (اختياري)",
        message: "أخبرنا عن علامتك أو مشروعك",
        submit: "أرسل الملخّص",
        submitNote: "يفتح في برنامج البريد لديك",
        privacy: "تفتح بياناتك في برنامج البريد لديك. لا نخزّن شيئاً على هذا الموقع.",
        trustNote: "نراجع كل استفسار شخصياً ونرد عادة خلال يوم عمل واحد.",
        subject: "ملخّص مشروع جديد · manageflow.ae",
      },
    },

    footer: {
      tagline: "استوديو رقمي بوتيكي يقوده مؤسّسه. الإمارات العربية المتحدة.",
      rights: "جميع الحقوق محفوظة.",
      navTitle: "تنقّل",
      contactTitle: "تواصل",
      studioTitle: "الاستوديو",
      handcrafted: "صُنع بحرفية في الإمارات.",
      humanTouch: "نعمل مباشرة مع المؤسّسين والمشغّلين الذين يهتمّون بالتفاصيل والتموضع والثقة الرقمية.",
    },

    floatingWhats: "واتساب",

    strategyConcierce: {
      eyebrow: "مستشار الإستراتيجية الذكي",
      title: "تحدث مع إستراتيجي رقمي متخصص.",
      subtitle: "احصل على رؤية شخصية في دقيقتين. بدون نماذج معقدة.",
      greeting: "مرحباً! أنا مستشار ManageFlow. دعني أفهم احتياجات عملك.",
      quickOptions: [
        "تصميم الموقع",
        "هوية العلامة",
        "الثقة والمصداقية",
        "المواد التسويقية",
        "إبداع الحملات",
        "الأسعار",
        "احجز استشارة"
      ],
      questions: {
        business: "ما نوع عملك؟",
        goal: "ما أهدافك الرئيسية؟",
        bilingual: "هل تحتاج إلى عربي وإنجليزي؟",
        timeline: "ما الجدول الزمني لديك؟"
      },
      followUpOptions: {
        goal: ["بناء موقع ويب", "تحديث الهوية", "بناء الثقة والمصداقية", "إنشاء مواد تسويقية", "تطوير إبداعات حملات"],
        timeline: ["عاجل (٢-٤ أسابيع)", "عادي (٤-٨ أسابيع)", "مرن (في أي وقت)"]
      },
      summary: "إليك ما فهمته...",
      ctaPrimary: "تحدث على الواتساب",
      ctaSecondary: "احجز استشارة ٤٥ دقيقة"
    },

    websiteAudit: {
      eyebrow: "تقييم موقعك مجاني",
      title: "احصل على تقييم مجاني لموقعك.",
      subtitle: "شاهد ما ينجح وما لا ينجح والخطوات التالية.",
      inputPlaceholder: "أدخل رابط موقعك (مثل: yoursite.com)",
      submitButton: "احصل على التقييم",
      scanningSteps: [
        "مراجعة انطباع العلامة...",
        "التحقق من وضوح التجربة...",
        "فحص سير التحويل...",
        "مراجعة الجاهزية للعربية والإنجليزية...",
        "فحص إشارات الثقة..."
      ],
      resultTitle: "نتائج تقييم موقعك",
      scoreLabels: [
        "حضور العلامة",
        "تجربة المستخدم",
        "جاهزية التحويل",
        "الثقة والمصداقية",
        "وضوح المحتوى"
      ],
      recommendations: "المجالات الرئيسية للتحسين:",
      cta: "أرسل موقعك للمراجعة الحقيقية من فريقنا"
    },

    pricingConfigurator: {
      eyebrow: "حاسبة الأسعار",
      title: "احسب تكلفة مشروعك.",
      subtitle: "أسعار شفافة ومرنة حسب احتياجاتك.",
      services: [
        { label: "تصميم الموقع", description: "مواقع ويب راقية وسريعة التجاوب" },
        { label: "هوية العلامة", description: "لوغو، نظام بصري، أساسيات الهوية" },
        { label: "الثقة والمصداقية", description: "إشارات الثقة، تحسينات المصداقية" },
        { label: "المواد التسويقية", description: "ملفات تعريفية، عروض توضيحية" },
        { label: "إبداع الحملات", description: "مفاهيم حملات وأصول إبداعية" }
      ],
      options: {
        bilingual: "ثنائي اللغة (عربي/إنجليزي)",
        urgency: "سرعة التنفيذ"
      },
      estimatedInvestment: "الاستثمار المتوقع:",
      disclaimer: "السعر النهائي يعتمد على التفاصيل بعد استشارة.",
      cta: "احجز استشارة ٤٥ دقيقة"
    },

    whyManageFlow: {
      eyebrow: "لماذا اختر مانجفلو",
      title: "بُنيت لنجاحك",
      sub: "نحن لسنا وكالة عامة. إليك ما يميزنا.",
      items: [
        {
          title: "مصنوعة للأعمال الخليجية",
          description: "مصممة خصيصاً لعلامات الخليج والسياق المحلي. نفهم سوقك."
        },
        {
          title: "التنفيذ يبدأ من الفخامة",
          description: "كل عمل يعكس معايير الفخامة. لا حقل للاختصارات، بدون أي تنازلات على الجودة."
        },
        {
          title: "أسعار شفافة",
          description: "نقاط سعر واضحة. لا تكاليف خفية. العروض النهائية تعتمد على التفاصيل."
        },
        {
          title: "حلول بلغتين جاهزة",
          description: "الإنجليزية والعربية متعادلتان منذ الفكرة الأولى. كلا اللغتين تشعران بالطبيعية."
        },
        {
          title: "الاتجاه الإبداعي من المؤسِّس",
          description: "قائد الاستوديو يعمل مباشرة على مشروعك. عملك يحظى برعاية شخصية."
        },
        {
          title: "تسليم سريع ومركز",
          description: "الطاقة المحدودة تعني مشروعك له أولوية. جداول زمنية محددة، مراحل واضحة."
        }
      ]
    },

    beforeAfter: {
      eyebrow: "أمثلة تصورية",
      title: "أمثلة تصورية. إمكانات حقيقية.",
      subtitle: "مرّر الماوس لاستكشاف ما هو ممكن.",
      scenarios: [
        { label: "الهوية البصرية", description: "من ضعيفة إلى لا تُنسى" },
        { label: "تصميم الموقع", description: "من قديم إلى راقٍ" },
        { label: "الثقة والمصداقية", description: "من ضعيفة إلى واثقة" },
        { label: "المواد التسويقية", description: "من بدائية إلى احترافية" },
        { label: "إبداع الحملات", description: "من منسية إلى راقية" }
      ]
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Lang];
