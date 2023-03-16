import { Link } from "react-router-dom"

//displays a category ---->>>  does the Link need to have a button???! ? <<<-------
export const CategoryCard = ({eachCategory}) => {
return (
    <Link to={`/category/${eachCategory.slug}`} className='Link' >
    <button className="single-category">
        <h4 className="category-name">{eachCategory.slug}</h4>
    </button>
    </Link>
)
}