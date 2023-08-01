import classNames from
  function Button({
    children,
    primary,
    rounded,
    secondary,
    danger,
    warning,
    success,
    ...rest
  }) {
    const classes = classNames("px-3 py-1.5 border", {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-500 bg-gray-500 text-white": secondary,
      "border-green-500 bg-green-500 text-white": success,
      "border-orange-500 bg-orange-500 text-white": warning,
      "border-red-500 bg-red-500 text-white": danger,
      "rounded-full": rounded,
      // "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-grey-500": outline && secondary,
      "text-green-500": outline && success,
      "text-orange-500": outline && warning,
      "text-red-500": outline && danger,
    });
    return <button {...rest}>{children}</button>;
  }
Button.propTypes = {
  valueVaration: (primary, secondary, warning, danger, success) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);
    if (count > 1) {
      return new Error("check again");
    }
  },
};

export default Button;
