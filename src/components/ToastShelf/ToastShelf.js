import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, handleToastDismissal } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => <li key={toast.id} className={styles.toastWrapper}>
        <Toast variant={toast.variant} onDismissal={() => handleToastDismissal(toast.id)}>{toast.message}</Toast>
      </li>)}
    </ol>
  );
}

export default ToastShelf;
