#!/usr/bin/env zx

const fonts = fs.readFileSync("./fonts", { encoding: "utf-8" })
  .replace(/\r/g, "")
  .split("\n")
  .map(line => line.split(": "))

fs.removeSync("./out")
fs.mkdir("./out")

for (const [key, url] of fonts) {
  if (!key || !url) continue;
  
  console.log(`Processing ${chalk.blue(key)}: ${chalk.gray(url)}...`)
  let css = await (await fetch(url)).text()
  const fontFiles = css.matchAll(/url\((.+?)\)/g)

  for (const [,fontFile] of fontFiles) {
    const fileName = path.basename(fontFile)
    const blob = await (await fetch(fontFile)).blob()
    const fileContents = await blob.arrayBuffer().then((arrayBuffer) => Buffer.from(arrayBuffer, "binary"))
    fs.writeFileSync(`./out/${fileName}`, fileContents)
    css = css.replaceAll(fontFile, `./${fileName}`)
  }

  fs.writeFileSync(`./out/${key}.css`, css, { encoding: "utf-8" });
}
