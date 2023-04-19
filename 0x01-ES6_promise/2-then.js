export default function handleResponseFromAPI(promise) {
    return new Promise((resolve, reject) => {
        const object = {status: 200,body: 'success',}
        promise.then(() => resolve(object)).catch((error) => reject(error)).finally(() => {console.log('Got a response from the API')});
    });
}