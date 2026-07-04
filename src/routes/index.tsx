import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/topsoil-hero.jpg.asset.json";
import conveyorAsset from "@/assets/topsoil-conveyor.jpg.asset.json";


export const Route = createFileRoute("/")({
  component: Index,
});

import { useState } from "react";

const PHONE = "845-551-7345";
const TEL = "+18455517345";

const products = [
  {
    tag: "Best Seller",
    title: "Organic Screened Topsoil",
    body: "Screened to ¾\" for a clean, consistent material. Suitable for lawns, gardens, fill, and large-scale grading. Tested and proven across hundreds of local projects.",
    image: conveyorAsset.url,
  },
  {
    tag: "Available",
    title: "Loam",
    body: "Quality loam for a wide range of construction and landscape applications. Call for pricing and to confirm current availability.",
  },
  {
    tag: "Approved",
    title: "Approved Septic Fill",
    body: "Fill material meeting state approval standards for septic system use. Proper drainage characteristics for compliant installation.",
  },
];

const services = [
  { title: "Organic Screened Topsoil", body: "Premium topsoil screened to ¾\" for consistent quality. Ideal for residential lawns, grading, raised beds, and large-scale land improvement projects.", badge: "Screened to ¾\"" },
  { title: "Loam", body: "Quality loam for construction sites, landscape grading, and agricultural use. Contact us for volume pricing and availability." },
  { title: "Approved Septic Fill", body: "State-approved fill material for septic system installations. Meets regulatory requirements for proper drainage and compaction.", badge: "Approved Material" },
  { title: "Septic System Installation", body: "Full septic system installation by an experienced family crew. We handle the complete job from planning through completion.", badge: "Full Service" },
  { title: "Driveway Installation", body: "Professional driveway installation and grading. From prep work to final surface, we build driveways that last. Call for a quote.", badge: "Full Service" },
  { title: "Bulk Wholesale Pricing", body: "Contractors, developers, and landscapers — volume pricing available for large orders. Call to discuss your project and get a custom quote.", badge: "Volume Pricing Available" },
];

const why = [
  { title: "Family Operated", body: "We're a family business, not a corporation. When you call, you talk to the people doing the work — no runaround, no middlemen." },
  { title: "Consistent Quality", body: "Every load is screened to ¾\" so you get the same clean, workable material every time. No surprises when the truck arrives on site." },
  { title: "Reliable Scheduling", body: "We deliver Monday through Friday. Call ahead and we'll coordinate timing to keep your project on track." },
  { title: "Straight Pricing", body: "$45 a yard. Call for a delivery quote. 3-yard minimum. No hidden fees. Large orders and extended delivery are negotiated honestly over the phone." },
  { title: "Local Knowledge", body: "We know Sullivan, Ulster, and Orange Counties. Our drivers understand local roads, job sites, and what contractors in this region actually need." },
  { title: "Approved Materials", body: "Our septic fill meets state approval standards. When your project requires certified materials, we have you covered without the hassle." },
];

const faqs = [
  ["What is the minimum order for delivery?", "The minimum delivery order is 3 cubic yards. This applies to all delivered material within our standard 25-mile service area from Ellenville, NY."],
  ["How much does delivery cost?", "Topsoil is $45 a yard. Call for a delivery quote. Within 25 miles of Ellenville. For larger orders or extended delivery distances, call us — we work it out on a per-project basis."],
  ["What counties do you serve?", "We primarily serve Sullivan, Ulster, and Orange Counties within 25 miles of Ellenville, NY. For projects outside that range, call us — we can often accommodate with advance planning."],
  ["What days do you deliver?", "Deliveries run Monday through Friday. Call ahead to schedule your delivery time and we'll work to fit your project timeline."],
  ["Do you offer wholesale pricing for contractors?", "Yes. Contractors, developers, and landscapers with ongoing or large-volume needs should call us directly to discuss wholesale pricing. We have relationships with regional contractors and are happy to work out volume arrangements."],
  ["Is your topsoil screened?", "Yes. Our organic topsoil is screened to ¾\", giving you clean, consistent material free of large debris. It's suitable for lawns, gardens, grading, fill, and construction applications."],
  ["Do you install septic systems?", "Yes. In addition to supplying approved septic fill, we offer full septic system installation. Call to discuss your project and get a quote."],
  ["Can you install driveways?", "Yes. We handle driveway installation and grading from prep through final surface. Call for a quote on your project."],
];

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  );
}

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`mb-3 font-sans text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-[color:var(--accent)]" : "text-[color:var(--primary)]"}`}>
      {children}
    </div>
  );
}

function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background font-serif text-foreground">
      {/* TOP BAR */}
      <div className="bg-primary px-6 py-2 text-center font-sans text-[0.82rem] tracking-wider text-primary-foreground">
        Mon–Fri Delivery&nbsp;&nbsp;|&nbsp;&nbsp;Minimum 3 Yards&nbsp;&nbsp;|&nbsp;&nbsp;25-Mile Radius from Ellenville, NY&nbsp;&nbsp;|&nbsp;&nbsp;
        <a href={`tel:${TEL}`} className="font-bold text-primary-foreground underline-offset-2 hover:underline">Call Now: {PHONE}</a>
      </div>

      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b-[3px] border-primary bg-[color:var(--secondary)] px-6 shadow-lg">
        <div className="mx-auto flex h-16 max-w-[1100px] items-center justify-between">
          <div className="whitespace-nowrap font-sans text-[1.05rem] font-bold uppercase tracking-[0.04em] text-white">
            Semonick <span className="text-[color:var(--accent)]">Acres</span> Farm
          </div>
          <ul className="hidden items-center gap-6 md:flex">
            {[
              ["Services", "#services"],
              ["Pricing", "#delivery"],
              ["Coverage", "#coverage"],
              ["FAQ", "#faq"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="font-sans text-[0.82rem] uppercase tracking-[0.06em] text-[color:var(--muted)] transition hover:text-[color:var(--accent)]">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href={`tel:${TEL}`} className="inline-flex items-center gap-2 border border-primary bg-primary px-3 py-1.5 font-sans text-[0.82rem] font-bold uppercase tracking-[0.04em] text-primary-foreground transition hover:bg-[color:var(--primary-dark)]">
                <PhoneIcon className="h-3.5 w-3.5" />
                {PHONE}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden bg-secondary text-white md:min-h-[480px]">
        <img
          src={heroAsset.url}
          alt="Conveyor pouring premium topsoil at Semonick Acres"
          className="absolute inset-0 h-full w-full object-cover brightness-110"
        />
        <div className="absolute inset-0 bg-secondary/60" />
        <div className="relative z-10 mx-auto max-w-[1100px] px-6 py-16 text-center md:py-20">
          <div className="mb-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Family Operated · Ellenville, NY
          </div>
          <h1 className="font-serif text-[clamp(2.4rem,5vw,3.75rem)] font-bold leading-[1.05] text-white">
            Premium <em className="not-italic text-[color:var(--primary)]">Topsoil</em>
            <br />
            Wholesale Direct
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/75">
            Organic screened topsoil, approved septic fill, and loam — delivered to Sullivan, Ulster, and Orange Counties. Built for contractors, landscapers, and developers who need volume they can count on.
          </p>
          <a href={`tel:${TEL}`} className="mt-8 inline-flex items-center gap-3 bg-primary px-6 py-4 font-sans text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:bg-[color:var(--primary-dark)]">
            <PhoneIcon className="h-4 w-4" />
            Call to Discuss Your Project · {PHONE}
          </a>
        </div>
      </section>

      {/* STRIP STATS */}
      <div className="border-y border-border bg-white">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-6 px-6 py-6 font-sans">
          {[
            ["$45 Yard", "Call for Delivery Quote"],
            ["3 Yd Min.", "Delivery Minimum"],
            ["25 Miles", "Radius from Ellenville"],
            ["Mon–Fri", "Delivery Days"],
            ["3 Counties", "Sullivan · Ulster · Orange"],
          ].map(([big, small], i, arr) => (
            <div key={small} className="flex items-center gap-6">
              <div className="flex flex-col">
                <strong className="font-serif text-xl font-bold text-primary">{big}</strong>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{small}</span>
              </div>
              {i < arr.length - 1 && <span className="hidden h-8 w-px bg-border md:block" />}
            </div>
          ))}
        </div>
      </div>

      {/* BUILDERS CTA */}
      <section className="bg-primary py-18 text-primary-foreground">
        <div className="mx-auto max-w-[1100px] px-6 py-4">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[2fr_1fr]">
            <div>
              <h2 className="font-serif text-[clamp(1.8rem,3.5vw,2.5rem)] font-bold leading-[1.15] text-white">
                Builders &amp; Contractors
                <br />— Let's Talk Volume
              </h2>
              <p className="mt-4 font-sans text-[0.95rem] leading-[1.7] text-white/80">
                Running a development, subdivision, or large landscaping contract? We supply contractors throughout the region with consistent product and reliable delivery. Volume pricing available. Ongoing project relationships welcome. One call gets you a quote.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3">
              <a href={`tel:${TEL}`} className="inline-flex items-center gap-2 bg-white px-8 py-4 font-sans text-base font-bold text-primary transition hover:bg-[color:var(--muted)]">
                <PhoneIcon className="h-4 w-4" />
                {PHONE}
              </a>
              <span className="font-sans text-[0.78rem] tracking-wide text-white/60">Bulk orders · Extended delivery · Custom scheduling</span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="relative overflow-hidden bg-secondary py-20">
        <img
          src={conveyorAsset.url}
          alt="Conveyor piling organic screened topsoil"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/80" />
        <div className="relative z-10 mx-auto max-w-[1100px] px-6">
          <SectionLabel light>Material Detail</SectionLabel>
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
            What You're <em className="not-italic text-primary">Getting</em>
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-[2px] bg-border md:grid-cols-3">
            {products.map((p) => (
              <div key={p.title} className="flex flex-col bg-white p-8">
                <div className="mb-5 flex h-[150px] items-center justify-center overflow-hidden bg-muted">
                  <img
                    src={p.image ?? heroAsset.url}
                    alt={p.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="mb-4 inline-block w-fit bg-[color:var(--field)] px-2 py-[3px] font-sans text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white">
                  {p.tag}
                </span>
                <h3 className="mb-2 font-serif text-lg font-bold text-[color:var(--secondary)]">{p.title}</h3>
                <p className="font-sans text-sm leading-[1.65] text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <SectionLabel>What We Offer</SectionLabel>
          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            Products <em className="not-italic text-primary">&amp;</em> Services
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="flex flex-col border border-border bg-white p-7 transition hover:border-primary hover:shadow-md">
                <h3 className="font-serif text-lg font-bold text-[color:var(--secondary)]">{s.title}</h3>
                <p className="mt-2 flex-1 font-sans text-sm leading-[1.65] text-muted-foreground">{s.body}</p>
                {s.badge && (
                  <span className="mt-4 inline-block w-fit border border-primary px-3 py-1 font-sans text-[0.7rem] font-bold uppercase tracking-[0.1em] text-primary">
                    {s.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-muted py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <SectionLabel>Why Semonick Acres</SectionLabel>
          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            What Sets Us <em className="not-italic text-primary">Apart</em>
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-[2px] bg-border md:grid-cols-2 lg:grid-cols-3">
            {why.map((w) => (
              <div key={w.title} className="bg-white p-7">
                <div className="mb-4 h-1 w-10 bg-primary" />
                <h3 className="font-serif text-lg font-bold text-[color:var(--secondary)]">{w.title}</h3>
                <p className="mt-2 font-sans text-sm leading-[1.65] text-muted-foreground">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING / DELIVERY BAND */}
      <section id="delivery" className="bg-white py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <SectionLabel>Straight Pricing</SectionLabel>
          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            <em className="not-italic text-primary">$45</em> Yard — call for Delivery Quote
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-muted-foreground">
            3-yard minimum. Within 25 miles of Ellenville, NY. Bulk and contractor pricing negotiated over the phone.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-[2px] bg-border md:grid-cols-4">
            {[
              ["$45", "Yard — call for quote"],
              ["3 Yd", "Minimum order"],
              ["25 mi", "Standard radius"],
              ["Mon–Fri", "Delivery days"],
            ].map(([n, l]) => (
              <div key={l} className="bg-white p-6">
                <div className="font-serif text-3xl font-bold text-primary">{n}</div>
                <div className="mt-1 font-sans text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section id="coverage" className="bg-muted py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="grid grid-cols-1 items-start gap-14 md:grid-cols-2">
            <div>
              <SectionLabel>Service Area</SectionLabel>
              <h2 className="font-serif text-4xl font-bold md:text-5xl">
                We Serve <em className="not-italic text-primary">Three Counties</em>
              </h2>
              <ul className="mt-7 list-none">
                {["Sullivan County", "Ulster County", "Orange County"].map((c) => (
                  <li key={c} className="flex items-center gap-3 border-b border-border py-3.5 font-sans text-[0.92rem]">
                    <span className="block h-2.5 w-2.5 bg-primary" />
                    {c}
                  </li>
                ))}
              </ul>
              <div className="mt-7 border-l-[3px] border-[color:var(--accent)] bg-white p-5 font-sans text-[0.85rem] leading-[1.65] text-muted-foreground">
                <strong className="text-foreground">Base of operations:</strong> Ellenville, New York.
                <br />
                Standard delivery within 25 miles. Extended delivery available by arrangement — call to confirm coverage for your site.
              </div>
            </div>

            <div className="bg-white p-4">
              <svg viewBox="0 0 500 420" xmlns="http://www.w3.org/2000/svg" className="block h-auto w-full">
                <rect width="500" height="420" fill="#F2EDE6" />
                <polygon points="80,80 240,72 248,180 230,210 200,220 170,240 120,250 80,240 60,200 62,140" fill="#C0302A" fillOpacity="0.15" stroke="#C0302A" strokeWidth="2" />
                <text x="145" y="165" fontFamily="Georgia,serif" fontSize="15" fill="#8B1A15" fontWeight="bold" textAnchor="middle">Sullivan</text>
                <text x="145" y="183" fontFamily="Arial,sans-serif" fontSize="11" fill="#8B1A15" textAnchor="middle">County</text>
                <polygon points="248,180 380,160 400,170 415,200 410,280 390,300 340,310 280,300 230,280 230,210 248,180" fill="#C0302A" fillOpacity="0.1" stroke="#C0302A" strokeWidth="2" />
                <text x="325" y="238" fontFamily="Georgia,serif" fontSize="15" fill="#8B1A15" fontWeight="bold" textAnchor="middle">Ulster</text>
                <text x="325" y="256" fontFamily="Arial,sans-serif" fontSize="11" fill="#8B1A15" textAnchor="middle">County</text>
                <polygon points="170,240 230,210 230,280 280,300 270,340 240,360 180,370 130,350 110,310 120,250" fill="#C0302A" fillOpacity="0.07" stroke="#C0302A" strokeWidth="2" />
                <text x="192" y="315" fontFamily="Georgia,serif" fontSize="15" fill="#8B1A15" fontWeight="bold" textAnchor="middle">Orange</text>
                <text x="192" y="333" fontFamily="Arial,sans-serif" fontSize="11" fill="#8B1A15" textAnchor="middle">County</text>
                <circle cx="212" cy="212" r="88" fill="none" stroke="#D4B878" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.8" />
                <circle cx="212" cy="212" r="7" fill="#C0302A" />
                <circle cx="212" cy="212" r="12" fill="none" stroke="#C0302A" strokeWidth="1.5" opacity="0.4" />
                <rect x="222" y="198" width="90" height="22" rx="2" fill="#1C1C1C" fillOpacity="0.82" />
                <text x="267" y="213" fontFamily="Arial,sans-serif" fontSize="11" fill="white" fontWeight="bold" textAnchor="middle">Ellenville, NY</text>
                <text x="288" y="140" fontFamily="Arial,sans-serif" fontSize="10" fill="#9B7B5A" textAnchor="middle" transform="rotate(-30,288,140)">25-mile radius</text>
                <rect x="338" y="340" width="148" height="68" rx="3" fill="white" fillOpacity="0.9" />
                <rect x="348" y="353" width="12" height="12" fill="#C0302A" fillOpacity="0.15" stroke="#C0302A" strokeWidth="1.5" />
                <text x="366" y="363" fontFamily="Arial,sans-serif" fontSize="11" fill="#1C1C1C">Service Counties</text>
                <circle cx="354" cy="381" r="5" fill="#C0302A" />
                <text x="366" y="385" fontFamily="Arial,sans-serif" fontSize="11" fill="#1C1C1C">Ellenville, NY</text>
                <line x1="348" y1="397" x2="360" y2="397" stroke="#D4B878" strokeWidth="1.5" strokeDasharray="4 3" />
                <text x="366" y="400" fontFamily="Arial,sans-serif" fontSize="11" fill="#1C1C1C">25-Mile Delivery</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="mx-auto max-w-[1100px] px-6">
          <SectionLabel>Common Questions</SectionLabel>
          <h2 className="font-serif text-4xl font-bold md:text-5xl">
            Frequently <em className="not-italic text-primary">Asked</em>
          </h2>

          <div className="mt-9 grid grid-cols-1 gap-[2px] bg-border md:grid-cols-2">
            {faqs.map(([q, a], i) => {
              const open = openFaq === i;
              return (
                <div key={q} className={`bg-white border-t-[3px] transition ${open ? "border-primary" : "border-transparent"}`}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left font-serif text-base leading-tight text-[color:var(--secondary)] hover:text-primary"
                  >
                    <span>{q}</span>
                    <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 fill-current transition ${open ? "rotate-180" : ""}`}>
                      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </button>
                  {open && (
                    <div className="px-7 pb-6 font-sans text-sm leading-[1.7] text-muted-foreground">{a}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[color:var(--secondary)] py-20 text-white">
        <div className="mx-auto max-w-[1100px] px-6">
          <SectionLabel light>Get in Touch</SectionLabel>
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
            Request a <em className="not-italic text-primary">Quote</em>
          </h2>

          <div className="mt-10 grid grid-cols-1 items-start gap-14 md:grid-cols-2">
            <div>
              <p className="font-sans text-[0.92rem] leading-[1.7] text-white/70">
                The fastest way to order or get a quote is a phone call. We're a small family operation — you'll talk to someone who can answer your questions and schedule your delivery on the spot.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  { label: "Call or Text", value: PHONE, href: `tel:${TEL}` },
                  { label: "Based In", value: "Ellenville, New York" },
                  { label: "Delivery Days", value: "Monday – Friday" },
                  { label: "Service Area", value: "Sullivan · Ulster · Orange Counties" },
                ].map((d) => (
                  <div key={d.label} className="flex items-start gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center bg-white/5">
                      <span className="block h-2 w-2 bg-[color:var(--accent)]" />
                    </div>
                    <div>
                      <h4 className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[color:var(--accent)]">{d.label}</h4>
                      {d.href ? (
                        <a href={d.href} className="mt-1 block font-sans text-[0.95rem] text-white hover:text-[color:var(--accent)]">{d.value}</a>
                      ) : (
                        <p className="mt-1 font-sans text-[0.95rem] text-white">{d.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <p className="font-sans text-[0.9rem] text-[color:var(--accent)]">
                  Thanks! We'll be in touch shortly. For faster service, call {PHONE}.
                </p>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="font-sans"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <Field label="First Name" name="fname" placeholder="John" />
                    <Field label="Last Name" name="lname" placeholder="Smith" />
                  </div>
                  <Field label="Phone Number" name="phone" type="tel" placeholder="845-555-0100" />
                  <div className="mb-4">
                    <label className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-wider text-white/50">What do you need?</label>
                    <select className="w-full appearance-none border border-white/15 bg-white/[0.07] px-4 py-3 text-sm text-white outline-none focus:border-primary">
                      <option value="" disabled>Select a service...</option>
                      <option>Topsoil Delivery</option>
                      <option>Loam Delivery</option>
                      <option>Approved Septic Fill</option>
                      <option>Septic System Installation</option>
                      <option>Driveway Installation</option>
                      <option>Bulk / Wholesale Order</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <Field label="Approximate Yards Needed" name="yards" placeholder="e.g. 10 yards" />
                  <div className="mb-4">
                    <label className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-wider text-white/50">Project Details</label>
                    <textarea rows={4} placeholder="Tell us about your project, site location, and timeline..." className="w-full border border-white/15 bg-white/[0.07] px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-primary" />
                  </div>
                  <button type="submit" className="mt-2 flex w-full items-center justify-center gap-2 bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:bg-[color:var(--primary-dark)]">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111] px-6 pb-7 pt-12 text-white/55">
        <div className="mx-auto mb-9 grid max-w-[1100px] grid-cols-1 gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="mb-3 font-sans text-[1.05rem] font-bold uppercase tracking-[0.04em] text-white">
              Semonick <span className="text-[color:var(--accent)]">Acres</span> Farm
            </div>
            <p className="font-sans text-[0.83rem] leading-[1.7]">
              A family-run wholesale topsoil operation based in Ellenville, New York. Serving Sullivan, Ulster, and Orange Counties with quality screened materials and reliable delivery.
            </p>
          </div>
          <FooterCol title="Services" items={["Organic Screened Topsoil", "Loam", "Approved Septic Fill", "Septic System Installation", "Driveway Installation"]} />
          <FooterCol title="Delivery Info" items={["$45 / cubic yard delivered", "3 yard minimum", "25-mile radius from Ellenville", "Mon – Fri delivery", PHONE]} />
        </div>
        <div className="mx-auto max-w-[1100px] border-t border-white/[0.07] pt-5 font-sans text-[0.76rem] text-white/30">
          © Semonick Acres Farm · Ellenville, NY · Sullivan, Ulster &amp; Orange Counties · <a href={`tel:${TEL}`} className="text-white/40 hover:text-white/60">{PHONE}</a>
        </div>
      </footer>
    </div>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="mb-1.5 block text-[0.72rem] font-semibold uppercase tracking-wider text-white/50">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border border-white/15 bg-white/[0.07] px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-primary"
      />
    </div>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="mb-3.5 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[color:var(--accent)]">{title}</h4>
      <ul className="list-none">
        {items.map((item) => (
          <li key={item} className="py-1 font-sans text-[0.83rem]">{item}</li>
        ))}
      </ul>
    </div>
  );
}
