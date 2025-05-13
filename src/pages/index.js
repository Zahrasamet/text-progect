import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <div className="rtl p-8 space-y-8">
      <div className="text-right">
        <h1 className="text-3xl font-bold">پرسش های متداول</h1>

        <h2 className="text-xl font-bold my-8">چگونه عضو باشگاه شویم؟</h2>
        <p className="text-xl ml-0 md:ml-[50%]">
          اگر از قبل مشتری کارگزاری هستید، می‌توانید تنها
          با ثبت‌نام در باشگاه از کلیه خدمات ما بهره‌مند شوید. اما اگر تاکنون موفق به عضویت
          در شرکت کارگزاری بانک آینده نشده‌اید، می‌توانید جهت فعالیت و کسب امتیاز در باشگاه به یکی
          از شعب کارگزاری مراجعه نمایید و عضو خانواده بزرگ کارگزاری بانک آینده شوید.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-right">
        <div className="bg-white p-4 rounded-lg shadow">
          <ul>
            <li className="flex justify-between items-center text-lg font-semibold border-b py-4">
              <a>چگونه امتیاز بگیریم؟</a>
              <i className="fas fa-chevron-down text-gray-500"></i>
            </li>
            <li className="flex justify-between items-center text-lg font-semibold border-b py-4">
              <a>چگونه از امتیاز بهره‌مند شویم؟</a>
              <i className="fas fa-chevron-down text-gray-500"></i>
            </li>
            <li className="flex justify-between items-center text-lg font-semibold border-b py-4">
              <a>چه زمانی امتیازات معاملات روز خود را می‌توانم مشاهده کنم؟</a>
              <i className="fas fa-chevron-down text-gray-500"></i>
            </li>
            <li className="flex justify-between items-center text-lg font-semibold border-b py-4">
              <a>چگونه از امتیازم بهره‌مند شوم؟</a>
              <i className="fas fa-chevron-down text-gray-500"></i>
            </li>
            <li className="flex justify-between items-center text-lg font-semibold border-b py-4">
              <a>آیا تنها معاملاتی که به‌صورت آنلاین انجام می‌شوند شامل امتیاز هستند؟</a>
              <i className="fas fa-chevron-down text-gray-500"></i>
            </li>
          </ul>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <div className="text-container">
            <img src="/img/img.jpg" alt="سوالات متداول" className="mx-auto my-4" />
          </div>
          <div className="flex flex-col text-center">
            <span>سوالات بیشتری دارید؟</span>
            <span>با 021-2486847 تماس بگیرید</span>
          </div>
        </div>
      </div>
    </div>
  );
}
