// Se define la función reportWebVitals que toma un argumento onPerfEntry.
const reportWebVitals = onPerfEntry => {
  // Verifica si onPerfEntry es una función y está definida.
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Importa las funciones de medición de métricas de web-vitals.
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Llama a cada función de medición de métricas y pasa la función onPerfEntry como argumento.
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

// Exporta la función reportWebVitals para que esté disponible para su uso en otros archivos.
export default reportWebVitals;
