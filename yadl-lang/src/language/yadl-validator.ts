import type { ValidationAcceptor, ValidationChecks } from 'langium';
import type { YadlAstType, Person } from './generated/ast.js';
import type { YadlServices } from './yadl-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: YadlServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.YadlValidator;
    const checks: ValidationChecks<YadlAstType> = {
        Person: validator.checkPersonStartsWithCapital
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class YadlValidator {

    checkPersonStartsWithCapital(person: Person, accept: ValidationAcceptor): void {
        if (person.name) {
            const firstChar = person.name.substring(0, 1);
            if (firstChar.toUpperCase() !== firstChar) {
                accept('warning', 'Person name should start with a capital.', { node: person, property: 'name' });
            }
        }
    }

}
