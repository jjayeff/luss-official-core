import Layout from '../../components/Layout';
import Selected from '../../components/item/Selected';

const Index = props => (
  <Layout title="LUSS Official" page="detail">
    <Selected data={props.url.query} />
  </Layout>
);

export default Index;
