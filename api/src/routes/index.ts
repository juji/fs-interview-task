import Router from "express-promise-router"
import { jwtCheck, allowRead, allowWrite } from '@/lib/auth0'
import prisma from "@/lib/prisma";

// import Todo from '@/lib/todo'

const router = Router();

router.all("/", (req, res) => res.json({ version: "0.0.1" }));

// router.get("/list", jwtCheck, allowRead, async (req, res) => {
router.get("/list", async (req, res) => {

    const todos = await prisma.todo.findMany({
        where: { deletedAt: null },
        orderBy: [
            { createdAt: 'desc' }
        ]
    })

    res.json(todos)

});

// router.post("/item", jwtCheck, allowWrite, async (req, res) => {
router.post("/item", async (req, res) => {

    const { text } = req.body
    const todo = await prisma.todo.create({
        data: { text }
    })
    res.json(todo)

});

// router.patch("/item/:id", jwtCheck, allowWrite, async (req, res) => {
router.patch("/item/:id", async (req, res) => {

    const { id } = req.params
    const { text, done } = req.body
    const todo = await prisma.todo.update({
        where: { id },
        data: { text, done }
    })

    res.json(todo)
    
});

// router.delete("/item/:id", jwtCheck, allowWrite, async (req, res) => {
router.delete("/item/:id", async (req, res) => {

    const { id } = req.params
    const todo = await prisma.todo.update({
        where: { id },
        data: { deletedAt: new Date() }
    })
    
    res.json(todo)
    
});

export default router
