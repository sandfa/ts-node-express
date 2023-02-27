import express, { Request, Response } from "express"
const router = express.Router()

router.get('/', async (req: Request, res: Response) => {
    try {
        res.status(200).send('Hello World')
    } catch (err:any) {
        res.status(400).send(err.message)
    }
})

router.post('/', async (req: Request, res: Response) => {
    try {
        const body = req.body
        console.log(body)
        res.status(200).send(body)
    } catch (err:any) {
        res.status(400).send(err.message)
    }
})


module.exports = router