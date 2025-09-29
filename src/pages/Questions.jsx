import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

// ✅ استيراد مكتبة تلوين الأكواد
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// ✅ دالة مطورة لاكتشاف نوع الكود (JS أو JSX)
const detectLanguage = (text) => {
  if (/<\/?[A-Za-z]/.test(text)) return "jsx"; // JSX
  if (/function|const|let|var|=>|\(|\)|\{|\}/.test(text)) return "javascript"; // JS/JSX
  return null; // مش كود
};

// ✅ الكلمات البرمجية اللي عايزين نلونها
const keywords = ["React", "DOM", "useState", "map", "filter", "return", " If", "else", "for", "const", "let", "var","Events ","onClick","onChange","onSubmit","camelCase","Refresh","Prop","array"," Ternary","No Data","Event","Conditional Rendering","ternary","State","Counter","count","You can't go below zero","JavaScript","HTML","Vite","CRA","npm create vite@latest my-app","XML","class","Name","Virtual","Real","Root Element"," Nested ternary","short-circuit","false","true"," Function Component","Render"," if statement","JSX","Key","jsx ","js","Import ","src/components", "function", "=>"];

// ✅ دالة لتحويل النص العادي إلى JSX مع تلوين الكلمات المفتاحية
const highlightKeywords = (text) => {
  const parts = text.split(new RegExp(`(${keywords.join("|")})`, "g"));
  return parts.map((part, i) =>
    keywords.includes(part) ? (
      <span key={i} className="text-purple-600 font-semibold">{part}</span>
    ) : (
      part
    )
  );
};

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

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

        <div className="space-y-6">
          {lecture.questions.map((item, index) => {
            const qLang = detectLanguage(item.q);
            const aLang = detectLanguage(item.a);

            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4 rtl:space-x-reverse">

                    <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>

                    <div className="flex-1 text-right">
                      {/* السؤال */}
                      <div className="mb-4">
                        <div className="flex items-center justify-end mb-2">
                          <span className="text-blue-500 ml-2">❓</span>
                          <h3 className="text-lg font-semibold text-gray-800">السؤال</h3>
                        </div>
                        {qLang ? (
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter 
                              language={qLang} 
                              style={vscDarkPlus} 
                              wrapLongLines
                              customStyle={{ padding: '1rem', margin: 0 }}
                              codeTagProps={{ style: { display: 'block', overflowX: 'auto' } }}
                            >
                              {item.q}
                            </SyntaxHighlighter>
                          </div>
                        ) : (
                          <p className="text-gray-700 bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500 whitespace-pre-wrap break-words">
                            {highlightKeywords(item.q)}
                          </p>
                        )}
                      </div>

                      {/* الإجابة */}
                      <div>
                        <div className="flex items-center justify-end mb-2">
                          <span className="text-green-500 ml-2">✅</span>
                          <h3 className="text-lg font-semibold text-gray-800">الإجابة</h3>
                        </div>
                        {aLang ? (
                          <div className="overflow-x-auto">
                            <SyntaxHighlighter 
                              language={aLang} 
                              style={vscDarkPlus} 
                              wrapLongLines
                              customStyle={{ padding: '1rem', margin: 0 }}
                              codeTagProps={{ style: { display: 'block', overflowX: 'auto' } }}
                            >
                              {item.a}
                            </SyntaxHighlighter>
                          </div>
                        ) : (
                          <p className="text-gray-700 bg-green-50 p-4 rounded-lg border-r-4 border-green-500 whitespace-pre-wrap break-words">
                            {highlightKeywords(item.a)}
                          </p>
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

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
