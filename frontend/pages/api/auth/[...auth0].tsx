import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";

const afterCallback = async (
    req: any, 
    res: any, 
    session: any, 
    state: any
) => {

    // console.log('session', session);

    // add accessTokenScope to user object
    // so the browser can read it
    // and make it an object to ease in selecting
    session.user.accessTokenScope = session.accessTokenScope
        .split(' ').reduce((a:any,b:string) => {
            return {
                ...a,
                [b]: true
            }
        },{})

    return session;
}

export default handleAuth({
    async callback(req, res) {
        try {
            await handleCallback(req, res, { afterCallback });
        } catch (error) {
            res.status(error.status || 500).end(error.message);
        }
    }
});


