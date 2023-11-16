


function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}.${date}.${year}`;
}
document.getElementById("horo-date").textContent = getDate();



function goToInfo(itemName) {
  // Store the selected item in sessionStorage
  sessionStorage.setItem('selectedItem', itemName);

  // Navigate to the item page
  window.location.href = 'pages/Info.html';
}

const selectedItem = sessionStorage.getItem('selectedItem');
  document.getElementById('horo-label').innerHTML = selectedItem;


  if(document.getElementById('text').textContent == "Loading...")
  {
    document.getElementById('footer').style.height = '250px';
  }
  else document.getElementById('footer').style.height = '100px';
//   setTimeout(function() {
//     document.body.style.backgroundColor = '#fff';
// }, 3000);