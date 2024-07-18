# Devicons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/fc)](https://jsr.io/@preact-icons/fc)

**License** [MIT](https://opensource.org/licenses/MIT)

**Project** [https://github.com/icons8/flat-color-icons](https://github.com/icons8/flat-color-icons)

[See available icons here](https://react-icons.deno.dev/fc)

## install the module

```bash
deno add @preact-icons/fc
dnpx jsr add @preact-icons/fc
pnpm dlx jsr add @preact-icons/fc
bunx jsr add @preact-icons/fc
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { FcAbout } from "@preact-icons/fc"
```

## import a single icon, downloading just one icon

```ts
import { FcAbout } from "react-icons/fc/FcAbout"
```

or using default export

```ts
import FcAbout from "react-icons/fc/FcAbout.ts"
```
