const getColor = (r, g, b) => Object.assign({}, {r, g, b});

const getTagColor = (index) => {
  const colors = [
    getColor(97, 122, 127),
    getColor(112, 136, 122),
    getColor(137, 164, 122),
    getColor(175, 194, 164),
    getColor(164, 177, 180),
    getColor(126, 129, 170),
    getColor(203, 129, 89),
    getColor(225, 184, 128),
    getColor(216, 186, 74),
    getColor(216, 186, 74),
    getColor(216, 186, 74),
    getColor(216, 186, 74),
    getColor(216, 186, 74),
    getColor(216, 186, 74),
  ];

  let color = colors[index];
  return `rgb(${color.r}, ${color.g}, ${color.b})`;
};

const getWidth = (percentage) => {
  return `${Math.floor(percentage / 6).toString()}vw`;
};

export const getTagStyle = (percentage, index) => {
  let background = getTagColor(index);
  let width = getWidth(percentage);
  return Object.assign({}, {background}, {width, height: '12px'});
};