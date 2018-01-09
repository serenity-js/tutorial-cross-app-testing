import { Click, Is, PerformsTasks, step, Task, Wait } from 'serenity-js/lib/screenplay-protractor';

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
