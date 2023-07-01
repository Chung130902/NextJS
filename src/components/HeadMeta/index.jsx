import React from 'react';
import Head from 'next/head';

function HeadMeta(props) {
  const {
    title,
    description,
  } = props;

  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
  );
}

export default HeadMeta;
