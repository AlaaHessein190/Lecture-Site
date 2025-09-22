const lectures = [
  {
    id: 1,
    title: "Lecture First",
    content: [
      {
        heading: "🔵 Introduction to React",
        points: [
          "What is React?",
          "Create React App (Vite أو CRA).",
          "Folder structure.",
          "JSX basics."
        ]
      }
    ],
    questions: [
      { q: "ما هو React؟", a: "مكتبة (JavaScript library) لتطوير واجهات المستخدم (UI)." },
      { q: "صح أم خطأ: React هو إطار عمل (Framework).", a: "خطأ، React مكتبة." },
      { q: "ما هي ميزة JSX؟", a: "تسمح بكتابة HTML داخل JavaScript." },
      { q: "أيهما أسرع وأخف: Vite أم CRA؟", a: "Vite أسرع وأخف." },
      { q: "ما هو الأمر لإنشاء مشروع جديد باستخدام Vite؟", a: "npm create vite@latest my-app" },
      { q: "ماذا يعني JSX؟", a: "JavaScript XML." },
      { q: "صح أم خطأ: كل كود JSX يجب أن يرجع عنصر واحد فقط.", a: "صح." },
      { q: "في JSX، الكلمة المفتاحية class تتحول إلى ماذا؟", a: "className." },
      { q: "كيف نكتب تعليق داخل JSX؟", a: "{/* هذا تعليق */}" },
      { q: "ما هو الـ Root Element في React عادة؟", a: "<div id='root'></div> في index.html" },
      { q: "صح أم خطأ: في React نستخدم DOM العادي مباشرة.", a: "خطأ، React يستخدم Virtual DOM." },
      { q: "ما الفرق بين Virtual DOM و Real DOM؟", a: "Virtual DOM نسخة خفيفة للتحديث السريع، Real DOM هو DOM الفعلي." },
      { q: "في ملف React، الامتداد الشائع هو؟", a: ".jsx أو .js" },
      { q: "صح أم خطأ: لازم نعمل Import لـ React في كل ملف JSX.", a: "من React 17+ مش لازم، لكن في الإصدارات القديمة لازم." },
      { q: "ما هو المجلد الذي نضع فيه الكومبوننتات عادة؟", a: "src/components" }
    ]
  },
  {
    id: 2,
    title: "Lecture Second",
    content: [
      {
        heading: "🔵 Components & Props",
        points: [
          "Function Components.",
          "Props usage.",
          "Component Reusability."
        ]
      },
      {
        heading: "🔵 State Basics",
        points: [
          "useState Hook.",
          "Updating State.",
          "Counter Example."
        ]
      }
    ],
    questions: [
      { q: "ما هو Function Component؟", a: "دالة ترجع JSX." },
      { q: "صح أم خطأ: لازم اسم الكومبوننت يبدأ بحرف كبير.", a: "صح." },
      { q: "كيف نمرر Prop إلى كومبوننت؟", a: "<MyComponent title='Hello' />" },
      { q: "داخل الكومبوننت كيف نقرأ Prop؟", a: "props.title أو باستخدام Destructuring { title }." },
      { q: "صح أم خطأ: Props يمكن تغييرها داخل الكومبوننت.", a: "خطأ، Props للقراءة فقط." },
      { q: "لماذا نستخدم Props؟", a: "لإعادة استخدام الكومبوننتات بشكل ديناميكي." },
      { q: "ما هو Hook خاص بالحالة (state)؟", a: "useState." },
      { q: "كيف نعرف State داخل كومبوننت؟", a: "const [count, setCount] = useState(0);" },
      { q: "صح أم خطأ: لا يمكن تحديث الـ State مباشرة.", a: "صح، لازم نستخدم setState." },
      { q: "اكتب كود زر يزيد العداد بمقدار 1 عند الضغط.", a: "<button onClick={() => setCount(count + 1)}>+</button>" },
      { q: "ماذا يحدث لو غيرنا State؟", a: "React يعيد Render للكومبوننت." },
      { q: "صح أم خطأ: يمكن استخدام useState داخل if statement.", a: "خطأ، لازم يكون في أعلى الكومبوننت." },
      { q: "مثال على إعادة استخدام الكومبوننت.", a: "<Card title='Product A' /> <Card title='Product B' />" },
      { q: "كيف نرسل دالة كـ Prop؟", a: "<MyButton onClick={handleClick} />" },
      { q: "لماذا React يفضل الكومبوننتات الصغيرة؟", a: "لسهولة الصيانة وإعادة الاستخدام." }
    ]
  },
  {
    id: 3,
    title: "Lecture Third",
    content: [
      {
        heading: "🔵 Events in React",
        points: ["onClick, onChange, onSubmit.", "Passing functions as props."]
      },
      {
        heading: "🔵 Lists & Keys",
        points: ["Rendering lists with map.", "Unique keys."]
      },
      {
        heading: "🔵 Conditional Rendering",
        points: ["if / else inside JSX.", "Ternary operator.", "Short-circuit &&."]
      }
    ],
    questions: [
      { q: "ما هي أهم Events في React؟", a: "onClick, onChange, onSubmit." },
      { q: "صح أم خطأ: أسماء الأحداث في React تُكتب بحروف صغيرة.", a: "خطأ، تُكتب camelCase مثل onClick." },
      { q: "كيف نمنع Refresh افتراضي للفورم؟", a: "e.preventDefault();" },
      { q: "عند تمرير دالة كـ Prop، هل ننفذها مباشرة أم نرسل المرجع؟", a: "نرسل المرجع: onClick={handleClick}." },
      { q: "كيف نعرض Array باستخدام map؟", a: "items.map(item => <li key={item.id}>{item.name}</li>)" },
      { q: "لماذا نحتاج Key في القوائم؟", a: "لتسريع التحديث ومساعدة React يميز العناصر." },
      { q: "صح أم خطأ: يمكن تكرار نفس Key لعناصر متعددة.", a: "خطأ، لازم تكون فريدة." },
      { q: "كيف نكتب If داخل JSX؟", a: "باستخدام Ternary أو &&." },
      { q: "كود يستخدم Ternary لعرض رسالة:", a: "{isLoggedIn ? 'Welcome' : 'Please login'}" },
      { q: "ما معنى short-circuit && في JSX؟", a: "لو الشرط true يعرض القيمة، لو false يتجاهل." },
      { q: "كود يعرض 'No Data' لو الـ array فاضي:", a: "{data.length === 0 && <p>No Data</p>}" },
      { q: "صح أم خطأ: ممكن Nested ternary يكون مقروء وسهل.", a: "خطأ، بيكون صعب القراءة." },
      { q: "ما الفرق بين onClick في React و onclick في HTML؟", a: "React يكتب camelCase ويأخذ Function مش String." },
      { q: "كيف نمرر باراميتر مع Event؟", a: "<button onClick={() => handleClick(id)}>Click</button>" },
      { q: "في Conditional Rendering، أيهما أفضل؟", a: "يعتمد: ternary لو حالتين، && لو حالة واحدة." },
      { q: "ما هو الـ State المستخدم في Counter؟", a: "count." },
      { q: "كيف نمنع العداد من النزول تحت 0؟", a: "شرط: if (count <= 0) أو Conditional Rendering." },
      { q: "ما الحدث المستخدم لزيادة العداد؟", a: "onClick." },
      { q: "صح أم خطأ: عند الضغط على الزر React يحدث الـ DOM مباشرة.", a: "خطأ، يحدث Virtual DOM أولاً." },
      { q: "ما الرسالة التي تظهر لو العداد أقل من 0؟", a: "'You can't go below zero!'" }
    ]
  }
];

export default lectures;
