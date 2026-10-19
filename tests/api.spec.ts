import { test, expect } from '@playwright/test';

test.describe('FinTech & E-commerce Backend API Validation Suite', () => {

  // 1. GET Request Test
  test('GET - Fetch Products / Loan list', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=1');

    // Status code 200 ahe ka check karto
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const responseBody = await response.json();

    // Terminal madhe print kara
    console.log('\n--- GET API RESPONSE (DATA LIST) ---');
    console.log(responseBody);

    // Assertions
    expect(responseBody.page).toBe(1);
    expect(responseBody.data.length).toBeGreaterThan(0);
    expect(responseBody.data[0]).toHaveProperty('email');
  });

  // 2. POST Request Test (Data Create karto)
  test('POST - Create Application / Order Transaction', async ({ request }) => {
    const payload = {
      name: 'Abhishek Yewale',
      role: 'SDET Automation Engineer',
      loanAmount: '500000'
    };

    const response = await request.post('https://reqres.in/api/users', {
      data: payload,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // 201 Created check karto
    expect(response.status()).toBe(201);

    const responseBody = await response.json();

    // Terminal madhe created response data print karto
    console.log('\n--- POST API RESPONSE (CREATED RECORD) ---');
    console.log(responseBody);

    // Assertions
    expect(responseBody.name).toBe(payload.name);
    expect(responseBody.role).toBe(payload.role);
    expect(responseBody).toHaveProperty('id');
    expect(responseBody).toHaveProperty('createdAt');
  });

  // 3. Negative Validation Test (400 Bad Request)
  test('POST - Invalid Submission returns 400 Bad Request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/login', {
      data: {
        email: 'peter@klaven'
        // Missing password sathi 400 yeil
      }
    });

    expect(response.status()).toBe(400);

    const errorBody = await response.json();

    // Error response print karto
    console.log('\n--- NEGATIVE API RESPONSE (ERROR) ---');
    console.log(errorBody);

    expect(errorBody.error).toBe('Missing password');
  });

});