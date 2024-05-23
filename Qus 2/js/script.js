//using for loop
for (let key in resumeData) {
    console.log(key + ": " + resumeData[key]);
  }

  // Using fir in

  for (let key in resumeData) {
    if (resumeData.hasOwnProperty(key)) {
      console.log(key + ": " + resumeData[key]);
    }
  }

  //Using for of

  for (let experience of resumeData.experience) {
    console.log("Position: " + experience.position);
    console.log("Company: " + experience.company);
    console.log("Start Date: " + experience.start_date);
    console.log("End Date: " + experience.end_date);
    console.log("Responsibilities: ");
    experience.responsibilities.forEach(responsibility => {
      console.log("- " + responsibility);
    });
  }

  //Using for each

  resumeData.education.forEach(education => {
    console.log("Degree: " + education.degree);
    console.log("Institution: " + education.institution);
    console.log("Location: " + education.location);
    console.log("Graduation Date: " + education.graduation_date);
  });