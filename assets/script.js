document.getElementById('semester').addEventListener('change', (e) => {
  switch(e.target.value) {
    case '10-1':
      fetch('./10-1.html')
      .then((response) => response.text())
      .then((html) => {
        document.getElementById('content').innerHTML = html
      })
      break;
      case '10-2':
      fetch('./10-2.html')
      .then((response) => response.text())
      .then((html) => {
        document.getElementById('content').innerHTML = html
      })
      break;
      case '11-1':
      fetch('./11-1.html')
      .then((response) => response.text())
      .then((html) => {
        document.getElementById('content').innerHTML = html
      })
      break;
  }
})

const buttonLainnya = document.getElementById("lainnya");
buttonLainnya.addEventListener("click", () => {
  document.getElementById("hidden").classList.remove("hidden");
  buttonLainnya.classList.add("hidden");
});

const nilaiValue = [978,977,975,970,969,967,965,965,960,958,955,954,952,952,952,951,951,948,947,946,946,945,943,941,941,937,933,933,930,927,921,906];


const angka = document.querySelectorAll(".auto-number");
const nilai = document.querySelectorAll(".nilai");
for (let i = 0; i<32; i++) {
  if (nilaiValue[i] == [nilaiValue[i-1]]) {
    if (nilaiValue[i-1] == nilaiValue[i-2]) {
      angka[i].innerHTML = i+2;
    }
    else {
      angka[i].innerHTML = i+3;
    }
  }
  else {
    angka[i].innerHTML = i+4;
  }
  nilai[i].innerHTML = nilaiValue[i];
};
// Mecegah Kontroversi
for (let i=0; i<nilai.length; i++) {
  nilai[i].classList.add("opacity-0");
};