import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom';
import skylineBg from '/skyline_landing.svg';

function App() {
    const searchParams = new URLSearchParams(window.location.search);
    const redirect = searchParams.get('redirect');

    if (redirect) {
        return (
            <Router basename="">
                <Routes>
                    <Route path="/" element={<Navigate to={redirect} />} />
                </Routes>
            </Router>
        );
    }

    return (
        <Router basename="">
            <Routes>
                <Route path="/" element={
                    <div className="min-h-screen w-full relative">
                        <div
                            className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-top"
                            style={{ backgroundImage: `url(${skylineBg})` }}
                            aria-hidden="true"
                        />
                        <div className="relative text-center text-4xl text-primary-900 font-serif py-20">
                            skyline studio
                        </div>
                    </div>
                } />
            </Routes>
        </Router>
    )
}

export default App 