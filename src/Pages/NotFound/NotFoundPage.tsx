import React from "react";

export default function NotFoundPage() {
  return (
    <section className="notFoundPage">
      <header>
        <h2>404, Page not found</h2>
      </header>

      <div className="content">
        <p>
          The link is incorrect or the page has been removed. Make sure the link
          you are trying to open is correct.
        </p>
      </div>
    </section>
  );
}
