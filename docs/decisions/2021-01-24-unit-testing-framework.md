# Unit testing framework

## Status

24 January 2021 - Tentative

## Description

New projects should be 'test-ready'. It's important to make sure that unit-tests can be dropped in with minimal effort when it becomes clear that a project requires them. Having the project 'test-ready' removes barriers to writing those first tests.

## Decision

Put the Jest framework in place as well as run scripts.

The Jest framework is well-known, well-used and works both on the front and back-ends making it a good all-round choice for a Javascript test framework.

We recognise that a project may be suited for another test framework. (e.g. Lab for a Hapi project)

Tests sit alongside the source with a `.test.js` extension so that imports are simple, related code is grouped together in the filesystem and we don't have to maintain a mirrored directory structure in a separate `test` directory.

## References

  * B. Arnold
  * [https://jestjs.io/](https://jestjs.io)
