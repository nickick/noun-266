import { useContext } from 'react';

import { ContractContext } from './ContractContext';
import isDebug from './utils/debug';

type Message = {
  type: "success" | "info" | "warning" | "error";
  text: string;
}

const Notification = () => {
  const { errorMessage, setErrorMessage } = useContext(ContractContext);

  let errorMessageTruncated = errorMessage || '';

  if (errorMessage && errorMessage.length > 100) {
    const reasonIndex = errorMessage?.indexOf('(reason="execution reverted: ');
    if (errorMessage.indexOf('user rejected transaction') > -1) {
      errorMessageTruncated = 'Error: User rejected transaction.';
    } else if (reasonIndex > -1) {
      const truncatedErrorMessage = errorMessage.slice(reasonIndex + 29);
      const quoteIndex = truncatedErrorMessage.indexOf('",');
      if (quoteIndex > -1) {
        errorMessageTruncated = truncatedErrorMessage.slice(0, quoteIndex);
      } else {
        errorMessageTruncated = errorMessage.slice(reasonIndex + 29, reasonIndex + 29 + 150).concat(' ...');
      }
    } else if (errorMessage.indexOf('insufficient funds for intrinsic transaction cost') > -1) {
      errorMessageTruncated = 'Error: Not enough ETH in wallet. Try switching your wallet or adding more funds.';
    } else {
      const quoteIndex = errorMessage.indexOf('"');

      if (quoteIndex > -1) {
        errorMessageTruncated = 'Error: '.concat(errorMessage.slice(0, quoteIndex));
      } else {
        errorMessageTruncated = 'Error: '.concat(errorMessage.slice(0, 150).concat(' ...'));
      }
    }
  }

  if (errorMessage && errorMessage.indexOf('Transaction reverted without a reason string') > -1) {
    setErrorMessage('');
  }

  if (errorMessage && errorMessage.indexOf('reason=null') > -1) {
    setErrorMessage('');
  }

  if (errorMessage && errorMessage.indexOf('JSON') > -1) {
    setErrorMessage('');
  }

  if (errorMessage && errorMessage.indexOf('unknown account') > -1) {
    setErrorMessage('');
  }

  const message: Message = {
    type: 'error',
    text: errorMessageTruncated,
  };

  const handleClose = () => {
    setErrorMessage(undefined);
  };

  const open = Boolean(errorMessage && !!errorMessage.length);

  return (
    <div className={`bg-indigo-900 text-center py-4 lg:px-4 ${errorMessage ? 'relative z-[1000] w-full top-4 left-0' : 'hidden'}`} onClick={handleClose}>
      <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span className="font-semibold mr-2 text-left flex-auto">
          {message.text}
        </span>
      </div>
    </div>
  );
};

export default Notification;
