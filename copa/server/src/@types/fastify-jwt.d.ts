import '@fastify/jwt'

declare module '@fastify/jwt' {
    interface FastifyJWT {
        user: {
            id: any;
            sub: string;
            name: string;
            avatarUrl: string;
        }
    }
}