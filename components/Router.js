import Router from 'next/router';

export function Home() {
  Router.push({
    pathname: '/'
  });
}

export function Item() {
  Router.push({
    pathname: '/item'
  });
}
