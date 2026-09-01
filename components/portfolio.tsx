import { ImageWithFallback } from '@/components/image-with-fallback';
import { LazyVideoPreview } from '@/components/lazy-video-preview';
import { projects, type Project } from '@/components/projects-data';
import {
  BOOKING_PROJECT_URL,
  DOUYIN_FEATURED_VIDEO_URL,
  DOUYIN_PROFILE_URL,
  TIANTIAN_KITCHEN_URL,
} from '@/components/aigc-data';
import { RESUME_PDF_PATH } from '@/components/site-config';

export function Header() {
  return (
    <header className="site-header">
      <div className="nav wrap">
        <a href="/" className="brand">
          马甜甜
        </a>
        <nav>
          <a href="/">首页</a>
          <a href="/#projects">精选项目</a>
          <a href="/#projects-personal">个人项目</a>
          <a href={RESUME_PDF_PATH} download>
            简历
          </a>
          <a href="/#contact">联系我</a>
        </nav>
        <details className="mobile-nav">
          <summary>菜单</summary>
          <div>
            <a href="/">首页</a>
            <a href="/#projects">精选项目</a>
            <a href="/#projects-personal">个人项目</a>
            <a href={RESUME_PDF_PATH} download>
              简历
            </a>
            <a href="/#contact">联系我</a>
          </div>
        </details>
      </div>
    </header>
  );
}
export function SectionHeader({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title?: string;
}) {
  return (
    <header className="section-header">
      <p>
        <span>{number}</span>
        {label}
      </p>
      {title && <h2>{title}</h2>}
    </header>
  );
}
export function Metrics({
  metrics,
}: {
  metrics?: { value: string; label: string }[];
}) {
  const items = metrics ?? [
    { value: '+655%', label: '短视频曝光同比增长' },
    { value: '+97%', label: '短视频成交金额同比增长' },
    { value: '0 → 1,000+', label: 'Blog 自然访问量 / 3个月' },
    { value: '150%', label: '微博粉丝增长 KPI 完成率' },
  ];
  return (
    <section className="metrics-wrap wrap" data-reveal>
      <SectionHeader number="02" label="SELECTED METRICS" title="核心数据" />
      <div className="metrics">
        {items.map((item) => (
          <div className="metric" key={`${item.value}-${item.label}`}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
export function HomeProjects() {
  return (
    <section className="projects wrap" id="projects" data-reveal>
      <SectionHeader number="03" label="SELECTED WORK" title="精选项目" />
      <div className="project-list">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.slug} />
        ))}
      </div>
    </section>
  );
}

export function AigcProject() {
  return (
    <section className="aigc-project wrap" id="projects-personal" data-reveal>
      <SectionHeader number="04" label="PERSONAL PROJECTS" title="个人项目" />
      <article className="aigc-feature">
        <p className="eyebrow">01 · AIGC CONTENT PRACTICE</p>
        <h3>AIGC 内容实践</h3>
        <p className="aigc-subtitle">
          从创意策划、剧本、分镜到 AI 视觉与视频生成的完整内容实践
        </p>
        <div className="aigc-layout">
          <a
            className="featured-cover"
            href={DOUYIN_FEATURED_VIDEO_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="在抖音观看代表作品（链接占位）"
          >
            <span className="cover-label">代表作品封面 placeholder</span>
            <span className="cover-play">▶</span>
            <span className="cover-watch">在抖音观看 ↗</span>
          </a>
          <div className="aigc-copy">
            <p className="eyebrow">FEATURED WORK</p>
            <h4>代表作品｜《作品名称 placeholder》</h4>
            <p className="aigc-meta">AI漫剧 · 3D动画 · 女频内容</p>
            <ul className="skill-list aigc-skills">
              {[
                '创意策划',
                '剧本',
                '分镜',
                '角色资产',
                '场景资产',
                'AI视觉',
                '视频剪辑',
              ].map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
            <div className="aigc-actions">
              <a className="arrow-link" href="/ai-practice">
                查看项目详情 <span>→</span>
              </a>
              <a
                className="arrow-link"
                href={DOUYIN_PROFILE_URL}
                target="_blank"
                rel="noreferrer"
              >
                立即查看全部 <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </article>
      <div className="secondary-projects">
        <KitchenProject />
        <BookingProject />
      </div>
    </section>
  );
}

export function KitchenProject() {
  return (
    <article className="booking-project secondary-project">
      <div className="booking-copy">
        <p className="eyebrow">02 · AI-ASSISTED LIFESTYLE CONTENT PRODUCT</p>
        <h3>甜甜私房菜</h3>
        <p className="project-kind">AI辅助生活内容产品</p>
        <p>
          基于日常做饭、菜谱整理与食材管理需求，使用 AI
          辅助完成从需求梳理、内容结构设计到功能迭代，搭建个人菜谱与家庭食材管理工具。
        </p>
        <ul className="skill-list compact-skills">
          {['需求梳理', '信息架构', '内容整理', 'AI辅助开发', '测试迭代'].map(
            (item) => (
              <li key={item}>{item}</li>
            ),
          )}
        </ul>
        <p className="booking-work">
          菜谱管理 · 每日推荐 · 收藏 · 采购清单 · 冰箱食材 · 多设备同步
        </p>
        <div className="aigc-actions">
          <a href="/kitchen" className="arrow-link">
            查看项目详情 <span>→</span>
          </a>
          <a
            href={TIANTIAN_KITCHEN_URL}
            target="_blank"
            rel="noreferrer"
            className="arrow-link"
          >
            访问在线项目 <span>↗</span>
          </a>
        </div>
      </div>
      <div className="booking-gallery">
        <ImageWithFallback
          src="/assets/kitchen/kitchen-home.webp"
          alt="甜甜私房菜产品首页与每日推荐"
          label="产品首页 / 每日推荐"
          className="booking-main"
        />
        <ImageWithFallback
          src="/assets/kitchen/kitchen-recipes.webp"
          alt="甜甜私房菜菜谱浏览与管理页面"
          label="菜谱浏览 / 菜谱管理"
          className="booking-small"
        />
        <ImageWithFallback
          src="/assets/kitchen/kitchen-shopping.webp"
          alt="甜甜私房菜采购清单与冰箱食材管理页面"
          label="采购清单 / 冰箱食材"
          className="booking-small"
        />
      </div>
    </article>
  );
}

export function BookingProject() {
  return (
    <article className="booking-project secondary-project">
      <div className="booking-copy">
        <p className="eyebrow">03 · AI-ASSISTED PRODUCT</p>
        <h3>
          AI辅助产品实践
          <br />
          日租预约系统
        </h3>
        <p>
          基于真实短租管理需求，从需求梳理、功能设计到测试上线，使用 Codex
          辅助完成支持房源展示、在线预约及订单管理的网页产品。
        </p>
        <p className="booking-work">
          需求梳理 · 产品设计 · AI辅助开发 · 功能测试 · 上线
        </p>
        <a
          href={BOOKING_PROJECT_URL}
          target="_blank"
          rel="noreferrer"
          className="arrow-link"
        >
          访问在线项目 <span>↗</span>
        </a>
      </div>
      <div className="booking-gallery">
        <ImageWithFallback
          src="/assets/booking/booking-home.webp"
          alt="日租预约系统客人端首页"
          label="客人端首页"
          className="booking-main"
        />
        <ImageWithFallback
          src="/assets/booking/booking-form.webp"
          alt="日租预约系统在线预约页面"
          label="在线预约页面"
          className="booking-small"
        />
        <ImageWithFallback
          src="/assets/booking/booking-admin.webp"
          alt="日租预约系统房东管理页面"
          label="房东管理页面"
          className="booking-small"
        />
      </div>
    </article>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const direction = Number(project.number) % 2 === 0 ? ' is-reversed' : '';
  return (
    <article className={`project-card${direction}`}>
      <div className="project-copy">
        <span className="project-number">{project.number}</span>
        <h3>{project.title}</h3>
        <p className="tag-row">{project.keywords.join(' · ')}</p>
        <p className="company">{project.company}</p>
        <p className="result">{project.result}</p>
        <a href={`/projects/${project.slug}`} className="arrow-link">
          查看项目 <span>→</span>
        </a>
      </div>
      <a
        href={`/projects/${project.slug}`}
        className="image-placeholder project-image"
      >
        <span>主视觉占位</span>
        <small>{project.folder}</small>
      </a>
    </article>
  );
}
export function Process({ steps }: { steps: string[] }) {
  return (
    <ol className="process">
      {steps.map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  );
}
export function ImageGallery({
  items,
  folder,
}: {
  items: string[];
  folder: string;
}) {
  return (
    <div className="gallery">
      {items.map((item, index) => (
        <div className="image-placeholder gallery-item" key={item}>
          <span>{item}</span>
          <small>
            {folder}
            {String(index + 1).padStart(2, '0')}.webp
          </small>
        </div>
      ))}
    </div>
  );
}
export function ArticleCards({
  articles,
  folder,
}: {
  articles: NonNullable<Project['articles']>;
  folder: string;
}) {
  return (
    <div className="article-grid">
      {articles.map((article, index) => (
        <article className="article-card" key={article.title}>
          <div className="image-placeholder article-image">
            <span>文章截图</span>
            <small>
              {folder}article-{index + 1}.webp
            </small>
          </div>
          <p className="article-index">
            0{index + 1} · {article.type}
          </p>
          <h3>{article.title}</h3>
          <dl>
            <div>
              <dt>关键词</dt>
              <dd>{article.tags}</dd>
            </div>
            <div>
              <dt>我的工作</dt>
              <dd>{article.work}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}

const znoStrategy = [
  [
    '01',
    '摄影业务教育',
    '承接摄影师实际业务需求及搜索需求',
    'Destination Wedding · Photography Business Startup Checklist',
  ],
  [
    '02',
    '竞品 / 决策内容',
    '覆盖更接近工具选择和购买决策阶段的搜索意图',
    'Pixellu SmartAlbums Alternatives',
  ],
  [
    '03',
    '产品教育',
    '将 SaaS 产品功能转化为用户容易理解的内容',
    'Video Downloads with a Client Gallery',
  ],
  [
    '04',
    '场景化产品内容',
    '把产品功能放进摄影师真实工作场景中解释价值',
    'Event Photo Sharing with QR Codes',
  ],
];
const znoBlogs = [
  {
    title: 'Guide to Destination Wedding Photography: 8 Tips for Success',
    types: '摄影业务 · 搜索内容 · 用户教育',
    description:
      '围绕目的地婚礼摄影这一真实业务场景，为摄影师提供实用技巧，同时承接相关搜索需求。',
    image: '/assets/zno/blog-destination-wedding.webp',
  },
  {
    title:
      'Best Pixellu SmartAlbums Alternatives for Photographers: Create Photo Albums in Minutes',
    types: '竞品对比 · 搜索优化 · 商业搜索意图',
    description:
      '围绕竞品替代方案及工具选择需求进行内容策划，覆盖更接近用户决策阶段的搜索意图。',
    image: '/assets/zno/blog-pixellu-alternatives.webp',
  },
  {
    title: 'New Feature | How to Offer Video Downloads with a Client Gallery?',
    types: '新功能 · 产品教育',
    description:
      '将 SaaS 新功能转化为清晰的用户教育内容，帮助摄影师理解产品功能及实际使用价值。',
    image: '/assets/zno/blog-video-download.webp',
  },
  {
    title:
      'Enhancing Event Photography with Zno Instant™: Event Photo Sharing with QR Codes',
    types: '使用场景 · 产品营销 · 摄影业务',
    description:
      '从摄影活动真实使用场景切入，将产品功能与用户工作流程结合，解释 QR Code 照片分享的实际价值。',
    image: '/assets/zno/blog-event-photo-sharing.webp',
  },
];

function ZnoCasePage() {
  const workflow = [
    '关键词研究',
    '搜索意图判断',
    '内容选题',
    '英文 Blog',
    'SEO 优化',
    '社媒分发',
    '数据复盘',
  ];

  return (
    <>
      <Header />
      <main className="case-page zno-case">
        <section className="case-hero wrap zno-hero">
          <p className="eyebrow">项目案例 01</p>
          <h1>海外 SEO 与内容增长</h1>
          <p className="case-company">上海寸心科技</p>
          <p className="case-subtitle">海外 SaaS · 北美市场</p>
          <div className="case-role">
            <span>项目角色</span>
            <p>英文内容策划 / SEO / Blog / 海外社媒</p>
          </div>
        </section>
        <section className="wrap zno-overview">
          <SectionHeader number="01" label="项目概览" />
          <div className="zno-overview-grid">
            <div className="zno-intro-copy">
              <p className="zno-intro-label">项目说明</p>
              <p>
                面向北美摄影师及摄影工作室，通过关键词研究与搜索意图分析规划英文内容，围绕摄影业务、产品功能、行业需求及竞品比较持续生产
                Blog，并将内容适配至 Instagram / Facebook 等海外社媒渠道。
              </p>
            </div>
            <dl>
              <div>
                <dt>项目主体</dt>
                <dd>上海寸心科技</dd>
              </div>
              <div>
                <dt>项目背景</dt>
                <dd>海外 SaaS / 北美市场</dd>
              </div>
              <div>
                <dt>项目角色</dt>
                <dd>英文内容策划 / SEO / Blog / 海外社媒</dd>
              </div>
            </dl>
          </div>
        </section>
        <section className="wrap section-block zno-metrics-section">
          <SectionHeader number="02" label="核心数据" />
          <div className="metrics zno-metrics">
            <div className="metric">
              <strong>0 → 1,000+</strong>
              <span>3个月 Blog 自然访问量</span>
            </div>
            <div className="metric">
              <strong>≈60%</strong>
              <span>Blog 贡献主站自然流量</span>
            </div>
          </div>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="03" label="内容策略" />
          <div className="zno-strategy-list">
            {znoStrategy.map(([number, title, purpose, example]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{purpose}</p>
                <small>示例 · {example}</small>
              </article>
            ))}
          </div>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="04" label="内容生产流程" />
          <div className="zno-workflow">
            {workflow.map((step, index) => (
              <article key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
          <p className="tools-line">
            <span>使用工具</span>Google Search Console / Ahrefs
          </p>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="05" label="博客内容展示" />
          <div className="zno-blog-grid">
            {znoBlogs.map((blog, index) => (
              <article className="zno-blog-card" key={blog.title}>
                <ImageWithFallback
                  src={blog.image}
                  alt={blog.title}
                  label="博客文章截图"
                  className="zno-blog-image"
                />
                <p className="article-index">
                  0{index + 1} · {blog.types}
                </p>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="06" label="可复用内容资产" />
          <article className="content-asset">
            <ImageWithFallback
              src="/assets/zno/photography-startup-checklist.webp"
              alt="Photography Business Startup Checklist For Beginners"
              label="摄影业务清单内容资产"
              className="content-asset-image"
            />
            <div>
              <p className="article-index">
                用户教育 · 实用内容资产 · 摄影师业务指南
              </p>
              <h3>Photography Business Startup Checklist For Beginners</h3>
              <p>
                围绕摄影师创业及业务经营场景，将复杂信息整理为结构化
                Checklist，以更易保存、阅读和使用的形式，为目标用户提供实用价值，并丰富品牌在
                Blog 之外的内容触点。
              </p>
            </div>
          </article>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="07" label="视频与社媒内容" />
          <div className="social-video-grid">
            <article>
              <LazyVideoPreview
                poster="/assets/zno/video-event-content-cover-new.webp"
                src="/assets/zno/video-event-preview.mp4"
                alt="展会与品牌现场内容"
              />
              <p className="article-index">
                01 · 海外品牌内容 · 现场视频 · 社媒内容
              </p>
              <h3>展会 / 品牌现场内容</h3>
              <p className="video-excerpt">节选片段（非完整视频）· 00:10</p>
            </article>
            <article className="social-video-product">
              <LazyVideoPreview
                poster="/assets/zno/video-product-demo-cover.webp"
                src="/assets/zno/video-product-demo-preview.mp4"
                alt="SaaS 产品功能演示"
                emphasis
              />
              <p className="article-index">02 · 产品教育 · 短视频 · 海外社媒</p>
              <h3>SaaS 产品功能演示</h3>
              <p className="video-excerpt">节选片段（非完整视频）· 00:12</p>
            </article>
          </div>
        </section>
        <section className="wrap zno-summary">
          <SectionHeader number="08" label="项目成果" />
          <p>
            以搜索意图为起点搭建内容矩阵，将英文 Blog、产品教育内容、可复用
            Checklist
            与海外社媒分发连接为持续沉淀的内容资产，并带来可衡量的自然流量增长。
          </p>
        </section>
        <div className="wrap case-back">
          <a href="/#projects">← 返回精选项目</a>
        </div>
        <Contact language="zh" />
      </main>
      <Footer language="zh" />
    </>
  );
}

const foxdataStrategy = [
  ['01', 'SaaS 内容运营', '围绕用户需求和产品能力持续输出内容。'],
  ['02', 'ASO 专业内容资产', '将行业知识整理为结构化方法论。'],
  [
    '03',
    '微信公众号行业内容',
    '通过数据分析、市场观察和热点案例触达目标用户。',
  ],
  ['04', '产品教育内容', '将复杂的数据分析能力转化为用户容易理解的内容表达。'],
];

const foxdataArticles = [
  {
    image: '/assets/foxdata/global-mobile-games-ranking.webp',
    title: '《2025年6月全球手游排行榜》',
    type: '行业研究 / 数据洞察',
    description: '通过市场数据整理行业趋势，帮助用户快速了解竞争环境。',
  },
  {
    image: '/assets/foxdata/market-insight-analysis.webp',
    title: '《恋与深空》外服翻译惹争议：游戏出海本地化的“度”该如何把握？',
    type: '行业观察 / 市场洞察',
    description: '从海外用户反馈切入，帮助用户理解本地化与市场沟通问题。',
  },
  {
    image: '/assets/foxdata/game-case-analysis.webp',
    title: '《暴吵萌厨》仅半月跃居下载榜Top1',
    type: '案例研究 / 产品分析',
    description: '结合热门产品表现，拆解市场变化和用户趋势。',
  },
];

function FoxDataCasePage() {
  const guideSteps = [
    ['01', '行业学习', '梳理 ASO 核心概念与应用场景。'],
    ['02', '资料研究', '收集并验证行业资料与实践信息。'],
    ['03', '知识体系整理', '将分散知识归纳为清晰的方法论结构。'],
    ['04', '内容架构设计', '规划读者易于理解和使用的内容路径。'],
    ['05', '专业指南产出', '沉淀为可复用的专业内容资产。'],
  ];

  return (
    <>
      <Header />
      <main className="case-page foxdata-case">
        <section className="case-hero wrap foxdata-hero">
          <p className="eyebrow">项目案例 02</p>
          <h1>B2B SaaS 内容运营与专业内容资产</h1>
          <p className="foxdata-hero-intro">
            围绕 App 开发者和增长团队，
            <br />
            通过行业研究、ASO 内容和产品教育内容，
            <br />
            建立帮助用户理解产品价值的专业内容体系。
          </p>
          <div className="case-role">
            <span>项目角色</span>
            <p>内容策划 / 行业研究 / 专业内容撰写 / 产品教育内容</p>
          </div>
          <p className="foxdata-project-owner">项目主体 · FoxData 灵狐数据</p>
        </section>
        <section className="wrap foxdata-overview">
          <SectionHeader number="01" label="项目概览" />
          <div className="foxdata-product-context">
            <div>
              <p className="foxdata-intro-label">产品背景</p>
              <h3>面向移动应用增长团队的数据分析平台</h3>
              <p>
                FoxData 灵狐数据面向 App 开发者、App Manager
                和增长团队。我的内容工作围绕产品能力和增长场景展开，将专业方法、行业信息和产品价值转化为用户可理解的内容。
              </p>
            </div>
            <ImageWithFallback
              src="/assets/foxdata/foxdata-cover.png"
              alt="FoxData 灵狐数据产品官网展示"
              label="FoxData 产品展示"
              className="foxdata-cover"
            />
          </div>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="02" label="内容策略框架" />
          <div className="foxdata-strategy-lede">
            <p>
              内容策略围绕专业知识沉淀、行业内容触达、产品价值解释与用户教育展开。
            </p>
            <div className="foxdata-strategy-principles">
              <article>
                <small>内容基础</small>
                <strong>专业知识沉淀</strong>
              </article>
              <article>
                <small>内容触达</small>
                <strong>行业内容触达</strong>
              </article>
              <article>
                <small>价值沟通</small>
                <strong>产品价值解释</strong>
              </article>
              <article>
                <small>内容目标</small>
                <strong>用户教育</strong>
              </article>
            </div>
          </div>
          <div className="foxdata-strategy-list">
            {foxdataStrategy.map(([number, title, detail]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="03" label="ASO 专业内容资产" />
          <article className="foxdata-guide">
            <ImageWithFallback
              src="/assets/foxdata/foxdata-aso-guide.png"
              alt="ASO 应用商店优化完整指南封面"
              label="ASO 应用商店优化完整指南"
              className="foxdata-guide-image"
            />
            <div>
              <p className="foxdata-guide-highlight">
                44 页<br />
                专业指南
              </p>
              <h3>ASO 应用商店优化完整指南</h3>
              <p>
                将分散 ASO 知识整理为结构化内容资产，帮助 App
                开发者理解应用商店优化方法。
              </p>
              <p className="foxdata-guide-note">
                从知识输入到内容资产沉淀的过程。
              </p>
            </div>
          </article>
          <div className="foxdata-guide-steps">
            {guideSteps.map(([number, title, detail]) => (
              <article key={number}>
                <span>{number}</span>
                <h4>{title}</h4>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="04" label="微信公众号行业内容" />
          <div className="foxdata-channel">
            <ImageWithFallback
              src="/assets/foxdata/wechat-channel.png"
              alt="FoxData 微信公众号内容运营渠道"
              label="微信公众号内容运营渠道"
              className="foxdata-channel-image"
            />
            <div>
              <p className="article-index">国内核心内容渠道</p>
              <h3>通过行业内容连接目标用户</h3>
              <p>
                微信公众号作为连接目标用户的重要渠道，通过行业数据、市场观察和案例分析，帮助
                App 开发者理解市场趋势和增长机会。
              </p>
            </div>
          </div>
          <div className="foxdata-article-grid">
            {foxdataArticles.map((article, index) => (
              <article key={article.title}>
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  label={article.title}
                  className="foxdata-article-image"
                />
                <p className="article-index">
                  0{index + 1} · {article.type}
                </p>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="wrap foxdata-outcome">
          <SectionHeader number="05" label="项目成果" />
          <p>
            通过专业内容资产、行业研究和用户教育内容，帮助 SaaS
            产品建立与目标用户之间的认知连接。
          </p>
          <ul>
            <li>ASO 专业指南</li>
            <li>行业研究内容</li>
            <li>微信公众号内容运营</li>
            <li>产品教育内容</li>
          </ul>
        </section>
        <div className="wrap case-back">
          <a href="/#projects">← 返回精选项目</a>
        </div>
        <Contact language="zh" />
      </main>
      <Footer language="zh" />
    </>
  );
}

const petStrategy = [
  [
    '01',
    '宠物知识内容建设',
    '通过科学养宠内容降低用户决策成本，建立品牌专业认知。',
  ],
  [
    '02',
    '短视频内容增长',
    '围绕商品种草、养宠场景和用户需求，策划短视频内容矩阵。',
  ],
  [
    '03',
    '用户 UGC 运营',
    '通过买家秀征集和用户互动机制，持续沉淀真实使用内容。',
  ],
  ['04', '电商内容转化', '联动店铺、直播和私域场景，推动内容曝光向购买转化。'],
];

function PetVideoCasePage() {
  const overviewMetrics = [
    ['+317%', '短视频发布量同比'],
    ['+655%', '曝光同比'],
    ['+97%', '成交金额同比'],
    ['100+', 'UGC 用户视频素材'],
    ['最高 90%', 'UGC 审核通过率'],
  ];

  return (
    <>
      <Header />
      <main className="case-page pet-video-case">
        <section className="case-hero wrap pet-video-hero">
          <p className="eyebrow">项目案例 03</p>
          <h1>宠物消费品牌内容增长与 UGC 运营</h1>
          <p className="pet-video-hero-intro">
            通过宠物知识内容、商品内容、短视频生产与用户共创，
            <br />
            帮助宠物消费品牌建立内容增长体系，实现品牌认知、
            <br />
            用户互动与交易转化。
          </p>
          <div className="case-role">
            <span>项目角色</span>
            <p>内容运营 / 内容策划</p>
          </div>
          <p className="pet-video-project-owner">
            项目主体 · 杭州易宠科技有限公司
          </p>
        </section>
        <section className="wrap pet-video-overview">
          <SectionHeader number="01" label="项目概览" />
          <div className="pet-video-overview-grid">
            <div>
              <p className="pet-video-intro-label">服务场景</p>
              <h3>宠物消费品牌、天猫国际自营店铺、用户内容生态</h3>
              <p>
                围绕宠物消费场景，通过知识内容建设、短视频内容生产、用户 UGC
                共创和电商内容转化，建立从用户教育到购买决策的内容增长体系。
              </p>
            </div>
            <dl>
              <div>
                <dt>项目主体</dt>
                <dd>杭州易宠科技有限公司</dd>
              </div>
              <div>
                <dt>项目角色</dt>
                <dd>内容运营 / 内容策划</dd>
              </div>
              <div>
                <dt>核心工作</dt>
                <dd>内容策略 / 图文内容运营 / 短视频生产 / UGC 运营</dd>
              </div>
            </dl>
          </div>
          <div className="pet-video-metrics">
            {overviewMetrics.map(([value, label]) => (
              <article key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="02" label="内容增长策略" />
          <div className="pet-strategy-list">
            {petStrategy.map(([number, title, detail]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="03" label="宠物知识内容建设" />
          <article className="pet-evidence pet-knowledge">
            <ImageWithFallback
              src="/assets/pet/pet-knowledge-guide.webp"
              alt="爱宠说宠物知识科普内容"
              label="爱宠说宠物知识科普内容"
              className="pet-evidence-image"
            />
            <div>
              <p className="article-index">爱宠说科普内容</p>
              <h3>以科学养宠内容建立用户信任</h3>
              <p>
                通过宠物知识科普内容，为用户提供养宠决策参考，同时连接商品种草场景，让内容在购买前阶段发挥用户教育价值。
              </p>
            </div>
          </article>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="04" label="短视频与 UGC 增长" />
          <article className="pet-evidence pet-video-evidence">
            <div>
              <p className="article-index">短视频内容生产</p>
              <h3>围绕养宠需求建立内容生产机制</h3>
              <p>
                围绕商品推荐、科学养宠攻略等主题建立短视频生产机制，提高内容产量和曝光效率。
              </p>
              <div className="pet-result-list">
                <p>
                  <strong>+317%</strong> 短视频发布量同比增长
                </p>
                <p>
                  <strong>+655%</strong> 曝光同比增长
                </p>
              </div>
            </div>
            <ImageWithFallback
              src="/assets/pet/pet-short-video.webp"
              alt="宠物商品内容与科学养宠短视频"
              label="宠物短视频内容"
              className="pet-evidence-image"
            />
          </article>
          <div className="pet-ugc-copy">
            <p className="article-index">用户 UGC 运营</p>
            <h3>通过用户共创持续沉淀真实内容</h3>
            <p>通过买家秀征集活动鼓励用户生产内容，持续丰富品牌内容资产。</p>
            <div className="pet-result-list">
              <p>
                <strong>100+</strong> 用户视频素材
              </p>
              <p>
                <strong>最高 90%</strong> 审核通过率
              </p>
            </div>
          </div>
        </section>
        <section className="wrap section-block">
          <SectionHeader number="05" label="电商内容转化" />
          <article className="pet-evidence pet-store">
            <ImageWithFallback
              src="/assets/pet/pet-store-content.webp"
              alt="天猫国际自营萌宠社店铺首页"
              label="萌宠社店铺内容"
              className="pet-evidence-image"
            />
            <div>
              <p className="article-index">萌宠社店铺内容</p>
              <h3>将内容触达连接到购买决策</h3>
              <p>
                将内容生产与店铺运营、直播活动、用户运营结合，实现内容触达与交易转化。
              </p>
            </div>
          </article>
        </section>
        <section className="wrap pet-video-outcome">
          <SectionHeader number="06" label="项目成果" />
          <p>
            通过内容体系建设，将宠物知识、短视频、用户共创和电商场景连接，形成可持续的品牌内容增长闭环。
          </p>
          <ul>
            <li>建立宠物消费内容运营体系</li>
            <li>搭建短视频规模化生产 SOP</li>
            <li>沉淀 100+ 用户内容素材</li>
            <li>提升品牌曝光与成交转化</li>
          </ul>
        </section>
        <div className="wrap case-back">
          <a href="/#projects">← 返回精选项目</a>
        </div>
        <Contact language="zh" />
      </main>
      <Footer language="zh" />
    </>
  );
}

export function CasePage({ project }: { project: Project }) {
  if (project.slug === 'zno-seo') return <ZnoCasePage />;
  if (project.slug === 'foxdata') return <FoxDataCasePage />;
  if (project.slug === 'pet-video') return <PetVideoCasePage />;
  return (
    <>
      <Header />
      <main className="case-page">
        <section className="case-hero wrap">
          <p className="eyebrow">CASE {project.number}</p>
          <h1>{project.title}</h1>
          <p className="case-company">
            {project.company}
            {project.market ? ` · ${project.market}` : ''}
          </p>
          <div className="case-role">
            <span>职责</span>
            <p>{project.roles.join(' / ')}</p>
          </div>
        </section>
        <Metrics metrics={project.metrics} />
        {project.intro && (
          <section className="wrap reading-block">
            <p>{project.intro}</p>
          </section>
        )}
        <section className="wrap section-block">
          <SectionHeader
            number="01"
            label="METHOD"
            title={project.processes.length > 1 ? '工作方法' : '工作流程'}
          />
          {project.processes.map((process) => (
            <div className="process-group" key={process.title}>
              <h3>{process.title}</h3>
              <Process steps={process.steps} />
            </div>
          ))}
        </section>
        {project.galleryItems && (
          <section className="wrap section-block">
            <SectionHeader
              number="02"
              label="SELECTED MATERIALS"
              title={project.galleryTitle ?? '项目素材'}
            />
            <ImageGallery
              items={project.galleryItems}
              folder={project.folder}
            />
          </section>
        )}
        {project.articles && (
          <section className="wrap section-block">
            <SectionHeader
              number="03"
              label="EDITORIAL CONTENT"
              title="精选公众号内容"
            />
            <ArticleCards articles={project.articles} folder={project.folder} />
          </section>
        )}
        {project.note && <p className="wrap case-note">“{project.note}”</p>}
        <div className="wrap case-back">
          <a href="/#projects">← 返回精选项目</a>
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export function ExternalProjectCard() {
  return (
    <article className="external-card">
      <div>
        <p className="eyebrow">AI-ASSISTED PRODUCT</p>
        <h3>日租预约系统</h3>
        <p>
          基于真实短租管理需求，从需求梳理、功能设计到测试上线，使用 Codex
          辅助完成支持房源展示、在线预约及订单管理的网页产品。
        </p>
        <p className="work-list">
          需求梳理 · 产品设计 · AI辅助开发 · 功能测试 · 上线
        </p>
        <a
          href={BOOKING_PROJECT_URL}
          target="_blank"
          rel="noreferrer"
          className="arrow-link"
        >
          访问在线项目 <span>↗</span>
        </a>
      </div>
      <ImageGallery
        items={['网站首页', '客人预约页面', '房东管理页面']}
        folder="assets/booking/"
      />
    </article>
  );
}
export function HomeContact() {
  return (
    <section className="contact home-contact wrap" id="contact" data-reveal>
      <p className="eyebrow">05 · CONTACT</p>
      <h2>联系我</h2>
      <p className="contact-intro">
        如果我的经历与你正在寻找的内容运营方向匹配，欢迎联系我。
      </p>
      <div className="contact-person">
        <strong>马甜甜</strong>
        <span>新媒体 / 内容运营</span>
      </div>
      <div className="contact-details">
        <p>邮箱：[placeholder]</p>
        <p>手机号：[placeholder]</p>
      </div>
      <div className="actions">
        <a className="button button-dark" href={RESUME_PDF_PATH} download>
          下载简历 <span>↓</span>
        </a>
        <a className="button button-text" href="mailto:placeholder@example.com">
          发送邮件 <span>↗</span>
        </a>
      </div>
    </section>
  );
}
export function Contact({ language }: { language?: 'zh' } = {}) {
  const isChinese = language === 'zh';
  return (
    <section className="contact wrap" id="contact">
      <p className="eyebrow">{isChinese ? '联系我' : 'CONTACT'}</p>
      <h2>
        马甜甜
        <br />
        <em>新媒体 / 内容运营</em>
      </h2>
      <div className="contact-details">
        <p>{isChinese ? '邮箱' : 'Email'}：[placeholder]</p>
        <p>手机号：[placeholder]</p>
      </div>
      <div className="actions">
        <a className="button button-dark" href={RESUME_PDF_PATH} download>
          下载简历 <span>↓</span>
        </a>
        <a className="button button-text" href="mailto:placeholder@example.com">
          发送邮件 <span>↗</span>
        </a>
      </div>
    </section>
  );
}
export function Footer({ language }: { language?: 'zh' } = {}) {
  return (
    <footer className="site-footer wrap">
      <span>© {new Date().getFullYear()} 马甜甜</span>
      <span>
        {language === 'zh'
          ? '内容 / 策略 / 增长'
          : 'Content / Strategy / Growth'}
      </span>
    </footer>
  );
}
