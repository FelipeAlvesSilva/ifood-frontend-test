import { message } from 'antd';

export enum MessageTypes {
  MESSAGE_INFO = 'info',
  MESSAGE_SUCCESS = 'success',
  MESSAGE_WARNING = 'warning',
  MESSAGE_ERROR = 'error'
};

// default config
message.config({
  duration: 2,
  maxCount: 1
});

export const showMessage = (value: string, messageType: MessageTypes) => {
  switch (messageType) {
    case MessageTypes.MESSAGE_INFO:
      message.info(value);
      break;
    case MessageTypes.MESSAGE_SUCCESS:
      message.success(value);
      break;
    case MessageTypes.MESSAGE_WARNING:
      message.warning(value);
      break;
    case MessageTypes.MESSAGE_ERROR:
      message.error(value);
      break;
    default: {
      message.error('Unexpected Error.');
      console.error('Unexpected error, type of message not defined');
      break;
    }
  }
}