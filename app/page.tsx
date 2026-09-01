import { AigcProject, Footer, Header, HomeContact, HomeProjects, Metrics } from '@/components/portfolio';
import { RevealObserver } from '@/components/reveal-observer';

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero wrap" id="home" data-reveal>
        <p className="eyebrow">PORTFOLIO · 2026</p><h1>马甜甜</h1><p className="hero-role">新媒体 / 内容运营</p>
        <p className="hero-tags">内容策略 · 海外内容 · 社媒运营 · SEO · B端内容 · 短视频 · AIGC</p>
        <p className="intro">4年+内容运营及品牌内容营销经验，覆盖 SaaS、电商、宠物及海外市场。关注内容本身，也关注内容如何带来搜索、曝光、互动与转化。</p>
        <div className="actions"><a className="button button-dark" href="#projects">查看精选项目 <span>↓</span></a><a className="button button-text" href="/resume">下载简历 <span>↗</span></a></div>
      </section>
      <Metrics /><HomeProjects /><AigcProject /><HomeContact /><RevealObserver />
    </main><Footer />
  </>;
}
