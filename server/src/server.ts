// client-id: 167267307860-o8cmnocdir094ttc83ssiet7r5oir6cs.apps.googleusercontent.com

import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";

async function boostrap() {
    const prisma = new PrismaClient();
    const fastify = Fastify({
        logger: true
    })

    fastify.post("/users/create", async(req, res) => {
        const newUser = await prisma.user.create({
            data: {
                name: req.body.name,
                email: req.body.email,
            }
        })
        res.send("post made")
    })

    fastify.get("/", async (req, res) => {
        res.send({status:true})
    })

    fastify.get("/users/count", async (req, res) => {
        const users = await prisma.user.findMany()
        res.send(users.length)
    })

    fastify.listen({ port: 3333 })
}

boostrap();