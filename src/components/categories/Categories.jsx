import { useState, useEffect } from "react";
import { getCategories } from "../../utils/apiCalls";
import { CategoryCard } from "./CategoryCard";
import "./Categories.css";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const categoriesFromApi = await getCategories();
        setCategories(categoriesFromApi);
      } catch (error) {
        console.error(error);
        setError("Error fetching categories");
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section>
      {isLoading ? (
        <img
          id="loading"
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <section className="categories">
          <h3>Categories</h3>
          <ul className="categories-container">
            {categories.map((eachCategory) => {
              return (
                <CategoryCard
                  eachCategory={eachCategory}
                  key={eachCategory.slug}
                />
              );
            })}
          </ul>
        </section>
      )}
    </section>
  );
};
