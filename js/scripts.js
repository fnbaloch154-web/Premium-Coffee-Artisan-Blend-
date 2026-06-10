/*!
* - Premium Coffee & Artisan Blend  v7.0.9 (https://Premium Coffee & Artisan Blend .com/theme/business-casual)
* Copyright 2013-2023 Premium Coffee & Artisan Blend 
* Licensed under MIT (https://github.com/Premium Coffee & Artisan Blend -business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})
