import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
    HiChartPie,
    HiMiniTrophy,
    HiUserCircle,
    HiUserGroup,
    HiWallet,
} from "react-icons/hi2";

const StyledNavLink = styled(NavLink)`
    &:link,
    &:visited {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        color: var(--color-grey-600);
        font-size: 1.6rem;
        font-weight: 500;
        padding: 1.2rem 2.4rem;
        transition: all 0.3s;
    }

    /* This works because react-router places the active class on the active NavLink */
    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-grey-800);
        background-color: var(--color-grey-50);
        border-radius: var(--border-radius-sm);
    }

    & svg {
        width: 2.4rem;
        height: 2.4rem;
        color: var(--color-grey-400);
        transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
        color: var(--color-brand-600);
    }
`;

const StyledSideBar = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 3.6rem 2.4rem;
    width: 360px;
`;
function SideBar() {
    return (
        <StyledSideBar>
            <li>
                <StyledNavLink to={"/appdashboard"}>
                    <HiChartPie />
                    <span>Dashboard</span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to={"/members"}>
                    <HiUserGroup />
                    <span>Members</span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to={"/payments"}>
                    <HiWallet />
                    <span>Payments</span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to={"/profile"}>
                    {" "}
                    <HiUserCircle />
                    <span>Profile</span>
                </StyledNavLink>
            </li>
            <li>
                <StyledNavLink to={"/sportsplan"}>
                    <HiMiniTrophy />
                    <span>Sports Plan</span>
                </StyledNavLink>
            </li>
        </StyledSideBar>
    );
}

export default SideBar;
