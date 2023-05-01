import { Link } from "react-router-dom"
import "./ConfirmLogout.css"

export const ConfirmLogout = () => {

    return (
        <section className="confirm-page">
            <h2>Are you sure you want to sign out?</h2>
            <section className="buttons">
            <Link to={'/logout'}>
                <button >Yes</button>
            </Link>
            <Link to={'/'}>
                <button>No</button>
            </Link>
            </section>
        </section>
    )
}