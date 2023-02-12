# Changelog

## V0.2.1

Modify vite config and trying to fix types file not appearing on `dist`

## V0.2.0

### Added

Added new components and icons.

- Badge
- Switch
- Radio
- Input's Icon
- Icon size props for Button component
- Textarea component
- Update project's README.md

### Fixed

- Fixed `Checkbox` and `Input` conflicting `className`.
- Set Textarea `cursor: not-allowed;` when disabled.
- Managing `className` with [clsx](https://www.npmjs.com/package/clsx).
- Change `scss` colors from variables to maps.

## V0.1.1

### Fixed

Small fix on Grid component `end` props doesn't accept value smaller than the `start`.

## V0.1.0

This marks as the first release of this package. We have added some core components and we will keep improving this package.

### Added

#### Components

- Create Button component
- Create Checkbox component
- Create Grid component
- Create Icon component
- Create Input component
- Create Typography component

#### Tooling

- Add .eslint rules
- Add .prettierrc rules
- Use husky and lint-staged
- Setup vite for build tool
- Use yarn for main package manager

#### Documentations

- Documentations for each component using README.md inside the component's directory
- Documentation for this package

#### License

Adding MIT License for this project.
