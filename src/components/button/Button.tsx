"use client";

import styles from "./button.module.scss";

import { ComponentPropsWithRef, PropsWithChildren, forwardRef } from "react";

type TProps = {
  theme?:
    | "default"
    | "blue"
    | "white"
    | "black"
    | "pointColor"
    | "skyBlue"
    | "darkBlue"
    | "lightBlue"
    | "disabled"
    | "eventBtn";
  width: number | string;
  height: number;
  borderRadius?: number;
  variant?: "default" | "plus" | "close" | "arrow-down" | "arrow-up";
  carrot?: "arrow" | "circle-arrow" | "download";
  carrotSize?: number;
} & ComponentPropsWithRef<"button">;

/**
 * Button
 *
 * @property {"default" | "blue" | "white" | "black" | "pointColor" | "skyBlue" | "darkBlue" | "lightBlue" | "disabled" | "eventBtn"}  theme 테마 (default: default)
 * @property {number} width 가로
 * @property {number} height 세로
 * @property {"default" | "plus" | "close" | "arrow-down" | "arrow-up"} variant 형태
 * @property {"arrow" | "circle-arrow" | "download"} carrot 캐럿 (download only for theme="black")
 * @property {number} carrotSize 캐럿 사이즈
 * @example
 * <Button width={100} height={50} theme="black" className={styles.button}>
 *    button
 * </Button>
 */
const Button = forwardRef<HTMLButtonElement, PropsWithChildren<TProps>>(
  (
    {
      theme = "default",
      width,
      height,
      variant = "default",
      borderRadius,
      className,
      carrot,
      carrotSize,
      children,
      style,
      ...rest
    },
    ref
  ) => {
    const mergeClassName = () => {
      const defaultClassName = `${styles.buttonSettings} ${className}`;

      if (variant !== "default" && variant) {
        return `${defaultClassName} ${styles[variant]}`;
      }

      return `${defaultClassName} ${styles[theme]}`;
    };

    return (
      <button
        {...rest}
        ref={ref}
        style={{ width, height, borderRadius, ...style }}
        className={mergeClassName()}
      >
        {children}

        {carrot && (
          <span
            style={{ width: carrotSize, height: carrotSize }}
            className={styles[carrot]}
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
