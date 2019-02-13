import mockData from './data.json';

/**
 * Mock an asynchronous fetch of todos from the JSON
 * @return {Promise}
 */
export function searchColors(searchTerm) {
  return new Promise(resolve => {
    return (
      setTimeout(() => {
        return resolve(
          mockData.colors.filter(color => {
            return color.toLowerCase().startsWith(searchTerm.toLowerCase());
          })
        );
      }, Math.floor(Math.random() * (1000 - 300))) + 300
    );
  });
}
