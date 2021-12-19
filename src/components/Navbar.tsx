import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid #e4e7ec;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
`;

const NavList = styled.ul`
  display: flex;
  margin-right: calc(158px - 34px);
`;

const NavItem = styled.li`
  font-size: 15px;
  margin: 0 18px;
`;

function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink
            to="/create-study"
            style={{
              border: "1px solid #e4e7ec",
              borderRadius: 18,
              fontSize: 14,
              padding: "12px 8px",
              color: "#175cd3",
            }}
          >
            스터디 생성하기
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">스터디 찾기</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/find-member">멤버 찾기</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/alert">알림</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/login">로그인</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
}

export default Navbar;
