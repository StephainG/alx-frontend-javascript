export default function getFullResponseFromAPI(boolean) {
  return new Promise((resolve, reject) => {
    const success = {
      status: 200,
      body: 'Success',
    };
    if (boolean === true) {
      resolve(success);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
