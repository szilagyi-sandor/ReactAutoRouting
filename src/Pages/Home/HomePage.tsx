import React from "react";

import "./HomePage.scss";

import { Container } from "reactstrap";
import { pageColor } from "Pages/_Constants/pageColor";

export default function HomePage() {
  return (
    <section className="homePage" style={{ border: `4px solid ${pageColor}` }}>
      <header>
        <Container>
          <h2>Home page</h2>
        </Container>
      </header>

      <div className="content">
        <Container>
          <p>
            Mauris eget cursus felis, a facilisis ante. Vivamus ac orci eget
            ligula interdum sodales nec ac quam. Integer cursus mattis
            vestibulum. Nulla accumsan ante non posuere convallis. Vestibulum
            eleifend sapien eget eleifend molestie. In nec dolor eu lectus
            pretium congue sed nec tortor. Cras ac pellentesque lectus. Aenean
            eu orci eget libero porttitor accumsan sed quis nibh. Morbi vitae
            sem mollis, commodo justo congue, venenatis lectus. Donec a
            malesuada sapien, in venenatis nunc. Maecenas vel ultrices lectus.
            Morbi feugiat faucibus ultricies.
          </p>

          <p>
            Mauris quis congue odio. Vivamus sagittis justo eget sagittis
            auctor. Duis lacinia tincidunt semper. Maecenas vel ullamcorper
            urna. Nulla eros lacus, dapibus in facilisis non, suscipit nec mi.
            Maecenas nec orci lorem. Suspendisse feugiat imperdiet nisi.
            Curabitur nec leo tempus sapien convallis convallis et sit amet
            nisi. Nulla lacus massa, tincidunt ut erat sit amet, fermentum
            iaculis nisi. Aliquam iaculis porta semper. Quisque in magna non
            massa lacinia aliquet vestibulum ac mauris. Nullam efficitur euismod
            tempus.
          </p>
        </Container>
      </div>
    </section>
  );
}
