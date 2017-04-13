import { by } from 'protractor';
import { Target } from 'serenity-js/lib/serenity-protractor';

export class Calculator {
    static Left_Operand  = Target.the('Left operand').located(by.model('first'));
    static Operator      = Target.the('Operator').located(by.model('operator'));
    static Right_Operand = Target.the('Right operand').located(by.model('second'));
    static Go            = Target.the('Go').located(by.id('gobutton'));
    static Result        = Target.the('Result').located(by.css('h2'));
}
