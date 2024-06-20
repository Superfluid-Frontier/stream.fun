import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Logo from '../public/logo.jpg';
import { cn } from '@/lib/utils';
import { Project } from '@/types/project';

interface CardProjectProps {
  clicked?: boolean;
  project: Project;
}

export function CardProject(props: CardProjectProps) {
  const { clicked, project } = props;
  const router = useRouter();

  const handleCreateProject = () => {
    router.push('/projects/' + project.id);
  };

  return (
    <Card onClick={handleCreateProject}>
      <CardContent className={cn('p-5 ', clicked && 'cursor-pointer  hover:bg-gray-800')}>
        <div className="flex flex-row space-x-3">
          <div className="w-4/12">
            <Image
              src={project.logoURI}
              width={500}
              height={500}
              className="rounded-sm"
              alt="Project logo"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-xs font-semibold">{project.name}</div>
            <div className="text-xs font-semibold text-green-500">
              {/* Market cap: {project.marketCap} */}
              {project.symbol}
            </div>
            <div className="text-xs font-semibold">
              Created At: {new Date(parseFloat(project.createdAtTimestamp) * 1000).toDateString()}
            </div>
            <div className="flex flex-col space-y-1 text-xs">
              <div className="font-semibold">
                {project.name} (ticker: {project.ticker}):{' '}
              </div>
              <div className="font-light">{project.description}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
