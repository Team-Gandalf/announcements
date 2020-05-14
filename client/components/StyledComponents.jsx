import styles from 'styled-components';

const EventService = styles.div`
    display: inline-flex;
    max-width: 30rem;
    width: 20rem;
    height: 18rem;
    font-size: 2em;
    color: ghostwhite;
    border: none;
    box-shadow: -1px 1px 0.3em black;`;

const AnnouncementService = styles(EventService)`
    margin-left: 0.5rem;`;

export { EventService, AnnouncementService };
