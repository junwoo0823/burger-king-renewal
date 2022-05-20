// 시간별로 #recommend 글 변경
const today = new Date();
const hours = today.getHours();
const rec = document.getElementById('recommend');
const burger = '피넛버터 스태커';

if (hours >= 6 && hours < 12) { // 아침 식사
    rec.innerHTML = '아침밥 대신 '+ burger +'가 어떠신가요?';
} else if (hours >= 12 && hours < 18) { // 점심 식사
    rec.innerHTML = '점심으로 '+ burger +'는 어떠신가요?';
} else if (hours >= 18 && hours < 21) { // 저녁 식사
    rec.innerHTML = '저녁밥 대신 '+ burger +'가 어떠신가요?';
} else { // 야식
    rec.innerHTML = '야식으로 '+ burger +'는 어떠신가요?';
}

// 캐러셀
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn'); // 이전 버튼
const nextBtn = document.querySelector('#nextBtn'); // 다음 버튼

let counter = 1;
const size = 1100;
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// 이전 버튼 클릭 - 수동
prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// 다음 버튼 클릭 - 수동
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// 3초마다 다음으로 이동 - 자동
setInterval(() => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 3000);

// 시작에서 끝으로, 끝에서 시작으로 갈 경우
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') { // 끝 이미지 도착
        carouselSlide.style.transition = 'none'; // 트랜지션 효과 없애기
        counter = carouselImages.length - 2; // couter 초기화
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'; // 실제 마지막 이미지로 이동.
    } else if (carouselImages[counter].id === 'firstClone') { // 첫 이미지 도착
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter; // couter 초기화
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});