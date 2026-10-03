'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BookOpenText, Compass, Sparkles, Star, Stars, PenSquare, ChevronRight } from 'lucide-react';

const featuredBooks = [
  {
    title: 'The Hollow Atlas',
    author: 'Mira Vel',
    accent: 'from-violet-500/80 via-indigo-500/60 to-sky-400/50',
    tint: 'bg-gradient-to-br from-violet-500/90 via-indigo-500/75 to-sky-400/60',
    blurb: 'A cartographer of impossible seas charts the emotional weather of vanished worlds.'
  },
  {
    title: 'Glasswish Opera',
    author: 'Iris Noma',
    accent: 'from-pink-500/75 via-fuchsia-500/65 to-violet-500/40',
    tint: 'bg-gradient-to-br from-pink-500/65 via-fuchsia-500/70 to-violet-400/60',
    blurb: 'An opera house suspended between debt, memory, and the ghosts of the future.'
  },
  {
    title: 'Lanterns for the Last Tide',
    author: 'Alden Quill',
    accent: 'from-cyan-500/80 via-emerald-500/65 to-teal-400/40',
    tint: 'bg-gradient-to-br from-cyan-500/80 via-emerald-500/70 to-teal-400/50',
    blurb: 'A quiet coastal epic where grief becomes a lighthouse and hope becomes a map.'
  },
  {
    title: 'Moonlit Index',
    author: 'Selene Hart',
    accent: 'from-amber-500/75 via-orange-500/60 to-rose-400/35',
    tint: 'bg-gradient-to-br from-amber-500/80 via-orange-500/65 to-rose-400/50',
    blurb: 'A literary mystery about the hidden archive of a vanished star.'
  }
];

const pillars = [
  {
    icon: BookOpenText,
    title: 'Original voices',
    text: 'We cultivate ambitious literary work that dares to turn silence into signal.'
  },
  {
    icon: Compass,
    title: 'Editorial precision',
    text: 'From concept through launch, we guide each story with cinematic care and clarity.'
  },
  {
    icon: Sparkles,
    title: 'Audience magnetism',
    text: 'We build loyal readerships through striking design, unforgettable narratives, and discovery.'
  }
];

const timeline = [
  'The manuscript meets its constellation.',
  'We shape the story for a global audience.',
  'Design, launch, and discovery across the culture sphere.',
  'Readers meet the book and carry it outward.'
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">
      <div className="starfield" />
      <div className="grid-fade absolute inset-0 opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-6 md:px-8">
        <header className="glass-panel sticky top-5 z-20 mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 shadow-panel">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-glow">
              <Stars size={18} />
            </div>
            <div>
              <p className="font-display text-2xl leading-none tracking-[0.16em] text-[#f4f0ff]">LUMA</p>
              <p className="text-[9px] uppercase tracking-[0.5em] text-slate-300">press</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a href="#catalog" className="transition hover:text-white">Catalog</a>
            <a href="#imprint" className="transition hover:text-white">Imprint</a>
            <a href="#process" className="transition hover:text-white">Process</a>
            <a href="#insights" className="transition hover:text-white">Journal</a>
          </nav>

          <button className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-cyan-300/40 hover:bg-cyan-400/10">
            Submit a manuscript
          </button>
        </header>

        <section className="relative mx-auto grid max-w-6xl gap-12 pb-10 pt-16 md:grid-cols-[1.1fr_0.9fr] md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-500/10 px-3 py-1.5 text-xs uppercase tracking-[0.28em] text-violet-100">
              <Star size={12} className="text-cyan-300" />
              New season / Spring 2026
            </div>

            <h1 className="max-w-xl font-display text-5xl leading-[0.9] text-white md:text-[6rem]">
              Stories that leave orbit.
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-300">
              We publish daring fiction, luminous essays, and visionary non-fiction for readers who want more than books — they want worlds.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]">
                Explore the catalog <ArrowRight size={16} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-cyan-400/40">
                Book a discovery call
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <div>
                <p className="font-display text-3xl text-white">120+</p>
                <p>international titles</p>
              </div>
              <div>
                <p className="font-display text-3xl text-white">42k</p>
                <p>monthly readers</p>
              </div>
              <div>
                <p className="font-display text-3xl text-white">18</p>
                <p>award finalists</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative h-[540px] w-full max-w-[500px]">
              <div className="absolute inset-10 rounded-full border border-violet-200/15" />
              <div className="absolute inset-20 rounded-full border border-cyan-200/10" />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              >
                <div className="absolute left-1/2 top-0 h-24 w-24 -translate-x-1/2 rounded-[2rem] border border-violet-300/20 bg-gradient-to-br from-violet-500/80 to-cyan-500/30 p-3 shadow-glow">
                  <div className="book-cover h-full w-full rounded-[1.4rem] bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-400/80 p-3 text-left">
                    <div className="flex h-full flex-col justify-between">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/70">Luma</span>
                      <div>
                        <p className="font-display text-2xl leading-none text-white">Hollow</p>
                        <p className="text-xs tracking-[0.24em] text-white/70">Atlas</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute right-7 top-1/3 h-28 w-28 rounded-[2rem] border border-pink-300/20 bg-gradient-to-br from-pink-500/75 to-violet-500/40 p-3 shadow-glow">
                  <div className="book-cover h-full w-full rounded-[1.4rem] bg-gradient-to-br from-pink-500/90 via-fuchsia-500/80 to-violet-500/40 p-3">
                    <div className="flex h-full flex-col justify-between">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-white/70">Echo</span>
                      <div>
                        <p className="font-display text-xl leading-none text-white">Glass</p>
                        <p className="text-[10px] tracking-[0.2em] text-white/70">Opera</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-10 left-10 h-32 w-32 rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-500/75 to-emerald-500/40 p-3 shadow-glow">
                  <div className="book-cover h-full w-full rounded-[1.4rem] bg-gradient-to-br from-cyan-500/85 via-emerald-500/70 to-teal-400/50 p-3">
                    <div className="flex h-full flex-col justify-between">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-white/70">Coast</span>
                      <div>
                        <p className="font-display text-lg leading-none text-white">Lanterns</p>
                        <p className="text-[9px] tracking-[0.2em] text-white/70">Tide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute bottom-0 right-0 w-[72%] rounded-[2rem] border border-white/10 bg-slate-950/60 p-5 shadow-panel backdrop-blur-md">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-slate-300">
                  <span>Featured</span>
                  <span>Q2 drop</span>
                </div>
                <p className="mt-4 font-display text-4xl leading-none text-white">The Hollow Atlas</p>
                <div className="mt-3 flex items-center justify-between text-sm text-slate-300">
                  <span>Mira Vel</span>
                  <span>New release</span>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="catalog" className="mx-auto max-w-6xl pb-10 pt-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-violet-200/80">Featured titles</p>
              <h2 className="mt-4 font-display text-4xl text-white md:text-5xl">Books in the lightstream</h2>
            </div>
            <button className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 md:inline-flex hover:border-violet-300/35">
              View full catalog <ChevronRight size={15} />
            </button>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-4">
            {featuredBooks.map((book, idx) => (
              <motion.article
                key={book.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.11, duration: 0.5 }}
                className="group relative"
              >
                <div className="porthole rounded-[2rem] p-4">
                  <div className={`book-cover h-80 rounded-[1.5rem] ${book.tint}`}>
                    <div className="noisy absolute inset-0" />
                    <div className="relative flex h-full flex-col justify-between p-5">
                      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/70">
                        <span>{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}</span>
                        <span>Luma</span>
                      </div>
                      <div>
                        <p className="font-display text-4xl leading-none text-white">{book.title.split(' ')[0]}</p>
                        <p className="mt-2 text-xs uppercase tracking-[0.26em] text-white/70">{book.title.split(' ').slice(1).join(' ')}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-3xl text-white">{book.title}</h3>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-300">New</span>
                  </div>
                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-violet-200/80">{book.author}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{book.blurb}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="imprint" className="mx-auto max-w-6xl py-16">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass-panel rounded-[2rem] p-8 shadow-panel">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">Our imprint</p>
              <h2 className="mt-4 font-display text-5xl leading-none text-white">Curated for the curious.</h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                At Luma Press, we champion books that open portals: intimate literary fiction, elegant nonfiction, strange speculative worlds, and essays with sensory depth.
              </p>
              <div className="mt-8 space-y-4">
                {pillars.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/70 to-cyan-400/35 text-cyan-100">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{title}</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div id="process" className="rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(130,95,255,0.12),_transparent_30%),linear-gradient(180deg,rgba(10,14,27,0.86),rgba(8,12,25,0.96))] p-8 shadow-panel">
              <p className="text-xs uppercase tracking-[0.32em] text-violet-200/80">Publishing process</p>
              <h3 className="mt-4 font-display text-5xl text-white">From manuscript to milestone.</h3>
              <div className="mt-8 space-y-5">
                {timeline.map((step, idx) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-300/40 bg-violet-500/10 text-sm font-semibold text-violet-100">
                        {idx + 1}
                      </span>
                      {idx < timeline.length - 1 && <span className="mt-2 h-full w-px bg-white/10" />}
                    </div>
                    <div className="pb-5">
                      <p className="pt-1 text-base text-slate-200">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="mx-auto max-w-6xl py-16">
          <div className="glass-panel rounded-[2rem] p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/80">From the journal</p>
                <h2 className="mt-4 font-display text-5xl text-white">Notable notes from the editorial orbit.</h2>
              </div>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 hover:border-cyan-300/35">
                Read more dispatches <ArrowRight size={15} />
              </button>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                ['Why literary worlds feel alive', 'A reflection on the architecture of atmosphere, detail, and emotional gravity.'],
                ['The case for immersive nonfiction', 'Long-form journalism that reads like a journey and lands like a revelation.'],
                ['Designing a book for its audience', 'How cover systems, typography, and pacing turn a manuscript into a ritual.']
              ].map(([title, excerpt]) => (
                <article key={title} className="rounded-[1.75rem] border border-white/10 bg-slate-950/40 p-5">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/65 to-cyan-400/30 text-cyan-100">
                    <PenSquare size={20} />
                  </div>
                  <p className="font-display text-3xl text-white">{title}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">{excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl pb-16 pt-8">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-violet-200/15 bg-[radial-gradient(circle_at_30%_20%,_rgba(141,125,255,0.18),_transparent_35%),radial-gradient(circle_at_80%_50%,_rgba(65,145,255,0.18),_transparent_35%),linear-gradient(180deg,#0b0f1d,#0d1328)] p-8 shadow-panel md:p-12">
            <div className="absolute inset-0 opacity-30">
              <div className="h-full w-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_45%)]" />
            </div>
            <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="text-xs uppercase tracking-[0.36em] text-pink-200/80">Join the list</p>
                <h2 className="mt-4 font-display text-5xl text-white">Receive the next issue before everyone else.</h2>
              </div>
              <div className="flex w-full max-w-md gap-3 rounded-full border border-white/10 bg-slate-950/70 p-2">
                <input
                  aria-label="Email address"
                  placeholder="Your email"
                  className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:outline-none"
                />
                <button className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:scale-[1.02]">
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </section>

        <footer className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-white/10 py-10 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-3xl text-white">LUMA PRESS</p>
            <p className="mt-1">Publishing stories that light the long way home.</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#catalog" className="hover:text-white">Catalog</a>
            <a href="#imprint" className="hover:text-white">Imprint</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#insights" className="hover:text-white">Journal</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
