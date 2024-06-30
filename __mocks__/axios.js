const Axios = jest.fn(() => Promise.resolve({ data: {} }));
Axios.post = jest.fn(() => Promise.resolve({ data: {} }));
export default Axios;