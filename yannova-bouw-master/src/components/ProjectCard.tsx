import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  year: number;
  tags: string[];
}

const ProjectCard = ({
  id,
  title,
  description,
  imageUrl,
  location,
  year,
  tags,
}: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`} className="block group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl font-bold text-left text-construction-800">
            {title}
          </h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-left">
            <p className="text-sm text-construction-600 line-clamp-2">
              {description}
            </p>
            <div className="flex items-center gap-2 text-sm text-construction-500">
              <span>{location}</span>
              <span>•</span>
              <span>{year}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProjectCard;