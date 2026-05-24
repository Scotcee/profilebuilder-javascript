# Developer Profile Builder

## Overview

This project is a JavaScript ES6 practice task that builds, transforms, and displays developer profile data.

The project demonstrates the use of modern JavaScript features including:

- Destructuring
- Spread and Rest operators
- Optional Chaining
- Nullish Coalescing
- Template Literals
- Array Methods (`map`, `filter`, `reduce`, `sort`, `flatMap`)
- `Set`
- Immutable data updates

---

## Project File

```bash
node profileBuilder.js
```

---

## Features Implemented

# Step 1: Profile Cards

- Built a `buildProfileCard()` function
- Used destructuring
- Applied optional chaining and nullish coalescing
- Displayed availability and mentor information
- Handled empty skills list

## Step 2: Skill Collection

- Gathered all developer skills
- Removed duplicates using `Set`
- Sorted skills alphabetically

### Step 3: Track Summary

Generated summaries for each developer track showing:

- Number of developers
- Available developers
- Total completed projects

#### Step 4: Add Developer

- Created `addDeveloper()`
- Added developers immutably using spread operator

##### Step 5: Update Developer

- Created `updateDeveloper()`
- Updated developer data without mutating original objects

###### Step 6: Mentor Workload

- Counted developers assigned to each mentor
- Handled null mentors using optional chaining and nullish coalescing

###### Step 7: Experience Ranking

- Ranked developers by total projects
- Used array copy before sorting
- Added medal rankings for top developers

---

## How to Run

Ensure Node.js is installed.

Run:

```bash
node profileBuilder.js
```

---

## Sample Output

### Profile Cards

Screenshots of output from my terminal:

<img src="./screenshots/Screenshot from 2026-05-24 13-41-11.png" width="400">
<img src="./screenshots/Screenshot from 2026-05-24 13-41-24.png" width="400">
<img src="./screenshots/Screenshot from 2026-05-24 13-41-44.png" width="400">
<img src="./screenshots/Screenshot from 2026-05-24 13-41-51.png" width="400">

---

### Skills and Track Summary

Add screenshot here:

![Track Summary Output](./images/track-summary-output.png)

---

### Mentor Workload and Rankings

Add screenshot here:

![Ranking Output](./images/ranking-output.png)

---

## Author

Your Name
