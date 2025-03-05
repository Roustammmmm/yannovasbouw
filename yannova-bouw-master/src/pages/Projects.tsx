import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import FilterBar from "@/components/FilterBar";

// Mock data - replace with actual data from your backend
const projectsData = [
  {
    id: "1",
    title: "Nieuwbouwproject",
    description: "Modern en duurzaam wooncomplex met 24 appartementen, voorzien van de laatste energiebesparende technologieën.",
    imageUrl: "/placeholder.svg",
    location: "Amsterdam",
    year: 2023,
    tags: ["Nieuwbouw", "Duurzaam"],
    type: "nieuwbouw"
  },
  {
    id: "2",
    title: "Renovatie Villa",
    description: "Complete renovatie van een historische villa met behoud van authentieke elementen.",
    imageUrl: "/placeholder.svg",
    location: "Utrecht",
    year: 2022,
    tags: ["Renovatie", "Historisch"],
    type: "renovatie"
  },
  {
    id: "3",
    title: "Luxe Veranda",
    description: "Moderne glazen veranda met schuifdeuren en geïntegreerde verlichting, perfect voor jaar-rond gebruik.",
    imageUrl: "/placeholder.svg",
    location: "Rotterdam",
    year: 2023,
    tags: ["Veranda", "Modern"],
    type: "veranda"
  },
  {
    id: "4",
    title: "Klassieke Veranda",
    description: "Traditioneel vormgegeven veranda met houten elementen, naadloos geïntegreerd met de bestaande architectuur.",
    imageUrl: "/placeholder.svg",
    location: "Den Haag",
    year: 2023,
    tags: ["Veranda", "Klassiek"],
    type: "veranda"
  }
];

const Projects = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const handleFilterChange = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const handleResetFilters = () => {
    setActiveFilters([]);
  };

  const filteredProjects = activeFilters.length
    ? projectsData.filter((project) =>
        activeFilters.some(
          (filter) =>
            project.type === filter.toLowerCase() ||
            project.tags.includes(filter)
        )
      )
    : projectsData;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="px-4 mx-auto max-w-7xl">
        <div className="pt-24 pb-8">
          <h1 className="text-4xl font-bold text-construction-800">
            Onze Projecten
          </h1>
        </div>
        
        <FilterBar
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
        />

        <div className="grid gap-8 py-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;