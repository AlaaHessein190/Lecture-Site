import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import lectures from "../data/lectures";

function Home() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 py-8 px-4 sm:px-6 lg:px-8">
      {/* تأثيرات خلفية خفيفة */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float"></div>
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-purple-100/40 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-float animation-delay-3000"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-indigo-100/30 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-float animation-delay-6000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg mb-6 transform hover:scale-105 transition-all duration-500 border border-blue-100">
            <span className="text-5xl text-blue-500">📚</span>
          </div>
          <h1 className="text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            مكتبة المحاضرات
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
            اكتشف محتوى المحاضرات واختبر فهمك من خلال الأسئلة التفاعلية
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-8 rounded-full shadow-sm"></div>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-blue-200">
                <span className="text-3xl text-blue-600">📖</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-800">{lectures.length}</p>
                <p className="text-slate-600 font-medium">محاضرة متاحة</p>
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-green-200">
                <span className="text-3xl text-green-600">❓</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-800">
                  {lectures.reduce((total, lecture) => total + lecture.questions.length, 0)}
                </p>
                <p className="text-slate-600 font-medium">سؤال تفاعلي</p>
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-slate-100 hover:border-purple-200 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mr-4 shadow-sm border border-purple-200">
                <span className="text-3xl text-purple-600">⭐</span>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-800">100%</p>
                <p className="text-slate-600 font-medium">جودة تعليمية</p>
              </div>
            </div>
          </div>
        </div>

        {/* شبكة المحاضرات - 3 بطاقات في الصف */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {lectures.map((lecture) => (
            <div 
              key={lecture.id} 
              className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200 transform hover:-translate-y-2 ${
                hoveredCard === lecture.id ? 'ring-2 ring-blue-200' : ''
              }`}
              onMouseEnter={() => setHoveredCard(lecture.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* رأس البطاقة */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm shadow-md">
                      <span className="text-3xl">{lecture.emoji || "📘"}</span>
                    </div>
                    <span className="bg-white/20 px-3 py-1.5 rounded-full text-sm backdrop-blur-sm font-medium shadow-sm">
                      #{lecture.id}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-left leading-tight">{lecture.title}</h2>
                </div>
              </div>
              
              {/* محتوى البطاقة */}
              <div className="p-6 max-h-64 overflow-y-auto custom-scrollbar">
                {lecture.content.map((section, index) => (
                  <div key={index} className="mb-5 last:mb-0">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full ml-2"></div>
                      <h3 className="text-base font-semibold text-slate-800 text-left flex-1">
                        {section.heading}
                      </h3>
                    </div>
                    <ul className="space-y-2 text-right">
                      {section.points.map((point, i) => (
                        <li 
                          key={i} 
                          className="flex items-start group"
                        >
                          <span className="text-blue-500 ml-2 mt-1.5 transform group-hover:scale-125 transition-transform flex-shrink-0">•</span>
                          <span className="text-slate-700 leading-relaxed text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* زر الأسئلة */}
              <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50/50 border-t border-slate-100">
                <button
                  onClick={() => navigate(`/questions/${lecture.id}`)}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <span className="text-base relative z-10">ابدأ الاختبار</span>
                  <svg className="w-5 h-5 mr-3 transform group-hover:translate-x-1 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* رسالة توجيهية إذا لم تكن هناك محاضرات */}
        {lectures.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-12 max-w-md mx-auto border border-slate-200">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-200">
                <span className="text-3xl text-blue-500">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">لا توجد محاضرات متاحة</h3>
              <p className="text-slate-600 mb-6">سيتم إضافة المحاضرات قريبًا</p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                تحديث الصفحة
              </button>
            </div>
          </div>
        )}

        {/* تذييل الصفحة */}
        <footer className="text-center mt-16 pt-8 border-t border-slate-200/70">
          <p className="text-slate-500 font-medium">
            Eng/Mahmoud Habib
          </p>
        </footer>
      </div>

      {/* إضافة أنماط مخصصة للتمرير */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        @keyframes float {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.05); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-float {
          animation: float 15s infinite;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
}

export default Home;