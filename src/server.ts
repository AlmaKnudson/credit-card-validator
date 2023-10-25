import express from 'express';
import Joi from 'joi';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';


const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

/**
 * @swagger
 * components:
 *   schemas:
 *     CardNumber:
 *       type: object
 *       required:
 *         - cardNumber
 *       properties:
 *         cardNumber:
 *           type: string
 *           description: The credit card number to be validated.
 *           example: "4111111111111111"
 *
 * /validate-card:
 *   post:
 *     summary: Validates a credit card number.
 *     tags: [Credit Card]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CardNumber'
 *     responses:
 *       200:
 *         description: The credit card number is valid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valid:
 *                   type: boolean
 *                   example: true
 *       400:
 *         description: The credit card number is invalid.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 valid:
 *                   type: boolean
 *                   example: false
 *                 message:
 *                   type: string
 *                   example: "cardNumber with value 1234567812345678 fails to match the required pattern."
 */
app.post('/validate-card', (req, res) => {
    const schema = Joi.object({
        cardNumber: Joi.string().creditCard()
        // https://joi.dev/api/?v=17.9.1#stringcreditcard -- please see Luhn Algorithm for more details
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).send({ valid: false, message: error.details[0].message });
    }

    return res.json({ valid: true });
});


const options = {
definition: {
    openapi: '3.0.0',
    info: {
    title: 'Credit Card Validator API',
    version: '1.0.0',
    description: 'An API to validate credit card numbers based on the Luhn algorithm.',
    },
    servers: [
    {
        url: 'http://localhost:4000',
    },
    ],
},
apis: ['src/server.ts'],
};

const specs = swaggerJsdoc(options);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));


export default app;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

