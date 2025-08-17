import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FiHome } from 'react-icons/fi';
import ProjectCard from '@/components/ui/projectcard';

const projectsData = [
  { id: 1, title: 'Website Portfolio', 
    description: 'Sebuah website portfolio pribadi yang dibangun dengan Next.js dan Tailwind CSS, dideploy di Vercel.', 
    imageUrl: '/paujie.png', 
    tags: ['Next.js', 'Tailwind CSS', 'React', 'TypeScript'] },
  ];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Proyek Saya
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Berikut adalah beberapa proyek yang pernah saya kerjakan.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap justify-center items-center gap-8">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

        <div className="text-center mt-12">
        <Link href="/" passHref>
          <Button variant="ghost">
            <FiHome className="mr-2 h-4 w-4" />
            Kembali ke Home
          </Button>
        </Link>
      </div>

    </div>
  );
}