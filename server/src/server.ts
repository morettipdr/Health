// client-id: 167267307860-o8cmnocdir094ttc83ssiet7r5oir6cs.apps.googleusercontent.com
import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";


async function bootstrap() {
    const prisma = new PrismaClient();
    const fastify = Fastify({
        logger: true
    })

    await fastify.register(cors, {
        origin: true
    })

    fastify.post("/users/create", async(req, res) => {
        const isUser = await prisma.user.count({
            where: {
                email: req.body.email,
            }
        })
        if(isUser > 0) {
            console.log("User already exists");
            res.send("User already exists")
        } else {
            await prisma.user.create({
                data: {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                }
            })
            console.log("user created successfully")
            res.send("user created successfully")
        }
    })
    

    fastify.get("/", async (req, res) => {
        res.send({status:true})
    })

    fastify.get("/users/count", async (req, res) => {
        const users = await prisma.user.count()
        res.send(users)
    })

    fastify.listen({ port: 3333 })
}

bootstrap();