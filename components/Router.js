import Router from 'next/router';

export function Home() {
  Router.push({
    pathname: '/index'
  });
}

export function Item() {
  Router.push({
    pathname: '/item'
  });
}

export function Selected(item) {
  Router.push({
    pathname: '/item/selected',
    query: item
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
