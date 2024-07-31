export const readCSVFile = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const csvContent = event.target.result;

      resolve(csvContent); // Resolve the promise with csvContent
    };

    reader.onerror = function (event) {
      reject(event.target.error);
    };

    reader.readAsText(file);
  });
}