import "../../App.css";
import { Main } from "../Main/Main.jsx";
import { Header } from "../Header/Header.jsx";
// import { PopBrowse } from "../popups/PopBrowse/PopBrowse.jsx";
// import { PopNewCard } from "../popups/PopNewCard/PopNewCard.jsx";
import { Swrapper } from "./MainApp.styled.js";
import { Outlet } from "react-router-dom";

function MainApp() {
  return (
    <>
      <Swrapper>
        {/* <div className="pop-exit" id="popExit">
          <div className="pop-exit__container">
            <div className="pop-exit__block">
              <div className="pop-exit__ttl">
                <h2>Выйти из аккаунта?</h2>
              </div>
              <form className="pop-exit__form" id="formExit" action="#">
                <div className="pop-exit__form-group">
                  <button className="pop-exit__exit-yes _hover01" id="exitYes">
                    <Link to="/login">Да, выйти</Link>{" "}
                  </button>
                  <button className="pop-exit__exit-no _hover03" id="exitNo">
                    <a>Нет, остаться</a>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div> */}

        {/* <PopNewCard activeCategoryClass1={true} /> */}
        {/* <PopBrowse
          nameTask="Название задачи"
          classTypeColor="_orange"
          typeCard="Web Design"
          hiddenStatusClass2={false}
        /> */}
        <Header />
        <Main />
        <Outlet />
      </Swrapper>

      <script src="js/script.js"></script>
    </>
  );
}

export default MainApp;
