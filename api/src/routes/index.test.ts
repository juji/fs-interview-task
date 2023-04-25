
import App from '@/App'
import request from 'supertest'
import { Application } from "express"
import { PERMISSION } from '@/lib/__mocks__/auth0'

jest.mock('@/lib/auth0')

let app:Application = App.bootstrap();

let todo:{
    id?: string
    updatedAt?: Date
    deletedAt?: Date
    createdAt?: Date
    text?: string
    done?: boolean
} = {}

describe('GET /',() => {
    
    it('returns 200', async () => {
        await request(app).get('/').expect(200)
    })

})

describe('GET /list',() => {
    
    it('checks for read permission', async () => {
        
        const res = await request(app).get('/list')
        expect(res.statusCode).not.toEqual(200)


        await request(app)
            .get('/list')
            .set('Authorization', PERMISSION.READ)
            .expect(200)

    })

})

describe('POST /item',() => {
    
    it('checks for write permission', async () => {
        
        const res = await request(app)
            .post('/item')

        expect(res.statusCode).not.toEqual(200)


        const res2 = await request(app)
            .post('/item')
            .set('Authorization', PERMISSION.READ)

        expect(res2.statusCode).not.toEqual(200)

        const text = 'asdf'
        const res3 = await request(app)
            .post('/item')
            .set('Authorization', PERMISSION.WRITE)
            .send({ text })
        
        expect(res3.statusCode).toEqual(200)
        expect(res3.body.id).toBeTruthy()
        expect(res3.body.text).toEqual( text )
        todo = res3.body
        
    })

})

describe('PATCH /item/:id',() => {
    
    it('checks for update permission', async () => {
        
        const res = await request(app)
            .patch(`/item/${todo.id}`)

        expect(res.statusCode).not.toEqual(200)


        const res2 = await request(app)
            .patch(`/item/${todo.id}`)
            .set('Authorization', PERMISSION.READ)

        expect(res2.statusCode).not.toEqual(200)

        const text = 'zxcv'
        const res3 = await request(app)
            .patch(`/item/${todo.id}`)
            .set('Authorization', PERMISSION.WRITE)
            .send({ text, done: false })
        
        expect(res3.statusCode).toEqual(200)
        expect(res3.body.id).toBeTruthy()
        expect(res3.body.text).toEqual( text )
        expect(res3.body.done).toEqual( false )
        
    })

})

describe('DELETE /item/:id',() => {
    
    it('checks for delete permission', async () => {
        
        const res = await request(app)
            .delete(`/item/${todo.id}`)

        expect(res.statusCode).not.toEqual(200)


        const res2 = await request(app)
            .delete(`/item/${todo.id}`)
            .set('Authorization', PERMISSION.READ)

        expect(res2.statusCode).not.toEqual(200)

        const res3 = await request(app)
            .delete(`/item/${todo.id}`)
            .set('Authorization', PERMISSION.WRITE)
        
        expect(res3.statusCode).toEqual(200)
        expect(res3.body.deletedAt).toBeTruthy()
        
    })

})