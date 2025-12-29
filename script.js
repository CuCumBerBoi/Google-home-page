document.addEventListener('DOMContentLoaded', () => { // รอให้หน้าเว็บโหลดโครงสร้าง HTML เสร็จสมบูรณ์ (DOM Ready) ก่อนทำงาน
    const searchInput = document.querySelector('#search-input'); // ค้นหาและเก็บ element ช่อง input ลงตัวแปร searchInput
    const searchBtn = document.querySelector('#google-search-btn'); // เก็บปุ่มค้นหา Google Search
    const luckyBtn = document.querySelector('#lucky-btn'); // เก็บปุ่ม I'm Feeling Lucky

    // ฟังก์ชันสำหรับดำเนินการค้นหาแบบปกติ
    const performSearch = () => {
        const query = searchInput.value.trim(); // อ่านค่าจากช่อง input และตัดช่องว่างหน้าหลังทิ้ง (.trim())
        if (query) { // ถ้ามีข้อความ (ไม่ว่างเปล่า)
            // เปลี่ยนหน้าเว็บไปยัง Google Search พร้อมพารามิเตอร์ q (query) ที่ผ่านการ encode แล้ว
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    };

    // ฟังก์ชันสำหรับ I'm Feeling Lucky (ปกติจะเข้าเว็บแรกเลย แต่ Google ป้องกันไว้บางส่วน เราจำลองพฤติกรรม)
    const performLuckySearch = () => {
        const query = searchInput.value.trim(); // อ่านค่าจาก input
        if (query) { // ถ้ามีคำค้นหา
            // ใช้ parameter btnI=I ซึ่งเป็น parameter ของ Google สำหรับ I'm Feeling Lucky
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=I`;
        } else { // ถ้าไม่มีคำค้นกด Lucky เล่นๆ
            // ให้เด้งไปหน้า Google Doodles แทน (พฤติกรรมมาตรฐานถ้ากดเปล่าๆ)
            window.location.href = 'https://www.google.com/doodles';
        }
    };

    // Event listeners: การดักจับเหตุการณ์ต่างๆ

    // เมื่อคลิกปุ่ม Google Search ให้เรียกฟังก์ชัน performSearch
    searchBtn.addEventListener('click', performSearch);

    // เมื่อคลิกปุ่ม I'm Feeling Lucky ให้เรียกฟังก์ชัน performLuckySearch
    luckyBtn.addEventListener('click', performLuckySearch);

    // เมื่อมีการกดปุ่มในช่อง input (keypress)
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') { // ถ้าปุ่มที่กดคือ Enter
            performSearch(); // ให้ทำการค้นหาเหมือนกดปุ่ม Search
        }
    });
});
