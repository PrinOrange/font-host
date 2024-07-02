# FONT-HOST

> 🚧 This project is still under the construction yet and it's not recommended in production.

This repository is used for hosting font-slices and its CSS package.

Here is [fonts list](./data.json), you can also make the request for <http://font-host.dreams.plus/data.json> to fetch all the enrolled fonts.

## Usage

According to [fonts list](./data.json), you could use the fonts by

```css
@import url("http://font-host.dreams.plus/fonts/{directory}/index.css");
```

Or with the `link` tag in head

```html
<link
  rel="stylesheet"
  type="text/css"
  href="http://font-host.dreams.plus/fonts/{directory}/index.css"
/>
```

Then define the class for font

```css
.font {
  font-family: {fontFamily}
}

```

## Contribution

Here are two ways for you making contributions:

- Commit fonts which you do want with justification, and provide their download link or upload them if possible.
- Help me to finish the following TODO task items.

## TODO

- [ ] Finish the GUI tool to make use of its functions visually.
- [ ] Finish the auto-scripts for font managing.
- [ ] Solve the problems of processing multi-weight fonts and variable fonts.
