# Devicons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/fc)](https://jsr.io/@preact-icons/fc)

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/icons8/flat-color-icons](https://github.com/icons8/flat-color-icons)

[See available icons here](https://react-icons.deno.dev/fc)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.10",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/fc": "jsr:@preact-icons/fc@^1.0.11/mod.ts",
    "react-icons/fc/": "jsr:@preact-icons/fc@^1.0.11/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib fc

```ts
import { FcAbout } from "jsr:preact-icons/fc@1.0.11/mod.ts"
```

## import_map import an icon from all icons

```ts
import { FcAbout } from "react-icons/fc"
```

## import a single icon, downloading just one icon

```ts
import { FcAbout } from "react-icons/fc/FcAbout.ts"
```

or using default export

```ts
import FcAbout from "react-icons/fc/FcAbout.ts"
```

