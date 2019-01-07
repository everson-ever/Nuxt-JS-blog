import Cookie from 'js-cookie';

export default function({req, redirect}) {
    
    //Do lado do servidor
    //Manda pra o painel o usuário devidamente já autenticado
    //Está sendo chamado no layots ou paginas (login)
    if (process.server) {  
        if (req.headers.cookie){ 
            const jwtCookie =  req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
            if(jwtCookie){  
                redirect('/admin');
            }
        }    
    }
    
    //Do lado do cliente
    //Manda pra o painel o usuário devidamente já autenticado
    //Está sendo chamado no layots ou paginas (login)
    if (process.client) {
        const jwt = Cookie.get('jwt');
        if (jwt) {
            window.location = '/admin';
        }
    }
}