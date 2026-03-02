function calculateAge() {
    const dobInput = document.getElementById('dob').value;

    // Check if the input is empty
       if (!dobInput) {
        alert("Please enter your date of birth!");
        return;
    }
    const dob = new Date(dobInput);
    const currentDate = new Date();

      //  Check if DOB is in the future
    const today = new Date();
    today.setHours(0,0,0,0);
        if (dob > today) {
        alert("Date of birth cannot be in the future!");
        return;
    }

    const ageInMilliseconds = currentDate - dob;
    // Convert milliseconds to years (approximate)
    const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
    const age = Math.floor(ageInYears);

    currentDate.setFullYear(currentDate.getFullYear() - age);

    let months = currentDate.getMonth() - dob.getMonth();
    if (currentDate.getDate() < dob.getDate()) {
        months--;
    }
    if (months < 0) {
        months +=12;
    }


    let days = currentDate.getDate() - dob.getDate();
    if (days < 0) {
        const lastDayofMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
        days = lastDayofMonth - dob.getDate() + currentDate.getDate();
    }

      // Hide years if age is 0
    const yearsText = age <= 0 ? "" : `${age} years, `;

    document.getElementById('ageResult').textContent = `${yearsText}${months} months, ${days} days`;

}

