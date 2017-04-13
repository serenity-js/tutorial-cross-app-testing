import { protractor } from 'protractor';
import { BrowseTheWeb } from 'serenity-js/lib/serenity-protractor';
import { Actor } from 'serenity-js/lib/serenity/screenplay';

import { Ensure, Multiply } from '../src/calculator';
import { Google, SelectResult } from '../src/google';

import { equals } from '../src/assertions';

describe('Cross-application testing', function() {

    this.timeout(60 * 1000);

    describe('Combining Protractor and Serenity/JS', () => {
        const Steph = Actor.named('Steph').whoCan(BrowseTheWeb.using(protractor.browser));

        it('allows you to easily navigate between non-Angular and Angular apps', () => Steph.attemptsTo(
            Google.the('juliemr calculator'),
            SelectResult.of('Super Calculator'),
            Multiply.number(6).by(7),
            Ensure.result(equals('42')),
        ));
    });
});
