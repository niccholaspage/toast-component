import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback(({variant, message}) => {
    setToasts(toasts => [...toasts, {
      id: crypto.randomUUID(),
      variant: variant,
      message: message
    }]);
  }, []);

  const dismissToast = React.useCallback((id) => {
    setToasts(toasts => [...toasts].filter(toast => toast.id !== id));
  }, []);

  const value = React.useMemo(() => ({
    toasts,
    dismissToast,
    addToast
  }), [toasts, dismissToast, addToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;