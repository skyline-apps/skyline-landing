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
                    <div className="flex flex-col items-center justify-between min-h-dvh w-full relative font-serif">
                        <div
                            className="absolute inset-0 w-full h-full bg-no-repeat bg-cover bg-top"
                            style={{ backgroundImage: `url(${skylineBg})` }}
                            aria-hidden="true"
                        />
                        <div className="relative">
                            <div className="text-4xl text-primary-900 pt-20">
                                studio skyline
                            </div>
                            <div className="py-8 text-primary-600">
                                questions? <a href="mailto:team@skylinestud.io">team@skylinestud.io</a>
                            </div>
                        </div>
                        <div className="relative bottom-4 text-sm text-secondary-100">
                            © 2025 studio skyline llc
                        </div>
                    </div>
                } />
            </Routes>
        </Router>
    )
}

export default App 