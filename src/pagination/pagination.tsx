import React, { useState, useEffect } from "react";

type ProductsProps = {
  id: number;
  name: string;
  email: string;
  body: string;
};

const Pagination = () => {
  const view: number = 5;
  const url = "https://jsonplaceholder.typicode.com/comments";
  const [comments, setComments] = useState<ProductsProps[]>([]);
  const [pages, setPages] = useState<number>(1);

  const fetchProducts = async (url: string) => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComments(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const activePage = (index: number) => {
    if (index >= 1 && index <= comments.length / view) setPages(index);
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  return (
    <>
      <div className="container" style={{}}>
        {comments &&
          comments.slice(pages * view - view, pages * view).map((comment) => {
            return (
              <div
                key={comment.id}
                className="comment__container"
                style={{
                  border: "1px solid #ccc",
                  backgroundColor: "transparent",
                  borderRadius: "5px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}>
                <h3>{comment.name}</h3>
                <p>{comment.email}</p>
                <p>{comment.body}</p>
              </div>
            );
          })}
      </div>
      <div
        className="pages__style"
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <span
          onClick={() => {
            activePage(pages - 1);
          }}>
          ⬅️
        </span>
        {[...Array(comments.length / view)].map((_, index) => {
          return (
            <span
              key={index}
              onClick={() => {
                activePage(index + 1);
              }}
              className={pages === index + 1 ? "page__active" : ""}>
              {index + 1}
            </span>
          );
        })}
        <span
          onClick={() => {
            activePage(pages + 1);
          }}>
          ➡️
        </span>
      </div>
    </>
  );
};

export default Pagination;
