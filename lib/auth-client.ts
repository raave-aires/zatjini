// funções do better-auth: 
import { createAuthClient } from "better-auth/react"

// plugins:
import { emailOTPClient } from "better-auth/client/plugins"

export const authClient = createAuthClient({
    baseURL: "http://localhost:3000",
    plugins: [
        emailOTPClient()
    ]
})

export const { signIn, signUp, useSession } = createAuthClient()