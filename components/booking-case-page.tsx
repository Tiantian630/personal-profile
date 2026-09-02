import { ImageWithFallback } from '@/components/image-with-fallback';
import { Contact, Footer, Header, SectionHeader } from '@/components/portfolio';

const productDesign = [
  ['01', '房源展示', '以清晰的房源信息、设施与价格呈现，帮助用户快速完成浏览和比较。'],
  ['02', '在线预约', '将日期选择、入住信息和预约提交整理为连续、易理解的操作路径。'],
  ['03', '订单管理', '为日常运营保留订单、房源与预约状态的统一管理入口。'],
];

const implementation = [
  ['房源展示', '集中呈现房型、配套信息、价格与图片，建立预约前的信息基础。'],
  ['在线预约', '支持选择入住日期、填写预约信息并提交订单。'],
  ['后台运营', '通过订单与房源管理能力，支持日常预约处理与状态跟进。'],
];

export function BookingCasePage() {
  return (
    <>
      <Header />
      <main className="case-page booking-case">
        <section className="case-hero wrap booking-hero">
          <p className="eyebrow">个人产品实践</p>
          <h1>日租预约系统</h1>
          <p className="booking-hero-intro">
            围绕短租房源展示、在线预约与日常订单管理需求，
            <br />
            完成从产品设计到功能实现的轻量化预约网站产品。
          </p>
          <div className="case-role">
            <span>项目角色</span>
            <p>产品设计 · 人工智能辅助开发 · 功能测试</p>
          </div>
        </section>

        <section className="wrap booking-overview">
          <SectionHeader number="01" label="项目概览" />
          <div className="booking-overview-grid">
            <div>
              <p className="booking-intro-label">项目简介</p>
              <p>
                面向真实日租管理场景，将房源信息浏览、预约提交与订单处理整合为清晰的网站使用路径。
              </p>
              <p>
                在明确需求和产品结构后，使用人工智能辅助推进页面实现、功能迭代与测试验证。
              </p>
            </div>
            <dl>
              <div>
                <dt>产品定位</dt>
                <dd>轻量化日租预约网站</dd>
              </div>
              <div>
                <dt>主要场景</dt>
                <dd>房源展示 / 在线预约 / 订单管理</dd>
              </div>
              <div>
                <dt>项目状态</dt>
                <dd>已上线</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="wrap section-block booking-background">
          <SectionHeader number="02" label="需求背景" />
          <div className="booking-reading">
            <p>
              日租预约需要同时回应用户的房源浏览、日期确认与入住信息提交，也需要让运营方及时处理订单状态。
            </p>
            <p>
              本项目以减少预约流程中的信息断点为目标，将用户端操作与日常管理需求组织为一套轻量、可用的网站产品。
            </p>
          </div>
        </section>

        <section className="wrap section-block">
          <SectionHeader number="03" label="产品设计" />
          <div className="booking-editorial-list">
            {productDesign.map(([number, title, detail]) => (
              <article key={number}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="wrap section-block booking-development">
          <SectionHeader number="04" label="人工智能辅助开发" />
          <div className="booking-development-copy">
            <p>
              在产品目标和功能边界明确后，使用人工智能辅助完成页面结构、交互细节与功能实现，并结合实际使用场景持续测试和调整。
            </p>
            <ul>
              <li>梳理需求与页面信息结构</li>
              <li>推进前端页面和预约功能实现</li>
              <li>验证预约与订单管理的关键使用路径</li>
            </ul>
          </div>
        </section>

        <section className="wrap section-block">
          <SectionHeader number="05" label="功能实现" />
          <div className="booking-evidence">
            <ImageWithFallback
              src="/assets/home/booking-home-cover.webp"
              alt="日租预约系统首页、在线预约与后台管理功能展示"
              label="日租预约系统功能展示"
              className="booking-evidence-image"
            />
            <div className="booking-feature-list">
              <p className="article-index">网站产品展示</p>
              <h3>从房源展示到日常订单管理</h3>
              {implementation.map(([title, detail]) => (
                <article key={title}>
                  <h4>{title}</h4>
                  <p>{detail}</p>
                </article>
              ))}
              <a
                href="https://7home-rent-reservation.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className="button button-dark booking-external-link"
              >
                在线体验项目 <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="wrap booking-outcome">
          <SectionHeader number="06" label="项目成果" />
          <div>
            <p>
              完成一个覆盖房源展示、在线预约与订单管理的可用网站产品，让日租管理从信息浏览到订单处理形成清晰闭环。
            </p>
            <ul>
              <li>建立房源、预约与订单的一体化使用路径</li>
              <li>完成轻量化预约网站的产品设计与实现</li>
              <li>以人工智能辅助支持开发迭代与功能验证</li>
            </ul>
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
