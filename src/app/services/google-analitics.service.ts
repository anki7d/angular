declare let gtag: Function;

export class GoogleAnaliticsService {

  constructor() { }

  public eventEmitter(
    eventName: string,
    evendData: object) {

    gtag('event', eventName, evendData);

  }

}
