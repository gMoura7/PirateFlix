const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8081'
  : 'https://pirateflix-backend.herokuapp.com';

export default {
  URL_BACKEND,
};
