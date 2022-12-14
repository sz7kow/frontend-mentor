import clsx from 'clsx';

interface Props {
  items: string[];
  type: 'ol' | 'ul';
}

const typeClassName = {
  ol: 'before:content-[counter(ol-counter)]',
  ul: 'before:scale-200 before:content-bullet',
};

export const List: React.FC<Props> = ({items, type}) => {
  const ListElement: keyof JSX.IntrinsicElements = type;

  return (
    <ListElement style={{counterReset: 'ol-counter'}}>
      {items.map((item) => (
        <li
          key={item}
          className={clsx(
            'mb-2 before:absolute before:inline-block before:font-bold before:text-indigo-700',
            typeClassName[type]
          )}
          style={{counterIncrement: 'ol-counter'}}
        >
          <p className="pl-9">{item}</p>
        </li>
      ))}
    </ListElement>
  );
};
