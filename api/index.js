const React = require("react");
const { renderToString } = require("react-dom/server");
const Avatar = require("boring-avatars").default;

const DEFAULT_COLORS = [
  // Palette 1
  ["#FEFEFE", "#FDA9F6", "#FCD0C0", "#B3DEF9", "#BBC0FD"].join(","),
  // Palette 2
  ["#FF8FFB", "#FFFEE1", "#AFBAFF", "#FFE4DB", "#FEBDF3"].join(","),
  // Palette 3
  ["#FFFAF8", "#E3E3DF", "#B9E8BD", "#D3D8F9", "#EBD9FA"].join(","),
  // Palette 4
  ["#FFBB89", "#FFFCC8", "#FFDDAB", "#51A8F5", "#FF7F88"].join(","),
  // Palette 5
  ["#FFB1F6", "#8AFEFB", "#838CFD", "#94A6FF", "#DAA3FE"].join(","),
  // Add more color arrays as needed
];

const DEFAULT_SIZE = 88;
const DEFAULT_VARIANT = "marble";

const VALID_VARIANTS = new Set([
  "marble",
  "beam",
  "pixel",
  "sunset",
  "ring",
  "bauhaus",
]);

function normalizeColors(colors) {
  const colorPalette = colors.split(",");

  if (colorPalette.length) {
    return colorPalette.map((color) =>
      color.startsWith("#") ? color : `#${color}`
    );
  }
}

const app = require("express")();

app.get("/favicon.ico", (req, res) => {
  res.sendStatus(204);
});

app.get("/:size?/:name?", (req, res) => {
  const { variant = DEFAULT_VARIANT, size = DEFAULT_SIZE } = req.params;
  const explicitName = req.query.name || req.params.name;
  const name = explicitName || Math.random().toString();

  // Select a random palette
  const randomIndex = Math.floor(Math.random() * DEFAULT_COLORS.length);

  const colors = normalizeColors(req.query.colors || DEFAULT_COLORS[randomIndex]);
  const square = req.query.hasOwnProperty("square");

  if (!VALID_VARIANTS.has(variant)) {
    variant = DEFAULT_VARIANT;
  }

  res.setHeader("Content-Type", "image/svg+xml");

  if (explicitName) {
    res.setHeader("Cache-Control", "max-age=0, s-maxage=2592000");
  } else {
    res.setHeader("Cache-control", "max-age=0, s-maxage=1");
  }

  const svg = renderToString(
    React.createElement(
      Avatar,
      {
        size,
        name,
        variant,
        colors,
        square,
      },
      null
    )
  );

  res.end(svg);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on ${port}, http://localhost:${port}`);
});
