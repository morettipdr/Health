import Fastify from "fastify";

async function boostrap() {
    const fastify = Fastify({
        logger: true
    })

    fastify.get("/", () => {
        return { status: true }
    })

    fastify.listen({ port: 3333 })
}

boostrap();