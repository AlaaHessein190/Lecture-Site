import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Questions() {
  const { id } = useParams();
  const [lecture, setLecture] = useState(null);

  useEffect(() => {
    import("../data/lectures").then((module) => {
      const data = module.default;
      setLecture(data[parseInt(id) - 1]);
    });
  }, [id]);

  if (!lecture) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <p className="text-gray-600 mb-4">جارِ تحميل الأسئلة...</p>
        </div>
      </div>
    );
  }

  if (!lecture) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">المحاضرة غير موجودة</h2>
          <p className="text-gray-600 mb-6">يرجى التحقق من الرابط والمحاولة مرة أخرى</p>
          <Link 
            to="/" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    

    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* رأس الصفحة */}
        <div className="text-center mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-4 transition duration-300"
          >
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            العودة للرئيسية
          </Link>
          
          
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Questions {lecture.title}</h1>
         
        </div>
        {/* شبكة الأسئلة */}
        <div className="space-y-6">
          {lecture.questions.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  {/* رقم السؤال */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* محتوى السؤال والجواب */}
                  <div className="flex-1 text-right">
                    <div className="mb-4">
                      <div className="flex items-center justify-end mb-2">
                        <span className="text-blue-500 ml-2">❓</span>
                        <h3 className="text-lg font-semibold text-gray-800">السؤال</h3>
                      </div>
                      <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
                        {item.q}
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-end mb-2">
                        <span className="text-green-500 ml-2">✅</span>
                        <h3 className="text-lg font-semibold text-gray-800">الإجابة</h3>
                      </div>
                      <p className="text-gray-700 bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* رسالة إذا لم توجد أسئلة */}
        {lecture.questions.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">لا توجد أسئلة بعد</h3>
              <p className="text-gray-600">سيتم إضافة الأسئلة قريبًا</p>
            </div>
          </div>
        )}
        {/* تذييل الصفحة */}
        <div className="text-center mt-12 pt-6 border-t border-gray-200">
          <p className="text-gray-500">
            تم عرض {lecture.questions.length} سؤال من محاضرة "{lecture.title}"
          </p>
        </div>
      </div>
    </div>
  );
}
export default Questions;