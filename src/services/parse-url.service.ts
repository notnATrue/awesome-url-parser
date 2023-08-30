export class ParseUrlService {
  async sliceUrl(url: string): Promise<string> {
    const splitedUrl: string[] = url.split('//');
    const firstPart: string = splitedUrl[0];
    const secondPart: string = splitedUrl[1];
    const splitedSecondPart: string[] = secondPart.split('.');
    let modifiedSecondPart: string = '';
    const findingPart = 'www';
    for (const partUrl of splitedSecondPart) {
      if (partUrl !== findingPart) {
        const firstPart: string = splitedSecondPart[1];
        if (firstPart !== partUrl) {
          modifiedSecondPart = modifiedSecondPart.concat('.', partUrl);
        } else {
          modifiedSecondPart = modifiedSecondPart.concat('', partUrl);
        }
      }
    }

    return firstPart.concat('//', modifiedSecondPart);
  }

  async concatUrl(url: string): Promise<string> {
    const splitedUrl: string[] = url.split('//');
    const firstPart: string = splitedUrl[0];
    const secondPart: string = splitedUrl[1];
    const splitedSecondPart: string[] = secondPart.split('.');
    let modifiedSecondPart: string = '';
    const stringToAdd = 'www';
    for (const partUrl of splitedSecondPart) {
      if (partUrl !== stringToAdd && splitedSecondPart.indexOf(partUrl) === 0) {
        modifiedSecondPart = modifiedSecondPart.concat('', stringToAdd);
        modifiedSecondPart = modifiedSecondPart.concat('.', partUrl);
      } else {
        if (
          partUrl === stringToAdd &&
          splitedSecondPart.indexOf(partUrl) === 0
        ) {
          // this needs if user already set www
          modifiedSecondPart = modifiedSecondPart.concat('', partUrl);
        } else {
          modifiedSecondPart = modifiedSecondPart.concat('.', partUrl);
        }
      }
    }

    return firstPart.concat('//', modifiedSecondPart);
  }
}
