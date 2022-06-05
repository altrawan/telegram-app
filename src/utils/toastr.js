import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastr = (message, type = 'error') => {
  const config = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored'
  };

  if (type === 'error') {
    toast.error(message, config);
  }

  if (type === 'success') {
    toast.success(message, config);
  }
};
