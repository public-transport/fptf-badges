# fptf-badges

Generate [FPTF](https://github.com/public-transport/friendly-public-transport-format) badges for your repo.

[![dependency status](https://img.shields.io/david/juliuste/fptf-badges.svg)](https://david-dm.org/juliuste/fptf-badges)
[![dev dependency status](https://img.shields.io/david/dev/juliuste/fptf-badges.svg)](https://david-dm.org/juliuste/fptf-badges#info=devDependencies)
[![license](https://img.shields.io/github/license/juliuste/fptf-badges.svg?style=flat)](LICENSE)
[![chat on gitter](https://badges.gitter.im/juliuste.svg)](https://gitter.im/juliuste)

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

If you found a bug, want to propose a feature or feel the urge to complain about your life, feel free to visit [the issues page](https://github.com/juliuste/fptf-badges/issues).
