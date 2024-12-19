// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//       <App />
//   </StrictMode>,
// )

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(<App />);
