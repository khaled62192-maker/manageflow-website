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
      ctaPrimary: "Start a project",
      ctaSecondary: "View our work",
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
      title: "Four offerings. One standard.",
      sub: "Clear starting points. Transparent investment guidance. Built for brands that value premium execution.",
      pricePrefix: "from",
      currency: "AED",
      customLabel: "Custom quote",
      availableLabel: "Available after scoping",
      includesLabel: "Includes",
      tierLabel: "Tier",
      items: [
        {
          n: "01",
          tag: "Web",
          title: "Website Systems",
          summary: "Premium responsive websites — from launch foundations to fully scoped signature builds.",
          tiers: [
            {
              name: "Foundation",
              price: "6,000",
              position: "For brands needing a premium digital launch.",
              includes: [
                "Premium responsive website",
                "Essential page architecture",
                "Inquiry / contact setup",
                "Mobile optimization",
                "Premium UI implementation",
              ],
            },
            {
              name: "Growth",
              price: "9,500",
              position: "For brands needing stronger storytelling and conversion.",
              includes: [
                "Expanded architecture",
                "Bilingual EN/AR support",
                "Conversion-focused UX",
                "SEO foundations",
                "Enhanced interactions",
              ],
            },
            {
              name: "Signature",
              price: "",
              position: "For larger premium businesses requiring tailored digital systems.",
              includes: [],
            },
          ],
        },
        {
          n: "02",
          tag: "Identity",
          title: "Brand Identity",
          summary: "Premium identity systems — from focused launch identities to fully scoped brand programmes.",
          tiers: [
            {
              name: "Foundation",
              price: "4,000",
              position: "A focused identity for new launches and refined brands.",
              includes: [
                "Logo & monogram",
                "Type & colour foundations",
                "Core application templates",
                "Mini guidelines",
              ],
            },
            {
              name: "System",
              price: "7,500",
              position: "A complete identity system for brands ready to scale across touchpoints.",
              includes: [
                "Full identity system",
                "Type & colour rules",
                "Application templates across formats",
                "Detailed brand guidelines",
              ],
            },
            {
              name: "Signature",
              price: "",
              position: "A bespoke identity programme for established brands and signature properties.",
              includes: [],
            },
          ],
        },
        {
          n: "03",
          tag: "Campaign",
          title: "Campaign Creative",
          summary: "Premium launch storytelling — from focused launch essentials to fully directed campaigns.",
          tiers: [
            {
              name: "Launch Essentials",
              price: "3,500",
              position: "A focused asset kit for a single launch moment or campaign.",
              includes: [
                "Campaign concept",
                "Lead creative direction",
                "Key launch assets",
                "Branded social cuts",
              ],
            },
            {
              name: "Campaign System",
              price: "6,500",
              position: "A coordinated creative system across the lifecycle of a campaign.",
              includes: [
                "Full campaign concept",
                "Multi-format asset rollout",
                "Motion creatives",
                "Branded social system",
                "Coordinated launch",
              ],
            },
            {
              name: "Full Launch Direction",
              price: "",
              position: "End-to-end creative direction for major launches and signature campaigns.",
              includes: [],
            },
          ],
        },
        {
          n: "04",
          tag: "Presence",
          title: "Social Content & Brand Presence",
          summary: "Ongoing premium content and brand presence support — designed around your brand voice, not a generic posting cadence.",
          tiers: [],
          note: "Available after scoping",
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

    critique: {
      eyebrow: "Free tool",
      title: "Instant website critique.",
      sub: "Enter your website URL for an AI-assisted first-pass critique of your homepage messaging, trust signals, clarity, and digital positioning. This is not a full technical audit.",
      inputPlaceholder: "Your website URL",
      submitLabel: "Get critique",
      loadingLabel: "Analyzing...",
      errorMessage: "Unable to fetch your website. Please ensure the URL is correct and publicly accessible.",
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
      ctaPrimary: "ابدأ مشروعك",
      ctaSecondary: "شاهد أعمالنا",
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
      title: "أربع خدمات. مستوى واحد لا يتغير.",
      sub: "خيارات واضحة. استثمار مبدئي شفاف. تنفيذ يليق بالعلامات التي تهتم بالجودة.",
      pricePrefix: "من",
      currency: "درهم",
      customLabel: "سعر مخصّص",
      availableLabel: "متاح بعد التحديد",
      includesLabel: "تشمل",
      tierLabel: "المستوى",
      items: [
        {
          n: "٠١",
          tag: "ويب",
          title: "أنظمة المواقع",
          summary: "مواقع راقية ومتجاوبة — من أسس الإطلاق إلى الأنظمة الرقمية الخاصة بالكامل.",
          tiers: [
            {
              name: "أساس",
              price: "٦,٠٠٠",
              position: "للعلامات التي تحتاج إطلاقاً رقمياً راقياً.",
              includes: [
                "موقع راقٍ ومتجاوب",
                "بنية صفحات أساسية",
                "إعداد نموذج الاستفسار / التواصل",
                "تحسين الموبايل",
                "تنفيذ واجهة راقية",
              ],
            },
            {
              name: "توسّع",
              price: "٩,٥٠٠",
              position: "للعلامات التي تحتاج سرداً وتحويلاً أقوى.",
              includes: [
                "بنية موسّعة",
                "دعم بلغتين EN/AR",
                "تجربة تركّز على التحويل",
                "أساسيات السيو",
                "تفاعلات محسّنة",
              ],
            },
            {
              name: "خاص",
              price: "",
              position: "للأعمال الراقية الأكبر التي تحتاج أنظمة رقمية مخصّصة.",
              includes: [],
            },
          ],
        },
        {
          n: "٠٢",
          tag: "هوية",
          title: "الهوية البصرية",
          summary: "أنظمة هوية راقية — من هويات الإطلاق المركّزة إلى برامج العلامة المتكاملة.",
          tiers: [
            {
              name: "أساس",
              price: "٤,٠٠٠",
              position: "هوية مركّزة للإطلاقات الجديدة والعلامات المصقولة.",
              includes: [
                "شعار ومنوغرام",
                "أساسيات الطباعة والألوان",
                "قوالب تطبيق أساسية",
                "دليل هوية مصغّر",
              ],
            },
            {
              name: "نظام",
              price: "٧,٥٠٠",
              position: "نظام هوية متكامل لعلامة جاهزة للنمو عبر نقاط التواصل.",
              includes: [
                "نظام هوية متكامل",
                "قواعد الطباعة والألوان",
                "قوالب تطبيق متعدّدة الصيغ",
                "دليل هوية تفصيلي",
              ],
            },
            {
              name: "خاص",
              price: "",
              position: "برنامج هوية مخصّص للعلامات الراسخة والعقارات الراقية.",
              includes: [],
            },
          ],
        },
        {
          n: "٠٣",
          tag: "حملات",
          title: "إبداع الحملات",
          summary: "سرد إطلاق راقٍ — من أساسيات الإطلاق المركّزة إلى الحملات الموجَّهة بالكامل.",
          tiers: [
            {
              name: "أساسيات الإطلاق",
              price: "٣,٥٠٠",
              position: "حزمة أصول مركّزة للحظة إطلاق واحدة أو حملة.",
              includes: [
                "مفهوم حملة",
                "إخراج إبداعي رئيسي",
                "أصول الإطلاق الأساسية",
                "محتوى سوشيال للعلامة",
              ],
            },
            {
              name: "نظام حملة",
              price: "٦,٥٠٠",
              position: "نظام إبداعي منسّق على مدى دورة حياة الحملة.",
              includes: [
                "مفهوم حملة متكامل",
                "إطلاق أصول متعدّدة الصيغ",
                "تصاميم متحركة",
                "نظام سوشيال للعلامة",
                "إطلاق منسّق",
              ],
            },
            {
              name: "إخراج إطلاق متكامل",
              price: "",
              position: "إخراج إبداعي متكامل للإطلاقات الكبرى والحملات الراقية.",
              includes: [],
            },
          ],
        },
        {
          n: "٠٤",
          tag: "حضور",
          title: "محتوى السوشيال وحضور العلامة",
          summary: "دعم محتوى وحضور علامة مستمر — مصمّم حول صوت علامتك، لا حول إيقاع نشر عام.",
          tiers: [],
          note: "متاح بعد التحديد",
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

    critique: {
      eyebrow: "أداة مجانية",
      title: "تقييم موقعك فوراً.",
      sub: "أدخل رابط موقعك للحصول على تقييم ذكي أولي لرسالة صفحتك الرئيسية، إشارات الثقة، الوضوح، والموضع الرقمي. هذا ليس تدقيق تقني شامل.",
      inputPlaceholder: "رابط موقعك",
      submitLabel: "احصل على التقييم",
      loadingLabel: "جاري التحليل...",
      errorMessage: "تعذر الوصول لموقعك. تأكد من أن الرابط صحيح وأن الموقع علني.",
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
  },
} as const;

export type Dictionary = (typeof dictionary)[Lang];
