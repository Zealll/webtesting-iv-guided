const db = require('../data/dbConfig.js')
const hobbitsDB = require('./hobbitsModel.js')



describe('hobbits model', () => {
    describe('insert', () => {

        afterEach(async () => {
            await db('hobbits').truncate()
        })
        it('Should insert provided topics into the DB', async () => {
            await hobbitsDB.insert({ name: 'Sam'})
            await hobbitsDB.insert({ name: 'Frodo'})

            const hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(2)
        })

        it('Should insert the provided hobbit into the DB', async () => {
            let hobbit = await hobbitsDB.insert({ name: 'Sam'})
            expect(hobbit.name).toBe('Sam')

            hobbit = await hobbitsDB.insert({ name: 'Frodo' })
            expect(hobbit.name).toBe('Frodo')
        })
    })
})