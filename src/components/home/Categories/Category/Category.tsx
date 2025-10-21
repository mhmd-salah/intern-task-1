import "./category.css";

const Category = ({ imgSrc, title }: { imgSrc: string; title: string }) => {
  return (
    <div className="category">
      <div className="cat-img">
        <img src={imgSrc} alt="" />
      </div>
      <h4 className="title">{title}</h4>
    </div>
  );
};

export default Category;
