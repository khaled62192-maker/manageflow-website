export type Lang = "en" | "ar";

export const dictionary = {
  en: {
    nav: {
      services: "What we do",
      work: "Creative Concepts",
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
      ctaSecondary: "Get your free website review",
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
          body: "We share clear starting prices here so you can plan with confidence. The final investment is confirmed together during our scoping conversation — no surprises, no hidden costs.",
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
        "Promotional campaigns",
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
          tag: "Presence",
          title: "Professional Presence",
          summary: "Look more professional and build trust before the first conversation.",
          tiers: [
            {
              name: "Starting Package",
              price: "1,200",
              position: "Professional design upgrades that build immediate trust.",
              includes: [
                "Professional visual upgrades",
                "Google Business profile polish",
                "Testimonials & reviews section",
                "Contact clarity improvements",
                "Trust signal enhancements",
              ],
            },
            {
              name: "Premium Upsells",
              price: "",
              position: "Deepen your professional standing.",
              includes: [
                "Review generation assets",
                "Credibility collateral",
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
          tag: "Promo",
          title: "Promotional Campaigns",
          summary: "Clear, branded campaigns that promote your business and drive action.",
          tiers: [
            {
              name: "Starting Package",
              price: "1,000",
              position: "Essential campaign creative assets.",
              includes: [
                "Campaign concept & direction",
                "Promotional visual design",
                "Ad creative assets (2–3 formats)",
              ],
            },
            {
              name: "Premium Upsells",
              price: "",
              position: "Expand your campaign reach.",
              includes: [
                "Multiple creatives",
                "Campaign bundles",
                "Ramadan & Eid campaign packages",
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
      eyebrow: "Creative Concepts",
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
            "Website Design",
            "Brand Identity",
            "Promotional Campaigns",
            "Sales Materials",
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
          a: "Send a brief through the contact section. We respond within one working day with the next steps.",
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
          a: "Each project opens with a brief conversation about your goals. From there we agree on scope and deliverables before any work begins. Final pricing is confirmed during scoping.",
        },
        {
          q: "Can you refine an existing brand?",
          a: "Often. We work as much with refinement and rebrands as with first-time launches. A brief conversation is the cleanest way to assess the right path.",
        },
        {
          q: "Do you support ongoing retainers?",
          a: "Yes. Ongoing content and brand presence support is available for select clients after a project completes and the system is established.",
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
      eyebrow: "Build Your Package",
      title: "Build your perfect package.",
      subtitle: "Tell us what you need. We'll put the right package together for you.",
      greeting: "Hi! Select what you need and we'll build your package together.",
      quickOptions: [
        "Website Design",
        "Brand Identity",
        "Professional Presence",
        "Sales Materials",
        "Promotional Campaigns",
        "Pricing",
        "Book a Call",
      ],
      questions: {
        business: "What type of business do you run?",
        goal: "What's your main goal right now?",
        bilingual: "Do you need Arabic + English?",
        timeline: "What's your timeline?",
      },
      followUpOptions: {
        goal: ["Build a website", "Refresh branding", "Build professional presence", "Create sales materials", "Run a promotional campaign"],
        timeline: ["Urgent (2-4 weeks)", "Standard (4-8 weeks)", "Flexible (whenever)"],
      },
      summary: "Here's what I understand...",
      ctaPrimary: "Chat on WhatsApp",
      ctaSecondary: "Book a Strategy Call",
    },

    websiteAudit: {
      eyebrow: "Free Website Review",
      title: "Get a free review of your website.",
      subtitle: "See what's working, what's holding you back, and what to fix first.",
      inputPlaceholder: "Enter your website URL (e.g., yoursite.com)",
      submitButton: "Get My Free Review",
      scanningSteps: [
        "Reviewing brand impression...",
        "Checking UX clarity...",
        "Checking conversion flow...",
        "Reviewing Arabic/English readiness...",
        "Checking trust signals...",
      ],
      resultTitle: "Your Website Review",
      scoreLabels: [
        "Brand Presence",
        "User Experience",
        "Conversion Readiness",
        "Trust & Credibility",
        "Content Clarity",
      ],
      recommendations: "Areas to focus on:",
      cta: "Get a real human review from our team",
    },

    pricingConfigurator: {
      eyebrow: "Pricing Estimator",
      title: "Estimate your project cost.",
      subtitle: "Transparent, flexible pricing based on your scope.",
      services: [
        { label: "Website Design", description: "Premium responsive business websites" },
        { label: "Brand Identity", description: "Logo, visual system, brand foundations" },
        { label: "Professional Presence", description: "Professional presence, credibility upgrades" },
        { label: "Sales Materials", description: "Company profiles, proposals, decks" },
        { label: "Promotional Campaigns", description: "Promotional campaigns and creative assets" },
      ],
      options: {
        bilingual: "Bilingual (EN/AR)",
        urgency: "Urgency level",
      },
      estimatedInvestment: "Estimated investment:",
      disclaimer: "Final pricing confirmed after a scoping conversation.",
      cta: "Book your strategy call",
    },

    whyManageFlow: {
      eyebrow: "Why choose ManageFlow",
      title: "Built for your success",
      sub: "We're not a generic agency. Here's what makes us different.",
      items: [
        {
          title: "Built for UAE businesses",
          description: "Designed specifically for GCC brands and local context. We understand your market.",
        },
        {
          title: "Premium-first execution",
          description: "Every deliverable reflects luxury standards. No shortcuts, no compromise on quality.",
        },
        {
          title: "Transparent starting pricing",
          description: "Clear price points listed openly. Final quotes depend on scope — confirmed together.",
        },
        {
          title: "Bilingual-ready solutions",
          description: "English and Arabic considered equally from concept. Both languages feel native.",
        },
        {
          title: "Founder-led creative direction",
          description: "The studio lead works directly on your project. Your work gets personal attention.",
        },
        {
          title: "Fast, focused delivery",
          description: "Limited capacity means your project is a priority. Scoped timelines, defined milestones.",
        },
      ],
    },

    beforeAfter: {
      eyebrow: "Creative Concepts",
      title: "Concept transformations. Real potential.",
      subtitle: "Hover to reveal what's possible.",
      subtitleTouch: "Tap to explore what's possible.",
      scenarios: [
        { label: "Brand Identity", description: "From weak to memorable" },
        { label: "Website Design", description: "From outdated to premium" },
        { label: "Professional Presence", description: "From invisible to trusted" },
        { label: "Sales Materials", description: "From amateur to professional" },
        { label: "Promotional Campaigns", description: "From forgettable to premium" },
      ],
    },
  },

  ar: {
    nav: {
      services: "ما نقدّمه",
      work: "نماذج إبداعية",
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
      sub: "مواقع راقية، أنظمة هويات، وأصول إطلاق — من استوديو يقوده مؤسّس إماراتي لأعمال الضيافة، التجميل، التجزئة، والعقارات الطموحة في الخليج.",
      ctaPrimary: "احجز استشارة استراتيجية",
      ctaSecondary: "احصل على مراجعة مجانية لموقعك",
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
          body: "تتواصل مباشرة مع قائد الاستوديو. لا وسطاء ولا تسليمات — سياق محلي، وحسّ خليجي حقيقي.",
        },
        {
          title: "بلغتين منذ البداية",
          body: "العربية والإنجليزية معاً — كتابةً وتصميماً وتفكيراً لكلا الجمهورين منذ أول رسمة.",
        },
        {
          title: "بلا إسناد خارجي",
          body: "كل عمل يُصمَّم ويُنفَّذ داخل الاستوديو. لا تعهيد ولا إسناد خارجي — يد الاستوديو على كل تفصيلة.",
        },
        {
          title: "أسعار بداية شفافة",
          body: "نشاركك أسعار بداية واضحة حتى تتمكّن من التخطيط براحة. التكلفة النهائية تُحدَّد معاً في محادثة التحديد — بلا مفاجآت.",
        },
        {
          title: "طاقة محدودة للحفاظ على الجودة",
          body: "عدد محدود من المشاريع في آنٍ واحد. كل مشروع يحظى بكامل تركيز الاستوديو.",
        },
        {
          title: "نطاق محدّد، لا ارتجال",
          body: "تسليمات وجداول زمنية متّفق عليها كتابةً قبل البدء. النطاق، المراحل، والمراجعات تُحدَّد مسبقاً — لا تُفترض أبداً.",
        },
      ],
      drift: [
        "استراتيجية العلامة",
        "الهوية البصرية",
        "مواقع راقية",
        "حملات ترويجية",
        "تنفيذ بلغتين",
        "إخراج الإطلاق",
        "محتوى راقٍ",
        "تنفيذ بقيادة المؤسّس",
      ],
    },

    services: {
      eyebrow: "ما نقدّمه",
      title: "خمس خدمات واضحة. مستوى واحد لا يتغير.",
      sub: "راقٍ، واضح، مصمّم للعلامات الإماراتية والخليجية. خيارات بداية واضحة. أسعار شفافة.",
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
          summary: "هوية بصرية تُعبّر عن علامتك وتبقى في الذهن.",
          tiers: [
            {
              name: "الحزمة الأساسية",
              price: "١,٥٠٠",
              position: "أساس هوية بصرية متكاملة.",
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
                "قوالب وسائل التواصل",
                "أدلة هوية متقدّمة",
              ],
            },
          ],
        },
        {
          n: "٠٢",
          tag: "ويب",
          title: "تصميم الموقع",
          summary: "تجارب رقمية راقية تبني الثقة وتُحوّل الزوار إلى عملاء.",
          tiers: [
            {
              name: "الحزمة الأساسية",
              price: "٢,٥٠٠",
              position: "موقع راقٍ متجاوب ومُحسَّن للتحويل.",
              includes: [
                "موقع راقٍ متجاوب",
                "تحسين الجوال",
                "تكامل واتساب والتواصل",
                "واجهة مستخدم نظيفة وراقية",
                "بنية متعدّدة الأقسام",
              ],
            },
            {
              name: "إضافات مميزة",
              price: "",
              position: "عزّز وجودك الرقمي.",
              includes: [
                "موقع بلغتين عربي وإنجليزي",
                "أنظمة حجز",
                "رسوم متحرّكة متقدّمة",
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
          tag: "حضور",
          title: "الحضور المهني",
          summary: "اجعل عملك يبدو أكثر احترافيةً وثقةً — الانطباع الأول يُحدث الفارق.",
          tiers: [
            {
              name: "الحزمة الأساسية",
              price: "١,٢٠٠",
              position: "اترك انطباعاً أول لا يُنسى.",
              includes: [
                "تحسين الصورة المهنية الرقمية",
                "تحسين ملف Google Business",
                "تصميم قسم آراء العملاء والشهادات",
                "تحسين وضوح التواصل",
                "عناصر بصرية تُعزّز المصداقية",
              ],
            },
            {
              name: "إضافات مميزة",
              price: "",
              position: "قوّ حضورك المهني بشكل أعمق.",
              includes: [
                "نظام توليد التقييمات",
                "مواد تعزيز المصداقية",
                "تصميم عرض الشهادات والجوائز",
                "تدقيق شامل على المصداقية",
              ],
            },
          ],
        },
        {
          n: "٠٤",
          tag: "مبيعات",
          title: "المواد التسويقية",
          summary: "مواد احترافية تُساعد عملك على إغلاق الصفقات بثقة.",
          tiers: [
            {
              name: "الحزمة الأساسية",
              price: "٩٠٠",
              position: "اختر مادة تسويقية مميزة واحدة.",
              includes: [
                "ملف تعريفي للشركة",
                "قالب عرض تقديمي",
                "كتيب تعريفي",
                "ملف عرض استثماري",
                "ملف قدرات",
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
                "رسوم متحرّكة للعروض",
                "حزم وثائق متعدّدة",
              ],
            },
          ],
        },
        {
          n: "٠٥",
          tag: "ترويج",
          title: "الحملات الترويجية",
          summary: "حملات ترويجية احترافية تُبرز علامتك وتُوصل رسالتك للعملاء.",
          tiers: [
            {
              name: "الحزمة الأساسية",
              price: "١,٠٠٠",
              position: "كل ما تحتاجه لحملة ترويجية احترافية.",
              includes: [
                "مفهوم الحملة والاتجاه الإبداعي",
                "تصاميم ترويجية احترافية",
                "أصول إعلانية (٢-٣ صيغ)",
              ],
            },
            {
              name: "إضافات مميزة",
              price: "",
              position: "وسّع وضاعف تأثير حملتك.",
              includes: [
                "إبداعيات متعدّدة",
                "حزم حملات متكاملة",
                "حملات رمضان والأعياد",
                "أصول فيديو وموشن",
                "حزم إطلاق متكاملة",
              ],
            },
          ],
        },
      ],
    },

    showcase: {
      eyebrow: "نماذج إبداعية",
      title: "دراسات قدرات الاستوديو.",
      sub: "استكشافات إبداعية تُظهر أسلوبنا في التفكير والتنفيذ وتموضع العلامات الراقية.",
      tag: "قدرات الاستوديو",
      note: "هذه الدراسات المفاهيمية تُظهر نهجنا في تنفيذ العلامات الراقية. لا تمثّل أعمالاً موكّلة من عملاء.",
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
      sub: "خمس خطوات من أول محادثة حتى الإطلاق. نطاق واضح في كل مرحلة — بلا مفاجآت.",
      steps: [
        { n: "٠١", title: "مراجعة العلامة", body: "نبدأ بمراجعة موجزة ومنظّمة لنشاطك، جمهورك، وطموحك." },
        { n: "٠٢", title: "التحديد", body: "الموقع، التسليمات، والجدول الزمني — متّفق عليه كتابةً قبل أي تنفيذ." },
        { n: "٠٣", title: "التصميم", body: "كل تفصيل مدروس: الطباعة، الحركة، الكلمة، الصورة." },
        { n: "٠٤", title: "الصقل", body: "نُحرّر ونصقل عند نقاط متّفق عليها حتى يبدو كل شيء طبيعياً وسلساً." },
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
            "تصميم الموقع",
            "الهوية البصرية",
            "الحملات الترويجية",
            "المواد التسويقية",
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
      sub: "إجابات عملية على أكثر الأسئلة شيوعاً. سؤال آخر؟ أرسل لنا ملخصاً.",
      items: [
        {
          q: "كيف نبدأ؟",
          a: "أرسل ملخصاً عبر قسم التواصل. سنرد خلال يوم عمل واحد بالخطوات التالية.",
        },
        {
          q: "هل تعملون مع جميع الأعمال؟",
          a: "نركّز على الضيافة الراقية، المطاعم، التجميل والعافية، العقارات، والشركات الطموحة في الإمارات والخليج. للمشاريع خارج هذا النطاق، تواصل معنا وسنكون صريحين.",
        },
        {
          q: "هل توفّرون التنفيذ بالعربية؟",
          a: "نعم. العمل بلغتين EN/AR هو الأصل في الاستوديو. تُكتب وتُصمَّم اللغتان معاً منذ أول رسمة — لا تُضاف لاحقاً.",
        },
        {
          q: "كيف يتم تحديد نطاق المشاريع؟",
          a: "يبدأ كل مشروع بمحادثة قصيرة عن أهدافك. بعدها نتفق على النطاق والتسليمات كتابةً قبل أي تنفيذ. التسعير النهائي يُحدَّد في التحديد.",
        },
        {
          q: "هل يمكنكم صقل علامة قائمة؟",
          a: "غالباً نعم. نعمل مع الصقل وإعادة العلامات بقدر عملنا مع الإطلاقات الجديدة. محادثة قصيرة تُحدّد المسار الأنسب.",
        },
        {
          q: "هل تدعمون الاتفاقيات المستمرة؟",
          a: "نعم. دعم المحتوى وحضور العلامة المستمر متاح لعملاء مختارين بعد اكتمال المشروع.",
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
      email: "البريد الإلكتروني",
      phone: "هاتف",
      form: {
        name: "اسمك",
        company: "الشركة (اختياري)",
        message: "أخبرنا عن علامتك أو مشروعك",
        submit: "أرسل الملخّص",
        submitNote: "يفتح في برنامج البريد لديك",
        privacy: "تفتح بياناتك في برنامج البريد لديك. لا نخزّن شيئاً على هذا الموقع.",
        trustNote: "نراجع كل استفسار شخصياً ونرد عادةً خلال يوم عمل واحد.",
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
      eyebrow: "اختر خدماتك",
      title: "أخبرنا بما تحتاجه.",
      subtitle: "اختر ما تريد، وسنُعدّ لك الباقة المناسبة.",
      greeting: "مرحباً! اختر من خدماتنا وسنساعدك في بناء باقتك.",
      quickOptions: [
        "تصميم الموقع",
        "الهوية البصرية",
        "الحضور المهني",
        "المواد التسويقية",
        "الحملات الترويجية",
        "الأسعار",
        "احجز مكالمة",
      ],
      questions: {
        business: "ما نوع نشاطك التجاري؟",
        goal: "ما هدفك الرئيسي الآن؟",
        bilingual: "هل تحتاج إلى عربي وإنجليزي؟",
        timeline: "ما الجدول الزمني لديك؟",
      },
      followUpOptions: {
        goal: ["بناء موقع ويب", "تحديث الهوية البصرية", "تعزيز الحضور المهني", "إنشاء مواد تسويقية", "تنفيذ حملة ترويجية"],
        timeline: ["عاجل (٢-٤ أسابيع)", "عادي (٤-٨ أسابيع)", "مرن (في أي وقت)"],
      },
      summary: "إليك ما فهمته...",
      ctaPrimary: "تحدث على الواتساب",
      ctaSecondary: "احجز مكالمة استراتيجية",
    },

    websiteAudit: {
      eyebrow: "مراجعة موقعك المجانية",
      title: "احصل على مراجعة مجانية لموقعك.",
      subtitle: "اكتشف ما يعمل، وما يحتاج تحسيناً.",
      inputPlaceholder: "أدخل رابط موقعك (مثال: yoursite.com)",
      submitButton: "احصل على مراجعتك المجانية",
      scanningSteps: [
        "مراجعة انطباع العلامة...",
        "فحص وضوح تجربة المستخدم...",
        "تحليل مسار التحويل...",
        "التحقق من الجاهزية للعربية والإنجليزية...",
        "فحص عناصر الثقة والمصداقية...",
      ],
      resultTitle: "نتائج مراجعة موقعك",
      scoreLabels: [
        "حضور العلامة",
        "تجربة المستخدم",
        "جاهزية التحويل",
        "الثقة والمصداقية",
        "وضوح المحتوى",
      ],
      recommendations: "أبرز مجالات التحسين:",
      cta: "احصل على مراجعة حقيقية من فريقنا",
    },

    pricingConfigurator: {
      eyebrow: "حاسبة الأسعار",
      title: "احسب تكلفة مشروعك.",
      subtitle: "أسعار شفافة ومرنة حسب احتياجاتك.",
      services: [
        { label: "تصميم الموقع", description: "مواقع أعمال راقية ومتجاوبة" },
        { label: "الهوية البصرية", description: "شعار، نظام بصري، أساسيات الهوية" },
        { label: "الحضور المهني", description: "الحضور المهني وتعزيز المصداقية" },
        { label: "المواد التسويقية", description: "ملفات تعريفية، عروض، كتيبات" },
        { label: "الحملات الترويجية", description: "حملات ترويجية وأصول إبداعية" },
      ],
      options: {
        bilingual: "ثنائي اللغة (عربي/إنجليزي)",
        urgency: "سرعة التنفيذ",
      },
      estimatedInvestment: "الاستثمار المتوقع:",
      disclaimer: "السعر النهائي يُحدَّد بعد محادثة التحديد.",
      cta: "احجز مكالمة استراتيجية",
    },

    whyManageFlow: {
      eyebrow: "لماذا ManageFlow",
      title: "بُنيت لنجاحك",
      sub: "لسنا وكالة عامة. إليك ما يجعلنا مختلفين.",
      items: [
        {
          title: "مصنوعة لأعمال الخليج",
          description: "مصمّمة خصيصاً لعلامات الخليج والسياق المحلي. نعرف سوقك جيداً.",
        },
        {
          title: "تنفيذ يبدأ من الجودة",
          description: "كل عمل يعكس معايير الجودة العالية. لا اختصارات، ولا تنازل عن الإتقان.",
        },
        {
          title: "أسعار بداية شفافة",
          description: "نقاط سعر واضحة على الموقع. السعر النهائي يُحدَّد حسب تفاصيل مشروعك.",
        },
        {
          title: "حلول بلغتين",
          description: "العربية والإنجليزية متساويتان منذ أول فكرة. كلا اللغتين تشعران بالطبيعية والاحتراف.",
        },
        {
          title: "الإخراج الإبداعي من المؤسّس",
          description: "قائد الاستوديو يعمل مباشرة على مشروعك. مشروعك يحظى برعاية حقيقية ومباشرة.",
        },
        {
          title: "تسليم سريع ومنضبط",
          description: "الطاقة المحدودة تعني مشروعك له أولوية فعلية. جداول زمنية واضحة ومراحل محدّدة.",
        },
      ],
    },

    beforeAfter: {
      eyebrow: "نماذج إبداعية",
      title: "نماذج إبداعية. إمكانات حقيقية.",
      subtitle: "مرّر للاستكشاف.",
      subtitleTouch: "اضغط للاستكشاف.",
      scenarios: [
        { label: "الهوية البصرية", description: "من ضعيفة إلى لا تُنسى" },
        { label: "تصميم الموقع", description: "من قديم إلى راقٍ" },
        { label: "الحضور المهني", description: "من غائب إلى موثوق" },
        { label: "المواد التسويقية", description: "من بدائية إلى احترافية" },
        { label: "الحملات الترويجية", description: "من عادية إلى راقية" },
      ],
    },
  },
} as const;

export type Dictionary = (typeof dictionary)[Lang];
