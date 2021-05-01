const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = 'https://jakesspotifyclone.netlify.app/player'
const clientId = '125510b1a9e3477aa023e15434afcfcf' //Generated for you when you sign up at developer.spotify.com

const scopes = [
    'streaming',
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-playback-state',
    'user-read-email',
    'user-read-private',
    'user-read-currently-playing',
    'user-modify-playback-state',
    'user-follow-modify',
    'user-follow-read',
];

const authLink = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

export default authLink;