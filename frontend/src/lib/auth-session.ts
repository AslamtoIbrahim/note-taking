import { createAuthClient } from "better-auth/react";

const {useSession} = createAuthClient({
    baseURL: 'http://localhost:3000'
})

export default useSession