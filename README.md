# persist
A typescript decorator to store any variable in localstorage in a typesafe way

# usage

```
import { Persist } from '@yoerivd/persist';

export class ExampleComponent  {
  @Persist(false) toggle;
  @Persist(1) someNumber;
}

```
