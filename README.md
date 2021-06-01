
Assumptions
1) The solution has assumed that the character limit for a each answer is 19

Limitations
The code currently doesn't do the following:
1) The answer doesn't lock in, I attempted to create a state for a "togglelock" which passed a boolean down (passed as a prop called toggleLock)to the onClick for changing between options (in the ToggleOption.tsx file). The boolean is set depending on if 100% of the selected answers are correct. I attempted to use a Ternary Operator to set the onClick event depending on the value of toggleLock. However ran into issues with passing a string into the place of a function. All code has been commented out for reference.

2) The code doesn't randomise the array of data. This was attempted using the following code, which does randomise the set of data however I couldnt find a way to map this onto the existing loop the data into the <ToggleContainer /> component

      const randomArray = [];
      while(data.options.length !==0) {
      let randomIndex = Math.floor(Math.random() * data.options.length);
         randomArray.push(data.options[randomIndex]);
          data.options.splice(randomIndex, 1);
        }
