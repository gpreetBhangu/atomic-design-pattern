import { ReactNode } from 'react';
import classnames from 'classnames';

export enum BUTTON_TYPES {
  TEXT,
  OUTLINED,
  CONTAINED,
}

export enum BUTTON_COLOR {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
}

interface Props {
  type?: 'text' | 'outlined' | 'contained';
  color?: BUTTON_COLOR;
  title?: string;
  children?: string | ReactNode;
  className?: string;
}

export const Button = ({ type = 'text', color = BUTTON_COLOR.PRIMARY, title, className, children }: Props) => {
  if (!title && !children) {
    console.error('Please provide one prop title or children');
  }

  const parentClassName: string = className ? className : '';
  const buttonClass = classnames({
    'border-solid border-2': type === 'text',
    'bg-primary': color === BUTTON_COLOR.PRIMARY && type === 'contained',
    rounded: type === 'contained',
    [parentClassName]: Boolean(parentClassName),
  });
  return <button className={buttonClass}>{title ? title : children}</button>;
};
