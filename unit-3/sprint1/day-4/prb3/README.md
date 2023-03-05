#### Total marks 6


## Installation
```
npm i
```

## Test 
```
npm t
```

## Test (Watch mode)
```
npm t -- --watchAll
```

## file structure
- most of your work would happen in `src/index.js` file.

## Problem statement. 1

- If we pass the provided voters array to the `getVotersSummary` function, we expect the following output: 

```
{ numYoungVotes: 0,
  numYoungPeople: 2,
  numMidVotesPeople: 4,
  numMidsPeople: 6,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}

```
You can see the entire problem statement in index.js

## conditions

- consider 20 yrs old and less to be young
- consider 21-40 yrs old to be mid
- consider 41 and greater to be old.
