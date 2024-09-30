import type { ValidationChecks } from 'langium';
import type { YadlAstType } from './generated/ast.js';
import type { YadlServices } from './yadl-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: YadlServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.YadlValidator;
    const checks: ValidationChecks<YadlAstType> = {
        YadlModel: [
            // validator.checkPersonAreGreetedAtMostOnce,
            // validator.checkUniqueEntityName,
            // validator.checkUniqueAtomName,
            // validator.checkUniqueMoleculeName,
            // validator.checkUniqueOrganismName,
            // validator.checkUniquePageName,
          ],
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class YadlValidator {

      // checkUniqueEntityName(model: YadlModel, accept: ValidationAcceptor): void {
      //   //create a multi-counter variable using a map
      //   const counts = new Map<string, number>();
      //   //initialize the counter for each person to zero
      //   model.entities.forEach((p) => counts.set(p.name, 0));
      //   //iterate over all greetings and count the number of greetings for each person
      //   model.entities.forEach((entity) => {
      //     //Attention! if the linker was unsucessful, entity is undefined
      //     //set the new value of the counter
      //     const newValue = counts.get(entity.name)! + 1;
      //     counts.set(entity.name, newValue);
      //     //if the counter is greater than 1, create a helpful error
      //     if (newValue > 1) {
      //       accept(
      //         "error",
      //         `You can define entity at most once! This is the ${newValue}${
      //           newValue == 2 ? "nd" : "th"
      //         } greeting to ${entity.name}.`,
      //         {
      //           node: entity,
      //         }
      //       );
      //     }
      //   });
      // }
    
      // checkUniqueAtomName(model: YadlModel, accept: ValidationAcceptor): void {
      //   //create a multi-counter variable using a map
      //   const counts = new Map<string, number>();
      //   //initialize the counter for each person to zero
      //   model.atoms.forEach((p) => counts.set(p.name, 0));
      //   //iterate over all greetings and count the number of greetings for each person
      //   model.atoms.forEach((atom) => {
      //     //Attention! if the linker was unsucessful, atom is undefined
      //     //set the new value of the counter
      //     const newValue = counts.get(atom.name)! + 1;
      //     counts.set(atom.name, newValue);
      //     //if the counter is greater than 1, create a helpful error
      //     if (newValue > 1) {
      //       accept(
      //         "error",
      //         `You can define atom at most once! This is the ${newValue}${
      //           newValue == 2 ? "nd" : "th"
      //         } greeting to ${atom.name}.`,
      //         {
      //           node: atom,
      //         }
      //       );
      //     }
      //   });
      // }
    
      // checkUniqueMoleculeName(model: YadlModel, accept: ValidationAcceptor): void {
      //   //create a multi-counter variable using a map
      //   const counts = new Map<string, number>();
      //   //initialize the counter for each person to zero
      //   model.molecules.forEach((p) => counts.set(p.name, 0));
      //   //iterate over all greetings and count the number of greetings for each person
      //   model.molecules.forEach((molecule) => {
      //     //Attention! if the linker was unsucessful, molecule is undefined
      //     //set the new value of the counter
      //     const newValue = counts.get(molecule.name)! + 1;
      //     counts.set(molecule.name, newValue);
      //     //if the counter is greater than 1, create a helpful error
      //     if (newValue > 1) {
      //       accept(
      //         "error",
      //         `You can define molecule at most once! This is the ${newValue}${
      //           newValue == 2 ? "nd" : "th"
      //         } greeting to ${molecule.name}.`,
      //         {
      //           node: molecule,
      //         }
      //       );
      //     }
      //   });
      // }
    
      // checkUniqueOrganismName(model: YadlModel, accept: ValidationAcceptor): void {
      //   //create a multi-counter variable using a map
      //   const counts = new Map<string, number>();
      //   //initialize the counter for each person to zero
      //   model.organisms.forEach((p) => counts.set(p.name, 0));
      //   //iterate over all greetings and count the number of greetings for each person
      //   model.organisms.forEach((organism) => {
      //     //Attention! if the linker was unsucessful, organism is undefined
      //     //set the new value of the counter
      //     const newValue = counts.get(organism.name)! + 1;
      //     counts.set(organism.name, newValue);
      //     //if the counter is greater than 1, create a helpful error
      //     if (newValue > 1) {
      //       accept(
      //         "error",
      //         `You can define organism at most once! This is the ${newValue}${
      //           newValue == 2 ? "nd" : "th"
      //         } greeting to ${organism.name}.`,
      //         {
      //           node: organism,
      //         }
      //       );
      //     }
      //   });
      // }
    
      // checkUniquePageName(model: YadlModel, accept: ValidationAcceptor): void {
      //   //create a multi-counter variable using a map
      //   const counts = new Map<string, number>();
      //   //initialize the counter for each person to zero
      //   model.pages.forEach((p) => counts.set(p.name, 0));
      //   //iterate over all greetings and count the number of greetings for each person
      //   model.pages.forEach((page) => {
      //     //Attention! if the linker was unsucessful, page is undefined
      //     //set the new value of the counter
      //     const newValue = counts.get(page.name)! + 1;
      //     counts.set(page.name, newValue);
      //     //if the counter is greater than 1, create a helpful error
      //     if (newValue > 1) {
      //       accept(
      //         "error",
      //         `You can define page at most once! This is the ${newValue}${
      //           newValue == 2 ? "nd" : "th"
      //         } greeting to ${page.name}.`,
      //         {
      //           node: page,
      //         }
      //       );
      //     }
      //   });
      // }
}
