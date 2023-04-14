import { useState, useEffect } from "react";
import { getCategories } from "../../utils.js/apiCalls";
import { CategoryCard } from "./CategoryCard";

export const HomepageCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
      setIsLoading(false);
    });
  }, []);

  const getHomeCategories = () => {
    const homeCategories = [];

    if (categories.length) {
      let categoriesCounter = 0;
      const noRepeats = [];

      while (categoriesCounter < 4) {
        let random = Math.ceil(Math.random() * categories.length);
        if (!noRepeats.includes(random)) {
          noRepeats.push(random);
          categoriesCounter++;
          const eachCategory = categories[random];
          homeCategories.push(eachCategory)
        }
      }
      // console.log(homeCategories, noRepeats);
    }
    return homeCategories;
  };

  // console.log(getHomeCategories(), categories);

  return (
    <section className="categories">
      <h3>Categories</h3>
      {isLoading ? (
        <img
          id="loading"
          src={require(`../../images/loading.gif`)}
          alt="loading"
          width="250vw"
        />
      ) : (
        // <ul className="categories-list">
        //   {getHomeCategories().map((eachCategory) => {
        //     return (
        //       <CategoryCard
        //         eachCategory={eachCategory}
        //         key={eachCategory.slug}
        //       />
        //     );
        //   })}
        // </ul>
      <p>hello</p>
        )
      }
    </section>
  );
};
