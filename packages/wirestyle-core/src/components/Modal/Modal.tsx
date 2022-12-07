import { useScrollLock } from '@wirecore/wirestyle-hooks';
import React, { useEffect } from 'react';
import { BiX } from 'react-icons/bi';
import { Card, Divider, Overlay } from '..';

interface IProps {
  title?: string;
  actionButtons?: React.ReactNode;
  isActive?: boolean;
  disableScrollLock?: boolean;
  onClose?: () => void;
  children: React.ReactNode;
}

function Modal(props: IProps): JSX.Element {
  const [_, setScrollLocked] = useScrollLock();

  useEffect(() => {
    if (!props.disableScrollLock) {
      setScrollLocked(props.isActive || false);
    } else {
      setScrollLocked(false);
    }
  }, [props.isActive, props.disableScrollLock]);

  return (
    <React.Fragment>
      {props.isActive && (
        <Overlay onClick={props.onClose}>
          <Card
            title={props.title && props.title.length > 0 ? props.title : ' '}
            icon={
              <BiX
                className='cursor-pointer'
                onClick={props.onClose}
                size={18}
              />
            }
            className='shadow-lg'
            scrollable
          >
            <div className='space-y-3'>{props.children}</div>
            {props.actionButtons && (
              <React.Fragment>
                <Divider />
                {props.actionButtons}
              </React.Fragment>
            )}
          </Card>
        </Overlay>
      )}
    </React.Fragment>
  );
}

export default Modal;
