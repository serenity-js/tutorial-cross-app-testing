import { Click, Enter, PerformsTasks, Select, step, Task, UseAngular } from 'serenity-js/lib/screenplay-protractor';

import { Calculator } from './ui/calculator';

export class Multiply implements Task {
    static number = (multiplier: number) => ({
        by: (multiplicand: number) => new Multiply(multiplier, multiplicand),
    })

    @step('{0} multiplies #multiplier by #multiplicand')
    performAs(actor: PerformsTasks): PromiseLike<void> {
        return actor.attemptsTo(
            UseAngular.enableSynchronisation(),
            Enter.theValue(this.multiplier).into(Calculator.Left_Operand),
            Select.theValue('*').from(Calculator.Operator),
            Enter.theValue(this.multiplicand).into(Calculator.Right_Operand),
            Click.on(Calculator.Go),
        );
    }

    constructor(private multiplier: number, private multiplicand: number) {
    }
}
