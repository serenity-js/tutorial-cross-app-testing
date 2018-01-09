import { Assertion } from '@serenity-js/core/lib/screenplay/expectations';
import { PerformsTasks, See, step, Task, Text } from 'serenity-js/lib/screenplay-protractor';
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
