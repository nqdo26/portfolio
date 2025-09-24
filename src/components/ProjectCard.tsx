import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
  hasDemo?: boolean;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  demoLink,
  githubLink,
  hasDemo = false,
}: ProjectCardProps) {
  return (
    <Card className="h-full group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1 flex-1">
            <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            <CardDescription className="text-sm leading-relaxed">
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs font-medium px-2 py-1 hover:bg-primary/10 transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          {hasDemo && demoLink && (
            <Button
              variant="default"
              size="sm"
              asChild
              className="flex-1 text-xs"
            >
              <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5"
              >
                <ExternalLink className="w-3 h-3" />
                Live Demo
              </a>
            </Button>
          )}

          <Button
            variant="outline"
            size="sm"
            asChild
            className={`text-xs ${hasDemo ? "flex-1" : "w-full"}`}
          >
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5"
            >
              <Github className="w-3 h-3" />
              GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
