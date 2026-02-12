// import "./App.css";
import AppRoutes from "./components/AppRoutes.jsx";
// import { Main } from "./components/Main/Main.jsx";
// import { Header } from "./components/Header/Header.jsx";
// import { PopBrowse } from "./components/popups/PopBrowse/PopBrowse.jsx";
// import { PopNewCard } from "./components/popups/PopNewCard/PopNewCard.jsx";

// function App() {
//   return (
//     <>
//       <div className="wrapper">
//         <div className="pop-exit" id="popExit">
//           <div className="pop-exit__container">
//             <div className="pop-exit__block">
//               <div className="pop-exit__ttl">
//                 <h2>Выйти из аккаунта?</h2>
//               </div>
//               <form className="pop-exit__form" id="formExit" action="#">
//                 <div className="pop-exit__form-group">
//                   <button className="pop-exit__exit-yes _hover01" id="exitYes">
//                     <a href="modal/signin.html">Да, выйти</a>{" "}
//                   </button>
//                   <button className="pop-exit__exit-no _hover03" id="exitNo">
//                     <a href="main.html">Нет, остаться</a>{" "}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         <PopNewCard
//           activeCategoryClass1={true}
//         />
//         <PopBrowse
//           nameTask="Название задачи"
//           classTypeColor="_orange"
//           typeCard="Web Design"
//           hiddenStatusClass2={false}
//         />
//         <Header />
//         <Main />
//       </div>

//       <script src="js/script.js"></script>
//     </>
//   );
// }
function App() {
  return <AppRoutes />;
}

export default App;
