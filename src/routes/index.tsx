import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Triangle,
  Link2,
  BarChart3,
  Wallet,
  Users,
  ShieldCheck,
  Zap,
  Check,
  Menu,
  X,
  ArrowRight,
  TrendingUp,
  MousePointerClick,
  Info,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vértice — Plataforma para afiliados" },
      {
        name: "description",
        content: "Gerencie links, acompanhe resultados e organize suas campanhas de afiliado em um só painel.",
      },
      { property: "og:title", content: "Vértice — Plataforma para afiliados" },
      {
        property: "og:description",
        content: "Links, métricas e campanhas de afiliado organizados em um painel premium.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  { href: "#recursos", label: "Recursos" },
  { href: "#painel", label: "Painel" },
  { href: "#planos", label: "Planos" },
];

const features = [
  { icon: Link2, title: "Links rastreáveis", text: "Crie links curtos por campanha e saiba de onde vem cada clique." },
  { icon: BarChart3, title: "Métricas claras", text: "Cliques, conversões e desempenho por canal em gráficos simples." },
  { icon: Wallet, title: "Controle de comissões", text: "Registre e acompanhe comissões informadas pelos seus programas." },
  { icon: Users, title: "Gestão de equipe", text: "Convide parceiros e organize permissões por projeto." },
  { icon: Zap, title: "Atalhos rápidos", text: "Modelos de campanha prontos para lançar em minutos." },
  { icon: ShieldCheck, title: "Dados protegidos", text: "Seus dados de campanha ficam privados para sua conta." },
];

const plans = [
  { name: "Início", price: "Grátis", desc: "Para quem está começando.", items: ["Até 10 links", "Métricas básicas", "1 usuário"] },
  {
    name: "Pro",
    price: "Em breve",
    desc: "Para afiliados em crescimento.",
    items: ["Links ilimitados", "Relatórios avançados", "Até 5 usuários", "Exportação de dados"],
    featured: true,
  },
  { name: "Agência", price: "Sob consulta", desc: "Para equipes e operações.", items: ["Tudo do Pro", "Usuários ilimitados", "Suporte dedicado"] },
];

const bars = [40, 65, 50, 80, 58, 92, 74];

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2 font-display text-xl font-bold">
            <Triangle className="h-6 w-6 fill-primary text-primary" /> Vértice
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#planos" className="hidden rounded-full bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow md:inline-flex">
            Começar grátis
          </a>
          <button className="md:hidden" aria-label="Abrir menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 border-t border-border px-5 py-4 md:hidden">
            {nav.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="text-muted-foreground">
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-5 pb-20 pt-24 text-center md:pt-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Plataforma para afiliados
          </span>
          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight md:text-6xl">
            Leve suas campanhas ao <span className="text-gradient">ponto mais alto</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Organize links, acompanhe métricas e gerencie suas parcerias de afiliado em um painel único, elegante e direto ao ponto.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#planos" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-7 py-3 font-semibold text-primary-foreground shadow-glow">
              Criar conta <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#painel" className="inline-flex items-center justify-center rounded-full border border-border px-7 py-3 font-semibold hover:bg-secondary">
              Ver o painel
            </a>
          </div>
        </div>
      </section>

      <section id="recursos" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Recursos para afiliados</h2>
        <p className="mt-3 max-w-xl text-muted-foreground">Tudo o que você precisa para trabalhar com organização.</p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/50">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="painel" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <h2 className="font-display text-3xl font-bold md:text-4xl">Prévia do painel</h2>
        <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Info className="h-4 w-4 text-primary" /> Dados ilustrativos — não representam vendas ou comissões reais.
        </p>
        <div className="mt-10 rounded-3xl border border-border bg-card p-5 shadow-glow md:p-8">
          <div className="flex items-center justify-between">
            <span className="font-display font-semibold">Visão geral</span>
            <span className="rounded-full bg-accent px-3 py-1 text-xs text-primary">Exemplo</span>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { icon: MousePointerClick, label: "Cliques", value: "1.240" },
              { icon: TrendingUp, label: "Conversões", value: "38" },
              { icon: Link2, label: "Links ativos", value: "12" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-secondary p-5">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <s.icon className="h-4 w-4 text-primary" /> {s.label}
                </div>
                <div className="mt-2 font-display text-2xl font-bold">{s.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex h-44 items-end gap-3 rounded-2xl bg-secondary p-5">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md bg-gradient-primary" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
        <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Planos</h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">Valores ainda não definidos. Nenhum pagamento é processado nesta página.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-3xl border p-7 ${p.featured ? "border-primary bg-card shadow-glow" : "border-border bg-card"}`}
            >
              {p.featured && <span className="mb-3 w-fit rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">Popular</span>}
              <h3 className="font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 font-display text-3xl font-extrabold">{p.price}</div>
              <ul className="mt-6 flex-1 space-y-3 text-sm">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" /> {it}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 rounded-full py-3 font-semibold ${p.featured ? "bg-gradient-primary text-primary-foreground" : "border border-border hover:bg-secondary"}`}
              >
                {p.price === "Grátis" ? "Começar" : "Quero saber mais"}
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Vértice. Todos os direitos reservados.
      </footer>
    </div>
  );
}
