import { Contact, Footer, Header, SectionHeader } from '@/components/portfolio';
import { ImageWithFallback } from '@/components/image-with-fallback';

const strategy = [
  ['01', '用户需求梳理', '通过每日推荐、分类和搜索入口，降低用户寻找菜谱的成本。'],
  ['02', '内容结构设计', '建立菜品、标签、烹饪方式、难度等结构化信息，让内容从单篇内容变为可管理的内容资产。'],
  ['03', '场景延伸', '将菜谱内容连接到冰箱食材管理和采购清单，提升内容实际使用价值。'],
];

const workflow = [
  ['01', '用户需求与内容主题梳理', '从日常做饭问题出发，明确内容方向与使用场景。'],
  ['02', '菜谱与食材信息结构化', '统一菜品、食材、做法与使用标签的内容结构。'],
  ['03', '图文内容生产与整理', '持续沉淀可浏览、可理解、可复用的菜谱内容。'],
  ['04', '分类标签与收藏体系配置', '建立内容检索、筛选与个人收藏的使用路径。'],
  ['05', '工具化应用与持续优化', '连接采购和食材管理，让内容进入实际行动。'],
];

const screenshots = [
  { src: '/assets/kitchen/kitchen-home.png', title: '每日推荐', detail: '作为内容入口，根据用户场景提供饮食灵感。' },
  { src: '/assets/kitchen/kitchen-recipes.png', title: '菜谱内容库', detail: '通过分类、标签和收藏机制管理内容资产。' },
  { src: '/assets/kitchen/kitchen-fridge.png', title: '冰箱食材管理', detail: '连接内容消费与实际做饭场景。' },
];

export default function KitchenPage() {
  const [homeScreen, ...secondaryScreens] = screenshots;
  return (
    <>
      <Header />
      <main className="case-page kitchen-case">
        <section className="case-hero wrap kitchen-hero">
          <div className="kitchen-hero-copy">
            <p className="eyebrow">个人内容平台项目</p>
            <h1>甜甜私房菜</h1>
            <p className="case-company">个人生活方式内容平台</p>
            <div className="kitchen-hero-intro">
              <p>基于日常饮食场景搭建的个人内容产品实践。</p>
              <p>
                从菜谱整理、饮食记录到食材管理，探索内容资产如何通过产品化设计连接用户需求与生活场景。
              </p>
            </div>
            <div className="case-role">
              <span>项目角色</span>
              <p>内容策略 · 内容架构 · 产品设计 · 工具开发</p>
            </div>
          </div>
          <ImageWithFallback
            src="/assets/home/kitchen-home-cover.webp"
            alt="甜甜私房菜项目主视觉"
            label="甜甜私房菜项目主视觉"
            className="kitchen-hero-image"
          />
        </section>

        <section className="wrap kitchen-overview">
          <SectionHeader number="01" label="项目概览" />
          <div className="kitchen-overview-grid">
            <div className="kitchen-intro-copy">
              <p className="kitchen-intro-label">项目简介</p>
              <p>甜甜私房菜是一个围绕日常饮食场景打造的个人内容平台。</p>
              <p>
                通过菜谱内容整理、信息结构化和轻量工具设计，<br />
                将碎片化内容转化为可持续管理的内容资产。
              </p>
            </div>
            <dl>
              <div><dt>内容定位</dt><dd>个人生活方式内容平台</dd></div>
              <div><dt>核心场景</dt><dd>菜谱发现 / 做饭决策 / 食材管理</dd></div>
              <div><dt>项目状态</dt><dd>已上线</dd></div>
            </dl>
          </div>
        </section>

        <section className="wrap section-block">
          <SectionHeader number="02" label="内容策略" />
          <div className="kitchen-strategy-list">
            {strategy.map(([number, title, detail]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></article>
            ))}
          </div>
        </section>

        <section className="wrap section-block">
          <SectionHeader number="03" label="内容生产流程" />
          <div className="kitchen-workflow">
            {workflow.map(([number, title, detail]) => (
              <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></article>
            ))}
          </div>
          <div className="kitchen-outputs">
            <p>内容产出</p>
            <ul>{['73+菜谱资产', '每日推荐', '分类标签体系', '收藏机制', '采购清单', '冰箱管理'].map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>

        <section className="wrap section-block">
          <SectionHeader number="04" label="内容资产工具化" />
          <p className="kitchen-section-intro">通过轻量工具设计，让内容不仅被阅读，也进入用户日常做饭、采购和食材管理流程。</p>
          <div className="kitchen-screens">
            <article className="kitchen-featured-screen">
              <ImageWithFallback src={homeScreen.src} alt={`甜甜私房菜${homeScreen.title}`} label="首页 / 每日推荐" className="kitchen-screen" />
              <h3>{homeScreen.title}</h3><p>{homeScreen.detail}</p>
            </article>
            <div className="kitchen-screen-grid">
              {secondaryScreens.map((screen) => (
                <article key={screen.title}>
                  <ImageWithFallback src={screen.src} alt={`甜甜私房菜${screen.title}`} label={screen.title} className="kitchen-screen" />
                  <h3>{screen.title}</h3><p>{screen.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <a href="https://www.workbuddy.link/p/4V4IqngDAiaNDyJhGjPjf7" target="_blank" rel="noreferrer" className="button button-dark kitchen-external-link">在线体验项目 <span>↗</span></a>
        </section>

        <section className="wrap kitchen-outcome">
          <SectionHeader number="05" label="项目成果" />
          <div>
            <p>该项目建立了一套从内容生产、内容管理到用户实际使用场景连接的个人内容运营体系。</p>
            <ul><li>沉淀 73+ 道结构化菜谱内容资产</li><li>建立分类、标签、收藏与推荐机制</li><li>将内容延伸至食材管理和采购执行场景</li></ul>
          </div>
        </section>
        <div className="wrap case-back"><a href="/#projects-personal">← 返回个人项目</a></div>
        <Contact />
      </main>
      <Footer language="zh" />
    </>
  );
}
