import { createAuthClient } from "better-auth/svelte";
import { base } from '$app/paths';
import { passkeyClient } from "better-auth/client/plugins";


export const authClient = createAuthClient({

    baseURL: base,

    plugins: [ passkeyClient() ],

})


export const {

    signIn,

    signOut,

    signUp,

    useSession

} = authClient;