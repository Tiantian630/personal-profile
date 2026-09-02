import { ImageWithFallback } from '@/components/image-with-fallback';
import { Contact, Footer, Header, SectionHeader } from '@/components/portfolio';

const douyinWorks = [
  {
    title: '已发布作品一',
    image: '/assets/ai/ai-storyboard-01.webp',
    alt: '人工智能漫剧作品分镜画面一',
    href: 'https://v.douyin.com/pd8cIihnA2U/',
  },
  {
    title: '已发布作品二',
    image: '/assets/ai/ai-storyboard-02.webp',
    alt: '人工智能漫剧作品分镜画面二',
    href: 'https://v.douyin.com/ayZq08Fkx9w/',
  },
];

export default function AIPractice() {
  return (
    <>
      <Header />
      <main className="case-page ai-comic-case">
        <section className="case-hero wrap ai-comic-hero">
          <ImageWithFallback
            src="/assets/home/aigc-feature-cover.webp"
            alt="《我救了三年后刀了我的男人们》人工智能漫剧主视觉"
            label="人工智能漫剧主视觉"
            className="ai-comic-hero-image"
          />
          <div className="ai-comic-hero-copy">
            <p className="eyebrow">项目案例</p>
            <h1>AI漫剧创作</h1>
            <p className="ai-comic-subtitle">人工智能漫剧 · 三维动画 · 女性向内容</p>
            <ul className="ai-comic-tags">
              {[
                '创意策划',
                '剧本设计',
                '分镜制作',
                '角色资产',
                '场景设计',
                'AI视觉生成',
                '视频剪辑',
              ].map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <a
              className="ai-comic-watch"
              href={douyinWorks[0].href}
              target="_blank"
              rel="noreferrer"
            >
              查看完整作品 <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="wrap section-block ai-comic-introduction">
          <SectionHeader number="01" label="项目介绍" />
          <div className="ai-comic-introduction-copy">
            <p>这是一次关于 AI 漫剧创作的个人探索。</p>
            <p>
              从一个故事创意开始，我学习并搭建了一套 AI 内容生产流程，使用 GPT 完成剧情构思与角色设定，结合豆包优化脚本内容，并通过即梦完成角色、场景和分镜视觉生成。
            </p>
            <p>
              从文字创意到视觉资产，再到视频剪辑与发布，我独立完成了一部 AI 漫剧作品的完整制作流程。
            </p>
          </div>
          <div className="ai-comic-tool-list">
            <article>
              <h3>GPT</h3>
              <p>用于故事设定、世界观构建、人物关系设计以及剧情优化。</p>
            </article>
            <article>
              <h3>豆包</h3>
              <p>用于辅助脚本调整、内容优化和创意完善。</p>
            </article>
            <article>
              <h3>即梦</h3>
              <p>用于人物角色、场景设计以及分镜画面生成。</p>
            </article>
          </div>
        </section>

        <section className="wrap section-block ai-comic-assets-section">
          <SectionHeader number="02" label="角色资产设计" />
          <div className="ai-comic-asset-grid">
            <figure>
              <ImageWithFallback
                src="/assets/ai/ai-character-yanzhao.webp"
                alt="女主角色资产设定"
                label="女主角色资产"
                className="ai-comic-asset-image"
              />
              <figcaption>女主角色资产</figcaption>
            </figure>
            <figure>
              <ImageWithFallback
                src="/assets/ai/ai-character-xielin.webp"
                alt="男主角色资产设定"
                label="男主角色资产"
                className="ai-comic-asset-image"
              />
              <figcaption>男主角色资产</figcaption>
            </figure>
          </div>
          <p className="ai-comic-section-note">
            <strong>人物设定：</strong>统一角色外观、服饰、气质，保证连续剧情中的视觉一致性。
          </p>
        </section>

        <section className="wrap section-block ai-comic-assets-section">
          <SectionHeader number="03" label="场景资产设计" />
          <div className="ai-comic-asset-grid ai-comic-scene-grid">
            <figure>
              <ImageWithFallback
                src="/assets/ai/ai-scene-palace-rain.webp"
                alt="大曜皇宫雨夜场景资产"
                label="大曜皇宫雨夜场景"
                className="ai-comic-asset-image"
              />
              <figcaption>大曜皇宫雨夜</figcaption>
            </figure>
            <figure>
              <ImageWithFallback
                src="/assets/ai/ai-scene-empress-bedroom.webp"
                alt="女帝寝宫场景资产"
                label="女帝寝宫场景"
                className="ai-comic-asset-image"
              />
              <figcaption>女帝寝宫</figcaption>
            </figure>
          </div>
          <p className="ai-comic-section-note">
            <strong>场景设计：</strong>根据剧情需求搭建不同空间环境，包括宫殿、寝宫等核心剧情场景。
          </p>
        </section>

        <section className="wrap section-block ai-comic-assets-section">
          <SectionHeader number="04" label="分镜设计" />
          <div className="ai-comic-asset-grid ai-comic-storyboard-grid">
            <figure>
              <ImageWithFallback
                src="/assets/ai/ai-storyboard-01.webp"
                alt="人工智能漫剧分镜画面一"
                label="分镜画面一"
                className="ai-comic-asset-image"
              />
              <figcaption>分镜画面一</figcaption>
            </figure>
            <figure>
              <ImageWithFallback
                src="/assets/ai/ai-storyboard-02.webp"
                alt="人工智能漫剧分镜画面二"
                label="分镜画面二"
                className="ai-comic-asset-image"
              />
              <figcaption>分镜画面二</figcaption>
            </figure>
          </div>
          <p className="ai-comic-section-note">
            通过镜头拆解、动作设计和画面规划，将文字剧情转化为可视化动画内容。
          </p>
        </section>

        <section className="wrap section-block ai-comic-published-work">
          <SectionHeader number="05" label="成片展示" />
          <div className="ai-comic-work-grid">
            {douyinWorks.map((work) => (
              <a
                className="ai-comic-work-card"
                href={work.href}
                key={work.title}
                target="_blank"
                rel="noreferrer"
                aria-label={`在抖音查看${work.title}`}
              >
                <ImageWithFallback
                  src={work.image}
                  alt={work.alt}
                  label={work.title}
                  className="ai-comic-work-image"
                />
                <span className="ai-comic-play" aria-hidden="true">▶</span>
                <span className="ai-comic-work-title">{work.title}</span>
              </a>
            ))}
          </div>
        </section>

        <div className="wrap case-back ai-comic-back">
          <a href="/#projects-personal"><span aria-hidden="true">←</span> 返回个人项目</a>
        </div>
        <Contact language="zh" />
      </main>
      <Footer language="zh" />
    </>
  );
}
