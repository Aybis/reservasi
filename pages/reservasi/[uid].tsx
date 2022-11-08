import { useRouter } from 'next/router';
import React from 'react';
import { Layout } from '../../components';

export default function DetailReservasi() {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <Layout
      pageTitle="Detail Reservasi"
      metaDescription="Halaman Detail Reservasi">
      Detail Rservasei {uid}
    </Layout>
  );
}
