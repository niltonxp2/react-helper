import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  FullWidthSection,
  Grid,
  Row,
  MaxWidthSection,
} from '../components/Layout';
import paths from '../routes/paths';
import { removeNullValues } from '../shared/functions';
import payload from '../__mocks__/payload.json';

const Header = styled(FullWidthSection)`
  padding: 4rem 0;
  background-color: lightcoral;
`;

const Nav = styled(Row)`
  a {
    margin-right: 1rem;
  }
`;

const Content = styled(MaxWidthSection)`
  background-color: lightblue;
`;

function App() {
  removeNullValues({ payload });

  return (
    <Grid>
      <Header as="header">
        <Nav as="nav" xxls={2} xls={2} lgs={2} mds={2} sms={2} xss={2}>
          <Link to={paths.reactHooks}>Epic React</Link>
          <Link to={paths.reactDocs}>React Docs</Link>
        </Nav>
      </Header>

      <Content as="main">
        <Row sms={1} sme={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          tempora quos impedit iusto eum itaque nam non mollitia. Facere dicta
          harum aliquid nostrum rem fuga quidem, corrupti sequi? Impedit, saepe!
          Quos nobis numquam eaque provident eum architecto perspiciatis
          eveniet, dolores repudiandae laudantium mollitia optio
        </Row>
        <Row sms={4} sme={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          tempora quos impedit iusto eum itaque nam non mollitia. Facere dicta
          harum aliquid nostrum rem fuga quidem, corrupti sequi? Impedit, saepe!
          Quos nobis numquam eaque provident eum architecto perspiciatis
          eveniet, dolores repudiandae laudantium mollitia optio
        </Row>
        <Row>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
          tempora quos impedit iusto eum itaque nam non mollitia. Facere dicta
          harum aliquid nostrum rem fuga quidem, corrupti sequi? Impedit, saepe!
          Quos nobis numquam eaque provident eum architecto perspiciatis
          eveniet, dolores repudiandae laudantium mollitia optio
        </Row>
      </Content>
    </Grid>
  );
}

export default App;
