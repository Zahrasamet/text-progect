import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Home() {
  return (
    <div dir="rtl" className="bg-gray-50 py-8 px-4">
      <section className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">مسابقات و قرعه‌کشی‌ها</h1>
            <p className="text-xl text-justify leading-relaxed">
              جهت جذابیت بیشتر مسابقات برای شما مشتری عزیز سعی کردیم تا مسابقات پیش‌بینی در چند سطح با هزینه
              (رایگان، ثابت و شناور) برگزار گردد. همچنین سعی ما بر آن است تا با برگزاری مسابقات متنوع از جمله
              (بازار سرمایه، مسابقات ورزشی و ...) بتوانیم ضمن ارائه خدمات بهتر موجبات رضایت شما مشتریان عزیز را فراهم آوریم.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow flex justify-center items-center">
            <img src="/img/img1.jpg" alt="سوالات متداول" className="w-full max-w-md rounded-md" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
          <div className="bg-white p-6 rounded-lg shadow flex justify-center items-center">
            <img src="/img/img2.jpg" alt="شبکه کاربران" className="w-full max-w-md rounded-md" />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h1 className="text-2xl font-bold mb-4">شبکه کاربران</h1>
            <p className="text-xl text-justify leading-relaxed pl-4">
              در باشگاه آینده برای ارائه خدمات به‌روز و قدردانی از وفاداری شما مشتری عزیز، امکانات فراوانی در نظر گرفته شده است.
              یکی از این راه‌ها توسعه شبکه کاربران می‌باشد. شما کاربران عزیز می‌توانید برای کسب امتیاز بیشتر و افزایش درآمد خود در باشگاه از این امکان استفاده نمایید.
            </p>
          </div>
        </div>

        </section>
        <div className="space-y-8 text-right">
          <h1 className="text-4xl font-bold">پرسش‌های متداول</h1>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4">چگونه عضو باشگاه شویم؟</h2>
            <p className="text-xl text-justify leading-relaxed">
              اگر از قبل مشتری کارگزاری هستید، می‌توانید تنها با ثبت‌نام در باشگاه از کلیه خدمات ما بهره‌مند شوید.
              اما اگر تاکنون موفق به عضویت در شرکت کارگزاری بانک آینده نشده‌اید، می‌توانید جهت فعالیت و کسب امتیاز در باشگاه
              به یکی از شعب کارگزاری مراجعه نمایید و عضو خانواده بزرگ کارگزاری بانک آینده شوید.
            </p>
          </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="bg-white p-6 rounded-lg shadow">
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
  
            <div className="bg-white p-6 rounded-lg shadow text-center">
              <img src="/img/img.jpg" alt="پشتیبانی" className="w-full max-w-md mx-auto my-4 rounded-md" />
              <p className="text-lg font-medium mt-2">سوالات بیشتری دارید؟</p>
              <p className="text-lg text-gray-700">با 021-2486847 تماس بگیرید</p>
            </div>
</div>


          </div>
        </div>
      
  
  );
}
