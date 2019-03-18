const pickAShadeOfBlue = (x) => x > 50 ? '#06CCFD' : 'blue';
const trulyRandom = () => {
    const [r, g, b] = (['', '', ''].map(x => Math.ceil(Math.random() * 255)));
    return `rgb(${r}, ${g}, ${b})`;
};
const generateRandomColor = (date) => {
    const thisVariableCouldBeOddOrEven = date.getUTCSeconds();
    if (thisVariableCouldBeOddOrEven % 2 === 0) {
        return trulyRandom();
    }
    return pickAShadeOfBlue(Math.random() * 100);
};
export default generateRandomColor;
//# sourceMappingURL=utils.js.map