import { Footer, Header } from '@/components/portfolio';
import { RESUME_PDF_PATH } from '@/components/site-config';

export default function ResumePlaceholder() { return <><Header /><main className="resume-page wrap"><p className="eyebrow">RESUME</p><h1>简历文件占位</h1><p>正式文件将统一使用 <code>{RESUME_PDF_PATH}</code>。用同名 PDF 覆盖占位文件后，所有下载简历按钮会自动读取最新版本。</p></main><Footer /></>; }
