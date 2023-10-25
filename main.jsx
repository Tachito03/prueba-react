/* Importamos react-dom */
import { createRoot } from 'react-dom/client';
import { App } from './src/App';

//Renderizado de la app
const app = createRoot(document.getElementById('app'));
app.render(<App />);