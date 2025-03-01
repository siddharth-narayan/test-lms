import { betterAuth } from 'better-auth';
import { passkey } from 'better-auth/plugins/passkey';
import Database from 'better-sqlite3';

export const auth = betterAuth({

    emailAndPassword: {
        enabled: true,
    },

    // socialProviders: {

    //     google: {

    //         clientId: process.env.GOOGLE_CLIENT_ID,

    //         clientSecret: process.env.GOOGLE_CLIENT_SECRET

    //     },

    //     github: {

    //         clientId: process.env.GITHUB_CLIENT_ID,

    //         clientSecret: process.env.GITHUB_CLIENT_SECRET

    //     }

    // },

    plugins: [

        passkey(),


    ],

    /** if no database is provided, the user data will be stored in memory.

     * Make sure to provide a database to persist user data **/
    database: new Database("database.db"),
});