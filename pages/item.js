import Layout from '../components/Layout';
import Item from '../components/item/Item';
import Pagination from '../components/item/Pagination';

const Index = props => (
  <Layout title="New Arrival" page="item">
    <Item />
    <Pagination />
  </Layout>
);

export default Index;
