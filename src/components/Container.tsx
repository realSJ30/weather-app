interface ContainerProps {
  children: JSX.Element;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex flex-col items-center p-16">
      <div className="max-w-4xl">{children}</div>
    </div>
  );
};

export default Container;
