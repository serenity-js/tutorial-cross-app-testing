import { protractor } from 'protractor';
import { Enter, Open, UseAngular } from 'serenity-js/lib/serenity-protractor';
import { step } from 'serenity-js/lib/serenity/recording';
import { PerformsTasks, Task } from 'serenity-js/lib/serenity/screenplay';

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
