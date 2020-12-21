export const type = 'findResults';

const findResults = (items) => ({
    type,
    payload: items,
});

export default findResults;