interface ButtonProps {
  text: string;
  href?: string;
  primary?: boolean;
  newTab?: boolean;
}

const Button = ({
  text,
  href = "#",
  primary = true,
  newTab = false,
}: ButtonProps) => {
  return (
    <a
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
        primary
          ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-xl"
          : "border-2 border-orange-500 bg-white text-orange-500 hover:bg-orange-500 hover:text-white"
      }`}
    >
      {text}
    </a>
  );
};

export default Button;