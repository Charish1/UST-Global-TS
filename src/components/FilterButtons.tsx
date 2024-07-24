import React from "react";

interface FilterButtonsProps {
  setFilter: (filter: string) => void;
  activeFilter: string;
}

const filters = [
  { name: "Acceptable", color: "#28a745" },
  { name: "Monitor", color: "#ffc107" },
  { name: "Alarm", color: "#dc3545" },
  { name: "Danger", color: "#ff073a" },
  { name: "No Status", color: "#6c757d" },
];

const FilterButtons: React.FC<FilterButtonsProps> = ({
  setFilter,
  activeFilter,
}) => {
  return (
    <div className="filter-buttons">
      {filters.map((filter) => (
        <button
          key={filter.name}
          onClick={() => setFilter(filter.name.toLowerCase())}
          style={{
            backgroundColor:
              activeFilter === filter.name.toLowerCase() ? filter.color : "",
            color: activeFilter === filter.name.toLowerCase() ? "white" : "",
          }}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
