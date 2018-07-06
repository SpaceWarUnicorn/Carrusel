(() => {
  const left = document.querySelector('#left');
  const right = document.querySelector('#right');
  const imgFrame = document.querySelector('#img');

  var name;



  left.addEventListener('click', () => {

    name = imgFrame.src.split("/");
    name = name[name.length - 1].split(".");
    bBefore(name);
  });

  right.addEventListener('click', () => {

    name = imgFrame.src.split("/");
    name = name[name.length - 1].split(".");
    bNext(name);
  });

  button.addEventListener('click', () => {
    alert('holi');
  });

})();
