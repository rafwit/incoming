# `incoming-ts`

Incoming is a TypeScript package that aims to support data validation both on the server and the client side. It is based on decorators and uses them to validate incoming objects of your choice.

## Installation

`npm install incoming-ts`

## Usage

**Note:** Decorators are an experimental feature in TypeScript and are in [stage 2 proposal](https://github.com/tc39/proposal-decorators) for JavaScript. To enable experimental support for decorators in TypeScript, you must enable the `experimentalDecorators` compiler option either on the command line or in your `tsconfig.json`.

##### Command Line:

`tsc --target ES5 --experimentalDecorators`

##### tsconfig.json:

```json
{
  "compilerOptions": {
    "target": "ES5",
    "experimentalDecorators": true
  }
}
```

### Examples

#### Server

Example usage for object validation received via `post` request before saving it as new document in Mongoose model in MongoDB databse:

**Step 1**

First create a class with properties that match properties of the object that you want to validate. To add validation conditions, simply annotate selected properties with chosen decorators. You can chain validation coditions by adding multiple decorators. The validation will be performed from bottom decorator to the top for each property. You can find a full list of currently available decorators in section **Available decorators**.

```typescript
import {MaxLength, IsAlphaNumeric, IsLength, IsEmail} from 'incoming-ts';

class Incoming {
  @MaxLength(30)
  @IsAlphaNumeric()
  title: string;

  @IsLength(10, 30)
  IsAlphaNumeric();
  description: string;

  @IsEmail()
  author: string;

  constructor(title: string, description: string, author: string) {
    this.title = title;
    this.description = description;
    this.author = author;
  }
}
```

**Step 2 **

Inside the function that serves the request, destructure the properties from `req.body` to validate them. Then create a new instance of your `Incoming` class. The validation will takes place in the moment that instantiation happens. If it fails the error will be thrown and the property that did not pass validation will not be created. The example assumes that the Mongoose Model Schema requires all properties before creating the document, hence it will not be created.

If the validation passes the new document will be created.

```typescript
async function servePostRequest(req: Request, res: Response): Promise<any> {
  try {
    const {title, description, author} = req.body;
    const incoming = new Incoming(title, description, author);
    const result = await Model.create(incoming);
    //send response
  } catch (error) {
    //handle error
  }
}
```

#### Client

Example usage in an Angular application to serve submitting a form and sending a `post` request.

**Step 1**

First create a class with properties that match properties of the object that you want to validate. To add validation conditions, simply annotate selected properties with chosen decorators. You can chain validation coditions by adding multiple decorators. The validation will be performed from bottom decorator to the top for each property. You can find a full list of currently available decorators in section **Available decorators**.

```typescript
import {MinLength, IsAlphaNumeric} from 'incoming-ts';

class Incoming {
  @MinLength(3)
  @IsAlphaNumeric()
  allergy: string;

  constructor(allergy: string) {
    this.allergy = allergy;
  }
}
```

**Step 2**

Then handle the form submission by creating an instance of `Incoming` class with expected properties. The validation will take place in the moment that instantiation happens. If it fails the error will be thrown and property that did not pass validation will not be created.

```typescript
onSubmit (): void {

  const newAllergy: Allergy = this.allergyForm.value;
  const incoming = new Incoming(newAllergy.allergy);

	this.allergyService.postAllergy(incoming)
        .subscribe((allergy) => {
          this.allergyService.addToAllergies([allergy])
        });
}
```

### Available decorators

Here you can find all currently available decorators and their purpose. Each validator will throw an error in case the validation fails (condition is not fulfield). In addition, some decorators performs extra type checks.

| Decorator                             | Behaviour                                                                                                                                                                                              |
| :------------------------------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@Contains(word: string) `            | **Condition**: the property `value` contains `word`. If it will encounter `value` of type different than `string` it will throw an error.                                                              |
| `@Equals(value: string)`              | **Condition**: the property `value` equals to provided `value`. If it will encounter `value` of type different than `string` it will throw an error.                                                   |
| `@IsAlphaNumeric()`                   | **Condition**: the property `value` is alphanumeric.                                                                                                                                                   |
| `@IsArray()`                          | **Condition**: the property `value` is an `array`.                                                                                                                                                     |
| `@IsBoolean()`                        | **Condition**: the property `value` is a `boolean`.                                                                                                                                                    |
| `@IsDateObj()`                        | **Condition**: the property `value` is a `Date object`.                                                                                                                                                |
| `@IsDecimalNum()`                     | **Condition**: the property `value` is a decimal number. If it will encounter `value` of type different than `number` it will throw an error.                                                          |
| `@IsEmail()`                          | **Condition**: the property `value` is a string in format `example@email.com`. If it will encounter `value` of type different than `string` it will throw an error.                                    |
| `@IsLength(min: number, max: number)` | **Condition**: the property `value` has length in range `(min-max)` inclusive. If it will encounter `value` of type different than `string` or `object` that is not an `array` it will throw an error. |
| `@IsLowerCase()`                      | **Condition**: the property `value` is lowercase `string`. If it will encounter `value` of type different than `string` it will throw an error.                                                        |
| `@IsNumber()`                         | **Condition**: the property `value` is of type `number`.                                                                                                                                               |
| `@IsUpperCase()`                      | **Condition**: the property `value` is uppercase `string`. If it will encounter `value` of type different than `string` it will throw an error.                                                        |
| `@MaxLength(max: number)`             | **Condition**: the property `value` has length no grater than `max`. If it will encounter `value` of type different than `string` or `object` that is not an `array` it will throw an error.           |
| `@MaxNum(max: number)`                | **Condition**: the property `value` is not grater than `max`. If it will encounter `value` of type different than `number` it will throw an error.                                                     |
| `@MinLength(min: number)`             | **Condition**: the property `value` has length not less than `min`. If it will encounter `value` of type different than `string` or `object` that is not an `array` it will throw an error.            |
| `@MinNum(min: number)`                | **Condition**: the property `value` is not less than `max`. If it will encounter `value` of type different than `number` it will throw an error.                                                       |
| `@NotEmpty()`                         | **Condition**: the property `value` is not `null`, an empty `string`, `array` or `key-value par object`.                                                                                               |
| `@OnlyLetters()`                      | **Condition**: the property `value` contains only letters. If it will encounter `value` of type different than `string` it will throw an error.                                                        |
