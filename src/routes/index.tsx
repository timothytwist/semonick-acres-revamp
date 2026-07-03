import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/topsoil-hero.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const products = [
  {
    name: "Screened Topsoil",
    price: "$28",
    unit: "per cubic yard",
    desc: "Triple-screened, dark, and rock-free. Ready to spread for lawns, gardens, and grading.",
  },
  {
    name: "Premium Hardwood Mulch",
    price: "$34",
    unit: "per cubic yard",
    desc: "Aged and double-ground for a rich, uniform color that holds through the season.",
  },
  {
    name: "Garden Compost Blend",
    price: "$38",
    unit: "per cubic yard",
    desc: "Nutrient-dense compost cut with topsoil — ideal for raised beds and new plantings.",
  },
  {
    name: "River Stone & Gravel",
    price: "$46",
    unit: "per cubic yard",
    desc: "Clean, washed aggregate for drainage, driveways, and decorative borders.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-primary-foreground">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-accent font-serif text-lg font-bold text-accent-foreground">S</span>
            <span className="font-serif text-xl font-bold tracking-tight">Semonick Acres</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-primary-foreground/90 md:flex">
            <a href="#products" className="hover:text-accent">Products</a>
            <a href="#about" className="hover:text-accent">Our Farm</a>
            <a href="#delivery" className="hover:text-accent">Delivery</a>
            <a href="#contact" className="hover:text-accent">Contact</a>
          </div>
          <a href="#contact" className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition hover:brightness-95">
            Order Now
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
        <img
          src={heroAsset.url}
          alt="Conveyor pouring rich topsoil into a tall pile at Semonick Acres"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={550}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 md:pb-28">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Family Farm · Since 1978
          </span>
          <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.05] text-white text-balance md:text-7xl">
            The good dirt your garden has been waiting for.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            Screened topsoil, aged mulch, and garden blends — loaded fresh from the farm and delivered to your driveway.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#products" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition hover:brightness-95">
              Browse products
            </a>
            <a href="#contact" className="rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15">
              Get a delivery quote →
            </a>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-b border-border bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-10 md:grid-cols-4">
          {[
            ["45+", "Years family-run"],
            ["12k", "Yards delivered / yr"],
            ["3", "County service area"],
            ["6", "Days a week open"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-serif text-4xl font-bold text-accent">{n}</div>
              <div className="mt-1 text-sm text-primary-foreground/70">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">The Yard</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Sold by the yard, honest by the handful.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Everything we sell is screened, tested, and piled up right here on the farm. No middlemen, no mystery mixes.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="group flex flex-col rounded-lg border border-border bg-card p-6 transition hover:border-accent hover:shadow-md">
              <div className="flex items-baseline justify-between">
                <span className="font-serif text-3xl font-bold text-primary">{p.price}</span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">{p.unit}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold">{p.name}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
              <a href="#contact" className="mt-6 text-sm font-semibold text-primary transition group-hover:text-accent-foreground">
                Reserve a load →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* About + image split */}
      <section id="about" className="bg-muted">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <img
            src={soilHands}
            alt="A pair of hands cupping a mound of dark, crumbly screened topsoil"
            loading="lazy"
            width={1280}
            height={896}
            className="aspect-[4/3] w-full rounded-lg object-cover shadow-lg"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Our Farm</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Three generations. One pile at a time.</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The Semonick family has been working these fields since 1978. What started as a small hay operation
              has grown into the region's most trusted source for premium topsoil, mulch, and garden materials.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We still screen every load ourselves, and we still answer the phone by name.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-8">
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Screened on-site</dt>
                <dd className="mt-1 font-serif text-lg font-semibold">Every yard</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Locally sourced</dt>
                <dd className="mt-1 font-serif text-lg font-semibold">Grown here</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Delivery</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Same-week delivery, right to your driveway.</h2>
            <ul className="mt-8 space-y-4">
              {[
                ["Bulk delivery", "1 to 20 yards per load, dumped where you need it."],
                ["Farm pickup", "Bring your truck or trailer — we'll load you up in minutes."],
                ["Contractor accounts", "Net-30 billing and standing weekly orders for pros."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4 border-b border-border pb-4">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <div className="font-serif text-lg font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={deliveryTruck}
            alt="Dump truck loaded with fresh topsoil parked in front of a red barn"
            loading="lazy"
            width={1280}
            height={896}
            className="order-1 aspect-[4/3] w-full rounded-lg object-cover shadow-lg md:order-2"
          />
        </div>
      </section>

      {/* Yard photo band */}
      <section className="relative h-[420px] w-full overflow-hidden">
        <img
          src={mulchPiles}
          alt="Aerial view of mulch and topsoil piles at Semonick Acres yard"
          loading="lazy"
          width={1280}
          height={896}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/20" />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-xl text-white">
            <h2 className="font-serif text-4xl font-bold leading-tight md:text-5xl">
              Visit the yard. Kick the piles.
            </h2>
            <p className="mt-4 text-white/80">
              Open Monday–Saturday, 7am to 5pm. Bring the kids — they can meet the dog.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Get in touch</p>
            <h2 className="mt-2 font-serif text-4xl font-bold md:text-5xl">Call the farm. We'll pick up.</h2>
            <p className="mt-6 max-w-md text-primary-foreground/80">
              Tell us what you're building, planting, or fixing, and we'll help you figure out how many yards you need.
            </p>
            <div className="mt-10 space-y-6 border-t border-primary-foreground/20 pt-8">
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Phone</div>
                <a href="tel:+17245550142" className="mt-1 block font-serif text-2xl font-bold hover:text-accent">(724) 555-0142</a>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Yard</div>
                <div className="mt-1 font-serif text-xl">1428 Semonick Road<br />Rural Valley, PA 16249</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Hours</div>
                <div className="mt-1 font-serif text-xl">Mon–Sat · 7am – 5pm</div>
              </div>
            </div>
          </div>

          <form className="rounded-lg bg-background p-8 text-foreground shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <h3 className="font-serif text-2xl font-bold">Request a quote</h3>
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" placeholder="Jane Semonick" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</label>
                  <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" placeholder="(724) …" />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Yards</label>
                  <input className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" placeholder="e.g. 6" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">What do you need?</label>
                <textarea rows={4} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary" placeholder="Topsoil for a new lawn, delivered next week…" />
              </div>
              <button className="mt-2 w-full rounded-md bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
                Send request
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary text-secondary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-accent font-serif text-sm font-bold text-accent-foreground">S</span>
            <span className="font-serif text-lg font-bold">Semonick Acres</span>
          </div>
          <p className="text-sm text-secondary-foreground/70">© {new Date().getFullYear()} Semonick Acres. Grown, screened, and delivered with pride.</p>
        </div>
      </footer>
    </div>
  );
}
