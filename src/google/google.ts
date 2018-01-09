import { protractor } from 'protractor';
import { Enter, Open, PerformsTasks, step, Task, UseAngular } from 'serenity-js/lib/screenplay-protractor';

import { GoogleSearch } from './ui/google_search';

export class Google implements Task {
  static the = (term: string) => new Google(term);

  @step('{0} googles the "#term"')
  performAs(actor: PerformsTasks): PromiseLike<void> {
    return actor.attemptsTo(
      UseAngular.disableSynchronisation(),
      Open.browserOn('http://google.co.uk/'),
      Enter.theValue(this.term).into(GoogleSearch.Query).thenHit(protractor.Key.ENTER),
    );
  }

  constructor(private term: string) {
  }
}
