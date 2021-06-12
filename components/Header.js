import { data } from '../data.js';

export function createHeader() {
  const { header: {headerTitle, teamTitle, teamDescription} } = data; 
  const headerElement = document.createElement('header');
  headerElement.className = 'header-container';

  const crewTittle = document.createElement('h1');
  crewTittle.className = 'header-title';
  crewTittle.textContent = headerTitle;

  const whoWeAreTitle = document.createElement('h3');
  whoWeAreTitle.className = 'team-title';
  whoWeAreTitle.textContent = teamTitle;

  const crewDescription = document.createElement('p');
  crewDescription.className = 'team-description';
  crewDescription.textContent = teamDescription;

  headerElement.appendChild(crewTittle);
  headerElement.appendChild(whoWeAreTitle);
  headerElement.appendChild(crewDescription);

  return headerElement;
}
