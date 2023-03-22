---
order: 300
label: Input file format
icon: diamond
---

# Input file format
The input file should be a plain text file containing a rectangular grid of cells. Each cell should be represented by a single character, either . (representing a dead cell) or * (representing a live cell). Cells should be separated by whitespace. The file should not contain any other characters.

For example, the following is a valid input file:

```bash
* . . * .
  . * * . *
  . * * * .
* . . . .
```

This represents a 4x5 grid with live cells in the top left and bottom right corners, and a line of live cells in the center.
