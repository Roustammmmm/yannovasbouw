import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface FilterBarProps {
  activeFilters: string[];
  onFilterChange: (filter: string) => void;
  onResetFilters: () => void;
}

const FilterBar = ({
  activeFilters,
  onFilterChange,
  onResetFilters,
}: FilterBarProps) => {
  const projectTypes = ["Nieuwbouw", "Renovatie", "Transformatie", "Veranda"];

  return (
    <div className="sticky top-0 z-10 p-4 bg-white border-b">
      <div className="flex flex-wrap items-center gap-4">
        <Select onValueChange={(value) => onFilterChange(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type project" />
          </SelectTrigger>
          <SelectContent>
            {projectTypes.map((type) => (
              <SelectItem key={type} value={type.toLowerCase()}>
                {type}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {activeFilters.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            {activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="gap-1"
                onClick={() => onFilterChange(filter)}
              >
                {filter}
                <X className="w-3 h-3" />
              </Badge>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={onResetFilters}
              className="text-sm text-construction-500"
            >
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;