import * as  Axios  from 'axios';

const apiMovie = Axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export default apiMovie;

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDM5OTBlNmNhOTIyMTUwY2JkYTc4OGZmZWI1YjFiZCIsInN1YiI6IjVmZDM1MTRjOWE5ZjlhMDA0MDkyNGZkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m9naTNF-g2XVyCXmg7pKEuq6u6AY2m9rPelE0GgGVnY';

apiMovie.interceptors.request.use((request) => {
    request.headers['Authorization'] = `Bearer ${ token }`
    return request;
})

