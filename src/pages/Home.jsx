import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import lectures from "../data/lectures";

function Home() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* تأثيرات الخلفية */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mb-6 transform hover:scale-105 transition-transform duration-300">
            <span className="text-4xl">📚</span>
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            مكتبة المحاضرات
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            اكتشف محتوى المحاضرات واختبر فهمك من خلال الأسئلة التفاعلية
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl text-blue-600">📖</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">{lectures.length}</p>
                <p className="text-slate-600">محاضرة متاحة</p>
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl text-green-600">❓</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">
                  {lectures.reduce((total, lecture) => total + lecture.questions.length, 0)}
                </p>
                <p className="text-slate-600">سؤال تفاعلي</p>
              </div>
            </div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl text-purple-600">⭐</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-800">100%</p>
                <p className="text-slate-600">جودة تعليمية</p>
              </div>
            </div>
          </div>
        </div>

        {/* شبكة المحاضرات */}
        <div className="grid gap-8 lg:grid-cols-2">
          {lectures.map((lecture) => (
            <div 
              key={lecture.id} 
              className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/30 transform hover:-translate-y-2 ${
                hoveredCard === lecture.id ? 'ring-2 ring-blue-500/20' : ''
              }`}
              onMouseEnter={() => setHoveredCard(lecture.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* رأس البطاقة */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-2xl">{lecture.emoji || "📘"}</span>
                    </div>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                      #{lecture.id}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mt-4 text-left">{lecture.title}</h2>
                </div>
              </div>
              
              {/* محتوى البطاقة */}
              <div className="p-6 max-h-80 overflow-y-auto custom-scrollbar">
                {lecture.content.map((section, index) => (
                  <div key={index} className="mb-6 last:mb-0">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full ml-2"></div>
                      <h3 className="text-lg font-semibold text-slate-800 text-left flex-1">
                        {section.heading}
                      </h3>
                    </div>
                    <ul className="space-y-2 text-right">
                      {section.points.map((point, i) => (
                        <li 
                          key={i} 
                          className="flex items-start group"
                        >
                          <span className="text-blue-500 ml-2 mt-1.5 transform group-hover:scale-125 transition-transform">•</span>
                          <span className="text-slate-700 leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              {/* زر الأسئلة */}
              <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50/50 border-t border-white/50">
                <button
                  onClick={() => navigate(`/questions/${lecture.id}`)}
                  className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  <span className="text-lg"> Go to Questions </span>
                  <svg className="w-5 h-5 mr-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-12 max-w-md mx-auto border border-white/30">
              <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-3">لا توجد محاضرات متاحة</h3>
              <p className="text-slate-600 mb-6">سيتم إضافة المحاضرات قريبًا</p>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-shadow">
                تحديث الصفحة
              </button>
            </div>
          </div>
        )}

        {/* تذييل الصفحة */}
        <footer className="text-center mt-16 pt-8 border-t border-slate-200/50">
          <p className="text-slate-500">
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
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}

export default Home;