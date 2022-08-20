const displayedImageLager = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const loveIcon = document.querySelector('.heart');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const images = [
    'https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.15752-9/298405295_2872126869757160_4277838151374255649_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=kiMKd_5wvXIAX9wx8sk&_nc_ht=scontent.fsgn5-10.fna&oh=03_AVKKWmzxG-fFoDKlat_1Pj0O0TahW37UcowwqreQDfWlbw&oe=6326D028'
    , 'https://scontent.fsgn5-15.fna.fbcdn.net/v/t1.15752-9/295578467_1087683855175509_5639587309237441336_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=vsidmm8dXXcAX87vJbt&tn=cpGW-2kCbYaV9EWx&_nc_ht=scontent.fsgn5-15.fna&oh=03_AVI91zZqfHmkYAJOIWUxVijmi0RU51aZkaui_ayEfR0atA&oe=632825F2'
    , 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/298896591_650457223449896_8624089435436331311_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=VTH9Rx9jq7EAX_xXSUQ&_nc_ht=scontent.fsgn5-9.fna&oh=03_AVKwDbAgbNY7YU5d_-aWKQfZw2EzKGM5FGqZq5aPZPHY1Q&oe=6326B770'
    , 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.15752-9/297667073_473769610963076_1240587119151043175_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_ohc=K_gLlDNdlm4AX_AI5vs&_nc_ht=scontent.fsgn5-5.fna&oh=03_AVIalY_uk0aUC8zFm1INDwAl-fkucOw8FJFmiSLXRP7B-Q&oe=632710E7'
    , 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.15752-9/298847199_594830052288100_8818807275302358574_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=JXAtoOwiP2EAX-HnyOK&_nc_ht=scontent.fsgn5-9.fna&oh=03_AVKUCV-gQMIbnagwV_DTVLX6H9gk5aLqdNDijqUtMyHVzg&oe=6328594E'
];
// const alts = {
//     'pic1.jpg': 'You are as beautiful as an angel',
//     'pic2.jpg': 'so kiu',
//     'pic3.jpg': 'MyLove',
//     'pic4.jpg': ' waiting is happiness',
//     'pic5.jpg': '1 person is still waiting'
// }

/* Looping through images */
const IMAGE_FIRST = 0;
for (const image of images) {
    displayedImageLager.src = images[IMAGE_FIRST];
    const newImage = document.createElement('img');
    newImage.classList.add("image_full");
    newImage.setAttribute('src', image);
    // newImage.setAttribute('alt', alts[image]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => {
        e.preventDefault();
        displayedImageLager.src = e.target.src;
        // displayedImageLager.alt = e.target.alt;
    });
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        loveIcon.classList.add('showIcon');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        loveIcon.classList.remove('showIcon');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});
