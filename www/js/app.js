// Authentification
fetch('../auth/info.json')
  .then(response => response.json())
  .then(data => {
    document.addEventListener('DOMContentLoaded', e => {
      window.ncmb = new NCMB(data["applicationKey"], data["clientKey"]);
    });
  })
  .catch(error => console.log(error));


/*-- Process page stuck --*/

// Page init event
document.addEventListener('init', event => {
  let page = event.target;

  if (page.matches('#first-page')) {
    
    page.querySelector('#push-button').onclick = function() {
      document.querySelector('#navigator').pushPage('page2.html');
    };

  } else if (page.matches('#second-page')) {
    
    page.querySelector('#pop-button').onclick = function() {
      document.querySelector('#navigator').popPage();
    };
    
  }

});