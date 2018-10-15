export const fetchGroups = () => {
  fetch('http://localhost:1177/api/groups')
    .then(res => res.json())
    // .then(function(data) {
    //   console.log("data", data);
    // })
}