import { ParseUrlService } from '../../src/services/parse-url.service';

it('returns sliced url without www', async () => {
  const parseUrlService = new ParseUrlService();
  const urlMock = 'https://www.google.com.ua';
  const expectedUrl = 'https://google.com.ua';

  expect(await parseUrlService.sliceUrl(urlMock)).toBeDefined();
  expect(await parseUrlService.sliceUrl(urlMock)).not.toBeNull();
  expect(await parseUrlService.sliceUrl(urlMock)).toBe(expectedUrl);
  expect(await parseUrlService.sliceUrl(urlMock)).toEqual(expectedUrl);
});

it('returns concated url with www', async () => {
  const parseUrlService = new ParseUrlService();
  const urlMock = 'https://google.com.ua';
  const expectedUrl = 'https://www.google.com.ua';

  expect(await parseUrlService.concatUrl(urlMock)).toBeDefined();
  expect(await parseUrlService.concatUrl(urlMock)).not.toBeNull();
  expect(await parseUrlService.concatUrl(urlMock)).toBe(expectedUrl);
  expect(await parseUrlService.concatUrl(urlMock)).toEqual(expectedUrl);
});
