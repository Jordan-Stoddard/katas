// Async function that takes in a parent request, and a teacherID.
// Parent request shape is: { Monday: [9, 10, 11, 12] } or {Monday: [9, 10, 11, 12], Tuesday: [10, 11, 12, 17, 18, 19]} etc

async function suggestSchedule(parentRequest, teacher) {
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