import styles from "./table.module.scss";

import { HTMLAttributes, ReactNode } from "react";

export type StrictPropsWithChildren<T = unknown> = T & {
  children: ReactNode;
};

type TProps = {
  theme?: "black" | "blue-light" | "blue-dark" | "purple";
};

/**
 * Table
 *
 * @property {"black" | "blue-light" | "blue-dark" | "purple"} theme 테마
 * @property {...props} 기존 table props 사용 가능
 * @example
 * <Table>
 *  <Table.Thead>
 *    <tr>
 *      <td>기존 thead props 사용 가능</td>
 *    </tr>
 *  </Table.Thead>
 *  <Table.Tbody>
 *    <tr>
 *      <td>기존 tbody props 사용 가능</td>
 *    </tr>
 *  </Table.Tbody>
 * </Table>
 */
export default function Table({
  theme = "black",
  children,
  className,
  ...props
}: StrictPropsWithChildren<HTMLAttributes<HTMLTableElement> & TProps>) {
  const mergeClassName = () => {
    let cn = `${styles.table} ${styles[theme]}`;

    if (className) {
      cn += ` ${className}`;
    }

    return cn;
  };

  return (
    <table className={mergeClassName()} {...props}>
      {children}
    </table>
  );
}

function Thead({
  children,
  ...props
}: StrictPropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>) {
  return <thead {...props}>{children}</thead>;
}

function Tbody({
  children,
  ...props
}: StrictPropsWithChildren<HTMLAttributes<HTMLTableSectionElement>>) {
  return <tbody {...props}>{children}</tbody>;
}

Table.Thead = Thead;
Table.Tbody = Tbody;
