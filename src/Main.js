import {ProfileImage} from './ProfileImage';
import {Description} from './Description';
import {Row} from './Row';
import {Column} from './Column';
export function Main() {
  return (
    <main>
      <Row>
        <Column flexGrow={0}>
          <ProfileImage />
        </Column>
        <Column flexGrow={1}>
          <Description />
        </Column>
      </Row>
    </main>
  );
}
