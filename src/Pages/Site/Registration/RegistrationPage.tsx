import React, { useState } from "react";

import "./RegistrationPage.scss";

import { pageColor } from "Pages/_Constants/pageColor";
import { Container } from "reactstrap";
import RenderChecker from "Modules/Layout/Components/RenderChecker/RenderChecker";
import { Link } from "react-router-dom";
import { routePaths } from "Modules/Routing/_Constants/routePaths";
import { mockedUsers } from "Modules/Auth/mock";
import { getEnumObjById } from "_Helpers/EnumHelpers/getEnumObjById";
import { roles } from "Modules/Auth/_Constants/roles";
import { PageProps } from "Modules/Routing/ReactAutoRouting/_Interfaces/PropHelpers/PageProps";

export default function RegistrationPage({ drilledProps }: PageProps) {
  const [number, setNumber] = useState(0);

  const _pageColor: string =
    drilledProps && drilledProps.appColors && drilledProps.appColors.page
      ? drilledProps.appColors.page
      : pageColor;

  return (
    <section
      className="registrationPage"
      style={{ border: `4px solid ${_pageColor}` }}
    >
      <header>
        <Container>
          <h2>Registration page</h2>

          <RenderChecker
            number={number}
            setNumber={(val) => setNumber(val)}
            label="Site registration page:"
          />
        </Container>
      </header>

      <div className="content">
        <Container>
          <p>
            The registration is not implemented. You can use the following
            username/password combinations for logging in:
          </p>

          <ul>
            {mockedUsers.map((u) => {
              const roleItem = getEnumObjById(roles, u.role);
              const roleName = roleItem ? roleItem.name : "Unknown";

              return (
                <li key={u.id}>{`${roleName}: ${u.username}/${u.password}`}</li>
              );
            })}
          </ul>

          <Link to={routePaths.login}>Go to login page</Link>
        </Container>
      </div>
    </section>
  );
}
