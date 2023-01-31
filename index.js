// 1. When button is clicked (add eventListener)
// 2. Fetch data from api (URL: https://apis.scrimba.com/bored/api/activity)
// 3. Create li and set its text to activity from fetch call
// 4. Append li to html

function addActivity() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      newLi = document.createElement("li")
      newLi.textContent = `${data.activity}`
      newLi.classList.add("activity")
      activitiesList = document.querySelector("#activities-list")
      activitiesList.appendChild(newLi)
    })
}

function reset() {
  listOfActivities = document.querySelector("#activities-list")
  listOfActivities.innerHTML = ""
}

const activityBtn = document.querySelector("#btn-activity")
activityBtn.addEventListener("click", addActivity, false)

const resetBtn = document.querySelector("#btn-reset")
resetBtn.addEventListener("click", reset, false)
