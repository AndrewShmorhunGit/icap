"use client";
import React, { useState, ReactNode } from "react";
import styles from "@/styles/modules/accordion.module.scss";

type AccordionProps = {
  children: ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  return <div className={styles.accordion}>{children}</div>;
};

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordion}-item`}>
      <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>
      <div
        style={{
          maxHeight: isOpen ? "100vh" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export const Tasks = () => {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Accordion>
        <AccordionItem title="Tasks">
          <p>Developed a CRUD interface for persons.</p>
          <p>Implemented Redux for state management.</p>
          <p>Set up dummy functionality due to API restrictions.</p>
        </AccordionItem>
        <AccordionItem title="Technologies">
          <p>React with Next.js</p>
          <p>Redux with Redux Toolkit</p>
          <p>TypeScript</p>
          <p>SCSS Modules</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
