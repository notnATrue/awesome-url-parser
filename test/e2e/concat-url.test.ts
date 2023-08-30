import request from 'supertest';

import app from '../../src/index';

it('returns concated url with www', async () => {
  const urlMock = 'https://google.com.ua';
  const expectedUrl = 'https://www.google.com.ua';

  const res = await request(app).post('/url/concat').send({
    url: urlMock,
  });

  expect(res.statusCode).toEqual(201);
  expect(res.body).toBe(expectedUrl);
  expect(res.body).toEqual(expectedUrl);
});

it('returns sliced url without www', async () => {
  const urlMock = 'https://www.google.com.ua';
  const expectedUrl = 'https://google.com.ua';

  const res = await request(app).post('/url/slice').send({
    url: urlMock,
  });

  expect(res.statusCode).toEqual(201);
  expect(res.body).toBe(expectedUrl);
  expect(res.body).toEqual(expectedUrl);
});
