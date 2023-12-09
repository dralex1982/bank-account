export const names = ['Hapoalim', 'Leumi', 'Discount'];
export const getRandomIndex = () => Math.trunc(Math.random()*names.length);

export const getBank = index => ({name: names[index]});