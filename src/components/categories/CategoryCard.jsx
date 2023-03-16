import { Link } from "react-router-dom"

export const CategoryCard = ({eachCategory}) => {
return (
    // <Link to={`/category/${eachCategory.slug}`} />
    <button className="single-category">
        <h4 className="category-name">{eachCategory.slug}</h4>
        <p className="category-description">{eachCategory.description}</p>
    </button>
)
}