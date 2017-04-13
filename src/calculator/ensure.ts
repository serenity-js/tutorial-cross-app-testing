import { Text } from 'serenity-js/lib/serenity-protractor';
import { step } from 'serenity-js/lib/serenity/recording';
import { PerformsTasks, See, Task } from 'serenity-js/lib/serenity/screenplay';
import { Assertion } from 'serenity-js/lib/serenity/screenplay/expectations';

import { Calculator } from './ui/calculator';

export class Ensure implements Task {
    static result = (assertion: Assertion<string>): Task => new Ensure(assertion);

    @step('{0} checks the result')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            See.if(Text.of(Calculator.Result), this.assertion),
        );
    }

    constructor(private assertion: Assertion<string>) {
    }
}
