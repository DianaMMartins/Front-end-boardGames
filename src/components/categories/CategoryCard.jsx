import { Link, Route, Routes } from "react-router-dom";
import { CategoryPage } from "./CategoryPage";

//displays a category ---->>> I want to add an image per category !! <<<-------
export const CategoryCard = ({ eachCategory }) => {
  const improveTitle = (titleToChange) => {
    const capitalizedTitle =
      titleToChange.charAt(0).toUpperCase() + titleToChange.slice(1);
    return capitalizedTitle.replace(/-/g, " ");
  };

  return (
    <li key={eachCategory.slug}>
      <Link to={`/categories/${eachCategory.slug}`} className="Link">
        <h4 className="category-name">{improveTitle(eachCategory.slug)}</h4>
        {/* <CategoryPage eachCategory={eachCategory} title={improveTitle(eachCategory.slug)}/> */}
      </Link>
    </li>
  );
};
