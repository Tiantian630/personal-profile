import { ImageWithFallback } from '@/components/image-with-fallback';
import { Contact, Footer, Header, SectionHeader } from '@/components/portfolio';

const productFlows = [
  ['用户端', '预约流程', '浏览房源信息，选择可预约日期，填写入住信息并提交预约。'],
  ['房东端', '管理流程', '查看预约记录，处理订单状态，并维护房源与日常运营信息。'],
];

const featureShowcases = [
  {
    title: '房源展示',
    detail: '集中呈现房型、设施、价格与入住场景，帮助用户建立预约前的信息基础。',
    src: '/assets/booking/booking-property-showcase.webp',
    alt: '日租预约系统房源展示页面',
  },
  {
    title: '在线预约',
    detail: '通过可预约日期、入住信息与提交入口，完成清晰的预约操作。',
    src: '/assets/booking/booking-reservation-interface.webp',
    alt: '日租预约系统在线预约页面',
  },
  {
    title: '后台管理',
    detail: '围绕预约、房源与订单状态提供统一的日常管理入口。',
    src: '/assets/booking/booking-landlord-dashboard.webp',
    alt: '日租预约系统房东管理后台',
  },
];

export function BookingCasePage() {
  return (
    <>
      <Header />
      <main className="case-page booking-case">
        <section className="case-hero wrap booking-hero">
          <div className="booking-hero-copy">
            <p className="eyebrow">个人产品开发项目</p>
            <h1>日租预约系统</h1>
            <p className="case-company">个人网站产品开发</p>
            <div className="booking-hero-intro">
              <p>基于真实短租管理需求，从用户预约流程到房东后台管理，独立完成一套轻量化预约系统。</p>
              <p>通过产品规划、页面设计与人工智能辅助开发，将线下沟通与人工记录流程转化为线上化管理工具。</p>
            </div>
            <div className="case-role">
              <span>项目角色</span>
              <p>产品规划 · 用户流程设计 · UI设计 · 前端开发 · 数据管理</p>
            </div>
          </div>
          <ImageWithFallback
            src="/assets/home/booking-home-cover.webp"
            alt="日租预约系统项目主视觉"
            label="日租预约系统项目主视觉"
            className="booking-hero-image"
          />
        </section>

        <section className="wrap section-block booking-background">
          <SectionHeader number="01" label="项目背景" />
          <div className="booking-reading booking-section-copy">
            <h3>从真实需求出发，设计一套轻量化预约工具</h3>
            <p>
              日常短租管理中，房源展示、日期确认、预约记录往往需要依赖人工沟通。
            </p>
            <p>
              为了减少重复确认成本，我从实际使用场景出发，设计并开发了一套支持房源展示、在线预约与后台管理的轻量化系统。
            </p>
          </div>
        </section>

        <section className="wrap section-block">
          <SectionHeader number="02" label="产品设计" />
          <div className="booking-product-design">
            <h3>从用户预约到房东管理，完整梳理产品流程</h3>
            <div className="booking-flow-grid">
              {productFlows.map(([audience, title, detail]) => (
                <article key={audience}>
                  <p className="article-index">{audience}</p>
                  <h4>{title}</h4>
                  <p>{detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="wrap section-block">
          <SectionHeader number="03" label="产品功能展示" />
          <div className="booking-showcase-grid">
            {featureShowcases.map(({ title, detail, src, alt }) => (
              <article key={title}>
                <ImageWithFallback src={src} alt={alt} label={title} className="booking-showcase-image" />
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap booking-outcome">
          <SectionHeader number="04" label="项目成果" />
          <div>
            <p>
              这是一次从 0 到 1 的个人项目。我基于真实短租场景，从需求梳理、产品设计到功能开发独立推进，并借助 Codex 辅助完成开发与迭代优化。
            </p>
            <p>
              围绕用户预约流程与房东管理需求，逐步完善日期校验、预约冲突处理、订单管理等核心功能，最终将一个真实生活需求转化为可实际运行的网站产品。
            </p>
          </div>
        </section>

        <div className="wrap case-back">
          <a href="/#projects-personal">← 返回个人项目</a>
        </div>
        <Contact language="zh" />
      </main>
      <Footer language="zh" />
    </>
  );
}
