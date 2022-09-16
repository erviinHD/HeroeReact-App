import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DC, HeroPage, Marvel, SearchPage } from '../pages'

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto px-10 pt-56 lg:pt-0 md:pt-0'>
                <Routes>
                    <Route path="marvel" element={<Marvel />} />
                    <Route path="dc" element={<DC />} />

                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:heroId" element={<HeroPage />} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}
