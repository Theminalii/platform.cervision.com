export type Lang = "az" | "ru" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "az", label: "AZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

type Dict = {
  nav: {
    about: string;
    services: string;
    solutions: string;
    industries: string;
    process: string;
    cases: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleA: string;
    titleB: string;
    desc: string;
    definitions: { term: string; meaning: string }[];
    cta1: string;
    cta2: string;
    stats: { v: number; s: string; l: string }[];
    trusted: string;
    cardAi: string;
    cardAiMetric: string;
    cardSec: string;
    cardSecMetric: string;
  };
  about: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    desc: string;
    pillars: { title: string; text: string }[];
    timelineTitle: string;
    timeline: { y: string; t: string; d: string }[];
  };
  whyus: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    desc: string;
    items: { title: string; text: string }[];
  };
  services: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleC: string;
    desc: string;
    cta: string;
    items: { title: string; desc: string }[];
  };
  platform: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleC: string;
    desc: string;
    tabs: { name: string; desc: string }[];
    perf: string;
    m1: string;
    m2: string;
    m3: string;
  };
  architecture: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    desc: string;
    panelEyebrow: string;
    panelTitle: string;
    panelDesc: string;
    channels: { name: string; note: string }[];
    coreTitle: string;
    coreText: string;
    blocks: { title: string; text: string }[];
    flows: { title: string; text: string }[];
    badges: string[];
  };
  industries: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    desc: string;
    items: { name: string; text: string }[];
  };
  process: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    desc: string;
    steps: { t: string; d: string }[];
  };
  innovation: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    titleC: string;
    items: { t: string; d: string }[];
  };
  cases: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    desc: string;
    challenge: string;
    solution: string;
    items: {
      tag: string;
      title: string;
      challenge: string;
      solution: string;
      results: { v: number; s: string; l: string }[];
    }[];
  };
  testimonials: {
    eyebrow: string;
    titleA: string;
    titleB: string;
    items: { n: string; r: string; t: string }[];
  };
  faq: { eyebrow: string; titleA: string; titleB: string; items: { q: string; a: string }[] };
  cta: {
    tag: string;
    title: string;
    desc: string;
    b1: string;
    b2: string;
    b3: string;
    formTitle: string;
    formSub: string;
    fName: string;
    fEmail: string;
    fCompany: string;
    fPhone: string;
    fDirection: string;
    fActivity: string;
    fTeam: string;
    fMsg: string;
    fSend: string;
    fConfigNote: string;
    fSuccess: string;
    fError: string;
  };
  footer: {
    tagline: string;
    cols: { h: string; links: string[] }[];
    news: string;
    newsDesc: string;
    emailPh: string;
    join: string;
    rights: string;
    privacy: string;
    terms: string;
    cookies: string;
    security: string;
  };
};

export const T: Record<Lang, Dict> = {
  az: {
    nav: {
      about: "Haqqımızda",
      services: "Modullar",
      solutions: "Əməliyyatlar",
      industries: "Kimlər üçündür",
      process: "Arxitektura",
      cases: "Ssenarilər",
      contact: "Əlaqə",
      cta: "Demo İstə",
    },
    hero: {
      badge: "Satış, anbar, maliyyə, CRM və AI üçün vahid biznes platforması",
      titleA: "Şirkətin gündəlik işini idarə edən",
      titleB: "vahid platforma.",
      desc: "Bu sayt Cer Vision Business Operations Platform məhsulunun tanıtımıdır. Sistem satış, satınalma, anbar, maliyyə, CRM, omnichannel yazışma və AI köməkçi axınlarını bir mərkəzdə birləşdirir ki, komanda fərqli proqramlarla yox, bir sistemlə işləsin.",
      definitions: [
        {
          term: "ERP",
          meaning:
            "ERP biznesin maliyyə, anbar, satış, satınalma və əməliyyat proseslərini bir platformada birləşdirən idarəetmə sistemidir.",
        },
        {
          term: "CRM",
          meaning:
            "CRM müştəri münasibətlərini, satış pipeline-ını, lead-ləri və servis tarixçəsini idarə edən sistemdir.",
        },
        {
          term: "AI Agent",
          meaning:
            "AI agent tapşırıqları anlayan, qərar verən və iş axınında avtomatik addımlar atan ağıllı proqram köməkçisidir.",
        },
      ],
      cta1: "Demo İstə",
      cta2: "Modullara Bax",
      stats: [
        { v: 12, s: "+", l: "İllik təcrübə" },
        { v: 180, s: "+", l: "Çatdırılmış layihə" },
        { v: 40, s: "M+", l: "Emal edilən əməliyyat" },
        { v: 99.9, s: "%", l: "Platforma uptime" },
      ],
      trusted: "Müxtəlif sahələrdə komandaların etibarı",
      cardAi: "AI Avtomatlaşdırma",
      cardAiMetric: "+38% məhsuldarlıq",
      cardSec: "Enterprise Təhlükəsizlik",
      cardSecMetric: "ISO 27001 hazırlığı",
    },
    about: {
      eyebrow: "Platforma haqqında",
      titleA: "Cer Vision nədir?",
      titleB: "Şirkətin vahid əməliyyat sistemi.",
      desc: "Cer Vision xidmət agentliyi təqdimatı deyil. Bu sayt Cer Vision Business Operations Platform məhsulunun təqdimatıdır və platformanın satışdan anbara, maliyyədən CRM-ə qədər gündəlik əməliyyatları necə birləşdirdiyini göstərir.",
      pillars: [
        {
          title: "Vahid Platforma",
          text: "Satış, alış, anbar, maliyyə, CRM və mesajlaşma modulları ayrı proqramlarda deyil, bir paneldə işləyir.",
        },
        {
          title: "Mərkəzi Məlumat",
          text: "Məhsullar, müştərilər, borclar, ödənişlər, stok hərəkətləri və yazışmalar vahid məlumat qatında saxlanılır.",
        },
        {
          title: "Nəzarət və İcazələr",
          text: "Satış, anbar, maliyyə və rəhbərlik komandaları rol əsaslı giriş və audit-ready görünürlük ilə işləyir.",
        },
        {
          title: "Genişlənən Arxitektura",
          text: "Cer Vision Business Operations Platform modullu qurulub; WhatsApp, Gmail, Telegram, mobil satış və yeni inteqrasiyalar sonradan rahat qoşula bilir.",
        },
      ],
      timelineTitle: "Önəm verilən şeylərin qurulmasında bir on il.",
      timeline: [
        {
          y: "2013",
          t: "Təsis",
          d: "Cer Vision biznes-kritik sistemlərə yönəlmiş xüsusi proqram studiyası kimi qurulur.",
        },
        {
          y: "2016",
          t: "ERP Praktikası",
          d: "Orta seqment müəssisələri üçün ERP və biznes avtomatlaşdırma praktikasını işə saldıq.",
        },
        {
          y: "2019",
          t: "AI Lab",
          d: "İstehsalat səviyyəli ML və ağıllı agentlər quran AI Lab-ı açdıq.",
        },
        {
          y: "2022",
          t: "Cloud Platforma",
          d: "Cer Vision Platformasını buraxdıq — cloud-native stekdə modul biznes həlləri.",
        },
        {
          y: "2025",
          t: "Qlobal Miqyas",
          d: "12 sahə üzrə müştərilər üçün rəqəmsal transformasiya proqramlarını çatdırırıq.",
        },
      ],
    },
    whyus: {
      eyebrow: "Platformanın üstünlükləri",
      titleA: "Niyə şirkətlər",
      titleB: "bu platformadan fayda görür?",
      desc: "Cer Vision Business Operations Platform daxilində artıq hazır olan imkanların biznesə verdiyi əsas üstünlüklər.",
      items: [
        {
          title: "Bütün əməliyyatlar bir mərkəzdə",
          text: "Satış, anbar, maliyyə, CRM və yazışmalar ayrıca fayllarda yox, vahid sistemdə görünür.",
        },
        {
          title: "Canlı nəzarət",
          text: "Dashboard, recent sales, recent purchases, low stock və borc vəziyyəti rəhbərlik üçün anlıq görünür.",
        },
        {
          title: "Borc və ödəniş intizamı",
          text: "Müştəri və təchizatçı borcları, partial payment və hesablaşmalar sistem daxilində izlənir.",
        },
        {
          title: "Omnichannel ünsiyyət",
          text: "WhatsApp, Instagram, Telegram və Gmail mesajları bir inbox-da toplanır və müşteri kartı ilə bağlanır.",
        },
        {
          title: "Stok dəqiqliyi",
          text: "Sistem stok qalığını, qəbul qeydlərini və məhsul hərəkətlərini daha dəqiq nəzarətdə saxlamağa kömək edir.",
        },
        {
          title: "Satınalma nəzarəti",
          text: "Alışlar PR nömrəsi, faktiki qəbul, yol və gömrük xərcləri, maya dəyəri və təchizatçı borcu ilə birlikdə işləyir.",
        },
        {
          title: "Mobil və import dəstəyi",
          text: "Mobil satış ssenariləri və Excel importları onboarding və gündəlik işi sürətləndirir.",
        },
        {
          title: "AI köməkçi axınları",
          text: "AI suggestion, auto-reply, rəhbərlik overview-ləri və tövsiyələr operativ işi daha sürətli edir.",
        },
      ],
    },
    services: {
      eyebrow: "Platforma modulları",
      titleA: "Cer Vision Business Operations Platform daxilində",
      titleB: "hazır olan əsas",
      titleC: "modullar.",
      desc: "Bu bölmədə platformanın artıq işləyən əsas modulları və onların biznesdə nə iş gördüyü göstərilir.",
      cta: "Demo sorğusu göndər",
      items: [
        {
          title: "Satış və POS",
          desc: "Satışın yazılması, invoice, partial payment, borc və ödəniş vəziyyətinin izlənməsi üçün hazır əməliyyat axını.",
        },
        {
          title: "Satınalma Modulu",
          desc: "Təchizatçıdan alış, qəbul, yol və gömrük xərci, maya dəyəri yenilənməsi və supplier debt izlənməsi.",
        },
        {
          title: "Anbar və Stok",
          desc: "Məhsul qalığı, giriş-çıxış, minimum stok xəbərdarlığı, movement history və anbarlararası transferlər.",
        },
        {
          title: "Maliyyə və Xərclər",
          desc: "Cash və bank hesabları, gəlir-xərc hərəkətləri, əməliyyat tarixi və ümumi maliyyə nəzarəti.",
        },
        {
          title: "Müştəri İdarəetməsi",
          desc: "Müştəri profili, satış tarixçəsi, borc, ödəniş və ünsiyyət məlumatları bir kartda görünür.",
        },
        {
          title: "CRM",
          desc: "Lead, deal, task, activity və pipeline mərhələlərini new-dan won/lost-a qədər izləyən CRM təbəqəsi.",
        },
        {
          title: "Omnichannel Inbox",
          desc: "WhatsApp, Instagram, Telegram və Gmail mesajlarını bir ekranda toplamaq, cavablandırmaq və handoff etmək.",
        },
        {
          title: "AI Köməkçi",
          desc: "Mesajlara cavab təklifləri, auto-reply ssenariləri, rəhbərlik overview-ləri və tövsiyə axınları.",
        },
        {
          title: "Dashboard və BI",
          desc: "Summary, sales chart, expense chart, recent sales, recent purchases və low stock blokları ilə canlı görünürlük.",
        },
        {
          title: "Hesabatlar",
          desc: "Satış, stok, maliyyə, xərclər, alışlar, borclar və cost price üzrə idarəetmə hesabatları.",
        },
        {
          title: "İstifadəçilər və İcazələr",
          desc: "Rol əsaslı giriş, permission matrix və komanda görünürlüğü ilə təhlükəsiz idarəetmə.",
        },
        {
          title: "Import və Miqrasiya",
          desc: "Məhsul, müştəri, satış, alış, qalıq, balans və borc datalarını Excel ilə sistemə daşımaq.",
        },
        {
          title: "Mobil Satış",
          desc: "Field komandaları üçün mobil məhsul baxışı, müştəri yaratma, satış daxil etmə və şəxsi dashboard axınları.",
        },
        {
          title: "İnteqrasiyalar və Webhook-lar",
          desc: "WhatsApp, Instagram, Telegram, Gmail və digər servislərlə sinxron API və webhook əlaqələri.",
        },
        {
          title: "Texniki Baza",
          desc: "Laravel API, queue worker, scheduler, WhatsApp worker və modul service layer ilə böyüməyə hazır arxitektura.",
        },
      ],
    },
    platform: {
      eyebrow: "Əməliyyat axınları",
      titleA: "Platforma",
      titleB: "gündəlik işi",
      titleC: "necə idarə edir?",
      desc: "Modullar bir-birindən ayrı deyil. Satış, stok, maliyyə, CRM və yazışma axınları bir-biri ilə bağlı işləyir və eyni məlumat bazasını paylaşır.",
      tabs: [
        {
          name: "Satışın İdarəsi",
          desc: "Satışları SL nömrəsi ilə qeydə alın, rəsmi və ya nağd formatda işləyin, invoice yaradın, partial payment qəbul edin və qalan borcu avtomatik izləyin.",
        },
        {
          name: "Anbar İdarəetməsi",
          desc: "Real vaxt stok qalığı, minimum stok xəbərdarlığı, giriş-çıxış və məhsul hərəkətlərini anlıq izləyin.",
        },
        {
          name: "Anbar Transferləri",
          desc: "Anbarlar arası məhsul transferi, stock adjustment, movement history və sayım fərqlərini nəzarətdə saxlayın.",
        },
        {
          name: "Mühasibatlıq və Xərclər",
          desc: "Cash və bank hesabları, income/expense əməliyyatları, transaction history və gündəlik maliyyə hərəkətlərini bir yerdən idarə edin.",
        },
        {
          name: "Borclar və Ödənişlər",
          desc: "Müştəri və təchizatçı borcları, qismən ödənişlər, hesablaşma statusu və borc hərəkətlərini itkisiz izləyin.",
        },
        {
          name: "İstifadəçi və İcazələr",
          desc: "Rol əsaslı giriş, permission matrix, komanda görünürlüğü və audit-ready idarəetmə qurun.",
        },
        {
          name: "Müştəri İdarəetməsi",
          desc: "Müştəri profili, satış tarixçəsi, borc, ödəniş, yazışmalar və CRM əlaqələrini 360° görünüşdə birləşdirin.",
        },
        {
          name: "BI və Dashboard-lar",
          desc: "Summary, sales chart, expense chart, recent sales, recent purchases, low stock və notification bloklarını canlı izləyin.",
        },
        {
          name: "Hesabat Sistemləri",
          desc: "Satış, stok, maliyyə, xərclər, alışlar, cost price, customer debt və supplier debt report-larını bir paneldə toplayın.",
        },
        {
          name: "Omnichannel Inbox",
          desc: "WhatsApp, Instagram, Telegram və Gmail mesajlarını bir inbox-da toplayın, cavab verin, handoff edin və AI suggestion istifadə edin.",
        },
        {
          name: "CRM Task və Aktivliklər",
          desc: "Lead, deal, task, activity və pipeline mərhələlərini new-dan won/lost-a qədər komanda üzrə idarə edin.",
        },
        {
          name: "Import və Avtomatlaşdırma",
          desc: "Məhsul, müştəri, satış, alış, qalıq, borc və balans datalarını Excel importları ilə sürətli şəkildə sistemə daşıyın.",
        },
        {
          name: "AI-əsaslı Platformalar",
          desc: "AI chat, recommendation, usage log, automation rule, təhlükəsizlik nəzarəti və omni-channel auto-reply ilə ağıllı əməliyyatlar qurun.",
        },
      ],
      perf: "Performans — son 30 gün",
      m1: "Aktiv istifadəçilər",
      m2: "Avtomatlaşdırmalar",
      m3: "Aylıq qənaət edilən saatlar",
    },
    architecture: {
      eyebrow: "Sistem arxitekturası",
      titleA: "Platforma real",
      titleB: "əməliyyatları necə idarə edir?",
      desc: "Cer Vision Business Operations Platform daxilində olan modullar satış, satınalma, anbar, maliyyə, CRM və omni-channel AI axınlarını bir mərkəzdə birləşdirir.",
      panelEyebrow: "Platformadakı real əməliyyat axınları",
      panelTitle: "Satış, alış, borc və AI cavablandırma ayrıca alətlərdə dağınıq qalmır.",
      panelDesc:
        "Saytda görünən mətnlər birbaşa sistemin real imkanlarına uyğunlaşdırılıb: omni-channel inbox, auto-reply, debt tracking, purchase receiving, stock movement, CRM pipeline və live reporting eyni əməliyyat qatında işləyir.",
      channels: [
        { name: "WhatsApp", note: "Müştəri yazışmaları və sürətli cavab" },
        { name: "Instagram", note: "DM-lər, sorğular və satış dialoqları" },
        { name: "Telegram", note: "Operativ yazışmalar və dəstək axını" },
        { name: "Gmail", note: "Rəsmi e-poçt və servis tarixçəsi" },
        { name: "AI", note: "Auto-reply, suggestion və qərar dəstəyi" },
      ],
      coreTitle: "Mərkəzi Sistem",
      coreText:
        "Satış, satınalma, anbar, CRM, maliyyə, omnichannel inbox və AI agent modulları bütün əməliyyatları vahid məntiqdə koordinasiya edir.",
      blocks: [
        {
          title: "İstifadəçilər",
          text: "Satış, anbar, maliyyə, CRM və rəhbərlik rolları eyni sistemdə fərqli icazələrlə işləyir.",
        },
        {
          title: "Web Panel",
          text: "Dashboard, satış formaları, alış sənədləri, borc nəzarəti və hesabat ekranları gündəlik işi sürətləndirir.",
        },
        {
          title: "Məlumat Bazası",
          text: "Məhsullar, müştərilər, satışlar, alışlar, stok hərəkətləri və hesab əməliyyatları vahid bazada saxlanılır.",
        },
        {
          title: "Xarici İnteqrasiyalar",
          text: "WhatsApp, Instagram, Telegram, Gmail, webhook və digər servis inteqrasiyaları ilə məlumat axını sinxron işləyir.",
        },
      ],
      flows: [
        {
          title: "AI və omni-channel cavablandırma",
          text: "WhatsApp, Instagram, Telegram və Gmail-dən gələn mesajlar bir inbox-da toplanır, AI suggestion yaradılır, uyğun ssenaridə avtomatik cavab göndərilir və lazım olduqda operatora handoff edilir.",
        },
        {
          title: "Satış necə işləyir",
          text: "Satışlar SL nömrəsi ilə qeydə alınır, rəsmi və ya nağd formatda işlənir, invoice çıxarılır, partial payment qəbul olunur, ödənilməmiş məbləğ borc kimi müştəriyə yazılır və hesab balansı yenilənir.",
        },
        {
          title: "Alış və anbar necə işləyir",
          text: "Alışlar PR nömrəsi ilə aparılır, sifariş miqdarı və faktiki qəbul ayrıca izlənir, yol və gömrük xərcləri maya dəyərinə bölüşdürülür, məhsul qalıqları və qəbul qeydləri avtomatik yenilənir.",
        },
        {
          title: "CRM, borc və müştəri idarəetməsi",
          text: "Müştəri kartında satış tarixçəsi, borc, ödəniş, lead, deal, task və follow-up görünür; pipeline mərhələləri və komanda fəaliyyəti eyni platformada idarə olunur.",
        },
      ],
      badges: [
        "Təhlükəsiz məlumat qorunması",
        "Canlı dashboard və hesabatlar",
        "Cash və bank hesab nəzarəti",
        "Mobil satış və Excel import dəstəyi",
      ],
    },
    industries: {
      eyebrow: "Kimlər üçün uyğundur",
      titleA: "Bu platformadan ən çox",
      titleB: "hansı bizneslər faydalanır?",
      desc: "Sistem daha çox məhsul, borc, stok, filial və omni-channel ünsiyyəti olan bizneslər üçün praktik dəyər yaradır.",
      items: [
        {
          name: "FMCG Distribütorları",
          text: "Çox məhsullu stok, satış və borc nəzarəti olan distribusiya biznesləri.",
        },
        {
          name: "Topdan Satış Bazaları",
          text: "Qalıq, invoice, təchizatçı və müştəri hesablaşmalarını bir mərkəzdə görmək istəyən şirkətlər.",
        },
        {
          name: "Ehtiyat Hissə Təchizatçıları",
          text: "Minlərlə SKU, fərqli qiymət məntiqi və gecikən ödənişlərlə işləyən komandalar.",
        },
        {
          name: "Tikinti Materialı Şəbəkələri",
          text: "Filial, anbar və rəsmi/nağd satış məntiqi eyni anda işləyən mağazalar.",
        },
        {
          name: "Elektronika və Mebel Retail",
          text: "Müştəri balansı, geri dönüş və filiallararası stok izlənməsi vacib olan retail modelləri.",
        },
        {
          name: "Aptek və Tibbi Təchizat",
          text: "Qalıq dəqiqliyi, partiya nəzarəti və sürətli müştəri xidməti tələb edən bizneslər.",
        },
        {
          name: "Logistika Operatorları",
          text: "Sahə komandası, mobil satış və operativ yazışma axını ilə işləyən şirkətlər.",
        },
        {
          name: "Servis və Texniki Xidmət",
          text: "Müraciətlərin bir neçə kanaldan gəldiyi və follow-up nəzarətinin vacib olduğu komandalar.",
        },
        {
          name: "Regional Diler Şəbəkələri",
          text: "Mərkəz-filial koordinasiyası, borc və məhsul hərəkəti izlənməsi olan strukturlar.",
        },
        {
          name: "Agro və Qida Təchizatı",
          text: "Alış, stok və sürətli satış dövriyyəsinin birlikdə idarə olunduğu bizneslər.",
        },
        {
          name: "Korporativ Satınalma Ağır Şirkətlər",
          text: "Alış, qəbul, maya dəyəri və supplier debt nəzarətinə ehtiyac duyan qurumlar.",
        },
        {
          name: "Qarışıq Retail + Wholesale Modellər",
          text: "Eyni sistemdə həm pərakəndə, həm də topdan satış axını saxlayan şirkətlər.",
        },
      ],
    },
    process: {
      eyebrow: "Necə işləyirik",
      titleA: "Nəticələrə yönəlmiş",
      titleB: "inkişaf prosesi.",
      desc: "Səkkiz mərhələ, bir məsuliyyətli komanda, tam şəffaflıq.",
      steps: [
        {
          t: "Kəşf və Analiz",
          d: "Əməliyyatlarınızı, maraqlı tərəflərinizi və problem nöqtələrinizi xəritələşdiririk.",
        },
        { t: "Biznes Araşdırması", d: "Rəqabət konteksti, istifadəçi araşdırması və KPI-lar." },
        {
          t: "Sistem Arxitekturası",
          d: "Miqyas və təhlükəsizlik üçün modul, cloud-native arxitektura.",
        },
        { t: "UI/UX Dizayn", d: "Sürətli, gözəl və gündəlik istifadə üçün qurulmuş interfeyslər." },
        { t: "İnkişaf", d: "Davamlı çatdırılma və şəffaf proqresslə sprint-əsaslı mühəndislik." },
        { t: "Test", d: "Avtomatlaşdırılmış, manual və təhlükəsizlik testləri." },
        { t: "Yerləşdirmə", d: "Fasiləsiz buraxılışlar, müşahidə və komanda onboarding." },
        { t: "Dəstək və Böyümə", d: "SLA-lar, yeni funksiyalar və davamlı optimallaşdırma." },
      ],
    },
    innovation: {
      eyebrow: "Texnologiya və İnnovasiya",
      titleA: "Sabahı şəkilləndirən",
      titleB: "texnologiyalar",
      titleC: ", bu gün yerləşdirilir.",
      items: [
        { t: "Süni İntellekt", d: "Xüsusi modellər, copilotlar və daxili AI funksiyaları." },
        { t: "Avtomatlaşdırma", d: "Departamentlər arası birləşən iş axını avtomatlaşdırması." },
        { t: "Biznes İntellekti", d: "Canlı data üzərində qərarlar." },
        { t: "Data Analitikası", d: "Modern data stekləri: ingest, model, aktivləşdir." },
        {
          t: "Proses Optimallaşdırması",
          d: "İşin şirkətinizdə necə hərəkət etdiyini yenidən qurun.",
        },
        {
          t: "Rəqəmsal Transformasiya",
          d: "Strategiyadan müəssisə rolloutuna qədər tam proqramlar.",
        },
        { t: "Gələcək Texnologiyalar", d: "Agentlər, edge AI, real-time sistemlər və daha çox." },
      ],
    },
    cases: {
      eyebrow: "İstifadə ssenariləri",
      titleA: "Platforma real işdə",
      titleB: "hansı boşluqları bağlayır?",
      desc: "Aşağıdakı ssenarilər Cer Vision Business Operations Platform məhsulunun hansı əməliyyat problemlərini birləşmiş şəkildə həll etdiyini göstərir.",
      challenge: "Biznesdəki vəziyyət.",
      solution: "Platformanın cavabı.",
      items: [
        {
          tag: "FMCG / Distribusiya",
          title: "FMCG distribütorları, topdan satış bazaları və ehtiyat hissə təchizatçıları",
          challenge:
            "Geniş məhsul portfeli, çox anbarlı stok, fərqli qiymət məntiqi və gecikən ödənişlərlə işləyən distribusiya biznesləri.",
          solution:
            "Stok qalığı, satış, invoice, müştəri borcu, ödəniş, anbar transferi və rəhbərlik hesabatlarını bir əməliyyat qatında birləşdirir.",
          results: [
            { v: 0, s: "", l: "Çox anbarlı stok və məhsul nəzarəti" },
            { v: 0, s: "", l: "Satış, invoice və qaytarma axını" },
            { v: 0, s: "", l: "Müştəri borcu və ödəniş izlənməsi" },
          ],
        },
        {
          tag: "Retail / Multi-branch",
          title: "Mebel, elektronika, tikinti materialı və çox filiallı mağaza şəbəkələri",
          challenge:
            "Filiallar arasında stok fərqi, satış heyətinin sürətli faktura ehtiyacı və müştəri balanslarının dağınıq idarə olunduğu retail biznesləri.",
          solution:
            "Filial stokları, satış formaları, rəsmi və nağd satış məntiqi, müştəri hesablaşmaları və geri dönüşləri vahid paneldə toplayır.",
          results: [
            { v: 0, s: "", l: "Filiallar üzrə stok və transfer nəzarəti" },
            { v: 0, s: "", l: "Rəsmi və nağd satışların ayrılması" },
            { v: 0, s: "", l: "Müştəri balansı və qaytarma tarixçəsi" },
          ],
        },
        {
          tag: "Service / Logistics",
          title:
            "Logistika operatorları, servis komandaları, quraşdırma və texniki xidmət biznesləri",
          challenge:
            "Müştəri yazışmalarının WhatsApp, Instagram, Telegram və Gmail-də dağınıq qaldığı, sahə komandalarının mobil işlədiyi əməliyyat-ağır bizneslər.",
          solution:
            "Omnichannel inbox, AI cavablandırma, mobil satış, CRM task-ları və təqib axınları ilə komandanı eyni ritmdə saxlayır.",
          results: [
            { v: 0, s: "", l: "Bütün mesajların bir inbox-da toplanması" },
            { v: 0, s: "", l: "Mobil satış və sahə əməliyyatı dəstəyi" },
            { v: 0, s: "", l: "AI ilə cavab və növbəti addım tövsiyəsi" },
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: "Rəylər",
      titleA: "Nəticələri",
      titleB: "ölçən liderlərin etibarı.",
      items: [
        {
          n: "Aydan Məmmədli",
          r: "COO, Nordex Retail",
          t: "Cer Vision pərakəndə biznesimizin əməliyyat onurğasını yenidən qurdu. Komanda ciddi, cavabverən və həqiqətən strateji.",
        },
        {
          n: "Rəşad Əliyev",
          r: "CTO, Volta Logistics",
          t: "AI dispetçer platforması bir ildən az müddətdə özünü ödədi.",
        },
        {
          n: "Lara Həsənova",
          r: "CFO, Meridian Bank",
          t: "Yeddi ayda tənzimlənən kredit platforması çatdırdılar — və o, bir an belə dayanmayıb.",
        },
        {
          n: "Emin Quliyev",
          r: "CEO, Helix Manufacturing",
          t: "Vendordan daha çox — Cer Vision missiya-kritik hər şeydə etibar etdiyimiz tərəfdaşdır.",
        },
        {
          n: "Sevinc Kərimova",
          r: "VP Operations, CargoLink",
          t: "Aydınlıq, sənətkarlıq və nəticələr əvvəlki tərəfdaşlardan tamamilə fərqlidir.",
        },
        {
          n: "Murad Hacıyev",
          r: "Direktor, Atlas Group",
          t: "Biznesimizi həftələrlə anladılar və işçilərimizin sevdiyi bir sistem çatdırdılar.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      titleA: "Platforma haqqında",
      titleB: "ən vacib suallar.",
      items: [
        {
          q: "Cer Vision bu saytda nəyi təqdim edir?",
          a: "Bu sayt mövcud Cer Vision Business Operations Platform məhsulunun təqdimatıdır. Məqsəd satış, anbar, maliyyə, CRM, omnichannel yazışma və AI imkanlarının real olaraq sistemdə necə işlədiyini göstərməkdir.",
        },
        {
          q: "Platformada hansı əsas modullar var?",
          a: "Satış və POS, satınalma, anbar, maliyyə, müştəri idarəetməsi, CRM, omnichannel inbox, AI köməkçi axınları, hesabatlar, mobil satış və Excel import modulları hazır şəkildə mövcuddur.",
        },
        {
          q: "AI bu platformada nə iş görür?",
          a: "AI mesajlara cavab təklifi hazırlaya, müəyyən ssenarilərdə auto-reply göndərə, rəhbərlik üçün qısa analiz və tövsiyələr verə, riskli və gecikən əməliyyatları önə çıxara bilir.",
        },
        {
          q: "Satış və borc axını necə işləyir?",
          a: "Satışlar SL nömrəsi ilə qeydə alınır, rəsmi və ya nağd satış kimi işlənir, invoice çıxarılır, partial payment qəbul olunur və ödənilməmiş məbləğ avtomatik borc kimi müştəriyə yazılır.",
        },
        {
          q: "Alış və stok məntiqi necə qurulub?",
          a: "Alışlar PR nömrəsi ilə aparılır, sifariş və faktiki qəbul ayrıca izlənir, yol və gömrük xərcləri maya dəyərinə bölünür, stok həm rəsmi, həm də real qalıqda yenilənir.",
        },
        {
          q: "Texniki olaraq platforma nə üzərində qurulub?",
          a: "Cer Vision Business Operations Platform texniki olaraq Laravel API üzərində qurulub. Queue worker, scheduler, WhatsApp worker, rol və icazə sistemi, controller və service qatları ilə daha böyük istifadə yükünə genişlənə bilən modul arxitektura var.",
        },
      ],
    },
    cta: {
      tag: "Platformanı yaxından görün",
      title: "Cer Vision platforması sizin proseslərə uyğundurmu?",
      desc: "Əgər satış, anbar, maliyyə, borc, CRM və mesajlaşma axınlarını bir yerdə görmək istəyirsinizsə, demo və təqdimat üçün əlaqə saxlayın.",
      b1: "Demo İstə",
      b2: "Təqdimat Al",
      b3: "Əlaqə Saxla",
      formTitle: "Əlaqə saxla",
      formSub: "Bir iş günündə cavab veririk.",
      fName: "Tam ad",
      fEmail: "İş e-poçtu",
      fCompany: "Şirkət",
      fPhone: "Telefon nömrəsi",
      fDirection: "Şirkətin əsas istiqaməti",
      fActivity: "Fəaliyyət haqqında qısa qeyd",
      fTeam: "Komanda ölçüsü / filial sayı",
      fMsg: "Platforma ilə bağlı nəyi görmək istəyirsiniz?",
      fSend: "Göndər",
      fConfigNote: "Telegram ayarlarını əvvəlcə /admin səhifəsində daxil edin.",
      fSuccess: "Məlumatlar uğurla Telegram-a göndərildi.",
      fError: "Mesaj göndərilmədi. Telegram ayarlarını yoxlayın.",
    },
    footer: {
      tagline:
        "Cer Vision satış, anbar, maliyyə, CRM və omni-channel yazışmaları bir yerdə idarə edən vahid biznes platformasıdır.",
      cols: [
        { h: "Modullar", links: ["Satış və POS", "Satınalma", "Anbar", "Maliyyə", "CRM", "AI"] },
        {
          h: "Bizneslər",
          links: [
            "Distribusiya",
            "Retail",
            "Logistika",
            "Servis",
            "Regional dilerlər",
            "Topdan satış",
          ],
        },
        { h: "Axınlar", links: ["Satış", "Borc", "Stok", "Omnichannel", "Hesabatlar", "Import"] },
        {
          h: "Platforma",
          links: ["Haqqında", "Arxitektura", "Ssenarilər", "FAQ", "Demo", "Əlaqə"],
        },
      ],
      news: "Demo sorğusu",
      newsDesc: "Platforma təqdimatı, modul izahı və istifadə ssenariləri üçün bizə yazın.",
      emailPh: "E-poçt",
      join: "Qoşul",
      rights: "Bütün hüquqlar qorunur.",
      privacy: "Məxfilik",
      terms: "Şərtlər",
      cookies: "Cookies",
      security: "Təhlükəsizlik",
    },
  },

  ru: {
    nav: {
      about: "О платформе",
      services: "Модули",
      solutions: "Операции",
      industries: "Для кого",
      process: "Архитектура",
      cases: "Сценарии",
      contact: "Контакты",
      cta: "Запросить демо",
    },
    hero: {
      badge: "Единая бизнес-платформа для продаж, склада, финансов, CRM и AI",
      titleA: "Платформа, которая управляет",
      titleB: "ежедневной работой компании.",
      desc: "Этот сайт представляет продукт Cer Vision Business Operations Platform. Система объединяет продажи, закупки, склад, финансы, CRM, omnichannel-коммуникации и AI-помощника в одном рабочем контуре.",
      definitions: [
        {
          term: "ERP",
          meaning:
            "ERP — это система управления, которая объединяет финансы, склад, продажи, закупки и операционные процессы компании в одной платформе.",
        },
        {
          term: "CRM",
          meaning:
            "CRM — это система для управления отношениями с клиентами, воронкой продаж, лидами и историей сервиса.",
        },
        {
          term: "AI Agent",
          meaning:
            "AI agent — это интеллектуальный программный помощник, который понимает задачи, принимает решения и автоматизирует шаги в рабочих процессах.",
        },
      ],
      cta1: "Запросить демо",
      cta2: "Смотреть модули",
      stats: [
        { v: 12, s: "+", l: "Лет опыта" },
        { v: 180, s: "+", l: "Реализованных проектов" },
        { v: 40, s: "M+", l: "Обработанных транзакций" },
        { v: 99.9, s: "%", l: "Аптайм платформы" },
      ],
      trusted: "Нам доверяют команды из разных отраслей",
      cardAi: "ИИ-автоматизация",
      cardAiMetric: "+38% производительности",
      cardSec: "Корпоративная безопасность",
      cardSecMetric: "Готовность к ISO 27001",
    },
    about: {
      eyebrow: "О платформе",
      titleA: "Что такое Cer Vision?",
      titleB: "Единая операционная система компании.",
      desc: "Это не сайт о том, что мы когда-нибудь можем разработать. Это презентация продукта Cer Vision Business Operations Platform и его реальных модулей.",
      pillars: [
        {
          title: "Единая платформа",
          text: "Продажи, закупки, склад, финансы, CRM и сообщения работают не в разных программах, а в одной системе.",
        },
        {
          title: "Центральные данные",
          text: "Товары, клиенты, долги, оплаты, движение stock и переписка хранятся в едином операционном слое.",
        },
        {
          title: "Контроль и права",
          text: "Команды продаж, склада, финансов и руководства работают с ролевым доступом и прозрачной ответственностью.",
        },
        {
          title: "Расширяемая архитектура",
          text: "Laravel API, scheduler, queue worker и интеграции с WhatsApp, Gmail и Telegram позволяют системе расти дальше.",
        },
      ],
      timelineTitle: "Десятилетие создания того, что важно.",
      timeline: [
        {
          y: "2013",
          t: "Основание",
          d: "Cer Vision основана как студия кастомного ПО для бизнес-критичных систем.",
        },
        {
          y: "2016",
          t: "ERP-практика",
          d: "Запустили практику ERP и автоматизации бизнеса для среднего сегмента.",
        },
        {
          y: "2019",
          t: "AI Lab",
          d: "Открыли AI Lab, создающую промышленный ML и интеллектуальных агентов.",
        },
        {
          y: "2022",
          t: "Cloud-платформа",
          d: "Выпустили Cer Vision Platform — модульные решения на cloud-native стеке.",
        },
        {
          y: "2025",
          t: "Глобальный масштаб",
          d: "Реализуем программы трансформации для клиентов в 12 отраслях.",
        },
      ],
    },
    whyus: {
      eyebrow: "Преимущества платформы",
      titleA: "Почему компаниям удобно",
      titleB: "работать именно в этой системе?",
      desc: "Ключевые преимущества, которые уже заложены в Cer Vision Business Operations Platform.",
      items: [
        { title: "Доказанный опыт", text: "Десятилетие поставки бизнес-критичных систем." },
        {
          title: "Реальные инновации",
          text: "Мы не гонимся за хайпом — выбираем технологии, двигающие цифры.",
        },
        {
          title: "Корпоративная безопасность",
          text: "Безопасная архитектура, SSO, аудит, RBAC и шифрование.",
        },
        {
          title: "Создано для масштаба",
          text: "Cloud-native, модульно, наблюдаемо — готово к 10x росту.",
        },
        {
          title: "Долгосрочное партнёрство",
          text: "Мы остаёмся после запуска. Большинство клиентов — 5+ лет.",
        },
        {
          title: "Инженерия от бизнеса",
          text: "Начинаем с ваших KPI и двигаемся к правильному продукту.",
        },
        { title: "ДНК трансформации", text: "Полные программы: люди, процессы, платформы." },
        {
          title: "Надёжная доставка",
          text: "Предсказуемые спринты, прозрачные отчёты, чёткая ответственность.",
        },
      ],
    },
    services: {
      eyebrow: "Модули платформы",
      titleA: "Основные модули,",
      titleB: "которые уже есть",
      titleC: "в продукте.",
      desc: "Этот раздел показывает не абстрактные услуги, а реальные рабочие модули существующей системы.",
      cta: "Запросить демо",
      items: [
        {
          title: "Продажи и POS",
          desc: "Готовый поток для фиксации продаж, invoice, partial payment, долгов и статуса оплат.",
        },
        {
          title: "Модуль закупок",
          desc: "Закупки у поставщиков, приёмка, дорожные и таможенные расходы, себестоимость и supplier debt в одном процессе.",
        },
        {
          title: "Склад и stock",
          desc: "Остатки, движения товаров, minimum stock alerts и переводы между складами в live-режиме.",
        },
        {
          title: "Финансы и расходы",
          desc: "Cash и bank accounts, доходы, расходы, история транзакций и общий финансовый контроль.",
        },
        {
          title: "Управление клиентами",
          desc: "Профиль клиента, история продаж, долг, оплаты и коммуникация видны в одной карточке.",
        },
        {
          title: "CRM",
          desc: "Lead, deal, task, activity и pipeline stages от new до won/lost внутри одной CRM-логики.",
        },
        {
          title: "Omnichannel inbox",
          desc: "WhatsApp, Instagram, Telegram и Gmail собираются в один inbox с ответами, handoff и историей.",
        },
        {
          title: "AI-помощник",
          desc: "Reply suggestions, auto-reply сценарии, AI overview для руководства и быстрые рекомендации.",
        },
        {
          title: "Dashboard и BI",
          desc: "Summary, sales chart, expense chart, recent sales, recent purchases и low stock в одной панели.",
        },
        {
          title: "Отчёты",
          desc: "Продажи, stock, финансы, расходы, закупки, долги и cost price в управленческих отчётах.",
        },
        {
          title: "Пользователи и права",
          desc: "Role-based access, permission matrix и командная видимость для безопасной работы.",
        },
        {
          title: "Импорт и миграция",
          desc: "Товары, клиенты, продажи, закупки, остатки, балансы и долги можно быстро загружать через Excel.",
        },
        {
          title: "Mobile sales",
          desc: "Field-команды получают мобильный просмотр товаров, создание клиентов и внесение продаж.",
        },
        {
          title: "Интеграции и webhook-ы",
          desc: "WhatsApp, Instagram, Telegram, Gmail и другие сервисы связываются через API и webhook-потоки.",
        },
        {
          title: "Техническая основа",
          desc: "Laravel API, queue worker, scheduler, WhatsApp worker и модульный service layer для роста нагрузки.",
        },
      ],
    },
    platform: {
      eyebrow: "Операционные потоки",
      titleA: "Как платформа",
      titleB: "ведёт ежедневную",
      titleC: "работу бизнеса?",
      desc: "Модули работают не отдельно: продажи, stock, финансы, CRM и сообщения используют одну бизнес-логику и одну базу данных.",
      tabs: [
        {
          name: "Управление продажами",
          desc: "Фиксируйте продажи с номером SL, разделяйте официальные и наличные операции, выставляйте счета, принимайте частичные оплаты и автоматически контролируйте остаток долга.",
        },
        {
          name: "Управление запасами",
          desc: "Отслеживайте live-остатки, minimum stock alerts и все движения товара в реальном времени.",
        },
        {
          name: "Складские переводы",
          desc: "Управляйте перемещениями между складами, корректировками, инвентаризационными расхождениями и полной историей движения товаров.",
        },
        {
          name: "Бухгалтерия и расходы",
          desc: "Ведите cash и bank accounts, доходы, расходы, транзакции и ежедневные финансовые операции в одном контуре.",
        },
        {
          name: "Долги и оплаты",
          desc: "Контролируйте долги клиентов и поставщиков, частичные оплаты, статусы расчётов и историю debt movement без ручных таблиц.",
        },
        {
          name: "Пользователи и права",
          desc: "Настройте ролевой доступ, permission matrix, видимость по командам и audit-ready управление.",
        },
        {
          name: "Управление клиентами",
          desc: "Объединяйте профиль клиента, историю продаж, долги, оплаты, переписку и CRM-связи в одной 360° карточке.",
        },
        {
          name: "BI и dashboard-ы",
          desc: "Следите за summary, sales chart, expense chart, recent sales, recent purchases, low stock и notifications в live-режиме.",
        },
        {
          name: "Отчётные системы",
          desc: "Собирайте отчёты по продажам, складу, финансам, закупкам, расходам, cost price, клиентским и поставщицким долгам в одной системе.",
        },
        {
          name: "Omnichannel inbox",
          desc: "Собирайте сообщения из WhatsApp, Instagram, Telegram и Gmail, отвечайте, передавайте диалоги операторам и используйте AI suggestions.",
        },
        {
          name: "CRM-задачи и активности",
          desc: "Управляйте lead, deal, task, activity и этапами pipeline от new до won/lost по командам.",
        },
        {
          name: "Импорт и автоматизация",
          desc: "Загружайте товары, клиентов, продажи, закупки, остатки, долги и балансы через Excel и быстро запускайте систему.",
        },
        {
          name: "ИИ-платформы",
          desc: "Используйте AI chat, recommendations, usage logs, automation rules, контроль безопасности и omni-channel auto-reply в реальных операциях.",
        },
      ],
      perf: "Производительность — 30 дней",
      m1: "Активные пользователи",
      m2: "Автоматизации",
      m3: "Сэкономлено часов/мес",
    },
    architecture: {
      eyebrow: "Архитектура системы",
      titleA: "Как платформа управляет",
      titleB: "реальными бизнес-операциями?",
      desc: "Модули Cer Vision Business Operations Platform объединяют продажи, закупки, склад, финансы, CRM и omni-channel AI-потоки в одном центре управления.",
      panelEyebrow: "Реальные потоки внутри платформы",
      panelTitle:
        "Продажи, закупки, долги и AI-ответы больше не живут в разрозненных инструментах.",
      panelDesc:
        "Тексты на сайте теперь отражают реальные возможности системы: omnichannel inbox, auto-reply, debt tracking, purchase receiving, stock movement, CRM pipeline и live reporting работают в одном операционном слое.",
      channels: [
        { name: "WhatsApp", note: "Диалоги с клиентами и быстрые ответы" },
        { name: "Instagram", note: "DM, заявки и sales-коммуникация" },
        { name: "Telegram", note: "Оперативные обращения и поддержка" },
        { name: "Gmail", note: "Официальная почта и сервисная история" },
        { name: "AI", note: "Auto-reply, suggestions и поддержка решений" },
      ],
      coreTitle: "Центральная система",
      coreText:
        "Модули продаж, закупок, склада, CRM, финансов, omnichannel inbox и AI agents координируют все операции в единой логике.",
      blocks: [
        {
          title: "Пользователи",
          text: "Продажи, склад, финансы, CRM и руководство работают в одной системе с разными правами доступа.",
        },
        {
          title: "Web Panel",
          text: "Dashboard, формы продаж, документы закупок, контроль долгов и отчётные экраны ускоряют повседневную работу.",
        },
        {
          title: "База данных",
          text: "Товары, клиенты, продажи, закупки, движения stock и финансовые операции хранятся в единой базе.",
        },
        {
          title: "Внешние интеграции",
          text: "WhatsApp, Instagram, Telegram, Gmail, webhook и другие сервисы синхронно подключаются к операционному потоку.",
        },
      ],
      flows: [
        {
          title: "AI и omni-channel ответы",
          text: "Сообщения из WhatsApp, Instagram, Telegram и Gmail собираются в одном inbox, система генерирует AI suggestion, при подходящем сценарии отправляет автоответ и при необходимости переводит диалог на оператора.",
        },
        {
          title: "Как работают продажи",
          text: "Продажи фиксируются с номером SL, проводятся как официальные или наличные, по ним формируется invoice, принимаются partial payments, а неоплаченный остаток записывается как долг клиента и обновляет баланс счета.",
        },
        {
          title: "Как работают закупки и склад",
          text: "Закупки идут с номером PR, отдельно учитываются заказанное и фактически принятое количество, дорожные и таможенные расходы распределяются в себестоимость, а остатки и приёмка обновляются автоматически.",
        },
        {
          title: "CRM, долги и управление клиентами",
          text: "В карточке клиента видны история продаж, долг, оплаты, lead, deal, task и follow-up; этапы pipeline и активность команды контролируются в одной платформе.",
        },
      ],
      badges: [
        "Безопасная защита данных",
        "Живые dashboard-ы и отчёты",
        "Контроль cash и bank accounts",
        "Мобильные продажи и Excel-импорт",
      ],
    },
    industries: {
      eyebrow: "Для кого подходит",
      titleA: "Какие бизнесы получают",
      titleB: "от платформы максимум пользы?",
      desc: "Система особенно полезна компаниям с ассортиментом, складами, долгами, филиалами и несколькими каналами общения.",
      items: [
        {
          name: "FMCG-дистрибьюторы",
          text: "Компании с большим ассортиментом, stock-контролем, продажами и дебиторкой.",
        },
        {
          name: "Оптовые базы",
          text: "Бизнесы, которым нужно видеть остатки, invoices, поставщиков и клиентские расчёты в одном месте.",
        },
        {
          name: "Поставщики запчастей",
          text: "Команды с тысячами SKU, сложной ценовой логикой и отсрочками платежей.",
        },
        {
          name: "Сети стройматериалов",
          text: "Магазины, где одновременно важны филиалы, склады и несколько сценариев продаж.",
        },
        {
          name: "Retail-сети мебели и электроники",
          text: "Бизнесы, где критичны возвраты, клиентские балансы и межфилиальный stock.",
        },
        {
          name: "Логистика",
          text: "Операторы с полевыми командами, mobile sales и постоянной коммуникацией.",
        },
        {
          name: "Сервис и техобслуживание",
          text: "Компании, где обращения приходят из нескольких каналов и важен follow-up.",
        },
        {
          name: "Региональные дилеры",
          text: "Структуры с центром и филиалами, где нужен контроль движения товара и долгов.",
        },
        {
          name: "Agro и food supply",
          text: "Бизнесы, где закупки, stock и быстрый оборот продаж работают вместе.",
        },
        {
          name: "Закупочно-нагруженные компании",
          text: "Организации, которым нужен контроль закупок, приёмки, себестоимости и supplier debt.",
        },
        {
          name: "Retail + wholesale модели",
          text: "Компании, совмещающие розницу и опт в одной системе.",
        },
        {
          name: "Команды с omnichannel поддержкой",
          text: "Бизнесы, где WhatsApp, Instagram, Telegram и Gmail должны работать как один inbox.",
        },
      ],
    },
    process: {
      eyebrow: "Как мы работаем",
      titleA: "Процесс разработки,",
      titleB: "ориентированный на результат.",
      desc: "Восемь этапов, одна ответственная команда, полная прозрачность.",
      steps: [
        { t: "Discovery и анализ", d: "Картируем операции, стейкхолдеров и боль." },
        { t: "Бизнес-исследование", d: "Контекст, исследование пользователей и KPI." },
        { t: "Архитектура", d: "Модульная cloud-native архитектура." },
        { t: "UI/UX-дизайн", d: "Дизайн-системы для ежедневного использования." },
        { t: "Разработка", d: "Спринты с непрерывной доставкой." },
        { t: "Тестирование", d: "Авто, ручное и безопасность." },
        { t: "Релиз", d: "Zero-downtime и наблюдаемость." },
        { t: "Поддержка и рост", d: "SLA, новые фичи и оптимизация." },
      ],
    },
    innovation: {
      eyebrow: "Технологии и инновации",
      titleA: "Технологии,",
      titleB: "формирующие завтра",
      titleC: ", внедряются сегодня.",
      items: [
        { t: "Искусственный интеллект", d: "Кастомные модели и встроенный ИИ." },
        { t: "Автоматизация", d: "Workflow, накапливающие эффект." },
        { t: "BI", d: "Решения на живых данных." },
        { t: "Аналитика данных", d: "Современный data-стек." },
        { t: "Оптимизация процессов", d: "Пересборка движения работы." },
        { t: "Цифровая трансформация", d: "От стратегии до rollout." },
        { t: "Технологии будущего", d: "Агенты, edge AI, real-time." },
      ],
    },
    cases: {
      eyebrow: "Сценарии использования",
      titleA: "Какие операционные",
      titleB: "проблемы платформа закрывает?",
      desc: "Ниже показано, как Cer Vision Business Operations Platform решает реальные бизнес-задачи в ежедневной работе.",
      challenge: "Ситуация в бизнесе.",
      solution: "Ответ платформы.",
      items: [
        {
          tag: "FMCG / Дистрибуция",
          title: "FMCG-дистрибьюторы, оптовые базы и поставщики запчастей",
          challenge:
            "Бизнесы с широким ассортиментом, несколькими складами, разной логикой цен и постоянным контролем отсрочек и дебиторки.",
          solution:
            "Объединяет остатки, продажи, invoices, долги клиентов, оплаты, складские переводы и управленческую отчётность в одном операционном потоке.",
          results: [
            { v: 0, s: "", l: "Контроль stock по нескольким складам" },
            { v: 0, s: "", l: "Поток продаж, invoicing и возвратов" },
            { v: 0, s: "", l: "Учёт долгов и оплат клиентов" },
          ],
        },
        {
          tag: "Retail / Multi-branch",
          title: "Сети мебели, электроники, стройматериалов и другие multi-branch retailers",
          challenge:
            "Ритейл-бизнесы, где остатки между филиалами расходятся, продавцам нужны быстрые документы, а клиентские балансы ведутся слишком разрозненно.",
          solution:
            "Собирает филиальные остатки, формы продаж, официальные и наличные операции, расчёты с клиентами и возвраты в одной панели.",
          results: [
            { v: 0, s: "", l: "Контроль stock и переводов по филиалам" },
            { v: 0, s: "", l: "Разделение официальных и наличных продаж" },
            { v: 0, s: "", l: "История клиентских балансов и возвратов" },
          ],
        },
        {
          tag: "Service / Logistics",
          title: "Логистические операторы, сервисные команды, монтаж и техническое обслуживание",
          challenge:
            "Операционно-тяжёлые бизнесы, где переписка живёт в WhatsApp, Instagram, Telegram и Gmail, а полевая команда работает вне офиса.",
          solution:
            "Даёт omnichannel inbox, AI-ответы, mobile sales, CRM-задачи и потоки контроля, чтобы команда отвечала и двигалась быстрее.",
          results: [
            { v: 0, s: "", l: "Все сообщения в одном inbox" },
            { v: 0, s: "", l: "Поддержка mobile sales и field-операций" },
            { v: 0, s: "", l: "AI-подсказки для ответа и следующего шага" },
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: "Отзывы",
      titleA: "Доверие лидеров,",
      titleB: "измеряющих результаты.",
      items: [
        {
          n: "Айдан Маммадли",
          r: "COO, Nordex Retail",
          t: "Cer Vision перестроили операционный хребет нашего ритейла.",
        },
        {
          n: "Рашад Алиев",
          r: "CTO, Volta Logistics",
          t: "Их ИИ-платформа окупилась меньше чем за год.",
        },
        {
          n: "Лара Гасанова",
          r: "CFO, Meridian Bank",
          t: "Регулируемую платформу выдачи за семь месяцев.",
        },
        {
          n: "Эмин Гулиев",
          r: "CEO, Helix Manufacturing",
          t: "Больше чем вендор — партнёр для критичного.",
        },
        { n: "Севиндж Каримова", r: "VP Ops, CargoLink", t: "Ясность и качество — другая лига." },
        {
          n: "Мурад Гаджиев",
          r: "Директор, Atlas Group",
          t: "Поняли бизнес за недели и сделали систему, которую любят.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      titleA: "Главные вопросы",
      titleB: "о платформе.",
      items: [
        {
          q: "Что именно представляет этот сайт?",
          a: "Сайт показывает существующий продукт Cer Vision Business Operations Platform и объясняет, как в нём работают продажи, закупки, stock, финансы, CRM, omnichannel-коммуникации и AI-функции.",
        },
        {
          q: "Какие модули уже есть в системе?",
          a: "Продажи и POS, закупки, склад, финансы, клиенты, CRM, omnichannel inbox, AI-помощник, отчёты, mobile sales и Excel-импорт уже присутствуют в платформе.",
        },
        {
          q: "Что здесь делает AI?",
          a: "AI готовит suggestions для ответов, может запускать auto-reply по правилам, подсказывает руководству риски и помогает быстрее разбирать клиентские обращения.",
        },
        {
          q: "Как работает продажа и долг?",
          a: "Продажи идут с номером SL, могут проводиться по разным сценариям оплаты, по ним формируется invoice, принимаются partial payments, а неоплаченный остаток автоматически записывается в долг клиента.",
        },
        {
          q: "Как устроены закупки и stock?",
          a: "Закупки идут с номером PR, заказанное и фактически принятое количество отслеживаются отдельно, дорожные и таможенные расходы ложатся в себестоимость, а stock и приёмка обновляются автоматически.",
        },
        {
          q: "На чём технически построена платформа?",
          a: "Cer Vision Business Operations Platform работает на Laravel API. Есть queue worker, scheduler, отдельный WhatsApp worker, роли и права, service layer и архитектура, готовая к росту нагрузки.",
        },
      ],
    },
    cta: {
      tag: "Посмотрите платформу ближе",
      title: "Подходит ли Cer Vision под ваши процессы?",
      desc: "Если вам важно объединить продажи, склад, финансы, CRM, долги и переписку в одной системе, оставьте запрос на демо или презентацию.",
      b1: "Запросить демо",
      b2: "Получить презентацию",
      b3: "Связаться",
      formTitle: "Связаться",
      formSub: "Отвечаем в течение рабочего дня.",
      fName: "Имя",
      fEmail: "Рабочий e-mail",
      fCompany: "Компания",
      fPhone: "Телефон",
      fDirection: "Основное направление бизнеса",
      fActivity: "Кратко о деятельности компании",
      fTeam: "Размер команды / число филиалов",
      fMsg: "Что вы хотите увидеть в платформе?",
      fSend: "Отправить",
      fConfigNote: "Сначала укажите Telegram-настройки на странице /admin.",
      fSuccess: "Данные успешно отправлены в Telegram.",
      fError: "Сообщение не отправлено. Проверьте настройки Telegram.",
    },
    footer: {
      tagline:
        "Cer Vision — это единая бизнес-платформа для продаж, склада, финансов, CRM и omnichannel-коммуникаций.",
      cols: [
        { h: "Модули", links: ["Продажи и POS", "Закупки", "Склад", "Финансы", "CRM", "AI"] },
        {
          h: "Бизнесы",
          links: ["Дистрибуция", "Retail", "Логистика", "Сервис", "Дилерские сети", "Опт"],
        },
        { h: "Потоки", links: ["Продажи", "Долги", "Stock", "Omnichannel", "Отчёты", "Импорт"] },
        {
          h: "Платформа",
          links: ["О платформе", "Архитектура", "Сценарии", "FAQ", "Демо", "Контакты"],
        },
      ],
      news: "Запрос демо",
      newsDesc: "Напишите нам, если хотите получить презентацию платформы и разбор модулей.",
      emailPh: "E-mail",
      join: "Подписаться",
      rights: "Все права защищены.",
      privacy: "Политика",
      terms: "Условия",
      cookies: "Cookies",
      security: "Безопасность",
    },
  },

  en: {
    nav: {
      about: "About",
      services: "Services",
      solutions: "Solutions",
      industries: "Who It's For",
      process: "Architecture",
      cases: "Scenarios",
      contact: "Contact",
      cta: "Request Demo",
    },
    hero: {
      badge: "One business platform for sales, inventory, finance, CRM and AI",
      titleA: "The platform that runs",
      titleB: "your company's daily operations.",
      desc: "This website presents the Cer Vision Business Operations Platform product. The system brings sales, procurement, warehouse, finance, CRM, omnichannel messaging and AI assistant flows into one operating layer.",
      definitions: [
        {
          term: "ERP",
          meaning:
            "ERP is the management system that brings finance, inventory, sales, purchasing and operations together in one platform.",
        },
        {
          term: "CRM",
          meaning:
            "CRM is the system used to manage customer relationships, sales pipelines, leads and service history.",
        },
        {
          term: "AI Agent",
          meaning:
            "An AI agent is an intelligent software assistant that understands tasks, makes decisions and automates steps across workflows.",
        },
      ],
      cta1: "Request Demo",
      cta2: "Explore Modules",
      stats: [
        { v: 12, s: "+", l: "Years of expertise" },
        { v: 180, s: "+", l: "Projects delivered" },
        { v: 40, s: "M+", l: "Transactions handled" },
        { v: 99.9, s: "%", l: "Platform uptime" },
      ],
      trusted: "Trusted by teams across industries",
      cardAi: "AI Automation",
      cardAiMetric: "+38% throughput",
      cardSec: "Enterprise Security",
      cardSecMetric: "ISO 27001 ready",
    },
    about: {
      eyebrow: "About the Platform",
      titleA: "What is Cer Vision?",
      titleB: "A unified operating system for business.",
      desc: "This is not a generic agency website about what we might build. It is a presentation of the Cer Vision Business Operations Platform product and the real modules already inside it.",
      pillars: [
        {
          title: "Unified Platform",
          text: "Sales, purchasing, warehouse, finance, CRM and messaging work inside one system instead of separate tools.",
        },
        {
          title: "Central Data Layer",
          text: "Products, customers, debt, payments, stock movement and conversations live in one shared operational layer.",
        },
        {
          title: "Control & Permissions",
          text: "Sales, warehouse, finance and management teams work with role-based access and clear visibility.",
        },
        {
          title: "Scalable Architecture",
          text: "Laravel API, scheduler, queue workers and integrations with WhatsApp, Gmail and Telegram make the platform ready to grow further.",
        },
      ],
      timelineTitle: "A decade of building what matters.",
      timeline: [
        {
          y: "2013",
          t: "Founded",
          d: "Cer Vision founded as a custom software studio for business-critical systems.",
        },
        {
          y: "2016",
          t: "ERP Practice",
          d: "Launched the ERP and automation practice for mid-market.",
        },
        { y: "2019", t: "AI Lab", d: "Opened the AI Lab building production ML and agents." },
        {
          y: "2022",
          t: "Cloud Platform",
          d: "Released Cer Vision Platform — modular solutions on cloud-native.",
        },
        {
          y: "2025",
          t: "Global Scale",
          d: "Delivering transformation programs across 12 industries.",
        },
      ],
    },
    whyus: {
      eyebrow: "Platform Advantages",
      titleA: "Why businesses benefit from",
      titleB: "working inside this system.",
      desc: "The main strengths that already exist inside Cer Vision Business Operations Platform.",
      items: [
        { title: "Proven Experience", text: "A decade of shipping business-critical systems." },
        { title: "Real Innovation", text: "We adopt technologies that move your numbers." },
        {
          title: "Enterprise Security",
          text: "Secure-by-design, SSO, audit trails, RBAC, encryption.",
        },
        { title: "Built to Scale", text: "Cloud-native, modular, observable — ready for 10x." },
        {
          title: "Long-term Partnership",
          text: "We stay after launch. Most clients work with us 5+ years.",
        },
        { title: "Business-First Engineering", text: "We start from your KPIs." },
        { title: "Transformation DNA", text: "People, process, platforms — not just code." },
        { title: "Reliable Delivery", text: "Predictable sprints and transparent reporting." },
      ],
    },
    services: {
      eyebrow: "Platform Modules",
      titleA: "The core modules",
      titleB: "already available",
      titleC: "in the product.",
      desc: "This section presents working modules inside the product, not abstract service lines.",
      cta: "Request a demo",
      items: [
        {
          title: "Sales & POS",
          desc: "A ready flow for sales entry, invoices, partial payments, debt tracking and payment status control.",
        },
        {
          title: "Purchasing Module",
          desc: "Supplier purchases, receiving, road and customs costs, cost-price updates and supplier debt in one process.",
        },
        {
          title: "Warehouse & Stock",
          desc: "Live balances, product movement, minimum stock alerts and transfers between warehouses.",
        },
        {
          title: "Finance & Expenses",
          desc: "Cash and bank accounts, income, expenses, transaction history and day-to-day finance control.",
        },
        {
          title: "Customer Management",
          desc: "Each customer profile can show sales history, debt, payments and communication context in one view.",
        },
        {
          title: "CRM",
          desc: "Leads, deals, tasks, activities and pipeline stages from new to won/lost inside one CRM layer.",
        },
        {
          title: "Omnichannel Inbox",
          desc: "WhatsApp, Instagram, Telegram and Gmail come into one inbox with replies, handoff and conversation history.",
        },
        {
          title: "AI Assistant",
          desc: "Reply suggestions, auto-reply scenarios, leadership overviews and fast recommendations for daily work.",
        },
        {
          title: "Dashboards & BI",
          desc: "Summary, sales charts, expense charts, recent sales, recent purchases and low-stock alerts in one place.",
        },
        {
          title: "Reporting",
          desc: "Sales, stock, finance, expense, purchase, debt and cost-price reporting for management visibility.",
        },
        {
          title: "Users & Permissions",
          desc: "Role-based access, permission matrices and team visibility rules for safer operations.",
        },
        {
          title: "Imports & Migration",
          desc: "Products, customers, sales, purchases, balances and debt can be loaded quickly through Excel imports.",
        },
        {
          title: "Mobile Sales",
          desc: "Field teams get mobile product access, customer creation, sales entry and personal dashboards.",
        },
        {
          title: "Integrations & Webhooks",
          desc: "WhatsApp, Instagram, Telegram, Gmail and other services connect through synchronized APIs and webhook flows.",
        },
        {
          title: "Technical Foundation",
          desc: "Laravel API, queue workers, scheduler, WhatsApp worker and a modular service layer built for growth.",
        },
      ],
    },
    platform: {
      eyebrow: "Operational Flows",
      titleA: "How the platform",
      titleB: "handles daily",
      titleC: "business work.",
      desc: "The modules do not operate in isolation. Sales, stock, finance, CRM and messaging share one business logic and one data layer.",
      tabs: [
        {
          name: "Sales Management",
          desc: "Register sales with SL numbers, separate official and cash transactions, issue invoices, accept partial payments and track remaining debt automatically.",
        },
        {
          name: "Inventory Management",
          desc: "Track live stock, minimum stock alerts and every inbound or outbound product movement.",
        },
        {
          name: "Warehouse Transfers",
          desc: "Control warehouse-to-warehouse transfers, stock adjustments, count differences and full movement history.",
        },
        {
          name: "Accounting & Expenses",
          desc: "Manage cash and bank accounts, income, expenses, transaction history and day-to-day operational finance from one layer.",
        },
        {
          name: "Debt & Payment Control",
          desc: "Track customer and supplier debt, partial settlements, account status and debt movements without relying on manual spreadsheets.",
        },
        {
          name: "Users & Permissions",
          desc: "Set role-based access, permission matrices, team visibility rules and audit-ready governance.",
        },
        {
          name: "Customer Management",
          desc: "See customer profiles, sales history, debt, payments, conversations and CRM relationships in one 360-degree view.",
        },
        {
          name: "BI Dashboards",
          desc: "Monitor summary cards, sales charts, expense charts, recent sales, recent purchases, low-stock warnings and notifications live.",
        },
        {
          name: "Reporting Systems",
          desc: "Get sales, stock, finance, purchase, expense, customer debt, supplier debt and cost-price reporting in one place.",
        },
        {
          name: "Omnichannel Inbox",
          desc: "Collect WhatsApp, Instagram, Telegram and Gmail conversations in one inbox, reply faster, hand off to humans and use AI suggestions.",
        },
        {
          name: "CRM Tasks & Activities",
          desc: "Coordinate leads, deals, tasks, activities and pipeline stages from new to won/lost across teams.",
        },
        {
          name: "Imports & Automation",
          desc: "Bring in products, customers, sales, purchases, balances, debt and stock through Excel imports and bulk onboarding tools.",
        },
        {
          name: "AI-Powered Platforms",
          desc: "Use AI chat, recommendations, usage logs, automation rules, safety controls and omnichannel auto-replies inside real operations.",
        },
      ],
      perf: "Performance — last 30 days",
      m1: "Active users",
      m2: "Automations",
      m3: "Saved hours / mo",
    },
    architecture: {
      eyebrow: "System architecture",
      titleA: "How the platform runs",
      titleB: "real business operations",
      desc: "Cer Vision Business Operations Platform brings sales, procurement, inventory, finance, CRM and omnichannel AI workflows into one coordinated operating layer.",
      panelEyebrow: "Real flows inside the platform",
      panelTitle:
        "Sales, purchasing, debt control and AI replies no longer live in disconnected tools.",
      panelDesc:
        "The website copy now mirrors the actual platform behavior: omnichannel inbox, auto-replies, debt tracking, purchase receiving, stock movement, CRM pipeline and live reporting all work inside one operating layer.",
      channels: [
        { name: "WhatsApp", note: "Customer chats and fast replies" },
        { name: "Instagram", note: "DMs, inquiries and sales conversations" },
        { name: "Telegram", note: "Fast operational messaging and support" },
        { name: "Gmail", note: "Formal email and service history" },
        { name: "AI", note: "Auto-replies, suggestions and decision support" },
      ],
      coreTitle: "Central System",
      coreText:
        "Sales, procurement, warehouse, CRM, finance, omnichannel inbox and AI agent modules coordinate all operations through one shared business logic.",
      blocks: [
        {
          title: "Users",
          text: "Sales, warehouse, finance, CRM and management teams work inside one system with role-based permissions.",
        },
        {
          title: "Web Panel",
          text: "Dashboards, sales forms, purchase documents, debt controls and reporting screens keep daily work fast and structured.",
        },
        {
          title: "Data Layer",
          text: "Products, customers, sales, purchases, stock movement and finance transactions are stored in one operational data layer.",
        },
        {
          title: "External Integrations",
          text: "WhatsApp, Instagram, Telegram, Gmail, webhooks and connected services stay synchronized with the operating flow.",
        },
      ],
      flows: [
        {
          title: "AI and omnichannel replies",
          text: "Messages from WhatsApp, Instagram, Telegram and Gmail are collected in one inbox, the system generates AI suggestions, sends automatic replies when the rules allow it and hands conversations to an operator when needed.",
        },
        {
          title: "How sales work",
          text: "Sales are registered with SL numbers, processed as official or cash transactions, invoiced, partially paid when needed, and any unpaid amount is written into customer debt while account balances are updated.",
        },
        {
          title: "How purchasing and warehouse work",
          text: "Purchases are recorded with PR numbers, ordered quantity and actual received quantity are tracked separately, road and customs costs are distributed into cost price, and stock is updated in both official and real balances.",
        },
        {
          title: "CRM, debt and customer control",
          text: "Each customer record can show sales history, debt, payments, leads, deals, tasks and follow-ups so pipeline stages and team activity are managed from the same platform.",
        },
      ],
      badges: [
        "Secure data protection",
        "Live dashboards and reporting",
        "Cash and bank account control",
        "Mobile sales and Excel imports",
      ],
    },
    industries: {
      eyebrow: "Who It's For",
      titleA: "Which businesses get the",
      titleB: "most value from this platform?",
      desc: "The system fits businesses that manage product volume, debt, warehouses, branches and multi-channel communication.",
      items: [
        {
          name: "FMCG Distributors",
          text: "Businesses with wide catalogs, stock control, customer balances and fast sales cycles.",
        },
        {
          name: "Wholesale Depots",
          text: "Teams that need inventory, invoices, suppliers and settlements managed from one place.",
        },
        {
          name: "Spare Parts Suppliers",
          text: "Operations with thousands of SKUs, mixed pricing logic and delayed payments.",
        },
        {
          name: "Building Materials Chains",
          text: "Retailers that manage branches, warehouses and both official and cash sales.",
        },
        {
          name: "Furniture & Electronics Retail",
          text: "Businesses where returns, customer balances and branch stock accuracy matter every day.",
        },
        {
          name: "Medical & Pharmacy Supply",
          text: "Operations that need stock precision, fast service and controlled purchasing.",
        },
        {
          name: "Logistics Operators",
          text: "Companies with field teams, mobile sales and continuous operational messaging.",
        },
        {
          name: "Service & Maintenance Teams",
          text: "Businesses where requests come from multiple channels and follow-up discipline is critical.",
        },
        {
          name: "Regional Dealer Networks",
          text: "Centralized structures that need debt, branch and product movement visibility.",
        },
        {
          name: "Agro & Food Supply",
          text: "Businesses where purchasing, stock and rapid sales turnover must stay connected.",
        },
        {
          name: "Procurement-Heavy Companies",
          text: "Organizations that need receiving, cost allocation and supplier debt control.",
        },
        {
          name: "Mixed Retail + Wholesale Models",
          text: "Companies that run retail and wholesale flows inside one operating system.",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      titleA: "A process built for",
      titleB: "outcomes, not outputs.",
      desc: "Eight stages, one accountable team, total transparency.",
      steps: [
        { t: "Discovery & Analysis", d: "We map operations, stakeholders and pain points." },
        { t: "Business Research", d: "Context, user research and KPIs." },
        { t: "System Architecture", d: "Modular cloud-native architecture." },
        { t: "UI/UX Design", d: "Design systems for daily use." },
        { t: "Development", d: "Sprint-based engineering with CD." },
        { t: "Testing", d: "Automated, manual and security testing." },
        { t: "Deployment", d: "Zero-downtime rollouts and observability." },
        { t: "Support & Growth", d: "SLAs, new features and optimization." },
      ],
    },
    innovation: {
      eyebrow: "Technology & Innovation",
      titleA: "The technologies that",
      titleB: "shape tomorrow",
      titleC: ", deployed today.",
      items: [
        { t: "Artificial Intelligence", d: "Custom models and embedded AI features." },
        { t: "Automation", d: "Workflow automation that compounds." },
        { t: "Business Intelligence", d: "Decisions on live data." },
        { t: "Data Analytics", d: "Modern data stacks." },
        { t: "Process Optimization", d: "Re-engineer how work moves." },
        { t: "Digital Transformation", d: "Strategy to enterprise rollout." },
        { t: "Future Technologies", d: "Agents, edge AI, real-time systems." },
      ],
    },
    cases: {
      eyebrow: "Usage Scenarios",
      titleA: "What operational gaps",
      titleB: "does the platform close?",
      desc: "These examples show how Cer Vision Business Operations Platform solves real day-to-day business problems through one connected system.",
      challenge: "Business situation.",
      solution: "Platform response.",
      items: [
        {
          tag: "FMCG / Distribution",
          title: "FMCG distributors, wholesale depots and spare-parts suppliers",
          challenge:
            "Businesses with wide product catalogs, multiple warehouses, mixed pricing logic and constant pressure to manage delayed payments and receivables.",
          solution:
            "Brings stock, sales, invoicing, customer balances, payments, warehouse transfers and executive reporting into one operating workflow.",
          results: [
            { v: 0, s: "", l: "Multi-warehouse stock control" },
            { v: 0, s: "", l: "Sales, invoicing and returns flow" },
            { v: 0, s: "", l: "Customer debt and payment tracking" },
          ],
        },
        {
          tag: "Retail / Multi-branch",
          title: "Furniture, electronics, building-material and other multi-branch retail chains",
          challenge:
            "Retail businesses where branch stock drifts apart, sales staff need fast documents and customer balances are scattered across separate tools.",
          solution:
            "Combines branch stock, sales forms, official versus cash transactions, customer settlements and returns inside one operational panel.",
          results: [
            { v: 0, s: "", l: "Branch-level stock and transfer control" },
            { v: 0, s: "", l: "Official and cash sales separation" },
            { v: 0, s: "", l: "Customer balance and returns history" },
          ],
        },
        {
          tag: "Service / Logistics",
          title:
            "Logistics operators, service crews, installation teams and maintenance businesses",
          challenge:
            "Operations-heavy businesses where conversations live across WhatsApp, Instagram, Telegram and Gmail while field teams work away from the office.",
          solution:
            "Creates one omnichannel inbox, AI-assisted replies, mobile sales flow, CRM tasks and follow-up control so teams can respond and move faster.",
          results: [
            { v: 0, s: "", l: "All messages in one inbox" },
            { v: 0, s: "", l: "Mobile support for field operations" },
            { v: 0, s: "", l: "AI reply and next-step suggestions" },
          ],
        },
      ],
    },
    testimonials: {
      eyebrow: "Testimonials",
      titleA: "Trusted by leaders who",
      titleB: "measure outcomes.",
      items: [
        {
          n: "Aydan Mammadli",
          r: "COO, Nordex Retail",
          t: "Cer Vision rebuilt the operational backbone of our retail business.",
        },
        {
          n: "Rashad Aliyev",
          r: "CTO, Volta Logistics",
          t: "Their AI dispatch platform paid for itself in under a year.",
        },
        {
          n: "Lara Hasanova",
          r: "CFO, Meridian Bank",
          t: "They delivered a regulated lending platform in seven months.",
        },
        {
          n: "Emin Quliyev",
          r: "CEO, Helix Manufacturing",
          t: "More than a vendor — the partner we trust with anything mission critical.",
        },
        {
          n: "Sevinj Karimova",
          r: "VP Operations, CargoLink",
          t: "The clarity, craftsmanship and outcomes are in a different league.",
        },
        {
          n: "Murad Hajiyev",
          r: "Director, Atlas Group",
          t: "Shipped a system our people actually love using.",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      titleA: "The key questions",
      titleB: "about the platform.",
      items: [
        {
          q: "What exactly does this website present?",
          a: "It presents the existing Cer Vision Business Operations Platform product and explains how sales, procurement, stock, finance, CRM, omnichannel messaging and AI features work inside it.",
        },
        {
          q: "Which modules are already available in the system?",
          a: "Sales and POS, purchasing, warehouse, finance, customer management, CRM, omnichannel inbox, AI assistant flows, reporting, mobile sales and Excel imports are already part of the platform.",
        },
        {
          q: "What does AI do here?",
          a: "AI prepares reply suggestions, can send auto-replies in allowed scenarios, helps leadership spot risks and supports faster message handling across channels.",
        },
        {
          q: "How do sales and debt work?",
          a: "Sales are created with SL numbers, processed as official or cash transactions, invoiced, partially paid when needed, and any unpaid amount is automatically written into customer debt.",
        },
        {
          q: "How do purchasing and stock work?",
          a: "Purchases use PR numbers, ordered and received quantities are tracked separately, extra costs feed into cost price, and stock updates both official and real balances.",
        },
        {
          q: "What is the technical foundation of the platform?",
          a: "Cer Vision Business Operations Platform runs on Laravel API with queue workers, scheduler, a dedicated WhatsApp worker, role-based permissions, service layers and a modular architecture built for larger operational load.",
        },
      ],
    },
    cta: {
      tag: "See the platform up close",
      title: "Is Cer Vision a fit for your operation?",
      desc: "If you want sales, warehouse, finance, debt, CRM and messaging managed inside one system, contact us for a demo or product walkthrough.",
      b1: "Request Demo",
      b2: "Get Presentation",
      b3: "Contact Us",
      formTitle: "Get in touch",
      formSub: "We respond within one business day.",
      fName: "Full name",
      fEmail: "Work email",
      fCompany: "Company",
      fPhone: "Phone number",
      fDirection: "Core business direction",
      fActivity: "Short note about the business",
      fTeam: "Team size / number of branches",
      fMsg: "What would you like to see in the platform?",
      fSend: "Send message",
      fConfigNote: "Please add Telegram settings first on the /admin page.",
      fSuccess: "Your details were sent to Telegram successfully.",
      fError: "Message was not sent. Please check Telegram settings.",
    },
    footer: {
      tagline:
        "Cer Vision is a unified business platform for sales, warehouse, finance, CRM and omnichannel communication.",
      cols: [
        { h: "Modules", links: ["Sales & POS", "Purchasing", "Warehouse", "Finance", "CRM", "AI"] },
        {
          h: "Businesses",
          links: ["Distribution", "Retail", "Logistics", "Service", "Dealer Networks", "Wholesale"],
        },
        { h: "Flows", links: ["Sales", "Debt", "Stock", "Omnichannel", "Reporting", "Imports"] },
        { h: "Platform", links: ["About", "Architecture", "Scenarios", "FAQ", "Demo", "Contact"] },
      ],
      news: "Demo Request",
      newsDesc:
        "Write to us if you want a platform walkthrough, module explanation or product presentation.",
      emailPh: "Email",
      join: "Join",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookies",
      security: "Security",
    },
  },
};
