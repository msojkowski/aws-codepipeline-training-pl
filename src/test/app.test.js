const request = require('supertest')
const app = require('../app') // Import aplikacji Express

describe('Express App Tests', () => {
  test('GET / should return a welcome message', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
    expect(response.body).toEqual({ message: 'Hello, World! This is running on Express!' })
  })

  test('GET /test should return a test message', async () => {
    const response = await request(app).get('/test')
    expect(response.statusCode).toBe(500)
    expect(response.body).toEqual({ message: 'Test endpoint working!' })
  })

  test('GET /nonexistent should return 404', async () => {
    const response = await request(app).get('/nonexistent')
    expect(response.statusCode).toBe(404)
  })
})
