import Credentials from "@auth/core/providers/credentials"
import type { AuthConfig } from "@auth/core/types"
import { NuxtAuthHandler } from "#auth"

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const runtimeConfig = useRuntimeConfig()

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
    secret: "my-superb-secret",
    pages: {
        signIn: '/login'
    },
    providers: [
        Credentials({
            name: 'Credentials',
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
}

export default NuxtAuthHandler(authOptions, runtimeConfig)
