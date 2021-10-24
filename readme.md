# fptf-badges

Generate [FPTF](https://github.com/public-transport/friendly-public-transport-format) badges for your repo.

[![License](https://img.shields.io/github/license/juliuste/fptf-badges.svg?style=flat)](license)

## Usage

Uses FPTF version information from the `fptf` key in the `validate-fptf` version used in your packages `dependencies` or `devDependencies`.

### Badge (image)

Get the badge for `username/repository` as follows:

```md
![fptf version](https://fptf.badges.juliustens.eu/badge/username/repository)
```

### FPTF version link

Get the link to the specific FPTF version as follows:

```md
![fptf version](https://fptf.badges.juliustens.eu/link/username/repository)
```

### Combined (example badges)

```md
[![fptf version](https://fptf.badges.juliustens.eu/badge/public-transport/hafas-client)](https://fptf.badges.juliustens.eu/link/public-transport/hafas-client)
```

[![fptf version](https://fptf.badges.juliustens.eu/badge/public-transport/hafas-client)](https://fptf.badges.juliustens.eu/link/public-transport/hafas-client)

## Contributing

If you found a bug or want to propose a feature, feel free to visit [the issues page](https://github.com/public-transport/fptf-badges/issues).
