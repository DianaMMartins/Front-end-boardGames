import { useState, useEffect } from "react";
import { getCategories } from "../../utils/apiCalls";
import { CategoryCard } from "./CategoryCard";
import "./Categories.css";

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
      <h3 id="categories-page-header">Categories</h3>
      {isLoading ? (
        <img
          id="loading"
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        <ul className="categories-list">
          {categories.map((eachCategory) => {
            return (
              <CategoryCard
                eachCategory={eachCategory}
                key={eachCategory.slug}
              />
            );
          })}
        </ul>
      )}
    </section>
  );
};
