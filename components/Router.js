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

export function Admin() {
  Router.push({
    pathname: '/kamoo'
  });
}

export function Posts() {
  Router.push({
    pathname: '/kamoo/posts'
  });
}

export function Users() {
  Router.push({
    pathname: '/kamoo/users'
  });
}

export function Comments() {
  Router.push({
    pathname: '/kamoo/comments'
  });
}
