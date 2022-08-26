export const SERVER_DOMAIN = 'http://localhost:3000/';
export const CLIENT_DOMAIN = 'http://localhost:3000/';
const { host, protocol } = window.location;
export const REDIRECT_URI = `${protocol}//${host}/sign-in/callback`;
