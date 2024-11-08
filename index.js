// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.querySelector('form');
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent form submission and page reload

//         let pomoVal = document.getElementById('pomodoro').value;
//         let brVal = document.getElementById('break').value;

//         // Parse values to integers
//         let pomoTime = parseInt(pomoVal);
//         let breakTime = parseInt(brVal);

//         // Check if values are valid numbers
//         if (isNaN(pomoTime) || isNaN(breakTime)) {
//             alert('Please enter valid numbers for both Pomodoro and Break times.');
//             return; // Exit the function if the input is invalid
//         }

//         // Calculate total time
//         let totalTime = pomoTime + breakTime;
//         console.log('Total time:', totalTime); // Example output in console
//     });
// });


const form = document.querySelector('form');

        let pomoVal = document.getElementById('pomodoro').value;
        let brVal = document.getElementById('break').value;

        // Parse values to integers
        let pomoTime = parseInt(pomoVal);
        let breakTime = parseInt(brVal);
        // Calculate total time
        let totalTime = pomoTime + breakTime;
        console.log('Total time:', totalTime); // Example output in console
