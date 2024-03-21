import { render, screen } from '@testing-library/react'; // Importa render y screen de @testing-library/react para realizar pruebas
import App from './App'; // Importa el componente principal de la aplicación

// Prueba para verificar si el enlace "learn react" está renderizado
test('renders learn react link', () => {
  render(<App />); // Renderiza la aplicación
  const linkElement = screen.getByText(/learn react/i); // Busca el elemento que contiene el texto "learn react" (case-insensitive)
  expect(linkElement).toBeInTheDocument(); // Verifica que el elemento esté presente en el documento
});
