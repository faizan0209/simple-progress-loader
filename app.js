const progressBar = document.getElementById('progress-bar');
const peragraph = document.getElementById('peragraph');

const peragraphs=['Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea dignissimos dicta alias quisquam tenetur pariatur aspernatur minima ratione corporis!',
'Culpa accusantium voluptate repellendus quos ipsam, earum similique praesentium ratione adipisci illo accusamus facilis, et ab numquam?',
'Doloremque eaque ipsa distinctio quaerat, amet commodi placeat facilis harum nihil recusandae necessitatibus, asperiores voluptate?',
'Quas nemo quidem esse mollitia reiciendis cumque, voluptatibus numquam dignissimos quod, amet autem magni adipisci asperiores?',
'Fuga cupiditate iste repellendus, quidem necessitatibus cumque quae amet doloribus, aspernatur voluptatibus molestiae minus voluptas?',
'Quae aspernatur, quidem unde adipisci voluptates, saepe explicabo tenetur provident quod officia magnam repellat, quos cumque?',
'Ipsam quae quaerat, quidem praesentium accusantium quas distinctio aspernatur, iure similique numquam, voluptate dignissimos?',
'Quaerat deleniti mollitia adipisci, cumque corporis dignissimos necessitatibus, amet commodi officia, minus doloremque voluptates?',
'Doloremque eaque ipsa distinctio quaerat, amet commodi placeat facilis harum nihil recusandae necessitatibus, asperiores voluptate?',
'Quas nemo quidem esse mollitia reiciendis cumque, voluptatibus numquam dignissimos quod, amet autem magni adipisci asperiores?']


function updateProgress(percent) {
  progressBar.style.width = `${percent}%`;
}
updatePera=(index)=>{
peragraph.textContent=peragraphs[index];
}
let i = 0;
let peraIndex=0;
setInterval(() => {
  updateProgress(i);
  if(i===100){
    updatePera(peraIndex);
    peraIndex=(peraIndex+1)%peragraphs.length;
  }
  i += 10;
  if (i > 100) {
    i = 0;
  }
}, 500);