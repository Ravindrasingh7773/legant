import React, { useContext } from 'react'; 
import styles from './style.module.css';
import { SnackBarContext } from '../../context/snackBarProvider';

const Snackbar = () => {
  const { snackbarOpen, snackbarMessage } = useContext(SnackBarContext); 
  return (
    <>
      {snackbarOpen && (
         <div className={`${styles.snackbar}` }>
         {snackbarMessage}
       </div>
      )}
    </>
  );
};

export default Snackbar;
 
