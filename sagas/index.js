import watchItemsSaga from './itemsSagas';

export default function* rootSaga() {
  console.log('[API] using luss-official-api');
  yield [watchItemsSaga()];
}
