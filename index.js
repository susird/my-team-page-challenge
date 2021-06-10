import { createHeader } from './Components/Header';

const rootElement = document.getElementById('root');
const headerElement = createHeader()

rootElement.appendChild(headerElement);