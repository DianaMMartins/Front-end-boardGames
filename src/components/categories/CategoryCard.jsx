import { Link } from "react-router-dom";
import "./CategoryCard.css";
import {memo} from 'react';
import { reviewTitle } from '../../utils/reviewTitle.js'
export const CategoryCard =  memo (({ eachCategory }) => {
    return (
    <li className="category-card" key={eachCategory.slug}>
      <Link to={`/categories/${eachCategory.slug}`} className="Link">
        <section className="each-category">
          <img src={eachCategory.img} alt="category" width="300px" />
          <h4 className="category-name">{reviewTitle(eachCategory.slug)}</h4>
        </section>
      </Link>
    </li>
  );
})