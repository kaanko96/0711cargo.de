(function () {
  "use strict";

  /* ---------------- i18n dictionary ---------------- */
  var dict = {
    de: {
      "nav.leistungen": "Leistungen",
      "nav.einsatzgebiet": "Einsatzgebiet",
      "nav.ueberuns": "Über uns",
      "nav.kontakt": "Kontakt",
      "nav.cta": "Anfrage senden",
      "nav.warum": "Warum wir",
      "hero.eyebrow": "Spedition & Transportvermittlung",
      "hero.title": "Zuverlässige Transporte – regional in Stuttgart, deutschlandweit & europaweit",
      "hero.lead": "0711 CARGO organisiert Ihre Transporte über ein Netzwerk sorgfältig ausgewählter Partnerunternehmen – von der Sprinterfahrt bis zum Sattelzug, als Teil- oder Komplettladung. Persönlich betreut von Kaan Kocaman, ohne Callcenter und ohne Umwege.",
      "hero.cta1": "Transportanfrage senden",
      "hero.cta2": "Jetzt anrufen",
      "hero.trust1": "5 Jahre Erfahrung",
      "hero.trust2": "Sprinter bis Sattelzug",
      "hero.trust3": "Express- & Sonderfahrten",
      "hero.trust4": "Gefahrguttransporte",
      "hero.slogan": "Ihre Fracht. Unser Netzwerk. Ihr Vorteil.",
      "hero.stat1": "Ø Reaktionszeit auf Ihre Anfrage",
      "hero.stat2": "häufig schon abholbereit",
      "coverage.legend1": "Region Stuttgart – kurze Wege",
      "coverage.legend2": "Deutschlandweit",
      "coverage.legend3": "Europaweit",
      "services.eyebrow": "Unsere Leistungen",
      "services.title": "Transportlösungen für jede Anforderung",
      "services.lead": "Als Spediteur organisieren wir Ihren Transport und beauftragen zuverlässige Partner-Frachtführer mit der Durchführung – flexibel, persönlich und auf Ihre Ladung abgestimmt.",
      "svc1.title": "Nah- & Fernverkehr",
      "svc1.text": "Zuverlässige Transporte im regionalen Nahverkehr sowie im Fernverkehr durch ganz Deutschland und Europa.",
      "svc1.tag": "Deutschland & Europa",
      "svc2.title": "Teil- & Komplettladungen",
      "svc2.text": "Vom kleinen Paket bis zur vollen Ladefläche – passendes Fahrzeug vom Sprinter bis zum Sattelzug für jede Sendungsgröße.",
      "svc2.tag": "Sprinter bis Sattelzug",
      "svc3.title": "Express- & Sonderfahrten",
      "svc3.text": "Unser Schwerpunkt: kurzfristige und dringende Transporte, wenn es schnell gehen muss – zuverlässig organisiert.",
      "svc3.tag": "Spezialgebiet",
      "svc4.title": "Gefahrguttransporte",
      "svc4.text": "Transportvermittlung von Gefahrgut über erfahrene Partnerunternehmen unter Einhaltung der geltenden Vorschriften.",
      "svc4.tag": "ADR-erfahrene Partner",
      "svc5.title": "Europaweite Spedition",
      "svc5.text": "Grenzüberschreitende Transporte innerhalb Europas – ein Ansprechpartner für die gesamte Strecke.",
      "svc5.tag": "Grenzüberschreitend",
      "svc6.title": "Persönliche Disposition",
      "svc6.text": "Ein fester Ansprechpartner von der Anfrage bis zur Zustellung – keine Warteschleifen, keine Callcenter.",
      "svc6.tag": "Direkter Kontakt",
      "coverage.eyebrow": "Einsatzgebiet",
      "coverage.title": "Regional verwurzelt, deutschlandweit und europaweit unterwegs",
      "coverage.lead": "Von Plochingen aus im Kreis Esslingen und der Region Stuttgart besonders stark vertreten – mit unserem Partnernetzwerk aber genauso zuverlässig in ganz Deutschland und Europa unterwegs.",
      "tier1.num": "01 · Regional",
      "tier1.title": "Region Stuttgart",
      "tier1.text": "Zuhause im Kreis Esslingen und der Region Stuttgart – kurze Wege und schnelle Reaktionszeiten.",
      "tier1.li1": "Plochingen, Esslingen, Stuttgart",
      "tier1.li2": "Kirchheim, Nürtingen, Göppingen",
      "tier1.li3": "Kurzfristige Abholungen möglich",
      "tier2.num": "02 · National",
      "tier2.title": "Deutschlandweit",
      "tier2.text": "Fernverkehr in alle Bundesländer – als Teil- oder Komplettladung, planbar oder als Sonderfahrt.",
      "tier2.li1": "Alle Bundesländer",
      "tier2.li2": "Feste und flexible Routen",
      "tier2.li3": "Großes Partnernetzwerk",
      "tier3.num": "03 · International",
      "tier3.title": "Europaweit",
      "tier3.text": "Grenzüberschreitende Transporte innerhalb Europas mit erfahrenen internationalen Partnern.",
      "tier3.li1": "West- & Osteuropa",
      "tier3.li2": "Zollrelevante Abwicklung auf Anfrage",
      "tier3.li3": "Ein Ansprechpartner, volle Strecke",
      "about.eyebrow": "Über uns",
      "about.title": "0711 CARGO – Ihr persönlicher Partner für Transportlogistik",
      "about.yearslabel": "Jahre Branchenerfahrung",
      "about.fact1": "Einzelunternehmen mit Sitz in Plochingen bei Stuttgart",
      "about.fact2": "Persönlich geführt von Kaan Kocaman",
      "about.fact3": "Direkter Draht zu Ihrem Ansprechpartner",
      "about.text1": "0711 CARGO wurde 2026 von Kaan Kocaman gegründet, der bereits seit fünf Jahren in der Speditionsbranche tätig ist. Als Einzelunternehmer organisiere ich Ihre Transporte über ein Netzwerk sorgfältig ausgewählter Partnerunternehmen – vom Sprinter bis zum Sattelzug.",
      "about.text2": "0711 CARGO betreibt keine eigenen Fahrzeuge, sondern vermittelt und disponiert Transportaufträge an geprüfte Frachtführer und Subunternehmer. So profitieren Sie von einem großen, flexiblen Fuhrpark bei gleichzeitig persönlicher Betreuung durch einen festen Ansprechpartner.",
      "value1.title": "Zuverlässigkeit",
      "value1.text": "Feste Zusagen, klare Kommunikation.",
      "value2.title": "Flexibilität",
      "value2.text": "Vom Sprinter bis zum Sattelzug.",
      "value3.title": "Schnelligkeit",
      "value3.text": "Spezialisiert auf Express- & Sonderfahrten.",
      "value4.title": "Erfahrung",
      "value4.text": "Auch bei Gefahrgut & komplexen Ladungen.",
      "contact.eyebrow": "Kontakt",
      "contact.title": "Sprechen wir über Ihren Transport",
      "contact.lead": "Am schnellsten geht es mit Beladeort, Zielort, Ladungsart und Wunschtermin – gerne per Telefon, E-Mail oder über das Formular.",
      "contact.hint1": "Region Stuttgart / Landkreis Esslingen",
      "contact.hint2": "Auch kurzfristige Anfragen willkommen",
      "contact.hint3": "Antwort in der Regel innerhalb eines Werktags",
      "form.name": "Name",
      "form.company": "Firma (optional)",
      "form.email": "E-Mail",
      "form.phone": "Telefon",
      "form.type": "Ladungsart",
      "form.type1": "Teilladung",
      "form.type2": "Komplettladung",
      "form.type3": "Express- / Sonderfahrt",
      "form.type4": "Gefahrgut",
      "form.type5": "Sonstiges",
      "form.message": "Nachricht (Beladeort, Zielort, Termin)",
      "form.submit": "Anfrage per E-Mail senden",
      "form.note": "Öffnet Ihr E-Mail-Programm mit einer vorausgefüllten Anfrage an dispo@0711cargo.de.",
      "form.success": "E-Mail-Programm wird geöffnet …",
      "why.eyebrow": "Warum 0711 CARGO",
      "why.title": "Der Unterschied liegt im Netzwerk",
      "why.lead": "Kein eigener Fuhrpark heißt nicht weniger Möglichkeiten – im Gegenteil: Sie profitieren von einem flexiblen Partnernetzwerk und einem festen Ansprechpartner.",
      "why1.title": "Flexibel statt festgefahren",
      "why1.text": "Wir verfügen über ein Netzwerk verschiedener Transportpartner und können die passende Transportlösung individuell auf Ihre Sendung abstimmen.",
      "why2.title": "Schnelle Abwicklung",
      "why2.text": "Kurze Kommunikationswege und persönliche Betreuung sorgen dafür, dass Ihre Transportanfrage schnell bearbeitet wird.",
      "why3.title": "Nationale & internationale Transporte",
      "why3.text": "Wir organisieren Transporte innerhalb Deutschlands sowie grenzüberschreitend in Europa.",
      "why4.title": "Faire & transparente Lösungen",
      "why4.text": "Wir suchen für Ihren Transport eine wirtschaftliche Lösung, ohne dabei die Zuverlässigkeit aus den Augen zu verlieren.",
      "why5.title": "Persönlicher Ansprechpartner",
      "why5.text": "Keine anonyme Hotline und kein kompliziertes Ticketsystem – Sie haben einen festen Ansprechpartner für Ihre Transportanfrage.",
      "why6.title": "Eine Anfrage – eine komplette Lösung",
      "why6.text": "Sie übermitteln uns die Transportdaten. Wir kümmern uns um die Organisation und Koordination des Transports.",
      "manifesto.eyebrow": "Unsere Philosophie",
      "manifesto.title": "Logistik ohne eigenen Fuhrpark – dafür mit mehr Flexibilität.",
      "manifesto.subtitle": "Ein eigener Fuhrpark bedeutet nicht automatisch die passende Transportlösung.",
      "manifesto.text": "0711 CARGO arbeitet bewusst mit einem flexiblen Netzwerk von Transportpartnern. Dadurch können wir unsere Transportlösungen an die jeweilige Fracht, Strecke und zeitliche Anforderung anpassen.",
      "manifesto.cta": "Sie benötigen einen Transport? Wir kümmern uns um die Organisation.",
      "manifesto.button": "Jetzt Anfrage senden",
      "footer.claim": "Transportvermittlung für Nah- und Fernverkehr – regional in Stuttgart, deutschlandweit und europaweit.",
      "footer.nav": "Navigation",
      "footer.legal": "Rechtliches",
      "footer.rights": "Alle Rechte vorbehalten.",
      "cookie.text": "Diese Website verwendet nur technisch notwendige Speicherung in Ihrem Browser (z. B. für Ihre Sprachauswahl und diese Cookie-Meldung). Es werden keine Tracking- oder Marketing-Cookies eingesetzt. Details in unserer",
      "cookie.link": "Datenschutzerklärung",
      "cookie.accept": "Verstanden"
    },
    en: {
      "nav.leistungen": "Services",
      "nav.einsatzgebiet": "Coverage",
      "nav.ueberuns": "About",
      "nav.kontakt": "Contact",
      "nav.cta": "Send request",
      "nav.warum": "Why us",
      "hero.eyebrow": "Freight Forwarding & Transport Brokerage",
      "hero.title": "Reliable transport – regional around Stuttgart, nationwide & across Europe",
      "hero.lead": "0711 CARGO arranges your transport through a network of carefully selected partner carriers – from van to full trailer, as part loads or full loads. Personally handled by Kaan Kocaman, no call centre, no detours.",
      "hero.cta1": "Send transport request",
      "hero.cta2": "Call now",
      "hero.trust1": "5 years of experience",
      "hero.trust2": "Van to full trailer",
      "hero.trust3": "Express & special transports",
      "hero.trust4": "Dangerous goods transport",
      "hero.slogan": "Your freight. Our network. Your advantage.",
      "hero.stat1": "average response time to your request",
      "hero.stat2": "often ready for pickup",
      "coverage.legend1": "Stuttgart region – short distances",
      "coverage.legend2": "Nationwide (Germany)",
      "coverage.legend3": "Across Europe",
      "services.eyebrow": "Our Services",
      "services.title": "Transport solutions for every need",
      "services.lead": "As a freight forwarder, we organise your transport and commission reliable partner carriers to carry it out – flexible, personal and matched to your cargo.",
      "svc1.title": "Regional & Long-Distance Haulage",
      "svc1.text": "Reliable transport in regional haulage as well as long-distance routes across Germany and Europe.",
      "svc1.tag": "Germany & Europe",
      "svc2.title": "Part & Full Truck Loads",
      "svc2.text": "From a single package to a full loading area – the right vehicle from van to full trailer for any shipment size.",
      "svc2.tag": "Van to full trailer",
      "svc3.title": "Express & Special Transports",
      "svc3.text": "Our speciality: short-notice and urgent transports when speed matters – organised reliably.",
      "svc3.tag": "Our speciality",
      "svc4.title": "Dangerous Goods Transport",
      "svc4.text": "Brokerage of dangerous goods transport through experienced partner carriers, in compliance with applicable regulations.",
      "svc4.tag": "ADR-experienced partners",
      "svc5.title": "Pan-European Forwarding",
      "svc5.text": "Cross-border transport throughout Europe – a single point of contact for the entire route.",
      "svc5.tag": "Cross-border",
      "svc6.title": "Personal Dispatch",
      "svc6.text": "One dedicated contact from request to delivery – no queues, no call centres.",
      "svc6.tag": "Direct contact",
      "coverage.eyebrow": "Coverage Area",
      "coverage.title": "Rooted regionally, active nationwide and across Europe",
      "coverage.lead": "Especially strong around Plochingen, the Esslingen district and the Stuttgart region – while our partner network keeps us just as reliable throughout Germany and Europe.",
      "tier1.num": "01 · Regional",
      "tier1.title": "Stuttgart Region",
      "tier1.text": "At home in the Esslingen district and the Stuttgart region – short distances and fast response times.",
      "tier1.li1": "Plochingen, Esslingen, Stuttgart",
      "tier1.li2": "Kirchheim, Nürtingen, Göppingen",
      "tier1.li3": "Short-notice pickups possible",
      "tier2.num": "02 · National",
      "tier2.title": "Nationwide (Germany)",
      "tier2.text": "Long-distance haulage to every German state – as part or full loads, scheduled or as a special run.",
      "tier2.li1": "All German states",
      "tier2.li2": "Fixed and flexible routes",
      "tier2.li3": "Large partner network",
      "tier3.num": "03 · International",
      "tier3.title": "Across Europe",
      "tier3.text": "Cross-border transport throughout Europe with experienced international partners.",
      "tier3.li1": "Western & Eastern Europe",
      "tier3.li2": "Customs-relevant handling on request",
      "tier3.li3": "One contact, the entire route",
      "about.eyebrow": "About Us",
      "about.title": "0711 CARGO – your personal partner for transport logistics",
      "about.yearslabel": "Years of industry experience",
      "about.fact1": "Sole proprietorship based in Plochingen, near Stuttgart",
      "about.fact2": "Personally run by Kaan Kocaman",
      "about.fact3": "Direct line to your contact person",
      "about.text1": "0711 CARGO was founded in 2026 by Kaan Kocaman, who has already worked in the freight forwarding industry for five years. As a sole trader, I organise your transports through a network of carefully selected partner companies – from van to full trailer.",
      "about.text2": "0711 CARGO does not operate its own vehicles; instead, it brokers and dispatches transport orders to vetted carriers and subcontractors. This gives you the benefit of a large, flexible fleet while still receiving personal support from one fixed contact.",
      "value1.title": "Reliability",
      "value1.text": "Firm commitments, clear communication.",
      "value2.title": "Flexibility",
      "value2.text": "From van to full trailer.",
      "value3.title": "Speed",
      "value3.text": "Specialised in express & special transports.",
      "value4.title": "Experience",
      "value4.text": "Including dangerous goods & complex loads.",
      "contact.eyebrow": "Contact",
      "contact.title": "Let's talk about your transport",
      "contact.lead": "The fastest way is to tell us the pickup location, destination, type of cargo and preferred date – by phone, email or the form below.",
      "contact.hint1": "Stuttgart region / Esslingen district",
      "contact.hint2": "Short-notice requests welcome",
      "contact.hint3": "We usually reply within one business day",
      "form.name": "Name",
      "form.company": "Company (optional)",
      "form.email": "Email",
      "form.phone": "Phone",
      "form.type": "Type of cargo",
      "form.type1": "Part load",
      "form.type2": "Full load",
      "form.type3": "Express / special transport",
      "form.type4": "Dangerous goods",
      "form.type5": "Other",
      "form.message": "Message (pickup location, destination, date)",
      "form.submit": "Send request by email",
      "form.note": "Opens your email program with a pre-filled request to dispo@0711cargo.de.",
      "form.success": "Opening your email program …",
      "why.eyebrow": "Why 0711 CARGO",
      "why.title": "The difference is in the network",
      "why.lead": "No own fleet doesn't mean fewer options – quite the opposite: you benefit from a flexible partner network and one fixed contact person.",
      "why1.title": "Flexible, not fixed",
      "why1.text": "We have a network of different transport partners and can tailor the right transport solution to your specific shipment.",
      "why2.title": "Fast processing",
      "why2.text": "Short communication paths and personal support mean your transport request is handled quickly.",
      "why3.title": "National & international transport",
      "why3.text": "We arrange transport within Germany as well as across borders throughout Europe.",
      "why4.title": "Fair & transparent solutions",
      "why4.text": "We look for an economical solution for your transport without ever losing sight of reliability.",
      "why5.title": "Personal point of contact",
      "why5.text": "No anonymous hotline and no complicated ticket system – you have one fixed contact person for your transport request.",
      "why6.title": "One request – one complete solution",
      "why6.text": "You send us the transport details. We take care of organising and coordinating the transport.",
      "manifesto.eyebrow": "Our Philosophy",
      "manifesto.title": "Logistics without our own fleet – but with more flexibility.",
      "manifesto.subtitle": "Owning a fleet doesn't automatically mean having the right transport solution.",
      "manifesto.text": "0711 CARGO deliberately works with a flexible network of transport partners. This lets us adapt our transport solutions to the specific cargo, route and timing required.",
      "manifesto.cta": "Need a transport? We'll take care of the organisation.",
      "manifesto.button": "Send a request now",
      "footer.claim": "Transport brokerage for regional and long-distance haulage – around Stuttgart, across Germany and throughout Europe.",
      "footer.nav": "Navigation",
      "footer.legal": "Legal",
      "footer.rights": "All rights reserved.",
      "cookie.text": "This website only stores technically necessary data in your browser (e.g. your language choice and this cookie notice). No tracking or marketing cookies are used. Details in our",
      "cookie.link": "privacy policy",
      "cookie.accept": "Got it"
    },
    tr: {
      "nav.leistungen": "Hizmetler",
      "nav.einsatzgebiet": "Hizmet Bölgesi",
      "nav.ueberuns": "Hakkımızda",
      "nav.kontakt": "İletişim",
      "nav.cta": "Talep gönder",
      "nav.warum": "Neden biz",
      "hero.eyebrow": "Nakliye ve Taşıma Aracılığı",
      "hero.title": "Güvenilir nakliye – Stuttgart bölgesinde, Almanya genelinde ve Avrupa çapında",
      "hero.lead": "0711 CARGO, taşımalarınızı dikkatle seçilmiş partner firmalardan oluşan bir ağ üzerinden organize eder – kamyonetten tıra kadar, parsiyel veya komple yük olarak. Kaan Kocaman tarafından çağrı merkezi olmadan, kişisel olarak yürütülür.",
      "hero.cta1": "Nakliye talebi gönder",
      "hero.cta2": "Hemen ara",
      "hero.trust1": "5 yıllık deneyim",
      "hero.trust2": "Kamyonetten tıra kadar",
      "hero.trust3": "Ekspres ve özel seferler",
      "hero.trust4": "Tehlikeli madde taşımacılığı",
      "hero.slogan": "Sizin yükünüz. Bizim ağımız. Sizin avantajınız.",
      "hero.stat1": "Talebinize ortalama yanıt süresi",
      "hero.stat2": "çoğunlukla kısa sürede alım hazır",
      "coverage.legend1": "Stuttgart bölgesi – kısa mesafeler",
      "coverage.legend2": "Almanya geneli",
      "coverage.legend3": "Avrupa çapında",
      "services.eyebrow": "Hizmetlerimiz",
      "services.title": "Her ihtiyaca uygun nakliye çözümleri",
      "services.lead": "Bir nakliye aracısı olarak taşımanızı organize ediyor ve güvenilir partner nakliyecilere yaptırıyoruz – esnek, kişisel ve yükünüze uygun şekilde.",
      "svc1.title": "Yurt İçi ve Uzun Mesafe Taşımacılık",
      "svc1.text": "Bölgesel taşımacılıkta olduğu gibi Almanya ve Avrupa genelinde uzun mesafe taşımacılıkta da güvenilir hizmet.",
      "svc1.tag": "Almanya ve Avrupa",
      "svc2.title": "Parsiyel ve Komple Yükler",
      "svc2.text": "Küçük bir koliden dolu bir yükleme alanına kadar – her gönderi büyüklüğü için kamyonetten tıra uygun araç.",
      "svc2.tag": "Kamyonetten tıra kadar",
      "svc3.title": "Ekspres ve Özel Seferler",
      "svc3.text": "Uzmanlık alanımız: hız önemli olduğunda kısa vadeli ve acil taşımalar – güvenilir şekilde organize edilir.",
      "svc3.tag": "Uzmanlık alanı",
      "svc4.title": "Tehlikeli Madde Taşımacılığı",
      "svc4.text": "Geçerli yönetmeliklere uygun olarak, deneyimli partner firmalar aracılığıyla tehlikeli madde taşıma aracılığı.",
      "svc4.tag": "ADR deneyimli partnerler",
      "svc5.title": "Avrupa Çapında Nakliye",
      "svc5.text": "Avrupa genelinde sınır ötesi taşımacılık – tüm güzergah için tek bir iletişim kişisi.",
      "svc5.tag": "Sınır ötesi",
      "svc6.title": "Kişisel Sevkiyat Yönetimi",
      "svc6.text": "Talepten teslimata kadar sabit bir iletişim kişisi – bekleme yok, çağrı merkezi yok.",
      "svc6.tag": "Doğrudan iletişim",
      "coverage.eyebrow": "Hizmet Bölgesi",
      "coverage.title": "Bölgesel köklere sahip, Almanya ve Avrupa genelinde faal",
      "coverage.lead": "Plochingen merkezli olarak Esslingen bölgesi ve Stuttgart çevresinde özellikle güçlü şekilde temsil ediliyoruz – partner ağımız sayesinde Almanya ve Avrupa genelinde de aynı güvenilirlikle hizmet veriyoruz.",
      "tier1.num": "01 · Bölgesel",
      "tier1.title": "Stuttgart Bölgesi",
      "tier1.text": "Esslingen bölgesi ve Stuttgart çevresinde yerleşik – kısa mesafeler ve hızlı tepki süreleri.",
      "tier1.li1": "Plochingen, Esslingen, Stuttgart",
      "tier1.li2": "Kirchheim, Nürtingen, Göppingen",
      "tier1.li3": "Kısa vadeli alım mümkündür",
      "tier2.num": "02 · Ulusal",
      "tier2.title": "Almanya Geneli",
      "tier2.text": "Tüm eyaletlere uzun mesafe taşımacılık – parsiyel veya komple yük olarak, planlı veya özel sefer şeklinde.",
      "tier2.li1": "Tüm Alman eyaletleri",
      "tier2.li2": "Sabit ve esnek güzergahlar",
      "tier2.li3": "Geniş partner ağı",
      "tier3.num": "03 · Uluslararası",
      "tier3.title": "Avrupa Çapında",
      "tier3.text": "Deneyimli uluslararası partnerlerle Avrupa genelinde sınır ötesi taşımacılık.",
      "tier3.li1": "Batı ve Doğu Avrupa",
      "tier3.li2": "Talep üzerine gümrük işlemleri desteği",
      "tier3.li3": "Tüm güzergah için tek iletişim kişisi",
      "about.eyebrow": "Hakkımızda",
      "about.title": "0711 CARGO – Nakliye lojistiğinde kişisel çözüm ortağınız",
      "about.yearslabel": "Yıllık sektör deneyimi",
      "about.fact1": "Plochingen, Stuttgart yakınında kurulu şahıs firması",
      "about.fact2": "Kaan Kocaman tarafından kişisel olarak yönetiliyor",
      "about.fact3": "İletişim kişinize doğrudan ulaşım",
      "about.text1": "0711 CARGO, nakliye sektöründe beş yıldır faaliyet gösteren Kaan Kocaman tarafından 2026 yılında kuruldu. Şahıs firması olarak taşımalarınızı, dikkatle seçilmiş partner firmalardan oluşan bir ağ üzerinden organize ediyorum – kamyonetten tıra kadar.",
      "about.text2": "0711 CARGO kendi araçlarını işletmez; bunun yerine nakliye taleplerini onaylı nakliyeciler ve alt yüklenicilere yönlendirir ve sevk eder. Böylece büyük ve esnek bir filonun avantajından yararlanırken, sabit bir iletişim kişisi tarafından kişisel destek alırsınız.",
      "value1.title": "Güvenilirlik",
      "value1.text": "Kesin taahhütler, net iletişim.",
      "value2.title": "Esneklik",
      "value2.text": "Kamyonetten tıra kadar.",
      "value3.title": "Hız",
      "value3.text": "Ekspres ve özel seferlerde uzmanlaşmış.",
      "value4.title": "Deneyim",
      "value4.text": "Tehlikeli madde ve karmaşık yüklerde de.",
      "contact.eyebrow": "İletişim",
      "contact.title": "Taşımanız hakkında konuşalım",
      "contact.lead": "En hızlı yol: yükleme yeri, varış yeri, yük türü ve istenen tarihi belirtmek – telefonla, e-posta ile veya formu kullanarak.",
      "contact.hint1": "Stuttgart bölgesi / Esslingen ilçesi",
      "contact.hint2": "Kısa vadeli talepler de memnuniyetle karşılanır",
      "contact.hint3": "Genellikle bir iş günü içinde yanıt veriyoruz",
      "form.name": "Ad Soyad",
      "form.company": "Firma (isteğe bağlı)",
      "form.email": "E-posta",
      "form.phone": "Telefon",
      "form.type": "Yük türü",
      "form.type1": "Parsiyel yük",
      "form.type2": "Komple yük",
      "form.type3": "Ekspres / özel sefer",
      "form.type4": "Tehlikeli madde",
      "form.type5": "Diğer",
      "form.message": "Mesaj (yükleme yeri, varış yeri, tarih)",
      "form.submit": "Talebi e-posta ile gönder",
      "form.note": "E-posta programınızı, dispo@0711cargo.de adresine önceden doldurulmuş bir talep ile açar.",
      "form.success": "E-posta programı açılıyor …",
      "why.eyebrow": "Neden 0711 CARGO",
      "why.title": "Fark, ağımızda",
      "why.lead": "Kendi filomuzun olmaması daha az seçenek anlamına gelmez – tam tersine: esnek bir partner ağından ve sabit bir iletişim kişisinden faydalanırsınız.",
      "why1.title": "Katı değil, esnek",
      "why1.text": "Farklı nakliye partnerlerinden oluşan bir ağa sahibiz ve doğru taşıma çözümünü gönderinize özel olarak uyarlayabiliriz.",
      "why2.title": "Hızlı işlem",
      "why2.text": "Kısa iletişim yolları ve kişisel destek, taşıma talebinizin hızlı bir şekilde işleme alınmasını sağlar.",
      "why3.title": "Ulusal ve uluslararası taşımacılık",
      "why3.text": "Almanya içinde ve Avrupa genelinde sınır ötesi taşımaları organize ediyoruz.",
      "why4.title": "Adil ve şeffaf çözümler",
      "why4.text": "Güvenilirlikten ödün vermeden taşımanız için ekonomik bir çözüm arıyoruz.",
      "why5.title": "Kişisel iletişim kişisi",
      "why5.text": "Anonim bir çağrı merkezi veya karmaşık bir bilet sistemi yok – taşıma talebiniz için sabit bir iletişim kişiniz var.",
      "why6.title": "Tek talep – eksiksiz bir çözüm",
      "why6.text": "Bize taşıma bilgilerini iletirsiniz. Taşımanın organizasyonu ve koordinasyonuyla biz ilgileniriz.",
      "manifesto.eyebrow": "Felsefemiz",
      "manifesto.title": "Kendi filomuz yok – ama daha fazla esneklik sunuyoruz.",
      "manifesto.subtitle": "Kendi filonuzun olması otomatik olarak doğru taşıma çözümüne sahip olduğunuz anlamına gelmez.",
      "manifesto.text": "0711 CARGO bilinçli olarak esnek bir nakliye partner ağıyla çalışır. Bu sayede taşıma çözümlerimizi ilgili yüke, güzergaha ve zaman gereksinimine göre uyarlayabiliriz.",
      "manifesto.cta": "Bir taşımaya mı ihtiyacınız var? Organizasyonuyla biz ilgileniriz.",
      "manifesto.button": "Şimdi talep gönder",
      "footer.claim": "Yurt içi ve uzun mesafe taşımacılık için nakliye aracılığı – Stuttgart bölgesinde, Almanya genelinde ve Avrupa çapında.",
      "footer.nav": "Menü",
      "footer.legal": "Yasal",
      "footer.rights": "Tüm hakları saklıdır.",
      "cookie.text": "Bu web sitesi, tarayıcınızda yalnızca teknik olarak gerekli verileri saklar (ör. dil tercihiniz ve bu çerez bildirimi). Herhangi bir izleme veya pazarlama çerezi kullanılmamaktadır. Ayrıntılar için bkz.",
      "cookie.link": "Gizlilik Politikası",
      "cookie.accept": "Anladım"
    }
  };

  var STORAGE_LANG = "cargo_lang";
  var STORAGE_COOKIE = "cargo_cookie_ack";

  function safeGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function safeSet(key, val) {
    try { localStorage.setItem(key, val); } catch (e) { /* ignore */ }
  }

  function applyLang(lang) {
    if (!dict[lang]) lang = "de";
    var table = dict[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (table[key] != null) el.textContent = table[key];
    });
    document.documentElement.setAttribute("lang", lang);
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    safeSet(STORAGE_LANG, lang);
  }

  function initLang() {
    var stored = safeGet(STORAGE_LANG);
    var lang = stored || "de";
    applyLang(lang);
    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  /* ---------------- mobile menu ---------------- */
  function initMenu() {
    var toggle = document.getElementById("menuToggle");
    var nav = document.getElementById("mainnav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- cookie banner ---------------- */
  function initCookieBanner() {
    var banner = document.getElementById("cookie-banner");
    if (!banner) return;
    var ack = safeGet(STORAGE_COOKIE);
    if (!ack) banner.hidden = false;
    var btn = document.getElementById("cookieAccept");
    if (btn) {
      btn.addEventListener("click", function () {
        safeSet(STORAGE_COOKIE, "1");
        banner.hidden = true;
      });
    }
  }

  /* ---------------- contact form -> mailto ---------------- */
  function initContactForm() {
    var form = document.getElementById("contactForm");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var company = form.company.value.trim();
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();
      var type = form.type.value;
      var message = form.message.value.trim();

      var bodyLines = [
        "Name: " + name,
        company ? "Firma: " + company : null,
        "E-Mail: " + email,
        phone ? "Telefon: " + phone : null,
        "Ladungsart: " + type,
        "",
        message
      ].filter(function (l) { return l !== null; });

      var subject = "Transportanfrage – " + (company || name || "0711 CARGO");
      var mailto = "mailto:dispo@0711cargo.de" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;

      var success = document.getElementById("formSuccess");
      if (success) success.classList.add("show");
    });
  }

  function initYear() {
    var y = new Date().getFullYear();
    document.querySelectorAll("#year").forEach(function (el) { el.textContent = y; });
  }

  /* ---------------- hero slider ---------------- */
  function initHeroSlider() {
    var slider = document.getElementById("heroSlider");
    var dotsWrap = document.getElementById("heroDots");
    if (!slider || !dotsWrap) return;
    var slides = Array.prototype.slice.call(slider.querySelectorAll(".hero-slide"));
    var dots = Array.prototype.slice.call(dotsWrap.querySelectorAll("button"));
    if (!slides.length) return;
    var current = 0;
    var timer = null;
    var reduceMotion = false;
    try { reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (s, idx) { s.classList.toggle("active", idx === current); });
      dots.forEach(function (d, idx) { d.classList.toggle("active", idx === current); });
    }
    function next() { show(current + 1); }
    function start() {
      if (reduceMotion) return;
      stop();
      timer = window.setInterval(next, 6000);
    }
    function stop() {
      if (timer) { window.clearInterval(timer); timer = null; }
    }

    dots.forEach(function (d) {
      d.addEventListener("click", function () {
        show(parseInt(d.getAttribute("data-goto"), 10) || 0);
        start();
      });
    });

    var heroSection = slider.closest(".hero");
    if (heroSection) {
      heroSection.addEventListener("mouseenter", stop);
      heroSection.addEventListener("mouseleave", start);
      heroSection.addEventListener("focusin", stop);
      heroSection.addEventListener("focusout", start);
    }

    show(0);
    start();
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();
    initMenu();
    initCookieBanner();
    initContactForm();
    initYear();
    initHeroSlider();
  });
})();
