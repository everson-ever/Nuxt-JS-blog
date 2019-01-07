import Cookie from 'js-cookie';

export default function({req, redirect}) {

    //Do lado do servidor
    if (process.server) {
        if (!req.headers.cookie){
            return redirect('/login');
        }

        const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
        if(!jwtCookie){
            redirect('/login');
        }
    }


    //Do lado do cliente
    if (process.client) {
        const jwt = Cookie.get('jwt');
        if (!jwt) {
            window.location = '/login';
        }
    }
}