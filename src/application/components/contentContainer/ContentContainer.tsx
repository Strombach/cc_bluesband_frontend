import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { About, Test } from './routes';

function ContentContainer() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Test />} />
                <Route path="about" element={<About />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    );
}

export default ContentContainer;
