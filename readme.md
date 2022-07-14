# gfont-cloudless

> A small automated repo template for self-hosting google fonts without relying on google host servers.

The motivation for this project are legal verdicts passed in germany that stated the
use of google fonts illegal in germany for privacy reasons. The idea is to host fonts
on your own, but instead of renting actual servers to implement the logic on googles
font systems to provide pre-configured css bundles with font references at runtime,
the css bundles are generated at compile time in a github action run once and
then served statically.

How it works:

- Fork this repo and setup Github Pages on your fork
- Go to [fonts.google.com](https://fonts.google.com/) and configure a font bundle
- Export a `<link>` tag on the google fonts page, and copy the href target, e.g.
  `https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;900&display=swap`
- Add the link alongside a key into the `fonts` file at the root of the repo, such as:

```
bundlename: https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;900&display=swap
another-bundle: https://fonts.googleapis.com/css2?family=Roboto:wght@100&family=Titillium+Web:wght@300&display=swap
```

- Push the repo, and import the css file `https//your-repo-name.github.io/bundlename.css`

Example: https://lukasbach.github.io/gfont-cloudless/example-bundle.css

That's it!
