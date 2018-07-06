//const vid = ['bmp', 'jpg', 'jpeg', 'gif', 'png', 'tif', 'tiff'];
//var vidv = ['mp4'];

const imgF = document.getElementById('img');
/// reducir funciones y usar queryselector!!
var name;

function bBefore(name2) {
  name2 = parseInt(name2);
  if (name2 != 1) {
    name = "media/" + (name2 - 1) + ".jpg";
  } else {
    name = "media/" + 29 + ".jpg";
  }
  imgF.src =  name;
}

function bNext(name2) {
  name2 = parseInt(name2);
  if (name2 != 29) {
    name = "media/" + (name2 + 1) + ".jpg";
  } else {
    name = "media/" + 1 + ".jpg";
  }
  imgF.src =  name;
}

/*var tst = false;
  try {

    for(i=0; i<vid.length;i++){
      img.src = name + vid[i];
      img.onload = ()=>{
        alert(img.src + " // " + img.height);
        tst=true;
      };

      img.onerror=() => {
          alert(img.src + " // " + img.height);
          img.src = "";
      };

      if (tst){
        break;
      }
      /*alert(img.src + " // " + img.clientHeight);
    if (img.height !== 0) {
      alert(img.src + " // " + img.height);
      document.getElementById('img').style.backgroundImage = "url(" + name + ")";
      break;
    } else {

    }


    ///

    if (existi(name)) {
    alert('good img');
  }else if(existv(name)){
    alert('good v');
  }
  else{
    alert('Hubo un error de ejecución');
  }
}


function existi(name) {*/
/*for (i = 1; i < vid.length; i++) {
    img.src = name + "jpg";
    if (img.height !== 0) {
      document.getElementById('img').style.backgroundImage="url("+img.src+")";
      return true;
      break;
    }
  }
/*}

function existv(name){

  for (i = 0; i < vidv.length; i++) {
    vi.src = name + vidv[i];
    if (vi.height !== 0) {
      return true;
      break;
    }
  }*/
