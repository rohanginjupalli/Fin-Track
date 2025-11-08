import classNames from 'classnames';

interface PanelComponentProps extends React.HTMLAttributes<HTMLDivElement>{
    children:React.ReactNode | number,
    className?: string,
}

function Panel({ children, className, ...rest }:PanelComponentProps) {
  const finalClassNames = classNames(
    'border rounded p-3 shadow bg-white w-full',
    className
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}

export default Panel;