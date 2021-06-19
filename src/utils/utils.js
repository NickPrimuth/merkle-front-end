// Validation Function
function validate(formData) {
  // errObj to store messages and foundErr to validate if one has been found
  const errObj = {};
  let foundErr = false;

  // Loop over formData props to validate each item
  const props = Object.keys(formData);
  props.forEach((prop) => {
    errObj[prop] = '';
    const value = formData[prop];
    if (['firstName', 'lastName', 'city', 'state'].includes(prop)) {
      // Place error if contains chars other than letters
      if (!/^[a-zA-Z]/.test(value.trim())) {
        errObj[prop] = ` should only contain letters`;
        foundErr = true;
      }
    } else if (prop === 'addressOne') {
      // Place error if contains chars other than letters or nums
      if (!/^[A-Za-z0-9]/.test(value.trim())) {
        errObj[prop] = ` should only contain letters or numbers`;
        foundErr = true;
      }
    } else if (prop === 'addressTwo') {
      // Place error if contains chars other than letters or nums or null
      if (!/^[A-Za-z0-9]/.test(value.trim()) && value.length !== 0) {
        errObj[prop] = ` should only contain letters or numbers`;
        foundErr = true;
      }
    } else if (prop === 'zip') {
      // Place error message if zip has chars other than numbers
      if (!/^[0-9]/.test(value.trim())) {
        errObj[prop] = ` should only contain numbers`;
        foundErr = true;
      } else {
        // Place error message if zip isn't 5 or 9 digits
        if (value.trim().length !== 5 && value.trim().length !== 9) {
          errObj[prop] = ` should be 5 or 9 digits`;
          foundErr = true;
        }
      }
    } else if (value.trim() !== 'US') {
      // Place error message if country isn't US or us
      errObj[prop] = ` can only be US`;
      foundErr = true;
    }
  });
  // If an error was found, return the errObj
  if (foundErr) return errObj;
  // If no errors, return false
  return false;
}

// Formate Date function
function formatDate(date) {
  const d = new Date(date);

  // Get each part from date object
  let year = '' + d.getFullYear();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();
  let hour = '' + (d.getHours() + 1);
  let minutes = '' + (d.getMinutes() + 1);
  let seconds = '' + (d.getSeconds() + 1);

  // Add proper digits
  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  if (hour.length < 2) {
    hour = '0' + hour;
  }
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  // Join and return
  const newDate = [year, month, day].join('-');
  const newTime = [hour, minutes, seconds].join(':');
  return newDate + ' ' + newTime;
}

export { validate, formatDate };
