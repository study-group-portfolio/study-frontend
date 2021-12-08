import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  background-color: transparent;
  border-bottom: 1px solid #e4e7ec;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  margin-right: calc(158px - 34px);
`;

const NavItem = styled.li`
  font-size: 16px;
  margin: 0 34px;
`;

function Navbar() {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <NavLink to="/find-study">스터디 모집</NavLink>
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
