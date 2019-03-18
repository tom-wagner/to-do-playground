const pickAShadeOfBlue = (x: number): string => x > 50 ? '#06CCFD' : 'blue';

const trulyRandom = (): string => {
  const [r, g, b] = (['', '', ''].map(x => Math.ceil(Math.random() * 255)));
  return `rgb(${r}, ${g}, ${b})`;
};

const generateRandomColor = (date: Date): string => {
  const thisVariableCouldBeOddOrEven = date.getUTCSeconds();
  if (thisVariableCouldBeOddOrEven % 2 === 0) {
    return trulyRandom();
  }
  return pickAShadeOfBlue(Math.random() * 100);
};

export default generateRandomColor;