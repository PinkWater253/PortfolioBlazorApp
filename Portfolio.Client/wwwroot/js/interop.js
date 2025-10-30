/**
 * File này chứa các hàm JavaScript có thể được gọi từ mã C# của Blazor.
 */

// Giữ lại các hàm cũ để tương thích nếu bạn cần dùng lại sau này.
let scrollHandler;

window.registerScrollHandler = (dotNetHelper) => {
    scrollHandler = () => {
        dotNetHelper.invokeMethodAsync('OnScroll', window.scrollY);
    };
    window.addEventListener('scroll', scrollHandler);
};

window.unregisterScrollHandler = () => {
    if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
    }
};

// ===================================================================
// == HÀM MỚI CHO THƯ VIỆN AOS (Animate On Scroll) ==
// ===================================================================
/**
 * Hàm này được gọi từ component Blazor sau khi nó đã được render xong.
 * Nó sẽ khởi tạo thư viện AOS để quét DOM và áp dụng các hiệu ứng.
 */
window.initAOS = () => {
    AOS.init({
        duration: 1000,       // Thời gian của hiệu ứng tính bằng mili-giây.
        easing: 'ease-in-out',// Hiệu ứng chuyển động mượt mà.
        once: true,           // Hiệu ứng chỉ chạy một lần duy nhất.
        mirror: false         // Hiệu ứng không chạy ngược lại khi cuộn lên.
    });
    console.log("AOS has been initialized."); // Thêm log để dễ dàng kiểm tra.
};

