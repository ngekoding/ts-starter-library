# ts-starter-library

Starter template to create typescript library.

## Features

We've already taken care of the configuration so you can dive straight into building your dream library.

- **ESLint**: Auto fix for formatting with [@antfu/eslint-config](https://github.com/antfu/eslint-config).
- **Commitlint**: Commit message conventions.
- **Jest**: Unit testing.
- **Bumpp**: Version management.
- **Output**: CommonJS and ESM.

## Getting started

1. Create new repository by clicking [Use this template](https://github.com/new?template_name=ts-starter-library&template_owner=ngekoding).
2. Complete creating repository based on the library that will you build like name and description.
3. Clone the repository to your computer.
4. Open and modify `package.json` to fit your library: name, description, author, etc.
> Make sure the library `name` is available on NPM registry. Check it by opening [npmjs.com](https://npmjs.com) and search for the library `name`, and if there is no package found, so it is available to use.

_The repository name and description is mostly the same as what we use in the package.json, so you can check the availability when creating the repository._

5. Start building your library

## Publishing

Before publishing the library, it is good to make sure the library running well by making a test. You can found the example in `test` directory.

Publishing to NPM registry needing an account, so if you don't have an account yet, visit the [NPM sign up](https://www.npmjs.com/signup) to create one.

1. Login

Open terminal and run the npm login command.

```sh
npm login
```

Complete the login process as prompted.

2. Publishing

```sh
npm run release
```

You will prompted to choose the library version. It is good to follow the [semantic versioning](https://docs.npmjs.com/about-semantic-versioning).

If all goes well, you will get a message telling that the library is successfully published to the NPM registry.

### Further more

What we do above is creating unscoped public packages like many general NPM packages. Then you can found detailed about this topic in [Contributing packages to the registry](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry).

## License

[MIT](./LICENSE) License © 2024-PRESENT [Nur Muhammad](https://github.com/ngekoding)
