
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="mb-10 flex flex-wrap gap-2">
      {categories.map(category => (
        <button
          key={category}
          className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
            activeCategory === category 
              ? "bg-white text-black" 
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
