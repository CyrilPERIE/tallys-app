//TODO: Add type
const isPlaceSuccess = (pronostics: any, results: any) => {
  const val = parseInt(pronostics);
  return (
    results[0].includes(val) ||
    results[1].includes(val) ||
    (results.length > 6 && results[2].includes(val))
  );
};

const isGagnantSuccess = (pronostics: any, results: any) => {
  const val = parseInt(pronostics);
  return results[0].includes(val);
};
