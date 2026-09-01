import { notFound } from 'next/navigation';
import { CasePage } from '@/components/portfolio';
import { projects } from '@/components/projects-data';

export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = projects.find((item) => item.slug === slug); if (!project) notFound(); return <CasePage project={project} />; }
