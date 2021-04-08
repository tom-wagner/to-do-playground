const generateRandomColor = (): string => {
  const [r, g, b] = (['', '', ''].map(x => Math.ceil(Math.random() * 255)));
  return `rgb(${r}, ${g}, ${b})`;
};

export default generateRandomColor;