import "./gridList.css";

type GridListProps<T> = {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  keySelector: (react: T, index: number) => React.Key;
  emptyMessage?: string;
};

const GridList = <T,>({
  records,
  renderItem,
  keySelector,
  emptyMessage,
}: GridListProps<T>) => {
  if (!records || records.length === 0) {
    return <p className="emptyMessage">{emptyMessage}</p>;
  }
  console.log(records)
  return (
    <div className="grid-list">
      {records?.map((record, index) => (
        <div
          className="grid-item"
          key={keySelector ? keySelector(record, index) : index}
        >
          {renderItem(record)}
        </div>
      ))}
    </div>
  );
};

export default GridList;
