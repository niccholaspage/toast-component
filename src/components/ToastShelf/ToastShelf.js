import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({onToastDismissal, toasts}) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map(toast => <li className={styles.toastWrapper}>
        <Toast variant={toast.variant} onDismissal={() => onToastDismissal(toast.id)}>{toast.message}</Toast>
      </li>)}
    </ol>
  );
}

export default ToastShelf;
