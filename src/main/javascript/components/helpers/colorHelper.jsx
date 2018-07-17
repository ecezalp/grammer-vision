const getColor = (r, g, b) => Object.assign({}, {r, g, b});

const getTagColor = (index) => {
  const colors = [
    '#01579B',
    '#0277BD',
    '#0288D1',
    '#039BE5',
    '#03A9F4',
    '#29B6F6',
    '#4FC3F7',
    '#81D4FA',
    '#B3E5FC',
    '#E1F5FE',
  ];

  return colors[index];
};

const getWidth = (percentage) => {
  return `${Math.floor(percentage / 6).toString()}vw`;
};

export const getTagStyle = (percentage, index) => {
  let background = getTagColor(index);
  let width = getWidth(percentage);
  return Object.assign({}, {background}, {width, height: '12px'});
};