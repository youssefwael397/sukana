export const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};



/**
 * Splits an array into chunks of a specified size.
 * @param arr - The array to be chunked.
 * @param chunkSize - The size of each chunk.
 * @returns A new array where each element is a chunk of the original array.
 */
export const chunkArray = <T>(arr: T[], chunkSize: number): T[][] => {
  return arr.reduce((resultArray: T[][], item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);
};
