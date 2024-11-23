import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string;
    type?: 'button' | 'submit' | 'reset';
    styleCs:number;
    classAdd?:string;
}

export default function Button4({ children,styleCs,classAdd, type = 'button', ...props }: ButtonProps) {
    const listStyle = [
        "btn_style_01",
        "btn_style_02",
        "btn_style_03",
        "none"
    ]
    return (
    <button type={type} className={`${listStyle[styleCs]} ${classAdd}`} {...props}>
      {children}
    </button>
  );
}
