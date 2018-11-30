import Layout from '../components/Layout';
import Blog from '../components/index/Blog';
import Gallery from '../components/index/Gallery';

const Index = props => (
  <Layout title="LUSS Official" page="index">
    <Blog />
    <Gallery />
  </Layout>
);

export default Index;
