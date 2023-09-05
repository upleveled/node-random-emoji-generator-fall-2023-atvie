import { argv } from 'node:process';
import * as emoji from 'node-emoji';

// Version of the code created with the students

// if (argv.length > 2) {
//   // This happens only if there is a third argument
//   const userInput = argv[2];
//   const foundEmoji = emoji.get(userInput);
//   if (foundEmoji) {
//     console.log(foundEmoji);
//   } else {
//     // Template literals
//     console.log(`Sorry ${userInput} emoji doesn't exist`);
//   }
// } else {
//   // This happens if third argument doesn't exist
//   const randomEmoji = emoji.random();
//   console.log(randomEmoji.emoji);
// }

// Simplified version of the code

if (argv.length < 3) {
  // This happens if there is no user input
  console.log(emoji.random().emoji);
} else if (emoji.get(argv[2])) {
  // This happens only if the emoji exist
  console.log(emoji.get(argv[2]));
} else {
  // This happens only if the emoji doesn't exist
  console.log(`Sorry ${argv[2]} emoji doesn't exist`);
}
