# Project Turing

Modelling a Heist

## Phases

1. Prepare
2. Execute
3. Escape

## Actors

- Driver: wait in the car until the all others exit the building, then drive to
  the safe house
- Hacker: access the security system, then disable when the Team are ready to
  enter
- Team: once security systems are disabled, break open the vault using
  explosives and retrieve the decoder

# Dependencies

- ts-node to execute typescript runtime
- ts-jest to execute typescript tests
  - prefer ts-jest over babel transpiler, as this also performs type-checking of
    Jest tests at runtime

# Build

To build a single file executable of this app:

```
npm tsc --outFile ./dist/app.js
```
