import { AigcProject, Footer, Header, HomeContact, HomeProjects, Metrics } from '@/components/portfolio';
import { RevealObserver } from '@/components/reveal-observer';
import { RESUME_FILE_NAME, RESUME_PDF_PATH } from '@/components/site-config';

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero wrap" id="home" data-reveal>
        <p className="eyebrow">个人作品集 · 2026</p><h1>马甜甜</h1><p className="hero-role">新媒体 / 内容运营</p>
        <p className="hero-tags">内容策略 · 海外内容 · 社媒运营 · 搜索优化 · 企业服务内容 · 短视频 · 人工智能内容</p>
        <p className="intro">4年+内容运营及品牌内容营销经验，覆盖企业服务、电商、宠物及海外市场。关注内容本身，也关注内容如何带来搜索、曝光、互动与转化。</p>
        <div className="actions"><a className="button button-dark" href="#projects">查看精选项目 <span>↓</span></a><a className="button button-text" href={RESUME_PDF_PATH} download={RESUME_FILE_NAME}>下载简历 <span>↓</span></a></div>
      </section>
      <Metrics isHome /><HomeProjects /><AigcProject /><HomeContact /><RevealObserver />
    </main><Footer language="zh" />
  </>;
}
