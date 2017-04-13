import { Click, Is, Wait } from 'serenity-js/lib/serenity-protractor';
import { step } from 'serenity-js/lib/serenity/recording';
import { PerformsTasks, Task } from 'serenity-js/lib/serenity/screenplay';

import { GoogleSearch } from './ui/google_search';

export class SelectResult implements Task {
    static of = (result: string) => new SelectResult(result);

    @step('{0} selects "#result" from the list of results')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            Wait.until(GoogleSearch.Result.of(this.result), Is.clickable()),
            Click.on(GoogleSearch.Result.of(this.result)),
        );
    }

    constructor(private result: string) {
    }
}
