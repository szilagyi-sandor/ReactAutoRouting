import React from "react";

export default function RestrictedPage() {
  return (
    <section className="restrictedPage">
      <header>
        <h2>Resticted page</h2>
      </header>

      <div className="content">
        <p>You do not have access to the requested resource</p>
      </div>
    </section>
  );
}
