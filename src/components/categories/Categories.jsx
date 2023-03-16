import { useState, useEffect } from "react";
import { getCategories } from "../../utils.js/apiCalls";
import { CategoryCard } from "./categoryCard";

export const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(()=>{
    getCategories
    ().then((categoriesFromApi) => {
        console.log(categoriesFromApi);
        // setCategories(categoriesFromApi)
    })
  },[])

  return (
    <section className="categories">
      <h3>Categories</h3>
      <section className="categories-list">
        {categories.map((eachCategory)=> {
            return(
                <CategoryCard eachCategory={eachCategory} key={eachCategory.slug} />
            )
        })}
      </section>
    </section>
  );
};
