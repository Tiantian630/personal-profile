import { notFound } from 'next/navigation';
import { BookingCasePage } from '@/components/booking-case-page';
import { CasePage } from '@/components/portfolio';
import { projects } from '@/components/projects-data';

export function generateStaticParams() {
  return [...projects.map(({ slug }) => ({ slug })), { slug: 'booking' }];
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === 'booking') return <BookingCasePage />;

  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return <CasePage project={project} />;
}
