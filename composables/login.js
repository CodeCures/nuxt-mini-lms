import CredentialsProvider from 'next-auth/providers/credentials'
import { NuxtAuthHandler } from '#auth'

export default NuxtAuthHandler({
    secret: "my-superb-secret",
    pages: {
        signIn: '/',
    },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
            name: "Credentials",
            credentials: {},
            authorize(credentials: any) {
                const {
                    redirect,
                    csrfToken,
                    callbackUrl,
                    json,
                    ...payload
                } = credentials

                return payload
            }
        })
    ]
})
