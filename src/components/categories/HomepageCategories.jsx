import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../utils/apiCalls";
import { CategoryCard } from "./CategoryCard";
import "./HomepageCategories.css";

export const HomepageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const categoriesFromApi = await getCategories();
        const homeCategories = [];
        const noRepeats = [];

        while (noRepeats.length < 5) {
          let random = Math.ceil(Math.random() * categoriesFromApi.length);

          if (!noRepeats.includes(random)) {
            const eachCategory = categoriesFromApi[random];
            if (eachCategory !== undefined) {
              noRepeats.push(random);
              homeCategories.push(eachCategory);
            }
          }
        }
        setCategories(homeCategories);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching categories.");
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <section className="categories">
      <section className="section-categories">
        <h3 id="categories-header">Categories</h3>
        <Link to={"/categories"}>
          <h4 className="more-categories">See all</h4>
        </Link>
      </section>
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
      )}
    </section>
  );
};
