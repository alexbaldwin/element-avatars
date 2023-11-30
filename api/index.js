const React = require("react");
const { renderToString } = require("react-dom/server");
const Avatar = require("boring-avatars").default;

// const DEFAULT_COLORS = [ "#000", "#EFEFEF", "#000", "#FFF", "#000", ].join(",");

const DEFAULT_COLORS = [
  // Kleurvorm Cool
  ["#7C17F8", "#5200FF", "#E3B5F9", "#F720FF", "#7B8DF5"].join(","),
  // Kleurvorm Warm
  ["#FF0C15", "#E764A8", "#D26FE4", "#FC6A2B", "#FFA902"].join(","),
  // Element Moon
  ["#EC618F", "#8963BC", "#B583F8", "#81D0FA", "#33759A"].join(","),
  // Element Sun
  ["#983A36", "#EB4374", "#EC666E", "#F19A6D", "#F7CF57"].join(","),
  // Element Water
  ["#BB6DF7", "#9960E3", "#3E82A7", "#F3AE76", "#B9FD67"].join(","),
  // Element Ground
  ["#84D0E4", "#7DE069", "#D2EE51", "#E48B45", "#E9722D"].join(","),
  // Element Air
  ["#7E51F6", "#E0C8FB", "#9946F6", "#82BDEA", "#4250A5"].join(","),
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
