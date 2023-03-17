import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../utils.js/apiCalls";
import { CategoryCard } from "./CategoryCard";

//displays all category cards that exist
export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="categories">
      <h3>Categories</h3>
      {isLoading ? (
        <img
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        <ul className="categories-list">
          {categories.map((eachCategory) => {
            const capitalTitle =
              eachCategory.slug.charAt(0).toUpperCase() +
              eachCategory.slug.slice(1);
            const title = {
              title: capitalTitle.replace(/-/g, " "),
              category: eachCategory,
            };
            return (
              <Link
                to={`/categories/${eachCategory.slug}`}
                state={{ title: title }}
                className="Link"
                key={eachCategory.slug}
              >
                <CategoryCard eachCategory={eachCategory} />
              </Link>
            );
          })}
        </ul>
      )}
    </section>
  );
};
