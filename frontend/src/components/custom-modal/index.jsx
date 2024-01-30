// import * as React from 'react';
// import Button from '@mui/joy/Button';
// import Modal from '@mui/joy/Modal';
// import ModalClose from '@mui/joy/ModalClose';
// import Typography from '@mui/joy/Typography';
// import Sheet from '@mui/joy/Sheet';
// import CustomTable from '../custom-table';
// import "./index.css"

// export default function CustomModal({text,children,onClick,onClose,open }) {
  
// //   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <span className="p-vin-number" onClick={onClick}>
//         {text}
//       </span>
//       <Modal
//         aria-labelledby="modal-title"
//         aria-describedby="modal-desc"
//         open={open}
        
//         onClose={onClose}
//         sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',backdropFilter:"blur(14px)",opacity:".2" }}
//       >
//       <div style={{display:"flex",justifyContent:"center",alignItems:"center",outline:"none",}} className='bg-theme'>{children}</div>
//       </Modal>
//     </React.Fragment>
//   );
// }
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import CustomTable from '../custom-table';
import "./index.css"

export default function CustomModal({ children, onClose, open }) {
  const [shouldRender, setShouldRender] = React.useState(true);
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    // Set shouldRender to true and update key when children change
    setShouldRender(true);
    setKey((prevKey) => prevKey + 1);
  }, [children]);

  // Reset shouldRender to false when modal is closed
  React.useEffect(() => {
    if (!open) {
      setShouldRender(false);
    }
  }, [open]);

  // Render null if shouldRender is false
  if (!shouldRender) {
    return null;
  }

  return (
    <React.Fragment>
      <Modal
        key={key}
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={onClose}
        color='red'
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',}}
      >
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", outline: "none", }} className='bg-theme'>
          {children}
        </div>
      </Modal>
    </React.Fragment>
  );
}




