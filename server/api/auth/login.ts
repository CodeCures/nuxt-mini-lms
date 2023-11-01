import { User } from "~/server/models/User";

export default defineEventHandler(async (request) => {
    const requestBody = await readBody(request);
    const user = new User;

    const isLoggedIn = user.has(requestBody);

    return {
        isLoggedIn,
        user: isLoggedIn ? user : null
    };
});