import request from 'supertest';
import app from './server'; 

describe('POST /validate-card', () => {
    it('should validate a correct credit card number', async () => {
        const response = await request(app)
            .post('/validate-card')
            .send({ cardNumber: '4111111111111111' });

        expect(response.status).toBe(200);
        expect(response.body.valid).toBe(true);
    });

    it('should invalidate an incorrect credit card number', async () => {
        const response = await request(app)
            .post('/validate-card')
            .send({ cardNumber: '1234567812345678' });

        expect(response.status).toBe(400);
        expect(response.body.valid).toBe(false);
    });
});
