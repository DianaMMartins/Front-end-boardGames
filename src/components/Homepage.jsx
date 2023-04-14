import { HomepageReviews } from './Reviews/HomepageReviews';
import './Homepage.css'
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

export const Homepage = () => {
    return (
        <section className='homepage'>
            <HomepageReviews />
        <Routes>
            <Route path="/reviews" element={<HomepageReviews />} />
        </Routes>
        </section>

    )
}