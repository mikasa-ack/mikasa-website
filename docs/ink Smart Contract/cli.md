---
label: CLI Options
icon: code-square
order: 200
---
Command-line options

`--input-file FILENAME`
: Specifies the path to the file containing the initial state of the game. The file should be in
a format described in the next section. If this option is not specified, gol will read the initial state from standard input.

`--output-dir DIRECTORY`
: Specifies the path to the directory where the output images will be
saved. If this option is not specified, the images will be saved in the current working directory.

`--generations NUM_GENERATIONS`
: Specifies the number of generations to simulate. If this option is not specified, gol will simulate an infinite number of generations.

`--fps FPS`
: Specifies the number of frames per second in the output animation. If this option is not specified, the default value of 10 fps will be used.

`--help`
: Displays a help message with information on how to use gol.