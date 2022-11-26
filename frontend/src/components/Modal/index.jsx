import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";

import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

export default function Modal() {
  const [displayResponsive, setDisplayResponsive] = useState(false);

  const dialogFuncMap = {
    displayResponsive: setDisplayResponsive,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

//   const renderFooter = (name) => {
//     return (
//       <div>
//         <Button
//           label="No"
//           icon="pi pi-times"
//           onClick={() => onHide(name)}
//           className="p-button-text"
//         />
//         <Button
//           label="Yes"
//           icon="pi pi-check"
//           onClick={() => onHide(name)}
//           autoFocus
//         />
//       </div>
//     );
//   };

  return (
    <div className="dialog-demo">
      <div className="card">
        <Button
          label="Show"
          icon="pi pi-external-link"
          onClick={() => onClick("displayResponsive")}
        />
        <Dialog
          header="Header"
          visible={displayResponsive}
          onHide={() => onHide("displayResponsive")}
          breakpoints={{ "960px": "75vw" }}
          style={{ width: "50vw" }}
        //   footer={renderFooter("displayResponsive")}
        >
        </Dialog>
      </div>
    </div>
  );
}
