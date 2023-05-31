# Devicons icons for deno / Preact

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/icons8/flat-color-icons](https://github.com/icons8/flat-color-icons)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=fc)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/fc":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-fc@1.0.7/mod.ts",
    "react-icons/fc/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-fc@1.0.7/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib fc

```ts
import { FcAbout } from "https://deno.land/x/react_icons_fc@1.0.7/mod.ts"
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

