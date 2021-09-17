import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter, Link, useLocation } from "react-router-dom";
import { motion as a, AnimatePresence, useCycle } from "framer-motion";
import HeaderInteract from "../Components/MenuInteractive/Header";
import Bar from "../Components/MenuInteractive/Bar";
import CanvasRouter from "../Components/MenuInteractive/CanvasRouter";
import FirstTest from "../Components/MenuInteractive/Interactivetests/FirstTest";
import SecondTest from "../Components/MenuInteractive/Interactivetests/SecondTest"
import ThirdTest from "../Components/MenuInteractive/Interactivetests/ThirdTest"
import FinalTest from "../Components/MenuInteractive/Interactivetests/FinalTest"

const MenuInteractivePage = () => {
  const [showBar, setShowBar] = useState(true);

  return (
    <div
      style={{
        backgroundColor: "#f1f4f8",
      }}
    >
      <HeaderInteract />

      <div style={{ display: "flex" }}>
        <Bar showBar={showBar} setShowBar={setShowBar} />
        <Switch>
            <AnimatePresence>
          <Route exact path="/menu/firstTest">
            <CanvasRouter showBar={showBar}>
              <FirstTest showBar={showBar}/>
            </CanvasRouter>
          </Route>
          <Route exact path="/menu/secondTest">
            <CanvasRouter showBar={showBar}>
              <SecondTest />
            </CanvasRouter>
          </Route>
          <Route exact path="/menu/thirdTest">
            <CanvasRouter showBar={showBar}>
              <ThirdTest />
            </CanvasRouter>
          </Route>
          <Route exact path="/menu/finalTest">
            <CanvasRouter showBar={showBar}>
              <FinalTest />
            </CanvasRouter>
          </Route>
          </AnimatePresence>
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(MenuInteractivePage);
