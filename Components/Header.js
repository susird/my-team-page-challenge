import { data } from '../data.js';

export function createHeader() {
  const { header: {titleTeam, descriptionTeamTitle, descriptionTeamText} } = data; 
  const headerElement = document.createElement('header');
  headerElement.className = 'header';

  const titleCrew = document.createElement('h1');
  titleCrew.className = 'titleTeam';
  titleCrew.textContent = titleTeam;

  const descriptionTitle = document.createElement('h3');
  descriptionTitle.className = 'descriptionTeamTitle';
  descriptionTitle.textContent = descriptionTeamTitle;

  const textDescription = document.createElement('p');
  textDescription.className = 'descriptionTeamText';
  textDescription.textContent = descriptionTeamText;
}
