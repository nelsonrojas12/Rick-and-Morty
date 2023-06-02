const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => { 


describe('GET /rickandmorty/character/:id', () => {

    it('Responde con status: 200', async () => {
        await agent.get('/rickandmorty/character/1').expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
        const response = await agent.get('/rickandmorty/character/1').expect(200);

        expect(response.body).toHaveProperty('id');
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('species');
        expect(response.body).toHaveProperty('gender');
        expect(response.body).toHaveProperty('status');
        expect(response.body).toHaveProperty('origin');
        expect(response.body).toHaveProperty('image');

    })

    t('Si hay un error responde con status: 500', async () => {
        const nonExistentId = 9999;
        const response = await agent.get(`/rickandmorty/character/${nonExistentId}`).expect(500);
        expect(response.status).toBe(500);
      });

});
})