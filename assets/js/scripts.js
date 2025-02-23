// 回到頂部按鈕功能
window.onscroll = function () {
    let topBtn = document.getElementById("topBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// 平滑滾動回到頂部
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 深色模式切換功能
function toggleDarkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
}