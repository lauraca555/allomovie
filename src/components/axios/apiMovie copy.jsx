import * as  Axios  from 'axios';

const apiMovie = Axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default apiMovie;

const token = ' ';

apiMovie.interceptors.request.use((request) => {
    request.headers['Authorization'] = `Bearer ${ token }`
    return request;
})

