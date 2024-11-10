function openModal(imageElement) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');
    const captionText = document.getElementById('caption');

    modal.style.display = "block";
    setTimeout(() => modal.classList.add('show'), 10); // 애니메이션 적용
    modalImg.src = imageElement.src.replace('_thumbnail', ''); // 원본 이미지 경로로 대체
    captionText.innerHTML = imageElement.alt; // 이미지 설명을 캡션에 표시

    // 슬라이더 화살표 숨기기
    document.querySelectorAll('.prev, .next').forEach(button => {
        button.style.display = 'none';
    });

    // 모달 외부 클릭 시 닫기
    modal.onclick = function(event) {
        if (event.target === modal) {
            closeModal();
        }
    };
}

function closeModal() {
    const modal = document.getElementById('myModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
    }, 300); // 애니메이션 시간과 동일하게 설정 (0.3s)

    // 슬라이더 화살표 다시 표시
    document.querySelectorAll('.prev, .next').forEach(button => {
        button.style.display = 'block';
    });
}

let currentSlides = {
    slider1: 0,
    slider2: 0
};

function moveSlides(n, sliderId) {
    const slider = document.getElementById(sliderId);
    const slides = slider.querySelector('.slides');
    const totalSlides = slides.children.length;

    // 현재 슬라이드 업데이트
    currentSlides[sliderId] = (currentSlides[sliderId] + n + totalSlides) % totalSlides;
    
    // 슬라이드 이동
    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(${-currentSlides[sliderId] * slideWidth}px)`;
}

