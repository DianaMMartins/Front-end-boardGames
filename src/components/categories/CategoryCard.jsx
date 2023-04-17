import { Link } from "react-router-dom";

export const CategoryCard = ({ eachCategory }) => {
  const improveTitle = (titleToChange) => {
    const capitalizedTitle =
      titleToChange.charAt(0).toUpperCase() + titleToChange.slice(1);
    return capitalizedTitle.replace(/-/g, " ");
  };

  return (
    <li className="category-card" key={eachCategory.slug}>
      <Link to={`/categories/${eachCategory.slug}`} className="Link">
        <section className="each-category">
          <img src={eachCategory.img} alt='category' width='300px'/>
          <h4 className="category-name">{improveTitle(eachCategory.slug)}</h4>
        </section>
      </Link>
    </li>
  );
};
