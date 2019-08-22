// Async function that takes in a parent request, and a teacherID.
// parentRequest is an object who's shape is: { Monday: [9, 10, 11, 12] } or {Monday: [9, 10, 11, 12], Tuesday: [10, 11, 12, 17, 18, 19]} etc

async function suggestSchedule(parentRequest, teacher) {
  // teachersAvailability returns an object which will always have every day of the week as keys, and then an empty array if they're not available that day,
  // or an array with available hours like so:
  /*
  {
    Monday: [9, 10, 11, 12],
    Tuesday: [15, 16, 17],
    Wednesday: [],
    Thursday: [],
    Friday: [10, 11, 18, 19],
    Saturday: [],
    Sunday: [],
  }
  */
    const teacherAvailability = await getTeacherAvailability(teacher)

    // teachersSchedule returns an array of objects, with classes that are already scheduled. Like so:

    /*
    [{start_time: <time>, end_time: <time>}, {start_time: <time>, end_time: time}, ...etc]
    */
    const teacherSchedule = await getTeacherSchedule(teacher)
    
    // Loop through the teachersAvailability object
      for (let day in teacherAvailability) {
        // save the availableHours array at current day
            let availableHours = teacherAvailability[day]
            // If we have a parentRequest at the current day in teacherAvailability
            if (parentRequest[day]) {
              // Loop through the hours in the teacher's available hours.
                for (let hour of availableHours) {
                  // If the parentRequest at the current day includes the current hour in the teacher's availability array
                  if (parentRequest[day].includes(hour)) {
                    // set the start time to be two weeks from that day.
                   let startTime = twoWeeksLater(day, hour)
                   // set the end time to be one hour after the start time.
                   let endTime = addOneHour(startTime)
                   // if the current start time is already in the scheduleObj's start time, continue to the next available match.
                   if (teacherSchedule.some((scheduleObj) => 
                    scheduleObj.start_time * 1 === startTime * 1)) {
                    continue
                   }
                   // else, return the proposed class schedule.
                   return {start_time: startTime, end_time: endTime}
                  }
                }
              }
            }
    // if we make it through this loop without finding any matches, return null.
    return null
  }