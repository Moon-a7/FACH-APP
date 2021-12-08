import React from 'react';
import ButtonBases from '../../components/DashboardMenuButtons';
import { Route } from 'react-router-dom';
import Category from '../../components/Category';
import { CATEGORIES } from '../../constants';
import styled from 'styled-components';

const StyledApplication = styled.div`
  background-color: #f2f3f4;
`;

function Dashboard() {
  return (
    <StyledApplication>
      <div className="Dashboard">
        <Route path="/other">
          <Category title="Other" categoryName={CATEGORIES.OTHER} />
        </Route>
        <Route path="/events">
          <Category title="Events" categoryName={CATEGORIES.EVENTS} />
        </Route>
        <Route path="/mechanik">
          <Category title="Mechanik" categoryName={CATEGORIES.MECHANIK} />
        </Route>
        <Route path="/wykończenia-wnętrz">
          <Category
            title="Wykończenia wnętrz"
            categoryName={CATEGORIES.WYKOŃCZENIA_WNĘTRZ}
          />
        </Route>
        <Route path="/storage-space">
          <Category title="Storage Space" categoryName={CATEGORIES.STORAGE} />
        </Route>
        <Route path="/nawierzchnie">
          <Category
            title="NAWIERZCHNIE"
            categoryName={CATEGORIES.NAWIERZCHNIE}
          />
        </Route>
        <Route exact path="/">
          <ButtonBases />
        </Route>
      </div>
    </StyledApplication>
  );
}

export default Dashboard;
