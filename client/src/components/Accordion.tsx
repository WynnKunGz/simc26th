type AccordionProps = {
  title: string;
  information: string;
};

function Accordion({ title, information }: AccordionProps) {
  return (
    <details>
      <summary>{title}</summary>
      <p>{information}</p>
    </details>
  );
}

export default Accordion;
