import React from 'react';
import {
Routes,
Route,
Link,
} from 'react-router-dom';

export default function App() {
  return (
    <html>
      <head>
        <title>Server Rendered App</title>
      </head>
      <body>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<div>About page</div>} />
        </Routes>
        {/* <script src="./client.entry.js" /> */}
      </body>
    </html>
  );
}