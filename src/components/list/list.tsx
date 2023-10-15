import "./list.scss";

type ListProps = {} & React.SuspenseProps;
const List = ({ children }: ListProps) => {
  return <div className="list">{children}</div>;
};

type ListRowProps = {} & React.SuspenseProps;
const ListRow = ({ children }: ListRowProps) => {
  return <div className={`list-row`}>{children}</div>;
};

type ListColumnProps = {
  isHeader?: boolean;
} & React.SuspenseProps;
const ListColumn = ({ isHeader = false, children }: ListColumnProps) => {
  return (
    <div className={`list-col ${isHeader && "list-header"}`}>{children}</div>
  );
};

export { List, ListRow, ListColumn };
