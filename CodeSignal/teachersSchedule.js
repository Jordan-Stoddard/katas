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
    const teacherSchedule = await getTeacherSchedule(teacher)
    
      for (let day in teacherAvailability) {
            let availableHours = teacherAvailability[day]
            if (parentRequest[day]) {
                for (let hour of availableHours) {
                  if (parentRequest[day].includes(hour)) {
                   let startTime = twoWeeksLater(day, hour)
                   let endTime = addOneHour(startTime)
                   
                   if (teacherSchedule.some((scheduleObj) => 
                    scheduleObj.start_time * 1 === startTime * 1)) {
                    continue
                   }
                   return {start_time: startTime, end_time: endTime}
                  }
                }
              }
            }
    
    return null
  }