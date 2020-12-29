import React, { useState } from "react";

import "./AboutPage.scss";

import { pageColor } from "Pages/_Constants/pageColor";
import { Container } from "reactstrap";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";

export default function AboutPage({ drilledProps }: PageProps) {
  const [number, setNumber] = useState(0);

  const _pageColor: string =
    drilledProps && drilledProps.appColors && drilledProps.appColors.page
      ? drilledProps.appColors.page
      : pageColor;

  return (
    <section
      className="aboutPage"
      style={{ border: `4px solid ${_pageColor}` }}
    >
      <header>
        <Container>
          <h2>About page</h2>

          <RenderChecker
            number={number}
            setNumber={(val) => setNumber(val)}
            label="Site about page:"
          />
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
