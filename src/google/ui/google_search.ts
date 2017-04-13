import { by } from 'protractor';
import { Target } from 'serenity-js/lib/serenity-protractor';

export class GoogleSearch {
    static Query  = Target.the('Query').located(by.name('q'));
    static Result = Target.the('Link to "{0}"').located(by.linkText('{0}'));
}
