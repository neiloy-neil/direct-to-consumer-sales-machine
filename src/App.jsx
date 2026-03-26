import { useEffect, useMemo, useRef, useState } from "react";
import {
  BatteryCharging,
  Check,
  ChevronDown,
  Headphones,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Truck,
  Volume2,
  X,
} from "lucide-react";

const features = [
  {
    title: "PureSilence Tech",
    description:
      "Adaptive noise cancellation that removes travel rumble, office chatter, and sharp city noise in real time.",
    icon: Volume2,
    tone: "from-slate-950 via-slate-900 to-slate-800",
  },
  {
    title: "40H Battery",
    description:
      "A full work week of listening with fast charging that gives you 8 hours from a 10-minute top-up.",
    icon: BatteryCharging,
    tone: "from-emerald-500 via-teal-500 to-cyan-500",
  },
  {
    title: "Ergonomic Fit",
    description:
      "Pressure-balanced ear cushions and a floating headband tuned for long flights and deep work sessions.",
    icon: Sparkles,
    tone: "from-zinc-100 via-white to-slate-100",
  },
  {
    title: "Spatial Audio",
    description:
      "A wider, more cinematic soundstage that keeps detail sharp whether you are in music, film, or calls.",
    icon: Headphones,
    tone: "from-indigo-500 via-violet-500 to-fuchsia-500",
  },
];

const reviews = [
  {
    quote:
      "I have tried every high-end brand, and nothing compares to the Nova Pro's clarity and comfort on long editing days.",
    name: "Maya R.",
    role: "Verified Buyer",
    accent: "from-zinc-900 to-zinc-700",
  },
  {
    quote:
      "The noise cancelling is absurdly good. Flights feel calmer, calls sound cleaner, and the battery just keeps going.",
    name: "Chris T.",
    role: "Verified Buyer",
    accent: "from-emerald-500 to-teal-500",
  },
  {
    quote:
      "This looks and feels premium in a way most tech products fake. The finish, fit, and sound all match the price.",
    name: "Sarah L.",
    role: "Verified Buyer",
    accent: "from-indigo-500 to-blue-500",
  },
];

const faqs = [
  {
    question: "How fast is shipping?",
    answer:
      "Orders ship within 24 hours and arrive in 2 to 4 business days with free express delivery in major regions.",
  },
  {
    question: "What does the 2-year warranty cover?",
    answer:
      "The warranty covers manufacturing issues, battery defects, and functional faults under normal daily use.",
  },
  {
    question: "Can I return the headphones if they are not right for me?",
    answer:
      "Yes. You have a 30-day money-back guarantee with a prepaid return label included in the box.",
  },
  {
    question: "Does Nova Pro support multipoint Bluetooth?",
    answer:
      "Yes. You can stay connected to two devices at once and switch smoothly between laptop and phone.",
  },
];

const purchases = [
  "Sarah from New York just bought the Nova Pro Bundle",
  "Avery from London added Nova Pro with 2 Year Warranty",
  "Noah from Toronto just picked Free Express Shipping",
  "Lina from Dubai just bought Nova Pro in Midnight",
];

function ProductVisual() {
  return (
    <div className="group relative mx-auto flex aspect-[1/1] w-full max-w-[34rem] items-center justify-center overflow-hidden rounded-[2.5rem] border border-black/5 bg-[radial-gradient(circle_at_top,#ffffff,transparent_42%),linear-gradient(135deg,#f7f7f8_0%,#ececf2_45%,#ffffff_100%)] p-8 shadow-[0_40px_120px_rgba(15,23,42,0.12)] transition-transform duration-500 hover:scale-105">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.18),transparent_24%),radial-gradient(circle_at_80%_28%,rgba(16,185,129,0.16),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(0,0,0,0.08),transparent_36%)]" />
      <div className="absolute -top-10 right-12 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-lg">
        In Stock
      </div>
      <div className="absolute bottom-8 left-8 rounded-full border border-black/10 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-700 shadow-lg backdrop-blur">
        Free Express Shipping
      </div>
      <div className="relative h-full w-full">
        <div className="absolute left-1/2 top-[14%] h-[38%] w-[38%] -translate-x-1/2 rounded-t-full border-[18px] border-zinc-900 border-b-0 shadow-[0_20px_60px_rgba(0,0,0,0.15)]" />
        <div className="absolute left-[18%] top-[33%] h-[38%] w-[26%] rounded-full bg-[linear-gradient(145deg,#161616,#3f3f46_55%,#0f0f11)] shadow-[inset_0_2px_12px_rgba(255,255,255,0.18),0_25px_50px_rgba(0,0,0,0.2)]" />
        <div className="absolute right-[18%] top-[33%] h-[38%] w-[26%] rounded-full bg-[linear-gradient(145deg,#161616,#3f3f46_55%,#0f0f11)] shadow-[inset_0_2px_12px_rgba(255,255,255,0.18),0_25px_50px_rgba(0,0,0,0.2)]" />
        <div className="absolute left-[23%] top-[38%] h-[28%] w-[16%] rounded-full border border-white/15 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.35),transparent_35%),linear-gradient(160deg,#0a0a0b,#23232a)]" />
        <div className="absolute right-[23%] top-[38%] h-[28%] w-[16%] rounded-full border border-white/15 bg-[radial-gradient(circle_at_40%_30%,rgba(255,255,255,0.35),transparent_35%),linear-gradient(160deg,#0a0a0b,#23232a)]" />
        <div className="absolute right-10 top-12 rounded-2xl border border-black/5 bg-white/80 p-4 shadow-xl backdrop-blur">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">Spatial Audio</p>
          <div className="mt-3 flex items-end gap-1">
            {[28, 38, 22, 46, 34, 50, 20, 36].map((height, index) => (
              <span
                key={index}
                className="w-2 rounded-full bg-gradient-to-t from-indigo-600 to-cyan-400"
                style={{ height }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StickyCartBar({ visible }) {
  return (
    <div
      className={`fixed inset-x-0 bottom-4 z-50 px-4 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-8 opacity-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 rounded-[2rem] border border-black/10 bg-white/88 px-5 py-4 shadow-[0_24px_90px_rgba(15,23,42,0.18)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Nova Pro Bundle
          </p>
          <div className="mt-1 flex items-center gap-3">
            <span className="text-2xl font-semibold tracking-tight text-zinc-950">$299</span>
            <span className="text-base text-zinc-400 line-through">$399</span>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
              Free Shipping
            </span>
          </div>
        </div>
        <a
          href="#bundle"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:scale-105"
        >
          <ShoppingCart className="h-4 w-4" />
          Add To Cart
        </a>
      </div>
    </div>
  );
}

function App() {
  const heroRef = useRef(null);
  const [showStickyCart, setShowStickyCart] = useState(false);
  const [purchaseIndex, setPurchaseIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = heroRef.current?.offsetHeight ?? 0;
      setShowStickyCart(window.scrollY > heroHeight - 180);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPurchaseIndex((current) => (current + 1) % purchases.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, []);

  const comparisonRows = useMemo(
    () => [
      ["Adaptive noise cancellation", true, false],
      ["40-hour battery life", true, false],
      ["Spatial audio", true, false],
      ["2-year warranty included", true, false],
      ["Free express shipping", true, false],
    ],
    [],
  );

  return (
    <div className="bg-white text-zinc-950">
      <header className="sticky top-0 z-40 border-b border-black/5 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#" className="text-lg font-semibold tracking-tight text-zinc-950">
            Nova Pro
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex">
            <a href="#features" className="transition hover:text-zinc-950">
              Features
            </a>
            <a href="#reviews" className="transition hover:text-zinc-950">
              Reviews
            </a>
            <a href="#faq" className="transition hover:text-zinc-950">
              FAQ
            </a>
          </nav>

          <a
            href="#bundle"
            className="inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:border-black hover:bg-black hover:text-white"
          >
            Shop Now
          </a>
        </div>
      </header>

      <main>
        <section
          ref={heroRef}
          className="relative overflow-hidden px-6 pb-16 pt-12 sm:px-8 lg:px-10 lg:pb-24 lg:pt-16"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.14),transparent_22%),linear-gradient(180deg,#ffffff_0%,#fdfdfd_55%,#f5f5f7_100%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white/75 px-4 py-2 text-sm text-zinc-700 shadow-sm backdrop-blur">
                <Star className="h-4 w-4 fill-current text-amber-400" />
                4.9/5 Rating (2,400+ Reviews)
              </div>

              <h1 className="mt-6 max-w-2xl text-5xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-6xl lg:text-7xl">
                Sound That Moves You. Comfort That Stays.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-600">
                The Nova Pro delivers studio-quality audio with 40-hour battery life,
                elite noise cancellation, and a premium build that looks as sharp as it sounds.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#bundle"
                  className="inline-flex items-center justify-center rounded-full bg-black px-7 py-4 text-base font-semibold text-white transition hover:scale-105"
                >
                  Buy Now - $299
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-7 py-4 text-base font-semibold text-zinc-950 transition hover:border-black"
                >
                  Explore Features
                </a>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 font-medium text-emerald-700">
                  <Truck className="h-4 w-4" />
                  Free Express Shipping
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 font-medium text-zinc-700">
                  <ShieldCheck className="h-4 w-4" />
                  30-Day Money Back Guarantee
                </span>
              </div>

              <p className="mt-4 text-sm font-medium text-rose-600">
                Only 12 units left in stock.
              </p>
            </div>

            <div className="order-1 lg:order-2">
              <ProductVisual />
            </div>
          </div>
        </section>

        <section id="features" className="px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                Why Nova Pro
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">
                The premium audio upgrade your routine actually feels.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className="group rounded-[2rem] border border-black/6 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1"
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.tone} ${
                        feature.title === "Ergonomic Fit" ? "text-zinc-900" : "text-white"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold tracking-tight text-zinc-950">
                      {feature.title}
                    </h3>
                    <p className="mt-4 leading-7 text-zinc-600">{feature.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-[#f5f5f7] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Wall Of Trust
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">
                  Deep reviews from buyers who know premium audio.
                </h2>
              </div>
              <div className="rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-700 shadow-sm">
                Rated by creators, commuters, and remote teams
              </div>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {reviews.map((review) => (
                <article
                  key={review.name}
                  className="overflow-hidden rounded-[2rem] border border-black/6 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]"
                >
                  <div className={`h-36 bg-gradient-to-br ${review.accent}`} />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-amber-400">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                      <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                        Verified Buyer
                      </span>
                    </div>
                    <p className="mt-5 text-lg leading-8 text-zinc-700">“{review.quote}”</p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[linear-gradient(135deg,#111827,#64748b)]" />
                      <div>
                        <p className="font-semibold text-zinc-950">{review.name}</p>
                        <p className="text-sm text-zinc-500">{review.role}</p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
            <div className="grid gap-0 md:grid-cols-3">
              <div className="border-b border-black/6 px-6 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500 md:border-b-0">
                Feature
              </div>
              <div className="border-b border-black/6 bg-zinc-950 px-6 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-white md:border-b-0">
                Nova Pro
              </div>
              <div className="px-6 py-5 text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
                Competitors
              </div>
            </div>

            {comparisonRows.map(([label, ours, theirs]) => (
              <div key={label} className="grid border-t border-black/6 md:grid-cols-3">
                <div className="px-6 py-5 text-base font-medium text-zinc-800">{label}</div>
                <div className="flex items-center gap-2 bg-zinc-950 px-6 py-5 text-white">
                  {ours ? (
                    <Check className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <X className="h-5 w-5 text-rose-400" />
                  )}
                  Included
                </div>
                <div className="flex items-center gap-2 px-6 py-5 text-zinc-600">
                  {theirs ? (
                    <Check className="h-5 w-5 text-emerald-500" />
                  ) : (
                    <X className="h-5 w-5 text-rose-500" />
                  )}
                  {theirs ? "Included" : "Often missing"}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="bundle" className="px-6 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-zinc-950 text-white shadow-[0_32px_120px_rgba(15,23,42,0.22)]">
            <div className="grid gap-10 px-8 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                  Ultimate Sound Bundle
                </p>
                <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                  Nova Pro + Travel Case + 2 Year Warranty.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
                  Everything you need for better travel, sharper focus, and premium daily listening in one high-converting offer.
                </p>

                <div className="mt-8 flex items-end gap-4">
                  <span className="text-2xl text-zinc-500 line-through">$399</span>
                  <span className="text-6xl font-semibold tracking-[-0.05em]">$299</span>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Nova Pro headphones",
                    "Protective travel case",
                    "2 year warranty coverage",
                    "Free express shipping",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-zinc-200">
                      <Check className="h-5 w-5 text-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] bg-white p-6 text-zinc-950">
                <div className="rounded-[1.75rem] bg-[linear-gradient(135deg,#ffffff_0%,#f5f5f7_60%,#ececf5_100%)] p-6 shadow-inner">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Bundle Checkout
                  </p>
                  <div className="mt-6 rounded-[1.5rem] border border-black/6 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-zinc-700">Nova Pro Bundle</span>
                      <span className="font-semibold text-zinc-950">$299</span>
                    </div>
                    <div className="mt-4 h-2 rounded-full bg-zinc-100">
                      <div className="h-2 w-4/5 rounded-full bg-gradient-to-r from-emerald-500 to-indigo-500" />
                    </div>
                    <p className="mt-3 text-sm text-zinc-500">82% of this batch is already claimed.</p>
                  </div>
                  <a
                    href="#"
                    className="mt-6 inline-flex w-full animate-pulse items-center justify-center rounded-full bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:scale-105"
                  >
                    Claim My Bundle Now
                  </a>
                  <p className="mt-4 text-center text-sm text-zinc-500">
                    Secure checkout with warranty and returns included.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#f5f5f7] px-6 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                FAQ
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-5xl">
                Everything buyers ask before checkout.
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <article
                    key={faq.question}
                    className="overflow-hidden rounded-[1.75rem] border border-black/6 bg-white shadow-sm"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-lg font-semibold text-zinc-950">{faq.question}</span>
                      <ChevronDown
                        className={`h-5 w-5 flex-none text-zinc-500 transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen ? (
                      <div className="border-t border-black/6 px-6 py-5 text-zinc-600">
                        {faq.answer}
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-black/6 px-6 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-zinc-950">Nova Pro</p>
            <p className="text-sm text-zinc-500">Premium audio engineered for focus, travel, and everyday listening.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm font-medium text-zinc-500">
            {["Visa", "Mastercard", "PayPal", "Apple Pay"].map((label) => (
              <span key={label} className="rounded-full border border-black/8 px-3 py-2">
                {label}
              </span>
            ))}
          </div>
        </div>
      </footer>

      <div className="fixed bottom-24 left-4 z-40 hidden rounded-2xl border border-black/8 bg-white/90 px-4 py-3 text-sm text-zinc-700 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur md:block">
        <p className="font-semibold text-zinc-950">Live purchase</p>
        <p className="mt-1">{purchases[purchaseIndex]}</p>
      </div>

      <StickyCartBar visible={showStickyCart} />
    </div>
  );
}

export default App;
